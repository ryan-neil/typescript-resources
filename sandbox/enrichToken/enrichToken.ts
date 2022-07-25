const ACCESS_TOKEN = {
  // Standard B2C claims
  aud: '19858689-1fb8-4bb0-a9d1-7c5a6f9199a0',
  sub: 'ldenisjm',
  iss: 'https://coolerapps.b2clogin.com/dfdb6040-f97a-4d9e-a893-bfabb247932e/v2.0/',
  // IDP claims
  provider: 'Walgreens',
  GivenName: 'Luke',
  LastName: 'Skywalker',
}

interface BaseClaims {
  // Standard B2C claims
  aud: string
  sub: string
  iss: string
}

interface WalgreensClaims extends BaseClaims {
  provider: string
  GivenName: string
  LastName: string
}

interface CircleKClaims extends BaseClaims {
  provider: string
  first_name: string
  last_name: string
}

interface CsiClaims {
  profile: {
    firstName: string
    lastName: string
    companyName: string
  }
  applications: string[]
  permissions: {
    locations: {
      ids: string[]
    }
    planograms: {
      permissions: string[]
    }
    stores: {
      permissions: string[]
      hours: {
        permissions: string[]
      }
    }
  }
}

type EnrichedClaims<T> = T & { csi: CsiClaims }

function enrichToken<T extends WalgreensClaims & CircleKClaims>(
  token: T
): EnrichedClaims<T> {
  const isEmpty = (obj: object) => {
    return (
      obj &&
      !Object.keys(obj).length &&
      obj.constructor === Object &&
      obj !== undefined
    )
  }

  if (!token || isEmpty(token)) {
    throw new Error('Did not receive a valid token')
  }

  const baseCsiOptions = {
    applications: [
      'planogramEditor',
      'productUpdater',
      'planogramQuickView',
      'storeManager',
    ],
    permissions: {
      locations: {
        ids: [],
      },
      planograms: {
        permissions: ['create', 'read', 'update', 'delete'],
      },
      stores: {
        permissions: ['read', 'update'],
        hours: {
          permissions: ['read'],
        },
      },
    },
  }

  // map based on IDP ...
  const csiClaimsMapper = (): CsiClaims => {
    const claims: any = {
      Walgreens: {
        profile: {
          firstName: token.GivenName,
          lastName: token.LastName,
          companyName: token.provider,
        },
        ...baseCsiOptions,
      },
      CircleK: {
        profile: {
          first_name: token.firstname,
          last_name: token.lastname,
          companyName: token.provider,
        },
        ...baseCsiOptions,
      },
    }
    return claims[token.provider]
  }

  return {
    ...token,
    csi: csiClaimsMapper(),
  }
}

console.log(enrichToken(ACCESS_TOKEN))
