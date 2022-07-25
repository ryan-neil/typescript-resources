export interface TokenClaims {
  // Standard B2C claims
  aud: string
  sub: string
  iss: string
  exp: number
  iat: number
  nbf: number
  nonce: string
  azp: string
  ver: string
  identityProviderAccessToken: string
  authenticationSource: string
  // User claims provided by IDP (walgreens)
  email: string
  GivenName: string
  oid: string
  LastName: string
  wgPositionCode: string
  storeNumber: string
  employeeType: string
  employeeNumber: string
}

export interface CsiTokenClaims {
  profile: {
    firstName: string
    lastName: string
    companyId: string
    companyName: string
    storeId: string
    store: string
    companyRole: string
    csiRole: string
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

export interface EnrichedTokenClaims extends TokenClaims {
  csi: CsiTokenClaims
}
