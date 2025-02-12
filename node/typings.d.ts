interface ReqContext {
  account: string
  workspace: string
  authToken: string
  region: string
  production: boolean
  userAgent: string
}

interface Logger {
  log(content: string, level: LogLevel, details?: any): PromiseLike<void>
}

interface OperationState {
  orderFormId: string
  ctx: ReqContext
  data?: OperationData
  logger: Logger
}

interface OperationData {
  orderForm?: any
  userProfileId: string
  cookie: string
}

type ProcessPaymentStep = (
  state: OperationState,
  next: () => Promise<void>
) => Promise<void>

type LogLevel = 'info' | 'error' | 'warning'

type Timings = { [middleware: string]: [number, number] }

declare module '*.json' {
  const value: any
  export default value
}

interface OrganizationInput {
  name: string
  tradeName?: string
  b2bCustomerAdmin: B2BCustomerInput
  defaultCostCenter: DefaultCostCenterInput
}

interface B2BCustomerInput {
  firstName: string
  lastName: string
  email: string
  cpf?: string
  telephone?: string
}

interface DefaultCostCenterInput {
  name: string
  address: AddressInput
  phoneNumber?: string
  businessDocument?: string
  type?: string
  organizationPublic?: string
  ie?: string
  icms?: boolean
  area?: string
  areaOthers?: string
  phone?: string
  newsletter?: boolean
}

interface CostCenterInput {
  name: string
  addresses?: AddressInput[]
  paymentTerms?: PaymentTerm[]
  phoneNumber?: string
  businessDocument?: string
  type?: string
  organizationPublic?: string
  ie?: string
  icms?: boolean
  area?: string
  areaOthers?: string
  phone?: string
  newsletter?: boolean
}

interface AddressInput {
  addressId: string
  addressType: string
  postalCode: string
  country: string
  receiverName: string
  city: string
  state: string
  street: string
  number: string
  complement: string
  neighborhood: string
  geoCoordinates: [number]
}

interface OrganizationRequest {
  name: string
  tradeName?: string
  defaultCostCenter: DefaultCostCenterInput
  b2bCustomerAdmin: B2BCustomerInput
  status: string
  created: string
}

interface Organization {
  id: string
  name: string
  tradeName?: string
  costCenters: string[]
  paymentTerms: PaymentTerm[]
  status: string
  created: string
}

interface CostCenter {
  id: string
  name: string
  organization: string
  addresses: any[]
  paymentTerms: PaymentTerm[]
  phoneNumber?: string
  businessDocument?: string
  type?: string
  organizationPublic?: string
  ie?: string
  icms?: boolean
  area?: string
  phone?: string
  newsletter?: boolean
}

interface UserArgs {
  id?: string
  roleId: string
  userId?: string
  orgId?: string
  costId?: string
  clId?: string
  canImpersonate?: boolean
  name: string
  email: string
}

interface PaymentTerm {
  name: string
  id: string
}
