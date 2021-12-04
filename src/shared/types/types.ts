/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents whole numeric values. */
  BigInt: string;
  /** A date string, such as `2007-12-25`, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** A date-time string at UTC, such as `2007-12-25T16:15:30Z`, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: {};
  /** A time string at UTC, such as `16:15:30Z`, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: string;
};

export type Address = {
  __typename?: 'Address';
  _description?: Maybe<Scalars['String']>;
  addressJobRelation?: Maybe<JobListResponse>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  customer?: Maybe<Customer>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  /** Smart? */
  streetAddress?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type AddressAddressJobRelationArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<JobFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<JobGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<JobOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<JobSort>>;
};

/** Address relation input */
export type AddressAddressJobRelationManyRelationInput = {
  connect?: Maybe<Array<JobKeyFilter>>;
};

/** Address relation input */
export type AddressAddressJobRelationRelationInput = {
  connect?: Maybe<Array<JobKeyFilter>>;
  create?: Maybe<Array<Maybe<Address_JobCreateInput>>>;
};

/** Address relation input */
export type AddressAddressJobRelationUpdateRelationInput = {
  connect?: Maybe<Array<JobKeyFilter>>;
  create?: Maybe<Array<Maybe<Address_JobCreateInput>>>;
  disconnect?: Maybe<Array<JobKeyFilter>>;
  reconnect?: Maybe<Array<JobKeyFilter>>;
  update?: Maybe<Array<Maybe<Address_JobUpdateInput>>>;
};

/** Address create input */
export type AddressCreateInput = {
  addressJobRelation?: Maybe<AddressAddressJobRelationRelationInput>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  city: Scalars['String'];
  contactName?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  customer: AddressCustomerRelationInput;
  name: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  /** Smart? */
  streetAddress: Scalars['String'];
  zipCode?: Maybe<Scalars['String']>;
};

/** Address create many input */
export type AddressCreateManyInput = {
  addressJobRelation?: Maybe<AddressAddressJobRelationManyRelationInput>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  city: Scalars['String'];
  contactName?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  customer: AddressCustomerManyRelationInput;
  name: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  /** Smart? */
  streetAddress: Scalars['String'];
  zipCode?: Maybe<Scalars['String']>;
};

/** Address relation input */
export type AddressCustomerManyRelationInput = {
  connect?: Maybe<CustomerKeyFilter>;
};

/** Address relation input */
export type AddressCustomerRelationInput = {
  connect?: Maybe<CustomerKeyFilter>;
  create?: Maybe<CustomerAddressRelation_CustomerCreateInput>;
};

/** Address relation input */
export type AddressCustomerUpdateRelationInput = {
  connect?: Maybe<CustomerKeyFilter>;
  create?: Maybe<CustomerAddressRelation_CustomerCreateInput>;
  disconnect?: Maybe<CustomerKeyFilter>;
  reconnect?: Maybe<CustomerKeyFilter>;
  update?: Maybe<CustomerAddressRelation_CustomerUpdateInput>;
};

/** Address delete input */
export type AddressDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

/** AddressFieldsPermissions create input */
export type AddressFieldsPermissions = {
  archived?: Maybe<Scalars['Boolean']>;
  city?: Maybe<Scalars['Boolean']>;
  contactName?: Maybe<Scalars['Boolean']>;
  contactPhone?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['Boolean']>;
  streetAddress?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  zipCode?: Maybe<Scalars['Boolean']>;
};

export type AddressFilter = {
  AND?: Maybe<Array<AddressFilter>>;
  OR?: Maybe<Array<AddressFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  addressJobRelation?: Maybe<JobRelationFilter>;
  archived?: Maybe<DateTimePredicate>;
  city?: Maybe<StringPredicate>;
  contactName?: Maybe<StringPredicate>;
  contactPhone?: Maybe<StringPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  customer?: Maybe<CustomerFilter>;
  deletedAt?: Maybe<IntPredicate>;
  id?: Maybe<IdPredicate>;
  name?: Maybe<StringPredicate>;
  state?: Maybe<StringPredicate>;
  streetAddress?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  zipCode?: Maybe<StringPredicate>;
};

export type AddressGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: AddressGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type AddressGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  addressJobRelation?: Maybe<JobGroupByQuery>;
  archived?: Maybe<Array<GroupByField>>;
  city?: Maybe<Array<GroupByField>>;
  contactName?: Maybe<Array<GroupByField>>;
  contactPhone?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  customer?: Maybe<CustomerGroupByQuery>;
  id?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  state?: Maybe<Array<GroupByField>>;
  streetAddress?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  zipCode?: Maybe<Array<GroupByField>>;
};

/** Address create input from addressJobRelation */
export type AddressJobRelation_AddressCreateInput = {
  addressJobRelation?: Maybe<AddressAddressJobRelationRelationInput>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  city: Scalars['String'];
  contactName?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  customer?: Maybe<AddressCustomerRelationInput>;
  name: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  /** Smart? */
  streetAddress: Scalars['String'];
  zipCode?: Maybe<Scalars['String']>;
};

/** Address update input from addressJobRelation */
export type AddressJobRelation_AddressUpdateInput = {
  addressJobRelation?: Maybe<AddressAddressJobRelationUpdateRelationInput>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  customer?: Maybe<AddressCustomerUpdateRelationInput>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  /** Smart? */
  streetAddress?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type AddressKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

/** AddressListResponse output */
export type AddressListResponse = {
  __typename?: 'AddressListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Address>;
};

/** AddressManyResponse output */
export type AddressManyResponse = {
  __typename?: 'AddressManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<Address>;
};

/** No longer supported. Use `sort` instead. */
export enum AddressOrderBy {
  ArchivedAsc = 'archived_ASC',
  ArchivedDesc = 'archived_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  ContactNameAsc = 'contactName_ASC',
  ContactNameDesc = 'contactName_DESC',
  ContactPhoneAsc = 'contactPhone_ASC',
  ContactPhoneDesc = 'contactPhone_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  StreetAddressAsc = 'streetAddress_ASC',
  StreetAddressDesc = 'streetAddress_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ZipCodeAsc = 'zipCode_ASC',
  ZipCodeDesc = 'zipCode_DESC',
}

/** Address subscription payload */
export type AddressPayload = {
  __typename?: 'AddressPayload';
  mutation: MutationType;
  node?: Maybe<Address>;
  previousValues?: Maybe<Address>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AddressRelationFilter = {
  every?: Maybe<AddressFilter>;
  none?: Maybe<AddressFilter>;
  some?: Maybe<AddressFilter>;
};

export type AddressSort = {
  archived?: Maybe<SortOrder>;
  city?: Maybe<SortOrder>;
  contactName?: Maybe<SortOrder>;
  contactPhone?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  customer?: Maybe<CustomerSort>;
  deletedAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  state?: Maybe<SortOrder>;
  streetAddress?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  zipCode?: Maybe<SortOrder>;
};

/** Address subscription filter */
export type AddressSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<AddressFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** Address update input */
export type AddressUpdateByFilterInput = {
  archived?: Maybe<Array<Maybe<UpdateByFilterDateTimeInput>>>;
  city?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  contactName?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  contactPhone?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  name?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  state?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  streetAddress?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  zipCode?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
};

/** Address update input */
export type AddressUpdateInput = {
  addressJobRelation?: Maybe<AddressAddressJobRelationUpdateRelationInput>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  customer?: Maybe<AddressCustomerUpdateRelationInput>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  /** Smart? */
  streetAddress?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

/** Job create input from address */
export type Address_JobCreateInput = {
  address?: Maybe<JobAddressRelationInput>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  callID?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  fieldworkerNotes?: Maybe<Scalars['String']>;
  jobClockInOutRelation?: Maybe<JobJobClockInOutRelationRelationInput>;
  jobJobFieldWorkerRelation?: Maybe<JobJobJobFieldWorkerRelationRelationInput>;
  model?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  priority?: Maybe<Scalars['String']>;
  purchaseOrder?: Maybe<Scalars['String']>;
  sendNotification?: Maybe<Scalars['Boolean']>;
  serial?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<JobTypeRelationInput>;
  unitServiced?: Maybe<Scalars['String']>;
  workOrder?: Maybe<Scalars['String']>;
  workPerformed?: Maybe<Scalars['String']>;
};

/** Job update input from address */
export type Address_JobUpdateInput = {
  data: JobUpdateInput;
  filter?: Maybe<JobKeyFilter>;
};

export type Address_PermissionFilter = {
  AND?: Maybe<Array<Address_PermissionFilter>>;
  OR?: Maybe<Array<Address_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  addressJobRelation?: Maybe<Job_PermissionRelationFilter>;
  archived?: Maybe<DateTimePredicate>;
  city?: Maybe<StringPredicate>;
  contactName?: Maybe<StringPredicate>;
  contactPhone?: Maybe<StringPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  customer?: Maybe<Customer_PermissionFilter>;
  deletedAt?: Maybe<IntPredicate>;
  id?: Maybe<IdPredicate>;
  name?: Maybe<StringPredicate>;
  state?: Maybe<StringPredicate>;
  streetAddress?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  zipCode?: Maybe<StringPredicate>;
};

export type Address_PermissionRelationFilter = {
  every?: Maybe<Address_PermissionFilter>;
  none?: Maybe<Address_PermissionFilter>;
  some?: Maybe<Address_PermissionFilter>;
};

export enum AggregationFunctionType {
  AnyValue = 'ANY_VALUE',
  Avg = 'AVG',
  Count = 'COUNT',
  GroupConcat = 'GROUP_CONCAT',
  Max = 'MAX',
  Min = 'MIN',
  StddevPop = 'STDDEV_POP',
  StddevSamp = 'STDDEV_SAMP',
  Sum = 'SUM',
  VarPop = 'VAR_POP',
  VarSamp = 'VAR_SAMP',
}

export type ApiToken = {
  __typename?: 'ApiToken';
  _description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<RoleListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ApiTokenRolesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<RoleFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<RoleSort>>;
};

/** ApiTokens create input */
export type ApiTokenCreateInput = {
  name: Scalars['String'];
  roles?: Maybe<ApiTokensRolesRelationInput>;
};

/** ApiTokens delete input */
export type ApiTokenDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

export type ApiTokenFilter = {
  AND?: Maybe<Array<ApiTokenFilter>>;
  OR?: Maybe<Array<ApiTokenFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  deletedAt?: Maybe<IntPredicate>;
  id?: Maybe<IdPredicate>;
  name?: Maybe<StringPredicate>;
  roles?: Maybe<RoleRelationFilter>;
  token?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type ApiTokenGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: ApiTokenGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type ApiTokenGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  id?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  roles?: Maybe<RoleGroupByQuery>;
  updatedAt?: Maybe<Array<GroupByField>>;
};

export type ApiTokenKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** ApiTokenListResponse output */
export type ApiTokenListResponse = {
  __typename?: 'ApiTokenListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<ApiToken>;
};

/** ApiTokenManyResponse output */
export type ApiTokenManyResponse = {
  __typename?: 'ApiTokenManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<ApiToken>;
};

/** No longer supported. Use `sort` instead. */
export enum ApiTokenOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TokenAsc = 'token_ASC',
  TokenDesc = 'token_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** ApiTokens subscription payload */
export type ApiTokenPayload = {
  __typename?: 'ApiTokenPayload';
  mutation: MutationType;
  node?: Maybe<ApiToken>;
  previousValues?: Maybe<ApiToken>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ApiTokenRelationFilter = {
  every?: Maybe<ApiTokenFilter>;
  none?: Maybe<ApiTokenFilter>;
  some?: Maybe<ApiTokenFilter>;
};

/** API Token Response */
export type ApiTokenResponse = {
  __typename?: 'ApiTokenResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<RoleListResponse>;
  token: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** API Token Response */
export type ApiTokenResponseRolesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<RoleFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<RoleSort>>;
};

export type ApiTokenSort = {
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  deletedAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

/** ApiTokens subscription filter */
export type ApiTokenSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<ApiTokenFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** ApiTokens update input */
export type ApiTokenUpdateByFilterInput = {
  name?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  token?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
};

/** ApiTokens update input */
export type ApiTokenUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<ApiTokensRolesUpdateRelationInput>;
};

export type ApiToken_PermissionFilter = {
  AND?: Maybe<Array<ApiToken_PermissionFilter>>;
  OR?: Maybe<Array<ApiToken_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  deletedAt?: Maybe<IntPredicate>;
  id?: Maybe<IdPredicate>;
  name?: Maybe<StringPredicate>;
  roles?: Maybe<Role_PermissionRelationFilter>;
  token?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type ApiToken_PermissionRelationFilter = {
  every?: Maybe<ApiToken_PermissionFilter>;
  none?: Maybe<ApiToken_PermissionFilter>;
  some?: Maybe<ApiToken_PermissionFilter>;
};

/** ApiTokens relation input */
export type ApiTokensRolesRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<ApiTokens_RoleCreateInput>>>;
};

/** ApiTokens relation input */
export type ApiTokensRolesUpdateRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<ApiTokens_RoleCreateInput>>>;
  disconnect?: Maybe<Array<RoleKeyFilter>>;
  reconnect?: Maybe<Array<RoleKeyFilter>>;
  update?: Maybe<Array<Maybe<ApiTokens_RoleUpdateInput>>>;
};

/** Roles create input from apiTokens */
export type ApiTokens_RoleCreateInput = {
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<PermissionsInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
  users?: Maybe<RolesUsersRelationInput>;
};

/** Roles update input from apiTokens */
export type ApiTokens_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: Maybe<RoleKeyFilter>;
};

/** Application */
export type Application = {
  __typename?: 'Application';
  appType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  status: ApplicationStatusEnum;
};

/** ApplicationDeleteMutationInput */
export type ApplicationDeleteMutationInput = {
  force?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
};

/** Application install input */
export type ApplicationInstallInput = {
  appType: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  status?: Maybe<ApplicationStatusEnum>;
};

/** ApplicationListResponse output */
export type ApplicationListResponse = {
  __typename?: 'ApplicationListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<Application>;
};

/** Application Status Enum */
export enum ApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

/** Application update input */
export type ApplicationUpdateInput = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  status?: Maybe<ApplicationStatusEnum>;
};

/** Async Session */
export type AsyncSession = {
  __typename?: 'AsyncSession';
  sessionId: Scalars['String'];
};

export type AsyncSessionStatusResponse = {
  __typename?: 'AsyncSessionStatusResponse';
  message?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

/** Auth response */
export type Auth = {
  __typename?: 'Auth';
  idToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type AuthenticationProfile = {
  __typename?: 'AuthenticationProfile';
  _description?: Maybe<Scalars['String']>;
  attributes?: Maybe<AuthenticationProfileAttributes>;
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  databaseName?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['Int']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  managementDomain?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<RoleListResponse>;
  secret?: Maybe<Scalars['String']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthenticationProfileRolesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<RoleFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<RoleSort>>;
};

/** Authentication Profile Attributes */
export type AuthenticationProfileAttributes = CognitoAuthProfileAttributes;

/** Authentication profile connection options */
export type AuthenticationProfileConnectionOptions = {
  __typename?: 'AuthenticationProfileConnectionOptions';
  facebook?: Maybe<FacebookOptions>;
  github?: Maybe<GithubOptions>;
  google?: Maybe<GoogleOptions>;
};

/** Authentication profile connection options input */
export type AuthenticationProfileConnectionsOptionsInput = {
  facebook?: Maybe<FacebookOptionsInput>;
  github?: Maybe<GithubOptionsInput>;
  google?: Maybe<GoogleOptionsInput>;
};

/** AuthenticationProfiles create input */
export type AuthenticationProfileCreateInput = {
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientId?: Maybe<Scalars['String']>;
  databaseName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  managementDomain?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  roles?: Maybe<AuthenticationProfilesRolesRelationInput>;
  secret?: Maybe<Scalars['String']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
};

/** AuthenticationProfiles create many input */
export type AuthenticationProfileCreateManyInput = {
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientId?: Maybe<Scalars['String']>;
  databaseName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  managementDomain?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  roles?: Maybe<AuthenticationProfilesRolesManyRelationInput>;
  secret?: Maybe<Scalars['String']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
};

/** AuthenticationProfiles delete input */
export type AuthenticationProfileDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

export type AuthenticationProfileFilter = {
  AND?: Maybe<Array<AuthenticationProfileFilter>>;
  OR?: Maybe<Array<AuthenticationProfileFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  clientId?: Maybe<StringPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  databaseName?: Maybe<StringPredicate>;
  deletedAt?: Maybe<IntPredicate>;
  domain?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  managementDomain?: Maybe<StringPredicate>;
  name?: Maybe<StringPredicate>;
  roles?: Maybe<RoleRelationFilter>;
  secret?: Maybe<StringPredicate>;
  selfSignUpEnabled?: Maybe<BoolPredicate>;
  type?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type AuthenticationProfileGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: AuthenticationProfileGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type AuthenticationProfileGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  audiences?: Maybe<Array<GroupByField>>;
  clientId?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  databaseName?: Maybe<Array<GroupByField>>;
  domain?: Maybe<Array<GroupByField>>;
  id?: Maybe<Array<GroupByField>>;
  managementDomain?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  roles?: Maybe<RoleGroupByQuery>;
  secret?: Maybe<Array<GroupByField>>;
  selfSignUpEmailDomains?: Maybe<Array<GroupByField>>;
  selfSignUpEnabled?: Maybe<Array<GroupByField>>;
  type?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
};

export type AuthenticationProfileKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** AuthenticationProfileListResponse output */
export type AuthenticationProfileListResponse = {
  __typename?: 'AuthenticationProfileListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<AuthenticationProfile>;
};

/** AuthenticationProfileManyResponse output */
export type AuthenticationProfileManyResponse = {
  __typename?: 'AuthenticationProfileManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<AuthenticationProfile>;
};

/** No longer supported. Use `sort` instead. */
export enum AuthenticationProfileOrderBy {
  ClientIdAsc = 'clientId_ASC',
  ClientIdDesc = 'clientId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DatabaseNameAsc = 'databaseName_ASC',
  DatabaseNameDesc = 'databaseName_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DomainAsc = 'domain_ASC',
  DomainDesc = 'domain_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManagementDomainAsc = 'managementDomain_ASC',
  ManagementDomainDesc = 'managementDomain_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SecretAsc = 'secret_ASC',
  SecretDesc = 'secret_DESC',
  SelfSignUpEnabledAsc = 'selfSignUpEnabled_ASC',
  SelfSignUpEnabledDesc = 'selfSignUpEnabled_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** AuthenticationProfiles subscription payload */
export type AuthenticationProfilePayload = {
  __typename?: 'AuthenticationProfilePayload';
  mutation: MutationType;
  node?: Maybe<AuthenticationProfile>;
  previousValues?: Maybe<AuthenticationProfile>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AuthenticationProfileRelationFilter = {
  every?: Maybe<AuthenticationProfileFilter>;
  none?: Maybe<AuthenticationProfileFilter>;
  some?: Maybe<AuthenticationProfileFilter>;
};

export type AuthenticationProfileSort = {
  clientId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  databaseName?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  domain?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  managementDomain?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  secret?: Maybe<SortOrder>;
  selfSignUpEnabled?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

/** AuthenticationProfiles subscription filter */
export type AuthenticationProfileSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<AuthenticationProfileFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateByFilterInput = {
  audiences?: Maybe<Array<Maybe<UpdateByFilterListStringInput>>>;
  clientId?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  databaseName?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  domain?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  managementDomain?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  name?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  secret?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<UpdateByFilterListStringInput>>>;
  selfSignUpEnabled?: Maybe<Array<Maybe<UpdateByFilterBooleanSwitchInput>>>;
  type?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateInput = {
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientId?: Maybe<Scalars['String']>;
  databaseName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  managementDomain?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<AuthenticationProfilesRolesUpdateRelationInput>;
  secret?: Maybe<Scalars['String']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
};

export type AuthenticationProfile_PermissionFilter = {
  AND?: Maybe<Array<AuthenticationProfile_PermissionFilter>>;
  OR?: Maybe<Array<AuthenticationProfile_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  clientId?: Maybe<StringPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  databaseName?: Maybe<StringPredicate>;
  deletedAt?: Maybe<IntPredicate>;
  domain?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  managementDomain?: Maybe<StringPredicate>;
  name?: Maybe<StringPredicate>;
  roles?: Maybe<Role_PermissionRelationFilter>;
  secret?: Maybe<StringPredicate>;
  selfSignUpEnabled?: Maybe<BoolPredicate>;
  type?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type AuthenticationProfile_PermissionRelationFilter = {
  every?: Maybe<AuthenticationProfile_PermissionFilter>;
  none?: Maybe<AuthenticationProfile_PermissionFilter>;
  some?: Maybe<AuthenticationProfile_PermissionFilter>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesManyRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<AuthenticationProfiles_RoleCreateInput>>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesUpdateRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<AuthenticationProfiles_RoleCreateInput>>>;
  disconnect?: Maybe<Array<RoleKeyFilter>>;
  reconnect?: Maybe<Array<RoleKeyFilter>>;
  update?: Maybe<Array<Maybe<AuthenticationProfiles_RoleUpdateInput>>>;
};

/** Roles create input from authenticationProfiles */
export type AuthenticationProfiles_RoleCreateInput = {
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<PermissionsInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
  users?: Maybe<RolesUsersRelationInput>;
};

/** Roles update input from authenticationProfiles */
export type AuthenticationProfiles_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: Maybe<RoleKeyFilter>;
};

export type AuthenticationSetting = {
  __typename?: 'AuthenticationSetting';
  _description?: Maybe<Scalars['String']>;
  allowedCallbacks?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedLogouts?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedWebOrigins?: Maybe<Array<Maybe<Scalars['String']>>>;
  connections?: Maybe<AuthenticationProfileConnectionOptions>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthenticationSettingFilter = {
  AND?: Maybe<Array<AuthenticationSettingFilter>>;
  OR?: Maybe<Array<AuthenticationSettingFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  deletedAt?: Maybe<IntPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
};

/** AuthenticationSettings subscription payload */
export type AuthenticationSettingPayload = {
  __typename?: 'AuthenticationSettingPayload';
  mutation: MutationType;
  node?: Maybe<AuthenticationSetting>;
  previousValues?: Maybe<AuthenticationSetting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** AuthenticationSettings subscription filter */
export type AuthenticationSettingSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<AuthenticationSettingFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** AuthenticationSettings update input */
export type AuthenticationSettingUpdateInput = {
  allowedCallbacks?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedLogouts?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedWebOrigins?: Maybe<Array<Maybe<Scalars['String']>>>;
  connections?: Maybe<AuthenticationProfileConnectionsOptionsInput>;
};

/** TeamMembers update input from avatar */
export type Avatar_TeamMemberUpdateInput = {
  data: TeamMemberUpdateInput;
  filter?: Maybe<TeamMemberKeyFilter>;
};

/** Users create input from avatar */
export type Avatar_UserCreateInput = {
  avatar?: Maybe<UsersAvatarRelationInput>;
  email: Scalars['String'];
  fielworker?: Maybe<UsersFielworkerRelationInput>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<UsersRolesRelationInput>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  typeUser?: Maybe<Scalars['String']>;
};

/** Users update input from avatar */
export type Avatar_UserUpdateInput = {
  data: UserUpdateInput;
  filter?: Maybe<UserKeyFilter>;
};

export type BigIntPredicateHaving = {
  AND?: Maybe<Array<BigIntPredicateHaving>>;
  OR?: Maybe<Array<BigIntPredicateHaving>>;
  equals?: Maybe<Scalars['BigInt']>;
  gt?: Maybe<Scalars['BigInt']>;
  gte?: Maybe<Scalars['BigInt']>;
  in?: Maybe<Array<Scalars['BigInt']>>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['BigInt']>;
  lte?: Maybe<Scalars['BigInt']>;
  not_equals?: Maybe<Scalars['BigInt']>;
  not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export type BillingCurrentPlanResponse = {
  __typename?: 'BillingCurrentPlanResponse';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  nextPlan?: Maybe<BillingNextPlanResponse>;
  price?: Maybe<Scalars['Int']>;
  status?: Maybe<WorkspaceStatus>;
  trialEnd?: Maybe<Scalars['DateTime']>;
};

export type BillingDetailsResponse = {
  __typename?: 'BillingDetailsResponse';
  brand?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  last4?: Maybe<Scalars['String']>;
};

/** BillingDetailsUpdateMutationInput */
export type BillingDetailsUpdateMutationInput = {
  cardToken: Scalars['String'];
};

export type BillingInvoiceItem = {
  __typename?: 'BillingInvoiceItem';
  amountDue?: Maybe<Scalars['Float']>;
  amountPaid?: Maybe<Scalars['Float']>;
  amountRemaining?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  endingBalance?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  invoicePdf?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['Boolean']>;
  periodEnd?: Maybe<Scalars['DateTime']>;
  periodStart?: Maybe<Scalars['DateTime']>;
  plan?: Maybe<BillingInvoiceItemPlanInfo>;
  status?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  workspace?: Maybe<BillingInvoiceItemWorkspaceInfo>;
};

export type BillingInvoiceItemPlanInfo = {
  __typename?: 'BillingInvoiceItemPlanInfo';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type BillingInvoiceItemWorkspaceInfo = {
  __typename?: 'BillingInvoiceItemWorkspaceInfo';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export enum BillingInvoicesListFilterType {
  Customer = 'CUSTOMER',
  Workspace = 'WORKSPACE',
}

/** BillingInvoicesListResponse output */
export type BillingInvoicesListResponse = {
  __typename?: 'BillingInvoicesListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<BillingInvoiceItem>;
};

export type BillingLimitMetricItem = {
  __typename?: 'BillingLimitMetricItem';
  displayName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  showPriority?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
};

export type BillingMetricUsageItem = {
  __typename?: 'BillingMetricUsageItem';
  limitMetric?: Maybe<BillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']>;
};

export type BillingMetricUsageQuotaItem = {
  __typename?: 'BillingMetricUsageQuotaItem';
  limitMetric?: Maybe<BillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']>;
};

/** BillingMetricUsageQuotasListResponse output */
export type BillingMetricUsageQuotasListResponse = {
  __typename?: 'BillingMetricUsageQuotasListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<BillingMetricUsageQuotaItem>;
};

export type BillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

/** BillingMetricUsagesListResponse output */
export type BillingMetricUsagesListResponse = {
  __typename?: 'BillingMetricUsagesListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<BillingMetricUsageItem>;
};

export type BillingNextPlanResponse = {
  __typename?: 'BillingNextPlanResponse';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type BillingPlanBaseInfo = {
  __typename?: 'BillingPlanBaseInfo';
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isCustom?: Maybe<Scalars['Boolean']>;
  isLegacy?: Maybe<Scalars['Boolean']>;
  limitMetrics?: Maybe<Array<Maybe<BillingPlanLimitMetricItem>>>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type BillingPlanLimitMetricItem = {
  __typename?: 'BillingPlanLimitMetricItem';
  displayName?: Maybe<Scalars['String']>;
  hardLimit?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  overagePrice?: Maybe<Scalars['Int']>;
  softLimit?: Maybe<Scalars['Float']>;
};

/** BillingPlanUpdateMutationInput */
export type BillingPlanUpdateMutationInput = {
  planId: Scalars['ID'];
};

export type BoolPredicate = {
  equals?: Maybe<Scalars['Boolean']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  not_equals?: Maybe<Scalars['Boolean']>;
};

export type BoolPredicateHaving = {
  AND?: Maybe<Array<BoolPredicateHaving>>;
  OR?: Maybe<Array<BoolPredicateHaving>>;
  equals?: Maybe<Scalars['Boolean']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  not_equals?: Maybe<Scalars['Boolean']>;
};

/** ChangePasswordInput */
export type ChangePasswordInput = {
  authProfileId: Scalars['ID'];
  email: Scalars['String'];
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type CiCdMigration = {
  __typename?: 'CiCdMigration';
  _description?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** CiCdMigrations create input */
export type CiCdMigrationCreateInput = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** CiCdMigrations create many input */
export type CiCdMigrationCreateManyInput = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** CiCdMigrations delete input */
export type CiCdMigrationDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

/** CiCdMigrationFieldsPermissions create input */
export type CiCdMigrationFieldsPermissions = {
  code?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
};

export type CiCdMigrationFilter = {
  AND?: Maybe<Array<CiCdMigrationFilter>>;
  OR?: Maybe<Array<CiCdMigrationFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  code?: Maybe<StringPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  deletedAt?: Maybe<IntPredicate>;
  id?: Maybe<IdPredicate>;
  name?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type CiCdMigrationGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: CiCdMigrationGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type CiCdMigrationGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  code?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  id?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
};

export type CiCdMigrationKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** CiCdMigrationListResponse output */
export type CiCdMigrationListResponse = {
  __typename?: 'CiCdMigrationListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<CiCdMigration>;
};

/** CiCdMigrationManyResponse output */
export type CiCdMigrationManyResponse = {
  __typename?: 'CiCdMigrationManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<CiCdMigration>;
};

/** No longer supported. Use `sort` instead. */
export enum CiCdMigrationOrderBy {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** CiCdMigrations subscription payload */
export type CiCdMigrationPayload = {
  __typename?: 'CiCdMigrationPayload';
  mutation: MutationType;
  node?: Maybe<CiCdMigration>;
  previousValues?: Maybe<CiCdMigration>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CiCdMigrationSort = {
  code?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  deletedAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

/** CiCdMigrations subscription filter */
export type CiCdMigrationSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<CiCdMigrationFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** CiCdMigrations update input */
export type CiCdMigrationUpdateByFilterInput = {
  code?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  name?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
};

/** CiCdMigrations update input */
export type CiCdMigrationUpdateInput = {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CiCdMigration_PermissionFilter = {
  AND?: Maybe<Array<CiCdMigration_PermissionFilter>>;
  OR?: Maybe<Array<CiCdMigration_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  code?: Maybe<StringPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  deletedAt?: Maybe<IntPredicate>;
  id?: Maybe<IdPredicate>;
  name?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type ClockInOut = {
  __typename?: 'ClockInOut';
  _description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  fieldworker?: Maybe<Fieldworker>;
  id?: Maybe<Scalars['ID']>;
  job?: Maybe<Job>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** ClockInOut create input */
export type ClockInOutCreateInput = {
  fieldworker?: Maybe<ClockInOutFieldworkerRelationInput>;
  job?: Maybe<ClockInOutJobRelationInput>;
  type?: Maybe<Scalars['String']>;
};

/** ClockInOut create many input */
export type ClockInOutCreateManyInput = {
  fieldworker: ClockInOutFieldworkerManyRelationInput;
  job: ClockInOutJobManyRelationInput;
  type?: Maybe<Scalars['String']>;
};

/** ClockInOut delete input */
export type ClockInOutDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

/** ClockInOutFieldsPermissions create input */
export type ClockInOutFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
};

/** ClockInOut relation input */
export type ClockInOutFieldworkerManyRelationInput = {
  connect?: Maybe<FieldworkerKeyFilter>;
};

/** ClockInOut relation input */
export type ClockInOutFieldworkerRelationInput = {
  connect?: Maybe<FieldworkerKeyFilter>;
  create?: Maybe<FieldworkerClockInOutRelation_FieldworkerCreateInput>;
};

/** ClockInOut relation input */
export type ClockInOutFieldworkerUpdateRelationInput = {
  connect?: Maybe<FieldworkerKeyFilter>;
  create?: Maybe<FieldworkerClockInOutRelation_FieldworkerCreateInput>;
  disconnect?: Maybe<FieldworkerKeyFilter>;
  reconnect?: Maybe<FieldworkerKeyFilter>;
  update?: Maybe<FieldworkerClockInOutRelation_FieldworkerUpdateInput>;
};

export type ClockInOutFilter = {
  AND?: Maybe<Array<ClockInOutFilter>>;
  OR?: Maybe<Array<ClockInOutFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  deletedAt?: Maybe<IntPredicate>;
  fieldworker?: Maybe<FieldworkerFilter>;
  id?: Maybe<IdPredicate>;
  job?: Maybe<JobFilter>;
  type?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type ClockInOutGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: ClockInOutGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type ClockInOutGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  fieldworker?: Maybe<FieldworkerGroupByQuery>;
  id?: Maybe<Array<GroupByField>>;
  job?: Maybe<JobGroupByQuery>;
  type?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
};

/** ClockInOut relation input */
export type ClockInOutJobManyRelationInput = {
  connect?: Maybe<JobKeyFilter>;
};

/** ClockInOut relation input */
export type ClockInOutJobRelationInput = {
  connect?: Maybe<JobKeyFilter>;
  create?: Maybe<JobClockInOutRelation_JobCreateInput>;
};

/** ClockInOut relation input */
export type ClockInOutJobUpdateRelationInput = {
  connect?: Maybe<JobKeyFilter>;
  create?: Maybe<JobClockInOutRelation_JobCreateInput>;
  disconnect?: Maybe<JobKeyFilter>;
  reconnect?: Maybe<JobKeyFilter>;
  update?: Maybe<JobClockInOutRelation_JobUpdateInput>;
};

export type ClockInOutKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

/** ClockInOutListResponse output */
export type ClockInOutListResponse = {
  __typename?: 'ClockInOutListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<ClockInOut>;
};

/** ClockInOutManyResponse output */
export type ClockInOutManyResponse = {
  __typename?: 'ClockInOutManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<ClockInOut>;
};

/** No longer supported. Use `sort` instead. */
export enum ClockInOutOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** ClockInOut subscription payload */
export type ClockInOutPayload = {
  __typename?: 'ClockInOutPayload';
  mutation: MutationType;
  node?: Maybe<ClockInOut>;
  previousValues?: Maybe<ClockInOut>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ClockInOutRelationFilter = {
  every?: Maybe<ClockInOutFilter>;
  none?: Maybe<ClockInOutFilter>;
  some?: Maybe<ClockInOutFilter>;
};

export type ClockInOutSort = {
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  deletedAt?: Maybe<SortOrder>;
  fieldworker?: Maybe<FieldworkerSort>;
  id?: Maybe<SortOrder>;
  job?: Maybe<JobSort>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

/** ClockInOut subscription filter */
export type ClockInOutSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<ClockInOutFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** ClockInOut update input */
export type ClockInOutUpdateByFilterInput = {
  type?: Maybe<Array<Maybe<UpdateByFilterStringSwitchInput>>>;
};

/** ClockInOut update input */
export type ClockInOutUpdateInput = {
  fieldworker?: Maybe<ClockInOutFieldworkerUpdateRelationInput>;
  id?: Maybe<Scalars['ID']>;
  job?: Maybe<ClockInOutJobUpdateRelationInput>;
  type?: Maybe<Scalars['String']>;
};

export type ClockInOut_PermissionFilter = {
  AND?: Maybe<Array<ClockInOut_PermissionFilter>>;
  OR?: Maybe<Array<ClockInOut_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  deletedAt?: Maybe<IntPredicate>;
  fieldworker?: Maybe<Fieldworker_PermissionFilter>;
  id?: Maybe<IdPredicate>;
  job?: Maybe<Job_PermissionFilter>;
  type?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type ClockInOut_PermissionRelationFilter = {
  every?: Maybe<ClockInOut_PermissionFilter>;
  none?: Maybe<ClockInOut_PermissionFilter>;
  some?: Maybe<ClockInOut_PermissionFilter>;
};

/** Authentication Profile Attributes for Cognito */
export type CognitoAuthProfileAttributes = {
  __typename?: 'CognitoAuthProfileAttributes';
  clientAuthDomain?: Maybe<Scalars['String']>;
};

/** Computed field mode */
export enum ComputedFieldMode {
  Stored = 'STORED',
  Virtual = 'VIRTUAL',
}

/** Custom Table Field Type */
export type CustomTableField = {
  __typename?: 'CustomTableField';
  computedMode?: Maybe<ComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  fieldType?: Maybe<FieldType>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type Customer = {
  __typename?: 'Customer';
  _description?: Maybe<Scalars['String']>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  customerAddressRelation?: Maybe<AddressListResponse>;
  deletedAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CustomerCustomerAddressRelationArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<AddressFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AddressGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AddressOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<AddressSort>>;
};

/** Customer create input from customerAddressRelation */
export type CustomerAddressRelation_CustomerCreateInput = {
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  customerAddressRelation?: Maybe<CustomerCustomerAddressRelationRelationInput>;
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
};

/** Customer update input from customerAddressRelation */
export type CustomerAddressRelation_CustomerUpdateInput = {
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  customerAddressRelation?: Maybe<CustomerCustomerAddressRelationUpdateRelationInput>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

/** Customer create input */
export type CustomerCreateInput = {
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  customerAddressRelation?: Maybe<CustomerCustomerAddressRelationRelationInput>;
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
};

/** Customer create many input */
export type CustomerCreateManyInput = {
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  customerAddressRelation?: Maybe<CustomerCustomerAddressRelationManyRelationInput>;
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
};

/** Customer relation input */
export type CustomerCustomerAddressRelationManyRelationInput = {
  connect?: Maybe<Array<AddressKeyFilter>>;
};

/** Customer relation input */
export type CustomerCustomerAddressRelationRelationInput = {
  connect?: Maybe<Array<AddressKeyFilter>>;
  create?: Maybe<Array<Maybe<Customer_AddressCreateInput>>>;
};

/** Customer relation input */
export type CustomerCustomerAddressRelationUpdateRelationInput = {
  connect?: Maybe<Array<AddressKeyFilter>>;
  create?: Maybe<Array<Maybe<Customer_AddressCreateInput>>>;
  disconnect?: Maybe<Array<AddressKeyFilter>>;
  reconnect?: Maybe<Array<AddressKeyFilter>>;
  update?: Maybe<Array<Maybe<Customer_AddressUpdateInput>>>;
};

/** Customer delete input */
export type CustomerDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

/** CustomerFieldsPermissions create input */
export type CustomerFieldsPermissions = {
  archived?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
};

export type CustomerFilter = {
  AND?: Maybe<Array<CustomerFilter>>;
  OR?: Maybe<Array<CustomerFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  archived?: Maybe<DateTimePredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  customerAddressRelation?: Maybe<AddressRelationFilter>;
  deletedAt?: Maybe<IntPredicate>;
  email?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  name?: Maybe<StringPredicate>;
  phoneNumber?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type CustomerGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: CustomerGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type CustomerGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  archived?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  customerAddressRelation?: Maybe<AddressGroupByQuery>;
  email?: Maybe<Array<GroupByField>>;
  id?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  phoneNumber?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
};

export type CustomerKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

/** CustomerListResponse output */
export type CustomerListResponse = {
  __typename?: 'CustomerListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Customer>;
};

/** CustomerManyResponse output */
export type CustomerManyResponse = {
  __typename?: 'CustomerManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<Customer>;
};

/** No longer supported. Use `sort` instead. */
export enum CustomerOrderBy {
  ArchivedAsc = 'archived_ASC',
  ArchivedDesc = 'archived_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** Customer subscription payload */
export type CustomerPayload = {
  __typename?: 'CustomerPayload';
  mutation: MutationType;
  node?: Maybe<Customer>;
  previousValues?: Maybe<Customer>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CustomerSort = {
  archived?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  deletedAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  phoneNumber?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

/** Customer subscription filter */
export type CustomerSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<CustomerFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** Customer update input */
export type CustomerUpdateByFilterInput = {
  archived?: Maybe<Array<Maybe<UpdateByFilterDateTimeInput>>>;
  email?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  name?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  phoneNumber?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
};

/** Customer update input */
export type CustomerUpdateInput = {
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  customerAddressRelation?: Maybe<CustomerCustomerAddressRelationUpdateRelationInput>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

/** Address create input from customer */
export type Customer_AddressCreateInput = {
  addressJobRelation?: Maybe<AddressAddressJobRelationRelationInput>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  city: Scalars['String'];
  contactName?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  customer?: Maybe<AddressCustomerRelationInput>;
  name: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  /** Smart? */
  streetAddress: Scalars['String'];
  zipCode?: Maybe<Scalars['String']>;
};

/** Address update input from customer */
export type Customer_AddressUpdateInput = {
  data: AddressUpdateInput;
  filter?: Maybe<AddressKeyFilter>;
};

export type Customer_PermissionFilter = {
  AND?: Maybe<Array<Customer_PermissionFilter>>;
  OR?: Maybe<Array<Customer_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  archived?: Maybe<DateTimePredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  customerAddressRelation?: Maybe<Address_PermissionRelationFilter>;
  deletedAt?: Maybe<IntPredicate>;
  email?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  name?: Maybe<StringPredicate>;
  phoneNumber?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
};

/** Date Field Attributes */
export type DateFieldTypeAttributes = {
  __typename?: 'DateFieldTypeAttributes';
  format: Scalars['String'];
};

export enum DatePartFunctionType {
  Date = 'DATE',
  Day = 'DAY',
  DayName = 'DAY_NAME',
  DayOfMonth = 'DAY_OF_MONTH',
  DayOfWeek = 'DAY_OF_WEEK',
  DayOfYear = 'DAY_OF_YEAR',
  Hour = 'HOUR',
  LastDay = 'LAST_DAY',
  Microsecond = 'MICROSECOND',
  Minute = 'MINUTE',
  Month = 'MONTH',
  MonthName = 'MONTH_NAME',
  Quarter = 'QUARTER',
  Second = 'SECOND',
  Time = 'TIME',
  Week = 'WEEK',
  WeekDay = 'WEEK_DAY',
  WeekOfYear = 'WEEK_OF_YEAR',
  Year = 'YEAR',
  YearWeek = 'YEAR_WEEK',
}

export type DatePredicateHaving = {
  AND?: Maybe<Array<DatePredicateHaving>>;
  OR?: Maybe<Array<DatePredicateHaving>>;
  equals?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Scalars['Date']>>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  not_equals?: Maybe<Scalars['Date']>;
  not_in?: Maybe<Array<Scalars['Date']>>;
};

export type DateRelativePredicateType = {
  op?: Maybe<RelativePredicateOpEnum>;
  unit?: Maybe<RelativePredicateUnitEnum>;
  value: Scalars['String'];
};

export type DateRelativePredicates = {
  gt?: Maybe<DateRelativePredicateType>;
  gte?: Maybe<DateRelativePredicateType>;
  lt?: Maybe<DateRelativePredicateType>;
  lte?: Maybe<DateRelativePredicateType>;
};

export type DateTimePredicate = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not_equals?: Maybe<Scalars['DateTime']>;
  not_in?: Maybe<Array<Scalars['DateTime']>>;
  relative?: Maybe<DateRelativePredicates>;
};

export type DateTimePredicateHaving = {
  AND?: Maybe<Array<DateTimePredicateHaving>>;
  OR?: Maybe<Array<DateTimePredicateHaving>>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not_equals?: Maybe<Scalars['DateTime']>;
  not_in?: Maybe<Array<Scalars['DateTime']>>;
};

/** Date Type Format Enum */
export enum DateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME',
}

/** DeployDataResponse */
export type DeployDataResponse = {
  __typename?: 'DeployDataResponse';
  buildName: Scalars['String'];
  uploadBuildUrl: Scalars['String'];
  uploadMetaDataUrl: Scalars['String'];
};

export enum DeployModeEnum {
  Full = 'FULL',
  Functions = 'FUNCTIONS',
  Migrations = 'MIGRATIONS',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT',
}

/** DeployOptions */
export type DeployOptions = {
  extensionNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  mode?: Maybe<DeployModeEnum>;
  pluginNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum DeployStatusEnum {
  Compiling = 'compiling',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Deploying = 'deploying',
  Initialize = 'initialize',
  Preparing = 'preparing',
}

/** DeployStatusResult */
export type DeployStatusResult = {
  __typename?: 'DeployStatusResult';
  message?: Maybe<Scalars['String']>;
  status: DeployStatusEnum;
};

/** DeployingBuildInput */
export type DeployingBuildInput = {
  buildName: Scalars['String'];
  options?: Maybe<DeployOptions>;
};

export type EnvironmentBackupItem = {
  __typename?: 'EnvironmentBackupItem';
  name: Scalars['String'];
  size: Scalars['Float'];
};

export type EnvironmentItem = {
  __typename?: 'EnvironmentItem';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** EnvironmentSetupInput */
export type EnvironmentSetupInput = {
  deleteLock?: Maybe<Scalars['Boolean']>;
};

export type EnvironmentVariable = {
  __typename?: 'EnvironmentVariable';
  _description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

/** EnvironmentVariables create input */
export type EnvironmentVariableCreateInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

/** EnvironmentVariables create many input */
export type EnvironmentVariableCreateManyInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

/** EnvironmentVariables delete input */
export type EnvironmentVariableDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

export type EnvironmentVariableFilter = {
  AND?: Maybe<Array<EnvironmentVariableFilter>>;
  OR?: Maybe<Array<EnvironmentVariableFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  deletedAt?: Maybe<IntPredicate>;
  id?: Maybe<IdPredicate>;
  name?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  value?: Maybe<StringPredicate>;
};

export type EnvironmentVariableGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: EnvironmentVariableGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type EnvironmentVariableGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  id?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  value?: Maybe<Array<GroupByField>>;
};

export type EnvironmentVariableKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** EnvironmentVariableListResponse output */
export type EnvironmentVariableListResponse = {
  __typename?: 'EnvironmentVariableListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<EnvironmentVariable>;
};

/** EnvironmentVariableManyResponse output */
export type EnvironmentVariableManyResponse = {
  __typename?: 'EnvironmentVariableManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<EnvironmentVariable>;
};

/** No longer supported. Use `sort` instead. */
export enum EnvironmentVariableOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
}

/** EnvironmentVariables subscription payload */
export type EnvironmentVariablePayload = {
  __typename?: 'EnvironmentVariablePayload';
  mutation: MutationType;
  node?: Maybe<EnvironmentVariable>;
  previousValues?: Maybe<EnvironmentVariable>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EnvironmentVariableSort = {
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  deletedAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  value?: Maybe<SortOrder>;
};

/** EnvironmentVariables subscription filter */
export type EnvironmentVariableSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<EnvironmentVariableFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateByFilterInput = {
  name?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  value?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** Facebook connection params */
export type FacebookOptions = {
  __typename?: 'FacebookOptions';
  app_id: Scalars['String'];
  app_secret: Scalars['String'];
  enabled: Scalars['Boolean'];
};

/** Facebook connection params input */
export type FacebookOptionsInput = {
  app_id: Scalars['String'];
  app_secret: Scalars['String'];
  enabled: Scalars['Boolean'];
};

/** Field Data Features */
export type FieldDataFeatures = {
  __typename?: 'FieldDataFeatures';
  create: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

/** Field Schema Features */
export type FieldSchemaFeatures = {
  __typename?: 'FieldSchemaFeatures';
  delete: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

/** Field types */
export enum FieldType {
  Date = 'DATE',
  File = 'FILE',
  Geo = 'GEO',
  Id = 'ID',
  Json = 'JSON',
  MissingRelation = 'MISSING_RELATION',
  Number = 'NUMBER',
  OneWayRelation = 'ONE_WAY_RELATION',
  Relation = 'RELATION',
  Smart = 'SMART',
  Switch = 'SWITCH',
  Text = 'TEXT',
  Uuid = 'UUID',
}

/** Field Type Attributes */
export type FieldTypeAttributes =
  | DateFieldTypeAttributes
  | FileFieldTypeAttributes
  | GeoFieldTypeAttributes
  | MissingRelationFieldTypeAttributes
  | NumberFieldTypeAttributes
  | SmartFieldTypeAttributes
  | SwitchFieldTypeAttributes
  | TextFieldTypeAttributes
  | UuidFieldTypeAttributes;

/** Field Type Attributes Input */
export type FieldTypeAttributesInput = {
  autoIncrement?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  expiration?: Maybe<Scalars['Int']>;
  fieldSize?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
  isBigInt?: Maybe<Scalars['Boolean']>;
  listOptions?: Maybe<Array<Scalars['String']>>;
  maxSize?: Maybe<Scalars['Int']>;
  maxValue?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Int']>;
  srid?: Maybe<Scalars['Int']>;
  typeRestrictions?: Maybe<Array<Scalars['String']>>;
};

export type Fieldworker = {
  __typename?: 'Fieldworker';
  _description?: Maybe<Scalars['String']>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  fieldworkerClockInOutRelation?: Maybe<ClockInOutListResponse>;
  fieldworkerJobFieldworkerRelation?: Maybe<JobFieldworkerListResponse>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type FieldworkerFieldworkerClockInOutRelationArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<ClockInOutFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ClockInOutGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<ClockInOutOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ClockInOutSort>>;
};

export type FieldworkerFieldworkerJobFieldworkerRelationArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<JobFieldworkerFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<JobFieldworkerGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<JobFieldworkerOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<JobFieldworkerSort>>;
};

/** Fieldworker create input from fieldworkerClockInOutRelation */
export type FieldworkerClockInOutRelation_FieldworkerCreateInput = {
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fieldworkerClockInOutRelation?: Maybe<FieldworkerFieldworkerClockInOutRelationRelationInput>;
  fieldworkerJobFieldworkerRelation?: Maybe<FieldworkerFieldworkerJobFieldworkerRelationRelationInput>;
  fullName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  user?: Maybe<FieldworkerUserRelationInput>;
};

/** Fieldworker update input from fieldworkerClockInOutRelation */
export type FieldworkerClockInOutRelation_FieldworkerUpdateInput = {
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fieldworkerClockInOutRelation?: Maybe<FieldworkerFieldworkerClockInOutRelationUpdateRelationInput>;
  fieldworkerJobFieldworkerRelation?: Maybe<FieldworkerFieldworkerJobFieldworkerRelationUpdateRelationInput>;
  fullName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  user?: Maybe<FieldworkerUserUpdateRelationInput>;
};

/** Fieldworker create input */
export type FieldworkerCreateInput = {
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fieldworkerClockInOutRelation?: Maybe<FieldworkerFieldworkerClockInOutRelationRelationInput>;
  fieldworkerJobFieldworkerRelation?: Maybe<FieldworkerFieldworkerJobFieldworkerRelationRelationInput>;
  fullName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  user?: Maybe<FieldworkerUserRelationInput>;
};

/** Fieldworker create many input */
export type FieldworkerCreateManyInput = {
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fieldworkerClockInOutRelation?: Maybe<FieldworkerFieldworkerClockInOutRelationManyRelationInput>;
  fieldworkerJobFieldworkerRelation?: Maybe<FieldworkerFieldworkerJobFieldworkerRelationManyRelationInput>;
  fullName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  user?: Maybe<FieldworkerUserManyRelationInput>;
};

/** Fieldworker delete input */
export type FieldworkerDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

/** FieldworkerFieldsPermissions create input */
export type FieldworkerFieldsPermissions = {
  archived?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['Boolean']>;
  fullName?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
};

/** Fieldworker relation input */
export type FieldworkerFieldworkerClockInOutRelationManyRelationInput = {
  connect?: Maybe<Array<ClockInOutKeyFilter>>;
};

/** Fieldworker relation input */
export type FieldworkerFieldworkerClockInOutRelationRelationInput = {
  connect?: Maybe<Array<ClockInOutKeyFilter>>;
  create?: Maybe<Array<Maybe<Fieldworker_ClockInOutCreateInput>>>;
};

/** Fieldworker relation input */
export type FieldworkerFieldworkerClockInOutRelationUpdateRelationInput = {
  connect?: Maybe<Array<ClockInOutKeyFilter>>;
  create?: Maybe<Array<Maybe<Fieldworker_ClockInOutCreateInput>>>;
  disconnect?: Maybe<Array<ClockInOutKeyFilter>>;
  reconnect?: Maybe<Array<ClockInOutKeyFilter>>;
  update?: Maybe<Array<Maybe<Fieldworker_ClockInOutUpdateInput>>>;
};

/** Fieldworker relation input */
export type FieldworkerFieldworkerJobFieldworkerRelationManyRelationInput = {
  connect?: Maybe<Array<JobFieldworkerKeyFilter>>;
};

/** Fieldworker relation input */
export type FieldworkerFieldworkerJobFieldworkerRelationRelationInput = {
  connect?: Maybe<Array<JobFieldworkerKeyFilter>>;
  create?: Maybe<Array<Maybe<Fieldworker_JobFieldworkerCreateInput>>>;
};

/** Fieldworker relation input */
export type FieldworkerFieldworkerJobFieldworkerRelationUpdateRelationInput = {
  connect?: Maybe<Array<JobFieldworkerKeyFilter>>;
  create?: Maybe<Array<Maybe<Fieldworker_JobFieldworkerCreateInput>>>;
  disconnect?: Maybe<Array<JobFieldworkerKeyFilter>>;
  reconnect?: Maybe<Array<JobFieldworkerKeyFilter>>;
  update?: Maybe<Array<Maybe<Fieldworker_JobFieldworkerUpdateInput>>>;
};

export type FieldworkerFilter = {
  AND?: Maybe<Array<FieldworkerFilter>>;
  OR?: Maybe<Array<FieldworkerFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  archived?: Maybe<DateTimePredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  deletedAt?: Maybe<IntPredicate>;
  email?: Maybe<StringPredicate>;
  fieldworkerClockInOutRelation?: Maybe<ClockInOutRelationFilter>;
  fieldworkerJobFieldworkerRelation?: Maybe<JobFieldworkerRelationFilter>;
  fullName?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  phoneNumber?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  user?: Maybe<UserFilter>;
};

export type FieldworkerGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: FieldworkerGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type FieldworkerGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  archived?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  email?: Maybe<Array<GroupByField>>;
  fieldworkerClockInOutRelation?: Maybe<ClockInOutGroupByQuery>;
  fieldworkerJobFieldworkerRelation?: Maybe<JobFieldworkerGroupByQuery>;
  fullName?: Maybe<Array<GroupByField>>;
  id?: Maybe<Array<GroupByField>>;
  phoneNumber?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  user?: Maybe<UserGroupByQuery>;
};

/** Fieldworker create input from fieldworkerJobFieldworkerRelation */
export type FieldworkerJobFieldworkerRelation_FieldworkerCreateInput = {
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fieldworkerClockInOutRelation?: Maybe<FieldworkerFieldworkerClockInOutRelationRelationInput>;
  fieldworkerJobFieldworkerRelation?: Maybe<FieldworkerFieldworkerJobFieldworkerRelationRelationInput>;
  fullName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  user?: Maybe<FieldworkerUserRelationInput>;
};

/** Fieldworker update input from fieldworkerJobFieldworkerRelation */
export type FieldworkerJobFieldworkerRelation_FieldworkerUpdateInput = {
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fieldworkerClockInOutRelation?: Maybe<FieldworkerFieldworkerClockInOutRelationUpdateRelationInput>;
  fieldworkerJobFieldworkerRelation?: Maybe<FieldworkerFieldworkerJobFieldworkerRelationUpdateRelationInput>;
  fullName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  user?: Maybe<FieldworkerUserUpdateRelationInput>;
};

export type FieldworkerKeyFilter = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

/** FieldworkerListResponse output */
export type FieldworkerListResponse = {
  __typename?: 'FieldworkerListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Fieldworker>;
};

/** FieldworkerManyResponse output */
export type FieldworkerManyResponse = {
  __typename?: 'FieldworkerManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<Fieldworker>;
};

/** No longer supported. Use `sort` instead. */
export enum FieldworkerOrderBy {
  ArchivedAsc = 'archived_ASC',
  ArchivedDesc = 'archived_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** Fieldworker subscription payload */
export type FieldworkerPayload = {
  __typename?: 'FieldworkerPayload';
  mutation: MutationType;
  node?: Maybe<Fieldworker>;
  previousValues?: Maybe<Fieldworker>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FieldworkerSort = {
  archived?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  deletedAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fullName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  phoneNumber?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  user?: Maybe<UserSort>;
};

/** Fieldworker subscription filter */
export type FieldworkerSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<FieldworkerFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** Fieldworker update input */
export type FieldworkerUpdateByFilterInput = {
  archived?: Maybe<Array<Maybe<UpdateByFilterDateTimeInput>>>;
  email?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  fullName?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  phoneNumber?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
};

/** Fieldworker update input */
export type FieldworkerUpdateInput = {
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fieldworkerClockInOutRelation?: Maybe<FieldworkerFieldworkerClockInOutRelationUpdateRelationInput>;
  fieldworkerJobFieldworkerRelation?: Maybe<FieldworkerFieldworkerJobFieldworkerRelationUpdateRelationInput>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  phoneNumber?: Maybe<Scalars['String']>;
  user?: Maybe<FieldworkerUserUpdateRelationInput>;
};

/** Fieldworker relation input */
export type FieldworkerUserManyRelationInput = {
  connect?: Maybe<UserKeyFilter>;
};

/** Fieldworker relation input */
export type FieldworkerUserRelationInput = {
  connect?: Maybe<UserKeyFilter>;
  create?: Maybe<Fielworker_UserCreateInput>;
};

/** Fieldworker relation input */
export type FieldworkerUserUpdateRelationInput = {
  connect?: Maybe<UserKeyFilter>;
  create?: Maybe<Fielworker_UserCreateInput>;
  disconnect?: Maybe<UserKeyFilter>;
  reconnect?: Maybe<UserKeyFilter>;
  update?: Maybe<Fielworker_UserUpdateInput>;
};

/** ClockInOut create input from fieldworker */
export type Fieldworker_ClockInOutCreateInput = {
  fieldworker?: Maybe<ClockInOutFieldworkerRelationInput>;
  job?: Maybe<ClockInOutJobRelationInput>;
  type?: Maybe<Scalars['String']>;
};

/** ClockInOut update input from fieldworker */
export type Fieldworker_ClockInOutUpdateInput = {
  data: ClockInOutUpdateInput;
  filter?: Maybe<ClockInOutKeyFilter>;
};

/** JobFieldworker create input from fieldworker */
export type Fieldworker_JobFieldworkerCreateInput = {
  fieldworker?: Maybe<JobFieldworkerFieldworkerRelationInput>;
  job?: Maybe<JobFieldworkerJobRelationInput>;
};

/** JobFieldworker update input from fieldworker */
export type Fieldworker_JobFieldworkerUpdateInput = {
  data: JobFieldworkerUpdateInput;
  filter?: Maybe<JobFieldworkerKeyFilter>;
};

export type Fieldworker_PermissionFilter = {
  AND?: Maybe<Array<Fieldworker_PermissionFilter>>;
  OR?: Maybe<Array<Fieldworker_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  archived?: Maybe<DateTimePredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  deletedAt?: Maybe<IntPredicate>;
  email?: Maybe<StringPredicate>;
  fieldworkerClockInOutRelation?: Maybe<ClockInOut_PermissionRelationFilter>;
  fieldworkerJobFieldworkerRelation?: Maybe<JobFieldworker_PermissionRelationFilter>;
  fullName?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  phoneNumber?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  user?: Maybe<User_PermissionFilter>;
};

/** Users create input from fielworker */
export type Fielworker_UserCreateInput = {
  avatar?: Maybe<UsersAvatarRelationInput>;
  email: Scalars['String'];
  fielworker?: Maybe<UsersFielworkerRelationInput>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<UsersRolesRelationInput>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  typeUser?: Maybe<Scalars['String']>;
};

/** Users update input from fielworker */
export type Fielworker_UserUpdateInput = {
  avatar?: Maybe<UsersAvatarUpdateRelationInput>;
  email?: Maybe<Scalars['String']>;
  fielworker?: Maybe<UsersFielworkerUpdateRelationInput>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<UsersRolesUpdateRelationInput>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  typeUser?: Maybe<Scalars['String']>;
};

export type File = {
  __typename?: 'File';
  _description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  downloadStorageUrl?: Maybe<Scalars['String']>;
  downloadUrl?: Maybe<Scalars['String']>;
  fields?: Maybe<Scalars['JSON']>;
  fileId?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  settings_landingPageImage?: Maybe<SettingListResponse>;
  settings_menuBarLogo?: Maybe<SettingListResponse>;
  shareUrl?: Maybe<Scalars['String']>;
  teamMembers_avatar?: Maybe<TeamMemberListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uploadUrl?: Maybe<Scalars['String']>;
  uploaded?: Maybe<Scalars['Boolean']>;
  users_avatar?: Maybe<UserListResponse>;
};

export type FileSettings_LandingPageImageArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<SettingFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<SettingGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<SettingOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SettingSort>>;
};

export type FileSettings_MenuBarLogoArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<SettingFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<SettingGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<SettingOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SettingSort>>;
};

export type FileTeamMembers_AvatarArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<TeamMemberFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamMemberGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<TeamMemberOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<TeamMemberSort>>;
};

export type FileUsers_AvatarArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<UserFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<UserSort>>;
};

/** Files create input */
export type FileCreateInput = {
  fileId?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  public?: Maybe<Scalars['Boolean']>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarRelationInput>;
  users_avatar?: Maybe<FilesUsers_AvatarRelationInput>;
};

/** Files create many input */
export type FileCreateManyInput = {
  fileId?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  public?: Maybe<Scalars['Boolean']>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarManyRelationInput>;
  users_avatar?: Maybe<FilesUsers_AvatarManyRelationInput>;
};

/** Files delete input */
export type FileDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

/** File Field Attributes */
export type FileFieldTypeAttributes = {
  __typename?: 'FileFieldTypeAttributes';
  expiration?: Maybe<Scalars['Int']>;
  format: Scalars['String'];
  maxSize?: Maybe<Scalars['Int']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']>;
  typeRestrictions?: Maybe<Array<Scalars['String']>>;
};

/** FileFieldsPermissions create input */
export type FileFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  downloadUrl?: Maybe<Scalars['Boolean']>;
  fields?: Maybe<Scalars['Boolean']>;
  fileId?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['Boolean']>;
  mods?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<Scalars['Boolean']>;
  public?: Maybe<Scalars['Boolean']>;
  shareUrl?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  uploadUrl?: Maybe<Scalars['Boolean']>;
  uploaded?: Maybe<Scalars['Boolean']>;
};

export type FileFilter = {
  AND?: Maybe<Array<FileFilter>>;
  OR?: Maybe<Array<FileFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  deletedAt?: Maybe<IntPredicate>;
  downloadUrl?: Maybe<StringPredicate>;
  fileId?: Maybe<StringPredicate>;
  filename?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  provider?: Maybe<StringPredicate>;
  public?: Maybe<BoolPredicate>;
  settings_landingPageImage?: Maybe<SettingRelationFilter>;
  settings_menuBarLogo?: Maybe<SettingRelationFilter>;
  shareUrl?: Maybe<StringPredicate>;
  teamMembers_avatar?: Maybe<TeamMemberRelationFilter>;
  updatedAt?: Maybe<DateTimePredicate>;
  uploadUrl?: Maybe<StringPredicate>;
  uploaded?: Maybe<BoolPredicate>;
  users_avatar?: Maybe<UserRelationFilter>;
};

export type FileGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: FileGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type FileGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  downloadUrl?: Maybe<Array<GroupByField>>;
  fields?: Maybe<Array<GroupByField>>;
  fileId?: Maybe<Array<GroupByField>>;
  filename?: Maybe<Array<GroupByField>>;
  id?: Maybe<Array<GroupByField>>;
  meta?: Maybe<Array<GroupByField>>;
  mods?: Maybe<Array<GroupByField>>;
  provider?: Maybe<Array<GroupByField>>;
  public?: Maybe<Array<GroupByField>>;
  settings_landingPageImage?: Maybe<SettingGroupByQuery>;
  settings_menuBarLogo?: Maybe<SettingGroupByQuery>;
  shareUrl?: Maybe<Array<GroupByField>>;
  teamMembers_avatar?: Maybe<TeamMemberGroupByQuery>;
  updatedAt?: Maybe<Array<GroupByField>>;
  uploadUrl?: Maybe<Array<GroupByField>>;
  uploaded?: Maybe<Array<GroupByField>>;
  users_avatar?: Maybe<UserGroupByQuery>;
};

export type FileKeyFilter = {
  fileId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

/** FileListResponse output */
export type FileListResponse = {
  __typename?: 'FileListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<File>;
};

/** FileManyResponse output */
export type FileManyResponse = {
  __typename?: 'FileManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<File>;
};

/** No longer supported. Use `sort` instead. */
export enum FileOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DownloadUrlAsc = 'downloadUrl_ASC',
  DownloadUrlDesc = 'downloadUrl_DESC',
  FieldsAsc = 'fields_ASC',
  FieldsDesc = 'fields_DESC',
  FileIdAsc = 'fileId_ASC',
  FileIdDesc = 'fileId_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetaAsc = 'meta_ASC',
  MetaDesc = 'meta_DESC',
  ModsAsc = 'mods_ASC',
  ModsDesc = 'mods_DESC',
  ProviderAsc = 'provider_ASC',
  ProviderDesc = 'provider_DESC',
  PublicAsc = 'public_ASC',
  PublicDesc = 'public_DESC',
  ShareUrlAsc = 'shareUrl_ASC',
  ShareUrlDesc = 'shareUrl_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UploadUrlAsc = 'uploadUrl_ASC',
  UploadUrlDesc = 'uploadUrl_DESC',
  UploadedAsc = 'uploaded_ASC',
  UploadedDesc = 'uploaded_DESC',
}

/** Files subscription payload */
export type FilePayload = {
  __typename?: 'FilePayload';
  mutation: MutationType;
  node?: Maybe<File>;
  previousValues?: Maybe<File>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileSort = {
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  deletedAt?: Maybe<SortOrder>;
  downloadUrl?: Maybe<SortOrder>;
  fileId?: Maybe<SortOrder>;
  filename?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  provider?: Maybe<SortOrder>;
  public?: Maybe<SortOrder>;
  shareUrl?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  uploadUrl?: Maybe<SortOrder>;
  uploaded?: Maybe<SortOrder>;
};

/** Files subscription filter */
export type FileSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<FileFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** File Type Format Enum */
export enum FileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE',
}

/** Files update input */
export type FileUpdateByFilterInput = {
  downloadUrl?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  fields?: Maybe<Array<Maybe<UpdateByFilterJsonInput>>>;
  filename?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  meta?: Maybe<Array<Maybe<UpdateByFilterJsonInput>>>;
  mods?: Maybe<Array<Maybe<UpdateByFilterJsonInput>>>;
  provider?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  public?: Maybe<Array<Maybe<UpdateByFilterBooleanSwitchInput>>>;
  shareUrl?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  uploadUrl?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  uploaded?: Maybe<Array<Maybe<UpdateByFilterBooleanSwitchInput>>>;
};

/** Files update input */
export type FileUpdateInput = {
  fileId?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  public?: Maybe<Scalars['Boolean']>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarUpdateRelationInput>;
  users_avatar?: Maybe<FilesUsers_AvatarUpdateRelationInput>;
};

export type FileUploadInfoResponse = {
  __typename?: 'FileUploadInfoResponse';
  apiKey: Scalars['String'];
  path: Scalars['String'];
  policy: Scalars['String'];
  signature: Scalars['String'];
};

export type File_PermissionFilter = {
  AND?: Maybe<Array<File_PermissionFilter>>;
  OR?: Maybe<Array<File_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  deletedAt?: Maybe<IntPredicate>;
  downloadUrl?: Maybe<StringPredicate>;
  fileId?: Maybe<StringPredicate>;
  filename?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  provider?: Maybe<StringPredicate>;
  public?: Maybe<BoolPredicate>;
  settings_landingPageImage?: Maybe<Setting_PermissionRelationFilter>;
  settings_menuBarLogo?: Maybe<Setting_PermissionRelationFilter>;
  shareUrl?: Maybe<StringPredicate>;
  teamMembers_avatar?: Maybe<TeamMember_PermissionRelationFilter>;
  updatedAt?: Maybe<DateTimePredicate>;
  uploadUrl?: Maybe<StringPredicate>;
  uploaded?: Maybe<BoolPredicate>;
  users_avatar?: Maybe<User_PermissionRelationFilter>;
};

/** Files relation input */
export type FilesTeamMembers_AvatarManyRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
};

/** Files relation input */
export type FilesTeamMembers_AvatarRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
};

/** Files relation input */
export type FilesTeamMembers_AvatarUpdateRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
  disconnect?: Maybe<Array<TeamMemberKeyFilter>>;
  reconnect?: Maybe<Array<TeamMemberKeyFilter>>;
  update?: Maybe<Array<Maybe<Avatar_TeamMemberUpdateInput>>>;
};

/** Files relation input */
export type FilesUsers_AvatarManyRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
};

/** Files relation input */
export type FilesUsers_AvatarRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Avatar_UserCreateInput>>>;
};

/** Files relation input */
export type FilesUsers_AvatarUpdateRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Avatar_UserCreateInput>>>;
  disconnect?: Maybe<Array<UserKeyFilter>>;
  reconnect?: Maybe<Array<UserKeyFilter>>;
  update?: Maybe<Array<Maybe<Avatar_UserUpdateInput>>>;
};

export type FloatPredicateHaving = {
  AND?: Maybe<Array<FloatPredicateHaving>>;
  OR?: Maybe<Array<FloatPredicateHaving>>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not_equals?: Maybe<Scalars['Float']>;
  not_in?: Maybe<Array<Scalars['Float']>>;
};

/** FunctionInfo */
export type FunctionInfo = {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']>;
  functionType: FunctionType;
  name: Scalars['String'];
};

/** FunctionInfoFilter */
export type FunctionInfoFilter = {
  description?: Maybe<Scalars['String']>;
  functionType?: Maybe<FunctionType>;
  name?: Maybe<Scalars['String']>;
};

/** FunctionInfoOrderBy */
export enum FunctionInfoOrderBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

/** FunctionListResponse output */
export type FunctionListResponse = {
  __typename?: 'FunctionListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<FunctionInfo>;
};

/** FunctionResolverInfo */
export type FunctionResolverInfo = FunctionInfo & {
  __typename?: 'FunctionResolverInfo';
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']>;
  functionType: FunctionType;
  gqlType: Scalars['String'];
  name: Scalars['String'];
};

/** FunctionTaskInfo */
export type FunctionTaskInfo = FunctionInfo & {
  __typename?: 'FunctionTaskInfo';
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']>;
  functionType: FunctionType;
  name: Scalars['String'];
  scheduleExpression?: Maybe<Scalars['String']>;
};

/** FunctionTriggerInfo */
export type FunctionTriggerInfo = FunctionInfo & {
  __typename?: 'FunctionTriggerInfo';
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']>;
  functionType: FunctionType;
  name: Scalars['String'];
  operation: Scalars['String'];
  tableName: Scalars['String'];
  type: Scalars['String'];
};

/** FunctionType */
export enum FunctionType {
  Resolver = 'resolver',
  Schedule = 'schedule',
  Task = 'task',
  Trigger = 'trigger',
  Webhook = 'webhook',
}

/** FunctionWebhookInfo */
export type FunctionWebhookInfo = FunctionInfo & {
  __typename?: 'FunctionWebhookInfo';
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']>;
  functionType: FunctionType;
  httpMethod: Scalars['String'];
  name: Scalars['String'];
  workspaceFullPath: Scalars['String'];
  workspaceRelativePath: Scalars['String'];
};

/** Geo Field Attributes */
export type GeoFieldTypeAttributes = {
  __typename?: 'GeoFieldTypeAttributes';
  format: Scalars['String'];
  srid?: Maybe<Scalars['Int']>;
};

/** Github connection params */
export type GithubOptions = {
  __typename?: 'GithubOptions';
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
  enabled: Scalars['Boolean'];
};

/** Github connection params input */
export type GithubOptionsInput = {
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
  enabled: Scalars['Boolean'];
};

/** Google connection params */
export type GoogleOptions = {
  __typename?: 'GoogleOptions';
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
  enabled: Scalars['Boolean'];
};

/** Google connection params input */
export type GoogleOptionsInput = {
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
  enabled: Scalars['Boolean'];
};

/** GraphQLCreateFileCustomInput */
export type GraphQlCreateFileCustomInput = {
  fileId?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
};

/** GraphQLCreateFileItemInput */
export type GraphQlCreateFileItemInput = {
  create?: Maybe<GraphQlCreateFileCustomInput>;
};

/** GraphQLFileItemResponse */
export type GraphQlFileItemResponse = {
  __typename?: 'GraphQLFileItemResponse';
  downloadUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type GroupByField = {
  as?: Maybe<Scalars['String']>;
  fn?: Maybe<Array<Maybe<GroupByFieldFunction>>>;
};

export type GroupByFieldFunction = {
  abs?: Maybe<Scalars['Boolean']>;
  aggregate?: Maybe<AggregationFunctionType>;
  ascii?: Maybe<Scalars['Boolean']>;
  bitLength?: Maybe<Scalars['Boolean']>;
  ceil?: Maybe<Scalars['Boolean']>;
  charLength?: Maybe<Scalars['Boolean']>;
  crc32?: Maybe<Scalars['Boolean']>;
  datePart?: Maybe<DatePartFunctionType>;
  distinct?: Maybe<Scalars['Boolean']>;
  floor?: Maybe<Scalars['Boolean']>;
  hex?: Maybe<Scalars['Boolean']>;
  ifNull?: Maybe<Scalars['String']>;
  isNull?: Maybe<Scalars['Boolean']>;
  left?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Boolean']>;
  like?: Maybe<PatternFunctionArguments>;
  locate?: Maybe<LocateFunctionArguments>;
  lower?: Maybe<Scalars['Boolean']>;
  lpad?: Maybe<StringPadFunctionArguments>;
  ltrim?: Maybe<Scalars['Boolean']>;
  mod?: Maybe<Scalars['Int']>;
  notLike?: Maybe<PatternFunctionArguments>;
  nullIf?: Maybe<Scalars['String']>;
  replace?: Maybe<ReplaceFunctionArguments>;
  reverse?: Maybe<Scalars['Boolean']>;
  right?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  rpad?: Maybe<StringPadFunctionArguments>;
  rtrim?: Maybe<Scalars['Boolean']>;
  sign?: Maybe<Scalars['Boolean']>;
  substring?: Maybe<SubstringFunctionArguments>;
  trim?: Maybe<TrimFunctionArguments>;
  truncate?: Maybe<Scalars['Int']>;
  upper?: Maybe<Scalars['Boolean']>;
};

export type GroupByResponse = {
  __typename?: 'GroupByResponse';
  AddressGroup: AddressListResponse;
  ApiTokenGroup: ApiTokenListResponse;
  AuthenticationProfileGroup: AuthenticationProfileListResponse;
  BigInt?: Maybe<Scalars['BigInt']>;
  Boolean?: Maybe<Scalars['Boolean']>;
  CiCdMigrationGroup: CiCdMigrationListResponse;
  ClockInOutGroup: ClockInOutListResponse;
  CustomerGroup: CustomerListResponse;
  Date?: Maybe<Scalars['Date']>;
  DateTime?: Maybe<Scalars['DateTime']>;
  EnvironmentVariableGroup: EnvironmentVariableListResponse;
  FieldworkerGroup: FieldworkerListResponse;
  FileGroup: FileListResponse;
  Float?: Maybe<Scalars['Float']>;
  GroupIds?: Maybe<Array<Scalars['ID']>>;
  ID?: Maybe<Scalars['ID']>;
  Int?: Maybe<Scalars['Int']>;
  JSON?: Maybe<Scalars['JSON']>;
  JobFieldworkerGroup: JobFieldworkerListResponse;
  JobGroup: JobListResponse;
  JobTypeGroup: JobTypeListResponse;
  RoleGroup: RoleListResponse;
  String?: Maybe<Scalars['String']>;
  TeamMemberGroup: TeamMemberListResponse;
  UserGroup: UserListResponse;
};

export type GroupByResponseAddressGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<AddressFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AddressGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AddressOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<AddressSort>>;
};

export type GroupByResponseApiTokenGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<ApiTokenFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ApiTokenGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<ApiTokenOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ApiTokenSort>>;
};

export type GroupByResponseAuthenticationProfileGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<AuthenticationProfileFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AuthenticationProfileGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AuthenticationProfileOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<AuthenticationProfileSort>>;
};

export type GroupByResponseCiCdMigrationGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<CiCdMigrationFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<CiCdMigrationGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<CiCdMigrationOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<CiCdMigrationSort>>;
};

export type GroupByResponseClockInOutGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<ClockInOutFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ClockInOutGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<ClockInOutOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ClockInOutSort>>;
};

export type GroupByResponseCustomerGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<CustomerFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<CustomerGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<CustomerOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<CustomerSort>>;
};

export type GroupByResponseEnvironmentVariableGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<EnvironmentVariableFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<EnvironmentVariableGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<EnvironmentVariableOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<EnvironmentVariableSort>>;
};

export type GroupByResponseFieldworkerGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FieldworkerFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<FieldworkerGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<FieldworkerOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<FieldworkerSort>>;
};

export type GroupByResponseFileGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FileFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<FileGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<FileOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<FileSort>>;
};

export type GroupByResponseJobFieldworkerGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<JobFieldworkerFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<JobFieldworkerGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<JobFieldworkerOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<JobFieldworkerSort>>;
};

export type GroupByResponseJobGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<JobFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<JobGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<JobOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<JobSort>>;
};

export type GroupByResponseJobTypeGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<JobTypeFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<JobTypeGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<JobTypeOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<JobTypeSort>>;
};

export type GroupByResponseRoleGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<RoleFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<RoleSort>>;
};

export type GroupByResponseTeamMemberGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<TeamMemberFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamMemberGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<TeamMemberOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<TeamMemberSort>>;
};

export type GroupByResponseUserGroupArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<UserFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<UserSort>>;
};

export type GroupBySort = {
  alias: Scalars['String'];
  direction: SortOrder;
};

export type GroupIdentifiersGroupByField = {
  as: Scalars['String'];
};

export type Having = {
  AND?: Maybe<Array<Having>>;
  OR?: Maybe<Array<Having>>;
  alias?: Maybe<Scalars['String']>;
  bigint?: Maybe<BigIntPredicateHaving>;
  bool?: Maybe<BoolPredicateHaving>;
  date?: Maybe<DatePredicateHaving>;
  datetime?: Maybe<DateTimePredicateHaving>;
  float?: Maybe<FloatPredicateHaving>;
  id?: Maybe<IdPredicateHaving>;
  int?: Maybe<IntPredicateHaving>;
  string?: Maybe<StringPredicateHaving>;
};

export type IdPredicate = {
  contains?: Maybe<Scalars['ID']>;
  ends_with?: Maybe<Scalars['ID']>;
  equals?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  not_contains?: Maybe<Scalars['ID']>;
  not_ends_with?: Maybe<Scalars['ID']>;
  not_equals?: Maybe<Scalars['ID']>;
  not_in?: Maybe<Array<Scalars['ID']>>;
  not_starts_with?: Maybe<Scalars['ID']>;
  starts_with?: Maybe<Scalars['ID']>;
};

export type IdPredicateHaving = {
  AND?: Maybe<Array<IdPredicateHaving>>;
  OR?: Maybe<Array<IdPredicateHaving>>;
  contains?: Maybe<Scalars['ID']>;
  ends_with?: Maybe<Scalars['ID']>;
  equals?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  not_contains?: Maybe<Scalars['ID']>;
  not_ends_with?: Maybe<Scalars['ID']>;
  not_equals?: Maybe<Scalars['ID']>;
  not_in?: Maybe<Array<Scalars['ID']>>;
  not_starts_with?: Maybe<Scalars['ID']>;
  starts_with?: Maybe<Scalars['ID']>;
};

/** ImportedTable */
export type ImportedTable = {
  __typename?: 'ImportedTable';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Inbox Events List Filter */
export type InboxEventsListFilter = {
  isCompleted?: Maybe<IntPredicate>;
};

/** Table Create Index Input */
export type IndexCreateInput = {
  columns: Array<TableIndexColumnInput>;
  force?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  tableId: Scalars['ID'];
  type: TableIndexType;
};

/** Table Delete Index Input */
export type IndexDeleteInput = {
  id: Scalars['ID'];
};

/** Table Update Index Input */
export type IndexUpdateInput = {
  columns?: Maybe<Array<TableIndexColumnInput>>;
  force?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<TableIndexType>;
};

export type IntPredicate = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not_equals?: Maybe<Scalars['Int']>;
  not_in?: Maybe<Array<Scalars['Int']>>;
};

export type IntPredicateHaving = {
  AND?: Maybe<Array<IntPredicateHaving>>;
  OR?: Maybe<Array<IntPredicateHaving>>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not_equals?: Maybe<Scalars['Int']>;
  not_in?: Maybe<Array<Scalars['Int']>>;
};

export type IntrospectionQueryResponse = {
  __typename?: 'IntrospectionQueryResponse';
  url: Scalars['String'];
};

/** Invited By Name */
export type InvitedByName = {
  __typename?: 'InvitedByName';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  workspaceName?: Maybe<Scalars['String']>;
};

/** InvokeData */
export type InvokeData = {
  functionName: Scalars['String'];
  inputArgs?: Maybe<Scalars['String']>;
};

/** InvokeFunctionResponse */
export type InvokeFunctionResponse = {
  __typename?: 'InvokeFunctionResponse';
  responseData: Scalars['String'];
};

export type Job = {
  __typename?: 'Job';
  _description?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  callID?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  fieldworkerNotes?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  jobClockInOutRelation?: Maybe<ClockInOutListResponse>;
  jobJobFieldWorkerRelation?: Maybe<JobFieldworkerListResponse>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  purchaseOrder?: Maybe<Scalars['String']>;
  sendNotification?: Maybe<Scalars['Boolean']>;
  serial?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<JobType>;
  unitServiced?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  workOrder?: Maybe<Scalars['String']>;
  workPerformed?: Maybe<Scalars['String']>;
};

export type JobJobClockInOutRelationArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<ClockInOutFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ClockInOutGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<ClockInOutOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ClockInOutSort>>;
};

export type JobJobJobFieldWorkerRelationArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<JobFieldworkerFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<JobFieldworkerGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<JobFieldworkerOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<JobFieldworkerSort>>;
};

/** Job relation input */
export type JobAddressManyRelationInput = {
  connect?: Maybe<AddressKeyFilter>;
};

/** Job relation input */
export type JobAddressRelationInput = {
  connect?: Maybe<AddressKeyFilter>;
  create?: Maybe<AddressJobRelation_AddressCreateInput>;
};

/** Job relation input */
export type JobAddressUpdateRelationInput = {
  connect?: Maybe<AddressKeyFilter>;
  create?: Maybe<AddressJobRelation_AddressCreateInput>;
  disconnect?: Maybe<AddressKeyFilter>;
  reconnect?: Maybe<AddressKeyFilter>;
  update?: Maybe<AddressJobRelation_AddressUpdateInput>;
};

/** Job create input from jobClockInOutRelation */
export type JobClockInOutRelation_JobCreateInput = {
  address?: Maybe<JobAddressRelationInput>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  callID?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  fieldworkerNotes?: Maybe<Scalars['String']>;
  jobClockInOutRelation?: Maybe<JobJobClockInOutRelationRelationInput>;
  jobJobFieldWorkerRelation?: Maybe<JobJobJobFieldWorkerRelationRelationInput>;
  model?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  priority?: Maybe<Scalars['String']>;
  purchaseOrder?: Maybe<Scalars['String']>;
  sendNotification?: Maybe<Scalars['Boolean']>;
  serial?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<JobTypeRelationInput>;
  unitServiced?: Maybe<Scalars['String']>;
  workOrder?: Maybe<Scalars['String']>;
  workPerformed?: Maybe<Scalars['String']>;
};

/** Job update input from jobClockInOutRelation */
export type JobClockInOutRelation_JobUpdateInput = {
  address?: Maybe<JobAddressUpdateRelationInput>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  callID?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  fieldworkerNotes?: Maybe<Scalars['String']>;
  jobClockInOutRelation?: Maybe<JobJobClockInOutRelationUpdateRelationInput>;
  jobJobFieldWorkerRelation?: Maybe<JobJobJobFieldWorkerRelationUpdateRelationInput>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  purchaseOrder?: Maybe<Scalars['String']>;
  sendNotification?: Maybe<Scalars['Boolean']>;
  serial?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<JobTypeUpdateRelationInput>;
  unitServiced?: Maybe<Scalars['String']>;
  workOrder?: Maybe<Scalars['String']>;
  workPerformed?: Maybe<Scalars['String']>;
};

/** Job create input */
export type JobCreateInput = {
  address?: Maybe<JobAddressRelationInput>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  callID?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  fieldworkerNotes?: Maybe<Scalars['String']>;
  jobClockInOutRelation?: Maybe<JobJobClockInOutRelationRelationInput>;
  jobJobFieldWorkerRelation?: Maybe<JobJobJobFieldWorkerRelationRelationInput>;
  model?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  priority?: Maybe<Scalars['String']>;
  purchaseOrder?: Maybe<Scalars['String']>;
  sendNotification?: Maybe<Scalars['Boolean']>;
  serial?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<JobTypeRelationInput>;
  unitServiced?: Maybe<Scalars['String']>;
  workOrder?: Maybe<Scalars['String']>;
  workPerformed?: Maybe<Scalars['String']>;
};

/** Job create many input */
export type JobCreateManyInput = {
  address: JobAddressManyRelationInput;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  callID?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  fieldworkerNotes?: Maybe<Scalars['String']>;
  jobClockInOutRelation?: Maybe<JobJobClockInOutRelationManyRelationInput>;
  jobJobFieldWorkerRelation?: Maybe<JobJobJobFieldWorkerRelationManyRelationInput>;
  model?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  priority?: Maybe<Scalars['String']>;
  purchaseOrder?: Maybe<Scalars['String']>;
  sendNotification?: Maybe<Scalars['Boolean']>;
  serial?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<JobTypeManyRelationInput>;
  unitServiced?: Maybe<Scalars['String']>;
  workOrder?: Maybe<Scalars['String']>;
  workPerformed?: Maybe<Scalars['String']>;
};

/** Job delete input */
export type JobDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

/** JobFieldsPermissions create input */
export type JobFieldsPermissions = {
  archived?: Maybe<Scalars['Boolean']>;
  callID?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['Boolean']>;
  endDateTime?: Maybe<Scalars['Boolean']>;
  fieldworkerNotes?: Maybe<Scalars['Boolean']>;
  model?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['Boolean']>;
  priority?: Maybe<Scalars['Boolean']>;
  purchaseOrder?: Maybe<Scalars['Boolean']>;
  sendNotification?: Maybe<Scalars['Boolean']>;
  serial?: Maybe<Scalars['Boolean']>;
  startDateTime?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Boolean']>;
  unitServiced?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  workOrder?: Maybe<Scalars['Boolean']>;
  workPerformed?: Maybe<Scalars['Boolean']>;
};

export type JobFieldworker = {
  __typename?: 'JobFieldworker';
  _description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  fieldworker?: Maybe<Fieldworker>;
  id?: Maybe<Scalars['ID']>;
  job?: Maybe<Job>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** JobFieldworker create input */
export type JobFieldworkerCreateInput = {
  fieldworker?: Maybe<JobFieldworkerFieldworkerRelationInput>;
  job?: Maybe<JobFieldworkerJobRelationInput>;
};

/** JobFieldworker create many input */
export type JobFieldworkerCreateManyInput = {
  fieldworker: JobFieldworkerFieldworkerManyRelationInput;
  job: JobFieldworkerJobManyRelationInput;
};

/** JobFieldworker delete input */
export type JobFieldworkerDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

/** JobFieldworkerFieldsPermissions create input */
export type JobFieldworkerFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
};

/** JobFieldworker relation input */
export type JobFieldworkerFieldworkerManyRelationInput = {
  connect?: Maybe<FieldworkerKeyFilter>;
};

/** JobFieldworker relation input */
export type JobFieldworkerFieldworkerRelationInput = {
  connect?: Maybe<FieldworkerKeyFilter>;
  create?: Maybe<FieldworkerJobFieldworkerRelation_FieldworkerCreateInput>;
};

/** JobFieldworker relation input */
export type JobFieldworkerFieldworkerUpdateRelationInput = {
  connect?: Maybe<FieldworkerKeyFilter>;
  create?: Maybe<FieldworkerJobFieldworkerRelation_FieldworkerCreateInput>;
  disconnect?: Maybe<FieldworkerKeyFilter>;
  reconnect?: Maybe<FieldworkerKeyFilter>;
  update?: Maybe<FieldworkerJobFieldworkerRelation_FieldworkerUpdateInput>;
};

export type JobFieldworkerFilter = {
  AND?: Maybe<Array<JobFieldworkerFilter>>;
  OR?: Maybe<Array<JobFieldworkerFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  deletedAt?: Maybe<IntPredicate>;
  fieldworker?: Maybe<FieldworkerFilter>;
  id?: Maybe<IdPredicate>;
  job?: Maybe<JobFilter>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type JobFieldworkerGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: JobFieldworkerGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type JobFieldworkerGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  fieldworker?: Maybe<FieldworkerGroupByQuery>;
  id?: Maybe<Array<GroupByField>>;
  job?: Maybe<JobGroupByQuery>;
  updatedAt?: Maybe<Array<GroupByField>>;
};

/** JobFieldworker relation input */
export type JobFieldworkerJobManyRelationInput = {
  connect?: Maybe<JobKeyFilter>;
};

/** JobFieldworker relation input */
export type JobFieldworkerJobRelationInput = {
  connect?: Maybe<JobKeyFilter>;
  create?: Maybe<JobJobFieldWorkerRelation_JobCreateInput>;
};

/** JobFieldworker relation input */
export type JobFieldworkerJobUpdateRelationInput = {
  connect?: Maybe<JobKeyFilter>;
  create?: Maybe<JobJobFieldWorkerRelation_JobCreateInput>;
  disconnect?: Maybe<JobKeyFilter>;
  reconnect?: Maybe<JobKeyFilter>;
  update?: Maybe<JobJobFieldWorkerRelation_JobUpdateInput>;
};

export type JobFieldworkerKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

/** JobFieldworkerListResponse output */
export type JobFieldworkerListResponse = {
  __typename?: 'JobFieldworkerListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<JobFieldworker>;
};

/** JobFieldworkerManyResponse output */
export type JobFieldworkerManyResponse = {
  __typename?: 'JobFieldworkerManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<JobFieldworker>;
};

/** No longer supported. Use `sort` instead. */
export enum JobFieldworkerOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** JobFieldworker subscription payload */
export type JobFieldworkerPayload = {
  __typename?: 'JobFieldworkerPayload';
  mutation: MutationType;
  node?: Maybe<JobFieldworker>;
  previousValues?: Maybe<JobFieldworker>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type JobFieldworkerRelationFilter = {
  every?: Maybe<JobFieldworkerFilter>;
  none?: Maybe<JobFieldworkerFilter>;
  some?: Maybe<JobFieldworkerFilter>;
};

export type JobFieldworkerSort = {
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  deletedAt?: Maybe<SortOrder>;
  fieldworker?: Maybe<FieldworkerSort>;
  id?: Maybe<SortOrder>;
  job?: Maybe<JobSort>;
  updatedAt?: Maybe<SortOrder>;
};

/** JobFieldworker subscription filter */
export type JobFieldworkerSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<JobFieldworkerFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** JobFieldworker update input */
export type JobFieldworkerUpdateInput = {
  fieldworker?: Maybe<JobFieldworkerFieldworkerUpdateRelationInput>;
  id?: Maybe<Scalars['ID']>;
  job?: Maybe<JobFieldworkerJobUpdateRelationInput>;
};

export type JobFieldworker_PermissionFilter = {
  AND?: Maybe<Array<JobFieldworker_PermissionFilter>>;
  OR?: Maybe<Array<JobFieldworker_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  deletedAt?: Maybe<IntPredicate>;
  fieldworker?: Maybe<Fieldworker_PermissionFilter>;
  id?: Maybe<IdPredicate>;
  job?: Maybe<Job_PermissionFilter>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type JobFieldworker_PermissionRelationFilter = {
  every?: Maybe<JobFieldworker_PermissionFilter>;
  none?: Maybe<JobFieldworker_PermissionFilter>;
  some?: Maybe<JobFieldworker_PermissionFilter>;
};

export type JobFilter = {
  AND?: Maybe<Array<JobFilter>>;
  OR?: Maybe<Array<JobFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  address?: Maybe<AddressFilter>;
  archived?: Maybe<DateTimePredicate>;
  callID?: Maybe<StringPredicate>;
  code?: Maybe<IntPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  deletedAt?: Maybe<IntPredicate>;
  description?: Maybe<StringPredicate>;
  endDateTime?: Maybe<DateTimePredicate>;
  fieldworkerNotes?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  jobClockInOutRelation?: Maybe<ClockInOutRelationFilter>;
  jobJobFieldWorkerRelation?: Maybe<JobFieldworkerRelationFilter>;
  model?: Maybe<StringPredicate>;
  name?: Maybe<StringPredicate>;
  priority?: Maybe<StringPredicate>;
  purchaseOrder?: Maybe<StringPredicate>;
  sendNotification?: Maybe<BoolPredicate>;
  serial?: Maybe<StringPredicate>;
  startDateTime?: Maybe<DateTimePredicate>;
  status?: Maybe<StringPredicate>;
  type?: Maybe<JobTypeFilter>;
  unitServiced?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  workOrder?: Maybe<StringPredicate>;
  workPerformed?: Maybe<StringPredicate>;
};

export type JobGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: JobGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type JobGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  address?: Maybe<AddressGroupByQuery>;
  archived?: Maybe<Array<GroupByField>>;
  callID?: Maybe<Array<GroupByField>>;
  code?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  description?: Maybe<Array<GroupByField>>;
  endDateTime?: Maybe<Array<GroupByField>>;
  fieldworkerNotes?: Maybe<Array<GroupByField>>;
  id?: Maybe<Array<GroupByField>>;
  jobClockInOutRelation?: Maybe<ClockInOutGroupByQuery>;
  jobJobFieldWorkerRelation?: Maybe<JobFieldworkerGroupByQuery>;
  model?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  priority?: Maybe<Array<GroupByField>>;
  purchaseOrder?: Maybe<Array<GroupByField>>;
  sendNotification?: Maybe<Array<GroupByField>>;
  serial?: Maybe<Array<GroupByField>>;
  startDateTime?: Maybe<Array<GroupByField>>;
  status?: Maybe<Array<GroupByField>>;
  type?: Maybe<JobTypeGroupByQuery>;
  unitServiced?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  workOrder?: Maybe<Array<GroupByField>>;
  workPerformed?: Maybe<Array<GroupByField>>;
};

/** Job relation input */
export type JobJobClockInOutRelationManyRelationInput = {
  connect?: Maybe<Array<ClockInOutKeyFilter>>;
};

/** Job relation input */
export type JobJobClockInOutRelationRelationInput = {
  connect?: Maybe<Array<ClockInOutKeyFilter>>;
  create?: Maybe<Array<Maybe<Job_ClockInOutCreateInput>>>;
};

/** Job relation input */
export type JobJobClockInOutRelationUpdateRelationInput = {
  connect?: Maybe<Array<ClockInOutKeyFilter>>;
  create?: Maybe<Array<Maybe<Job_ClockInOutCreateInput>>>;
  disconnect?: Maybe<Array<ClockInOutKeyFilter>>;
  reconnect?: Maybe<Array<ClockInOutKeyFilter>>;
  update?: Maybe<Array<Maybe<Job_ClockInOutUpdateInput>>>;
};

/** Job create input from jobJobFieldWorkerRelation */
export type JobJobFieldWorkerRelation_JobCreateInput = {
  address?: Maybe<JobAddressRelationInput>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  callID?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  fieldworkerNotes?: Maybe<Scalars['String']>;
  jobClockInOutRelation?: Maybe<JobJobClockInOutRelationRelationInput>;
  jobJobFieldWorkerRelation?: Maybe<JobJobJobFieldWorkerRelationRelationInput>;
  model?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  priority?: Maybe<Scalars['String']>;
  purchaseOrder?: Maybe<Scalars['String']>;
  sendNotification?: Maybe<Scalars['Boolean']>;
  serial?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<JobTypeRelationInput>;
  unitServiced?: Maybe<Scalars['String']>;
  workOrder?: Maybe<Scalars['String']>;
  workPerformed?: Maybe<Scalars['String']>;
};

/** Job update input from jobJobFieldWorkerRelation */
export type JobJobFieldWorkerRelation_JobUpdateInput = {
  address?: Maybe<JobAddressUpdateRelationInput>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  callID?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  fieldworkerNotes?: Maybe<Scalars['String']>;
  jobClockInOutRelation?: Maybe<JobJobClockInOutRelationUpdateRelationInput>;
  jobJobFieldWorkerRelation?: Maybe<JobJobJobFieldWorkerRelationUpdateRelationInput>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  purchaseOrder?: Maybe<Scalars['String']>;
  sendNotification?: Maybe<Scalars['Boolean']>;
  serial?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<JobTypeUpdateRelationInput>;
  unitServiced?: Maybe<Scalars['String']>;
  workOrder?: Maybe<Scalars['String']>;
  workPerformed?: Maybe<Scalars['String']>;
};

/** Job relation input */
export type JobJobJobFieldWorkerRelationManyRelationInput = {
  connect?: Maybe<Array<JobFieldworkerKeyFilter>>;
};

/** Job relation input */
export type JobJobJobFieldWorkerRelationRelationInput = {
  connect?: Maybe<Array<JobFieldworkerKeyFilter>>;
  create?: Maybe<Array<Maybe<Job_JobFieldworkerCreateInput>>>;
};

/** Job relation input */
export type JobJobJobFieldWorkerRelationUpdateRelationInput = {
  connect?: Maybe<Array<JobFieldworkerKeyFilter>>;
  create?: Maybe<Array<Maybe<Job_JobFieldworkerCreateInput>>>;
  disconnect?: Maybe<Array<JobFieldworkerKeyFilter>>;
  reconnect?: Maybe<Array<JobFieldworkerKeyFilter>>;
  update?: Maybe<Array<Maybe<Job_JobFieldworkerUpdateInput>>>;
};

export type JobKeyFilter = {
  code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
};

/** JobListResponse output */
export type JobListResponse = {
  __typename?: 'JobListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Job>;
};

/** JobManyResponse output */
export type JobManyResponse = {
  __typename?: 'JobManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<Job>;
};

/** No longer supported. Use `sort` instead. */
export enum JobOrderBy {
  ArchivedAsc = 'archived_ASC',
  ArchivedDesc = 'archived_DESC',
  CallIdAsc = 'callID_ASC',
  CallIdDesc = 'callID_DESC',
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EndDateTimeAsc = 'endDateTime_ASC',
  EndDateTimeDesc = 'endDateTime_DESC',
  FieldworkerNotesAsc = 'fieldworkerNotes_ASC',
  FieldworkerNotesDesc = 'fieldworkerNotes_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ModelAsc = 'model_ASC',
  ModelDesc = 'model_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  PurchaseOrderAsc = 'purchaseOrder_ASC',
  PurchaseOrderDesc = 'purchaseOrder_DESC',
  SendNotificationAsc = 'sendNotification_ASC',
  SendNotificationDesc = 'sendNotification_DESC',
  SerialAsc = 'serial_ASC',
  SerialDesc = 'serial_DESC',
  StartDateTimeAsc = 'startDateTime_ASC',
  StartDateTimeDesc = 'startDateTime_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UnitServicedAsc = 'unitServiced_ASC',
  UnitServicedDesc = 'unitServiced_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkOrderAsc = 'workOrder_ASC',
  WorkOrderDesc = 'workOrder_DESC',
  WorkPerformedAsc = 'workPerformed_ASC',
  WorkPerformedDesc = 'workPerformed_DESC',
}

/** Job subscription payload */
export type JobPayload = {
  __typename?: 'JobPayload';
  mutation: MutationType;
  node?: Maybe<Job>;
  previousValues?: Maybe<Job>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type JobRelationFilter = {
  every?: Maybe<JobFilter>;
  none?: Maybe<JobFilter>;
  some?: Maybe<JobFilter>;
};

export type JobSort = {
  address?: Maybe<AddressSort>;
  archived?: Maybe<SortOrder>;
  callID?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  deletedAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  endDateTime?: Maybe<SortOrder>;
  fieldworkerNotes?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  model?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  priority?: Maybe<SortOrder>;
  purchaseOrder?: Maybe<SortOrder>;
  sendNotification?: Maybe<SortOrder>;
  serial?: Maybe<SortOrder>;
  startDateTime?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  type?: Maybe<JobTypeSort>;
  unitServiced?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  workOrder?: Maybe<SortOrder>;
  workPerformed?: Maybe<SortOrder>;
};

/** Job subscription filter */
export type JobSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<JobFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type JobType = {
  __typename?: 'JobType';
  _description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  typeJobRelation?: Maybe<JobListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobTypeTypeJobRelationArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<JobFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<JobGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<JobOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<JobSort>>;
};

/** JobType create input */
export type JobTypeCreateInput = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  typeJobRelation?: Maybe<JobTypeTypeJobRelationRelationInput>;
};

/** JobType create many input */
export type JobTypeCreateManyInput = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  typeJobRelation?: Maybe<JobTypeTypeJobRelationManyRelationInput>;
};

/** JobType delete input */
export type JobTypeDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

/** JobTypeFieldsPermissions create input */
export type JobTypeFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
};

export type JobTypeFilter = {
  AND?: Maybe<Array<JobTypeFilter>>;
  OR?: Maybe<Array<JobTypeFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  deletedAt?: Maybe<IntPredicate>;
  description?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  name?: Maybe<StringPredicate>;
  typeJobRelation?: Maybe<JobRelationFilter>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type JobTypeGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: JobTypeGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type JobTypeGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  description?: Maybe<Array<GroupByField>>;
  id?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  typeJobRelation?: Maybe<JobGroupByQuery>;
  updatedAt?: Maybe<Array<GroupByField>>;
};

export type JobTypeKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

/** JobTypeListResponse output */
export type JobTypeListResponse = {
  __typename?: 'JobTypeListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<JobType>;
};

/** Job relation input */
export type JobTypeManyRelationInput = {
  connect?: Maybe<JobTypeKeyFilter>;
};

/** JobTypeManyResponse output */
export type JobTypeManyResponse = {
  __typename?: 'JobTypeManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<JobType>;
};

/** No longer supported. Use `sort` instead. */
export enum JobTypeOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** JobType subscription payload */
export type JobTypePayload = {
  __typename?: 'JobTypePayload';
  mutation: MutationType;
  node?: Maybe<JobType>;
  previousValues?: Maybe<JobType>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Job relation input */
export type JobTypeRelationInput = {
  connect?: Maybe<JobTypeKeyFilter>;
  create?: Maybe<TypeJobRelation_JobTypeCreateInput>;
};

export type JobTypeSort = {
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  deletedAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

/** JobType subscription filter */
export type JobTypeSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<JobTypeFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** JobType relation input */
export type JobTypeTypeJobRelationManyRelationInput = {
  connect?: Maybe<Array<JobKeyFilter>>;
};

/** JobType relation input */
export type JobTypeTypeJobRelationRelationInput = {
  connect?: Maybe<Array<JobKeyFilter>>;
  create?: Maybe<Array<Maybe<Type_JobCreateInput>>>;
};

/** JobType relation input */
export type JobTypeTypeJobRelationUpdateRelationInput = {
  connect?: Maybe<Array<JobKeyFilter>>;
  create?: Maybe<Array<Maybe<Type_JobCreateInput>>>;
  disconnect?: Maybe<Array<JobKeyFilter>>;
  reconnect?: Maybe<Array<JobKeyFilter>>;
  update?: Maybe<Array<Maybe<Type_JobUpdateInput>>>;
};

/** JobType update input */
export type JobTypeUpdateByFilterInput = {
  description?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  name?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
};

/** JobType update input */
export type JobTypeUpdateInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  typeJobRelation?: Maybe<JobTypeTypeJobRelationUpdateRelationInput>;
};

/** Job relation input */
export type JobTypeUpdateRelationInput = {
  connect?: Maybe<JobTypeKeyFilter>;
  create?: Maybe<TypeJobRelation_JobTypeCreateInput>;
  disconnect?: Maybe<JobTypeKeyFilter>;
  reconnect?: Maybe<JobTypeKeyFilter>;
  update?: Maybe<TypeJobRelation_JobTypeUpdateInput>;
};

export type JobType_PermissionFilter = {
  AND?: Maybe<Array<JobType_PermissionFilter>>;
  OR?: Maybe<Array<JobType_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  deletedAt?: Maybe<IntPredicate>;
  description?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  name?: Maybe<StringPredicate>;
  typeJobRelation?: Maybe<Job_PermissionRelationFilter>;
  updatedAt?: Maybe<DateTimePredicate>;
};

/** Job update input */
export type JobUpdateByFilterInput = {
  archived?: Maybe<Array<Maybe<UpdateByFilterDateTimeInput>>>;
  callID?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  code?: Maybe<Array<Maybe<UpdateByFilterIntInput>>>;
  description?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  endDateTime?: Maybe<Array<Maybe<UpdateByFilterDateTimeInput>>>;
  fieldworkerNotes?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  model?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  name?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  priority?: Maybe<Array<Maybe<UpdateByFilterStringSwitchInput>>>;
  purchaseOrder?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  sendNotification?: Maybe<Array<Maybe<UpdateByFilterBooleanSwitchInput>>>;
  serial?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  startDateTime?: Maybe<Array<Maybe<UpdateByFilterDateTimeInput>>>;
  status?: Maybe<Array<Maybe<UpdateByFilterStringSwitchInput>>>;
  unitServiced?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  workOrder?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  workPerformed?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
};

/** Job update input */
export type JobUpdateInput = {
  address?: Maybe<JobAddressUpdateRelationInput>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  callID?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  fieldworkerNotes?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  jobClockInOutRelation?: Maybe<JobJobClockInOutRelationUpdateRelationInput>;
  jobJobFieldWorkerRelation?: Maybe<JobJobJobFieldWorkerRelationUpdateRelationInput>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  purchaseOrder?: Maybe<Scalars['String']>;
  sendNotification?: Maybe<Scalars['Boolean']>;
  serial?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<JobTypeUpdateRelationInput>;
  unitServiced?: Maybe<Scalars['String']>;
  workOrder?: Maybe<Scalars['String']>;
  workPerformed?: Maybe<Scalars['String']>;
};

/** ClockInOut create input from job */
export type Job_ClockInOutCreateInput = {
  fieldworker: ClockInOutFieldworkerRelationInput;
  job?: Maybe<ClockInOutJobRelationInput>;
  type?: Maybe<Scalars['String']>;
};

/** ClockInOut update input from job */
export type Job_ClockInOutUpdateInput = {
  data: ClockInOutUpdateInput;
  filter?: Maybe<ClockInOutKeyFilter>;
};

/** JobFieldworker create input from job */
export type Job_JobFieldworkerCreateInput = {
  fieldworker: JobFieldworkerFieldworkerRelationInput;
  job?: Maybe<JobFieldworkerJobRelationInput>;
};

/** JobFieldworker update input from job */
export type Job_JobFieldworkerUpdateInput = {
  data: JobFieldworkerUpdateInput;
  filter?: Maybe<JobFieldworkerKeyFilter>;
};

export type Job_PermissionFilter = {
  AND?: Maybe<Array<Job_PermissionFilter>>;
  OR?: Maybe<Array<Job_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  address?: Maybe<Address_PermissionFilter>;
  archived?: Maybe<DateTimePredicate>;
  callID?: Maybe<StringPredicate>;
  code?: Maybe<IntPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  deletedAt?: Maybe<IntPredicate>;
  description?: Maybe<StringPredicate>;
  endDateTime?: Maybe<DateTimePredicate>;
  fieldworkerNotes?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  jobClockInOutRelation?: Maybe<ClockInOut_PermissionRelationFilter>;
  jobJobFieldWorkerRelation?: Maybe<JobFieldworker_PermissionRelationFilter>;
  model?: Maybe<StringPredicate>;
  name?: Maybe<StringPredicate>;
  priority?: Maybe<StringPredicate>;
  purchaseOrder?: Maybe<StringPredicate>;
  sendNotification?: Maybe<BoolPredicate>;
  serial?: Maybe<StringPredicate>;
  startDateTime?: Maybe<DateTimePredicate>;
  status?: Maybe<StringPredicate>;
  type?: Maybe<JobType_PermissionFilter>;
  unitServiced?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  workOrder?: Maybe<StringPredicate>;
  workPerformed?: Maybe<StringPredicate>;
};

export type Job_PermissionRelationFilter = {
  every?: Maybe<Job_PermissionFilter>;
  none?: Maybe<Job_PermissionFilter>;
  some?: Maybe<Job_PermissionFilter>;
};

export type LocateFunctionArguments = {
  pos?: Maybe<Scalars['Int']>;
  str: Scalars['String'];
};

/** LoginResponse */
export type LoginResponse = {
  __typename?: 'LoginResponse';
  auth?: Maybe<Auth>;
  success?: Maybe<Scalars['Boolean']>;
  workspaces?: Maybe<Array<WorkspaceInfo>>;
};

/** MissingRelation */
export type MissingRelation = {
  __typename?: 'MissingRelation';
  table: Scalars['String'];
};

/** MissingRelation Field Attributes */
export type MissingRelationFieldTypeAttributes = {
  __typename?: 'MissingRelationFieldTypeAttributes';
  missingTable: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addressCreate: Address;
  addressCreateMany: AddressManyResponse;
  addressDelete?: Maybe<SuccessResponse>;
  addressDeleteByFilter?: Maybe<SuccessResponse>;
  addressDestroy?: Maybe<SuccessResponse>;
  addressDestroyByFilter?: Maybe<SuccessResponse>;
  addressRestore: Address;
  addressUpdate: Address;
  addressUpdateByFilter: AddressManyResponse;
  apiTokenCreate: ApiTokenResponse;
  apiTokenDelete?: Maybe<SuccessResponse>;
  apiTokenDeleteByFilter?: Maybe<SuccessResponse>;
  apiTokenDestroy?: Maybe<SuccessResponse>;
  apiTokenDestroyByFilter?: Maybe<SuccessResponse>;
  apiTokenRestore: ApiToken;
  apiTokenUpdate: ApiToken;
  apiTokenUpdateByFilter: ApiTokenManyResponse;
  /** @deprecated No longer supported. Use `system.applicationDelete` instead. */
  applicationDelete?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.applicationInstall` instead. */
  applicationInstall?: Maybe<Application>;
  /** @deprecated No longer supported. Use `system.applicationUpdate` instead. */
  applicationUpdate?: Maybe<Application>;
  authenticationProfileCreate: AuthenticationProfile;
  authenticationProfileCreateMany: AuthenticationProfileManyResponse;
  authenticationProfileDelete?: Maybe<SuccessResponse>;
  authenticationProfileDeleteByFilter?: Maybe<SuccessResponse>;
  authenticationProfileDestroy?: Maybe<SuccessResponse>;
  authenticationProfileDestroyByFilter?: Maybe<SuccessResponse>;
  authenticationProfileRestore: AuthenticationProfile;
  authenticationProfileUpdate: AuthenticationProfile;
  authenticationProfileUpdateByFilter: AuthenticationProfileManyResponse;
  authenticationSettingsUpdate: AuthenticationSetting;
  /** @deprecated No longer supported. Use `system.memberPaymentDetailsUpdate, system.organizationPaymentDetailsUpdate or system.workspacePaymentDetailsUpdate` instead. */
  billingDetailsUpdate?: Maybe<BillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.billingPlanUpdate` instead. */
  billingPlanUpdate?: Maybe<BillingCurrentPlanResponse>;
  ciCdMigrationCreate: CiCdMigration;
  ciCdMigrationCreateMany: CiCdMigrationManyResponse;
  ciCdMigrationDelete?: Maybe<SuccessResponse>;
  ciCdMigrationDeleteByFilter?: Maybe<SuccessResponse>;
  ciCdMigrationDestroy?: Maybe<SuccessResponse>;
  ciCdMigrationDestroyByFilter?: Maybe<SuccessResponse>;
  ciCdMigrationRestore: CiCdMigration;
  ciCdMigrationUpdate: CiCdMigration;
  ciCdMigrationUpdateByFilter: CiCdMigrationManyResponse;
  clockInOutCreate: ClockInOut;
  clockInOutCreateMany: ClockInOutManyResponse;
  clockInOutDelete?: Maybe<SuccessResponse>;
  clockInOutDeleteByFilter?: Maybe<SuccessResponse>;
  clockInOutDestroy?: Maybe<SuccessResponse>;
  clockInOutDestroyByFilter?: Maybe<SuccessResponse>;
  clockInOutRestore: ClockInOut;
  clockInOutUpdate: ClockInOut;
  clockInOutUpdateByFilter: ClockInOutManyResponse;
  customerCreate: Customer;
  customerCreateMany: CustomerManyResponse;
  customerDelete?: Maybe<SuccessResponse>;
  customerDeleteByFilter?: Maybe<SuccessResponse>;
  customerDestroy?: Maybe<SuccessResponse>;
  customerDestroyByFilter?: Maybe<SuccessResponse>;
  customerRestore: Customer;
  customerUpdate: Customer;
  customerUpdateByFilter: CustomerManyResponse;
  /** @deprecated No longer supported. Use `system.deploy` instead. */
  deploy?: Maybe<Scalars['Boolean']>;
  environmentVariableCreate: EnvironmentVariable;
  environmentVariableCreateMany: EnvironmentVariableManyResponse;
  environmentVariableDelete?: Maybe<SuccessResponse>;
  environmentVariableDeleteByFilter?: Maybe<SuccessResponse>;
  environmentVariableDestroy?: Maybe<SuccessResponse>;
  environmentVariableDestroyByFilter?: Maybe<SuccessResponse>;
  environmentVariableRestore: EnvironmentVariable;
  environmentVariableUpdate: EnvironmentVariable;
  environmentVariableUpdateByFilter: EnvironmentVariableManyResponse;
  /** @deprecated No longer supported. Use `system.fieldCreate` instead. */
  fieldCreate: TableField;
  /** @deprecated No longer supported. Use `system.fieldDelete` instead. */
  fieldDelete: SuccessResponse;
  /** @deprecated No longer supported. Use `system.fieldUpdate` instead. */
  fieldUpdate: TableField;
  /** @deprecated No longer supported. Use `system.fieldUpdatePosition` instead. */
  fieldUpdatePosition: SuccessResponse;
  fieldworkerCreate: Fieldworker;
  fieldworkerCreateMany: FieldworkerManyResponse;
  fieldworkerDelete?: Maybe<SuccessResponse>;
  fieldworkerDeleteByFilter?: Maybe<SuccessResponse>;
  fieldworkerDestroy?: Maybe<SuccessResponse>;
  fieldworkerDestroyByFilter?: Maybe<SuccessResponse>;
  fieldworkerRestore: Fieldworker;
  fieldworkerUpdate: Fieldworker;
  fieldworkerUpdateByFilter: FieldworkerManyResponse;
  fileCreate: File;
  fileCreateMany: FileManyResponse;
  fileDelete?: Maybe<SuccessResponse>;
  fileDeleteByFilter?: Maybe<SuccessResponse>;
  fileDestroy?: Maybe<SuccessResponse>;
  fileDestroyByFilter?: Maybe<SuccessResponse>;
  fileRestore: File;
  fileUpdate: File;
  fileUpdateByFilter: FileManyResponse;
  indexCreate: TableIndex;
  indexDelete?: Maybe<SuccessResponse>;
  indexUpdate: TableIndex;
  /** @deprecated No longer supported. Use `system.invoke` instead. */
  invoke?: Maybe<InvokeFunctionResponse>;
  jobCreate: Job;
  jobCreateMany: JobManyResponse;
  jobDelete?: Maybe<SuccessResponse>;
  jobDeleteByFilter?: Maybe<SuccessResponse>;
  jobDestroy?: Maybe<SuccessResponse>;
  jobDestroyByFilter?: Maybe<SuccessResponse>;
  jobFieldworkerCreate: JobFieldworker;
  jobFieldworkerCreateMany: JobFieldworkerManyResponse;
  jobFieldworkerDelete?: Maybe<SuccessResponse>;
  jobFieldworkerDeleteByFilter?: Maybe<SuccessResponse>;
  jobFieldworkerDestroy?: Maybe<SuccessResponse>;
  jobFieldworkerDestroyByFilter?: Maybe<SuccessResponse>;
  jobFieldworkerRestore: JobFieldworker;
  jobFieldworkerUpdate: JobFieldworker;
  jobRestore: Job;
  jobTypeCreate: JobType;
  jobTypeCreateMany: JobTypeManyResponse;
  jobTypeDelete?: Maybe<SuccessResponse>;
  jobTypeDeleteByFilter?: Maybe<SuccessResponse>;
  jobTypeDestroy?: Maybe<SuccessResponse>;
  jobTypeDestroyByFilter?: Maybe<SuccessResponse>;
  jobTypeRestore: JobType;
  jobTypeUpdate: JobType;
  jobTypeUpdateByFilter: JobTypeManyResponse;
  jobUpdate: Job;
  jobUpdateByFilter: JobManyResponse;
  /** @deprecated No longer supported. Use `system.prepareDeploy` instead. */
  prepareDeploy: DeployDataResponse;
  resetPassword?: Maybe<ResetPasswordResponse>;
  roleCreate: Role;
  roleCreateMany: RoleManyResponse;
  roleDelete?: Maybe<SuccessResponse>;
  roleDeleteByFilter?: Maybe<SuccessResponse>;
  roleDestroy?: Maybe<SuccessResponse>;
  roleDestroyByFilter?: Maybe<SuccessResponse>;
  roleRestore: Role;
  roleUpdate: Role;
  roleUpdateByFilter: RoleManyResponse;
  sendInvitationTo8base?: Maybe<SuccessResponse>;
  settingsUpdate: Setting;
  system?: Maybe<SystemMutation>;
  /** @deprecated No longer supported. Use `system.tableCreate` instead. */
  tableCreate: Table;
  /** @deprecated No longer supported. Use `system.tableDelete` instead. */
  tableDelete: SuccessResponse;
  /** @deprecated No longer supported. Use `system.tableUpdate` instead. */
  tableUpdate: Table;
  teamMemberDelete?: Maybe<SuccessResponse>;
  teamMemberDeleteByFilter?: Maybe<SuccessResponse>;
  teamMemberDestroy?: Maybe<SuccessResponse>;
  teamMemberDestroyByFilter?: Maybe<SuccessResponse>;
  teamMemberRestore: TeamMember;
  teamMemberUpdate: TeamMember;
  teamMemberUpdateByFilter: TeamMemberManyResponse;
  userChangePassword?: Maybe<SuccessResponse>;
  userCreate: User;
  userCreateMany: UserManyResponse;
  userDelete?: Maybe<SuccessResponse>;
  userDeleteByFilter?: Maybe<SuccessResponse>;
  userDestroy?: Maybe<SuccessResponse>;
  userDestroyByFilter?: Maybe<SuccessResponse>;
  userLogin?: Maybe<LoginResponse>;
  userPasswordForgot?: Maybe<SuccessResponse>;
  userPasswordForgotConfirm?: Maybe<SuccessResponse>;
  userRefreshToken?: Maybe<Auth>;
  userRestore: User;
  /** @deprecated No longer supported. Use `userSignUpWithToken` instead. */
  userSignUp: User;
  /** @deprecated No longer supported. Use `userVerificationEmailResend` instead. */
  userSignUpResend?: Maybe<SuccessResponse>;
  userSignUpWithPassword: User;
  userSignUpWithToken: User;
  userUpdate: User;
  userUpdateByFilter: UserManyResponse;
  userVerificationEmailResend?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.viewCreate` instead. */
  viewCreate: Table;
  viewUpdate: Table;
  /** @deprecated No longer supported. Use `system.workspaceCreate` instead. */
  workspaceCreate?: Maybe<WorkspaceCreateResponse>;
  /** @deprecated No longer supported. Use `system.workspaceCreateAsync` instead. */
  workspaceCreateAsync?: Maybe<WorkspaceCreateResponse>;
  /** @deprecated No longer supported. Use `system.workspaceDelete` instead. */
  workspaceDelete?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.workspaceLeave` instead. */
  workspaceLeave?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.workspaceUpdate` instead. */
  workspaceUpdate?: Maybe<WorkspaceUpdateResponse>;
};

export type MutationAddressCreateArgs = {
  data: AddressCreateInput;
};

export type MutationAddressCreateManyArgs = {
  data: Array<Maybe<AddressCreateManyInput>>;
};

export type MutationAddressDeleteArgs = {
  data?: Maybe<AddressDeleteInput>;
  filter?: Maybe<AddressKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationAddressDeleteByFilterArgs = {
  filter: AddressFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationAddressDestroyArgs = {
  filter?: Maybe<AddressKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationAddressDestroyByFilterArgs = {
  filter: AddressFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationAddressRestoreArgs = {
  id: Scalars['String'];
};

export type MutationAddressUpdateArgs = {
  data: AddressUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<AddressKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationAddressUpdateByFilterArgs = {
  data: AddressUpdateByFilterInput;
  filter?: Maybe<AddressFilter>;
};

export type MutationApiTokenCreateArgs = {
  data: ApiTokenCreateInput;
};

export type MutationApiTokenDeleteArgs = {
  data?: Maybe<ApiTokenDeleteInput>;
  filter?: Maybe<ApiTokenKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationApiTokenDeleteByFilterArgs = {
  filter: ApiTokenFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationApiTokenDestroyArgs = {
  filter?: Maybe<ApiTokenKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationApiTokenDestroyByFilterArgs = {
  filter: ApiTokenFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationApiTokenRestoreArgs = {
  id: Scalars['String'];
};

export type MutationApiTokenUpdateArgs = {
  data: ApiTokenUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<ApiTokenKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationApiTokenUpdateByFilterArgs = {
  data: ApiTokenUpdateByFilterInput;
  filter?: Maybe<ApiTokenFilter>;
};

export type MutationApplicationDeleteArgs = {
  data: ApplicationDeleteMutationInput;
};

export type MutationApplicationInstallArgs = {
  data: ApplicationInstallInput;
};

export type MutationApplicationUpdateArgs = {
  data: ApplicationUpdateInput;
};

export type MutationAuthenticationProfileCreateArgs = {
  data: AuthenticationProfileCreateInput;
};

export type MutationAuthenticationProfileCreateManyArgs = {
  data: Array<Maybe<AuthenticationProfileCreateManyInput>>;
};

export type MutationAuthenticationProfileDeleteArgs = {
  data?: Maybe<AuthenticationProfileDeleteInput>;
  filter?: Maybe<AuthenticationProfileKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationAuthenticationProfileDeleteByFilterArgs = {
  filter: AuthenticationProfileFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationAuthenticationProfileDestroyArgs = {
  filter?: Maybe<AuthenticationProfileKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationAuthenticationProfileDestroyByFilterArgs = {
  filter: AuthenticationProfileFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationAuthenticationProfileRestoreArgs = {
  id: Scalars['String'];
};

export type MutationAuthenticationProfileUpdateArgs = {
  data: AuthenticationProfileUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<AuthenticationProfileKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationAuthenticationProfileUpdateByFilterArgs = {
  data: AuthenticationProfileUpdateByFilterInput;
  filter?: Maybe<AuthenticationProfileFilter>;
};

export type MutationAuthenticationSettingsUpdateArgs = {
  data: AuthenticationSettingUpdateInput;
};

export type MutationBillingDetailsUpdateArgs = {
  data: BillingDetailsUpdateMutationInput;
};

export type MutationBillingPlanUpdateArgs = {
  data: BillingPlanUpdateMutationInput;
};

export type MutationCiCdMigrationCreateArgs = {
  data: CiCdMigrationCreateInput;
};

export type MutationCiCdMigrationCreateManyArgs = {
  data: Array<Maybe<CiCdMigrationCreateManyInput>>;
};

export type MutationCiCdMigrationDeleteArgs = {
  data?: Maybe<CiCdMigrationDeleteInput>;
  filter?: Maybe<CiCdMigrationKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationCiCdMigrationDeleteByFilterArgs = {
  filter: CiCdMigrationFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationCiCdMigrationDestroyArgs = {
  filter?: Maybe<CiCdMigrationKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationCiCdMigrationDestroyByFilterArgs = {
  filter: CiCdMigrationFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationCiCdMigrationRestoreArgs = {
  id: Scalars['String'];
};

export type MutationCiCdMigrationUpdateArgs = {
  data: CiCdMigrationUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<CiCdMigrationKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationCiCdMigrationUpdateByFilterArgs = {
  data: CiCdMigrationUpdateByFilterInput;
  filter?: Maybe<CiCdMigrationFilter>;
};

export type MutationClockInOutCreateArgs = {
  data: ClockInOutCreateInput;
};

export type MutationClockInOutCreateManyArgs = {
  data: Array<Maybe<ClockInOutCreateManyInput>>;
};

export type MutationClockInOutDeleteArgs = {
  data?: Maybe<ClockInOutDeleteInput>;
  filter?: Maybe<ClockInOutKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationClockInOutDeleteByFilterArgs = {
  filter: ClockInOutFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationClockInOutDestroyArgs = {
  filter?: Maybe<ClockInOutKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationClockInOutDestroyByFilterArgs = {
  filter: ClockInOutFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationClockInOutRestoreArgs = {
  id: Scalars['String'];
};

export type MutationClockInOutUpdateArgs = {
  data: ClockInOutUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<ClockInOutKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationClockInOutUpdateByFilterArgs = {
  data: ClockInOutUpdateByFilterInput;
  filter?: Maybe<ClockInOutFilter>;
};

export type MutationCustomerCreateArgs = {
  data: CustomerCreateInput;
};

export type MutationCustomerCreateManyArgs = {
  data: Array<Maybe<CustomerCreateManyInput>>;
};

export type MutationCustomerDeleteArgs = {
  data?: Maybe<CustomerDeleteInput>;
  filter?: Maybe<CustomerKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationCustomerDeleteByFilterArgs = {
  filter: CustomerFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationCustomerDestroyArgs = {
  filter?: Maybe<CustomerKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationCustomerDestroyByFilterArgs = {
  filter: CustomerFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationCustomerRestoreArgs = {
  id: Scalars['String'];
};

export type MutationCustomerUpdateArgs = {
  data: CustomerUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<CustomerKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationCustomerUpdateByFilterArgs = {
  data: CustomerUpdateByFilterInput;
  filter?: Maybe<CustomerFilter>;
};

export type MutationDeployArgs = {
  data?: Maybe<DeployingBuildInput>;
};

export type MutationEnvironmentVariableCreateArgs = {
  data: EnvironmentVariableCreateInput;
};

export type MutationEnvironmentVariableCreateManyArgs = {
  data: Array<Maybe<EnvironmentVariableCreateManyInput>>;
};

export type MutationEnvironmentVariableDeleteArgs = {
  data?: Maybe<EnvironmentVariableDeleteInput>;
  filter?: Maybe<EnvironmentVariableKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationEnvironmentVariableDeleteByFilterArgs = {
  filter: EnvironmentVariableFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationEnvironmentVariableDestroyArgs = {
  filter?: Maybe<EnvironmentVariableKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationEnvironmentVariableDestroyByFilterArgs = {
  filter: EnvironmentVariableFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationEnvironmentVariableRestoreArgs = {
  id: Scalars['String'];
};

export type MutationEnvironmentVariableUpdateArgs = {
  data: EnvironmentVariableUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<EnvironmentVariableKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationEnvironmentVariableUpdateByFilterArgs = {
  data: EnvironmentVariableUpdateByFilterInput;
  filter?: Maybe<EnvironmentVariableFilter>;
};

export type MutationFieldCreateArgs = {
  data: TableFieldCreateInput;
};

export type MutationFieldDeleteArgs = {
  data: TableFieldDeleteInput;
};

export type MutationFieldUpdateArgs = {
  data: TableFieldUpdateInput;
};

export type MutationFieldUpdatePositionArgs = {
  data: TableFieldPositionUpdateInput;
};

export type MutationFieldworkerCreateArgs = {
  data: FieldworkerCreateInput;
};

export type MutationFieldworkerCreateManyArgs = {
  data: Array<Maybe<FieldworkerCreateManyInput>>;
};

export type MutationFieldworkerDeleteArgs = {
  data?: Maybe<FieldworkerDeleteInput>;
  filter?: Maybe<FieldworkerKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationFieldworkerDeleteByFilterArgs = {
  filter: FieldworkerFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationFieldworkerDestroyArgs = {
  filter?: Maybe<FieldworkerKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationFieldworkerDestroyByFilterArgs = {
  filter: FieldworkerFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationFieldworkerRestoreArgs = {
  id: Scalars['String'];
};

export type MutationFieldworkerUpdateArgs = {
  data: FieldworkerUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<FieldworkerKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationFieldworkerUpdateByFilterArgs = {
  data: FieldworkerUpdateByFilterInput;
  filter?: Maybe<FieldworkerFilter>;
};

export type MutationFileCreateArgs = {
  data: FileCreateInput;
};

export type MutationFileCreateManyArgs = {
  data: Array<Maybe<FileCreateManyInput>>;
};

export type MutationFileDeleteArgs = {
  data?: Maybe<FileDeleteInput>;
  filter?: Maybe<FileKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationFileDeleteByFilterArgs = {
  filter: FileFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationFileDestroyArgs = {
  filter?: Maybe<FileKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationFileDestroyByFilterArgs = {
  filter: FileFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationFileRestoreArgs = {
  id: Scalars['String'];
};

export type MutationFileUpdateArgs = {
  data: FileUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<FileKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationFileUpdateByFilterArgs = {
  data: FileUpdateByFilterInput;
  filter?: Maybe<FileFilter>;
};

export type MutationIndexCreateArgs = {
  data: IndexCreateInput;
};

export type MutationIndexDeleteArgs = {
  data: IndexDeleteInput;
};

export type MutationIndexUpdateArgs = {
  data: IndexUpdateInput;
};

export type MutationInvokeArgs = {
  data?: Maybe<InvokeData>;
};

export type MutationJobCreateArgs = {
  data: JobCreateInput;
};

export type MutationJobCreateManyArgs = {
  data: Array<Maybe<JobCreateManyInput>>;
};

export type MutationJobDeleteArgs = {
  data?: Maybe<JobDeleteInput>;
  filter?: Maybe<JobKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobDeleteByFilterArgs = {
  filter: JobFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobDestroyArgs = {
  filter?: Maybe<JobKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobDestroyByFilterArgs = {
  filter: JobFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobFieldworkerCreateArgs = {
  data: JobFieldworkerCreateInput;
};

export type MutationJobFieldworkerCreateManyArgs = {
  data: Array<Maybe<JobFieldworkerCreateManyInput>>;
};

export type MutationJobFieldworkerDeleteArgs = {
  data?: Maybe<JobFieldworkerDeleteInput>;
  filter?: Maybe<JobFieldworkerKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobFieldworkerDeleteByFilterArgs = {
  filter: JobFieldworkerFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobFieldworkerDestroyArgs = {
  filter?: Maybe<JobFieldworkerKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobFieldworkerDestroyByFilterArgs = {
  filter: JobFieldworkerFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobFieldworkerRestoreArgs = {
  id: Scalars['String'];
};

export type MutationJobFieldworkerUpdateArgs = {
  data: JobFieldworkerUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<JobFieldworkerKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobRestoreArgs = {
  id: Scalars['String'];
};

export type MutationJobTypeCreateArgs = {
  data: JobTypeCreateInput;
};

export type MutationJobTypeCreateManyArgs = {
  data: Array<Maybe<JobTypeCreateManyInput>>;
};

export type MutationJobTypeDeleteArgs = {
  data?: Maybe<JobTypeDeleteInput>;
  filter?: Maybe<JobTypeKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobTypeDeleteByFilterArgs = {
  filter: JobTypeFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobTypeDestroyArgs = {
  filter?: Maybe<JobTypeKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobTypeDestroyByFilterArgs = {
  filter: JobTypeFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobTypeRestoreArgs = {
  id: Scalars['String'];
};

export type MutationJobTypeUpdateArgs = {
  data: JobTypeUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<JobTypeKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobTypeUpdateByFilterArgs = {
  data: JobTypeUpdateByFilterInput;
  filter?: Maybe<JobTypeFilter>;
};

export type MutationJobUpdateArgs = {
  data: JobUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<JobKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationJobUpdateByFilterArgs = {
  data: JobUpdateByFilterInput;
  filter?: Maybe<JobFilter>;
};

export type MutationResetPasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
};

export type MutationRoleCreateArgs = {
  data: RoleCreateInput;
};

export type MutationRoleCreateManyArgs = {
  data: Array<Maybe<RoleCreateManyInput>>;
};

export type MutationRoleDeleteArgs = {
  data?: Maybe<RoleDeleteInput>;
  filter?: Maybe<RoleKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationRoleDeleteByFilterArgs = {
  filter: RoleFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationRoleDestroyArgs = {
  filter?: Maybe<RoleKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationRoleDestroyByFilterArgs = {
  filter: RoleFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationRoleRestoreArgs = {
  id: Scalars['String'];
};

export type MutationRoleUpdateArgs = {
  data: RoleUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<RoleKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationRoleUpdateByFilterArgs = {
  data: RoleUpdateByFilterInput;
  filter?: Maybe<RoleFilter>;
};

export type MutationSendInvitationTo8baseArgs = {
  inviteEmail: Scalars['String'];
};

export type MutationSettingsUpdateArgs = {
  data: SettingUpdateInput;
};

export type MutationTableCreateArgs = {
  data: TableCreateInput;
};

export type MutationTableDeleteArgs = {
  data: TableDeleteInput;
};

export type MutationTableUpdateArgs = {
  data: TableUpdateInput;
};

export type MutationTeamMemberDeleteArgs = {
  data?: Maybe<TeamMemberDeleteInput>;
  filter?: Maybe<TeamMemberKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationTeamMemberDeleteByFilterArgs = {
  filter: TeamMemberFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationTeamMemberDestroyArgs = {
  filter?: Maybe<TeamMemberKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationTeamMemberDestroyByFilterArgs = {
  filter: TeamMemberFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationTeamMemberRestoreArgs = {
  id: Scalars['String'];
};

export type MutationTeamMemberUpdateArgs = {
  data: TeamMemberUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<TeamMemberKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationTeamMemberUpdateByFilterArgs = {
  data: TeamMemberUpdateByFilterInput;
  filter?: Maybe<TeamMemberFilter>;
};

export type MutationUserChangePasswordArgs = {
  data: ChangePasswordInput;
};

export type MutationUserCreateArgs = {
  data: UserCreateInput;
};

export type MutationUserCreateManyArgs = {
  data: Array<Maybe<UserCreateManyInput>>;
};

export type MutationUserDeleteArgs = {
  data?: Maybe<UserDeleteInput>;
  filter?: Maybe<UserKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationUserDeleteByFilterArgs = {
  filter: UserFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationUserDestroyArgs = {
  filter?: Maybe<UserKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationUserDestroyByFilterArgs = {
  filter: UserFilter;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationUserLoginArgs = {
  data: UserLoginInput;
};

export type MutationUserPasswordForgotArgs = {
  data: PasswordForgotInput;
};

export type MutationUserPasswordForgotConfirmArgs = {
  data: PasswordForgotConfirmInput;
};

export type MutationUserRefreshTokenArgs = {
  data: RefreshTokenInput;
};

export type MutationUserRestoreArgs = {
  id: Scalars['String'];
};

export type MutationUserSignUpArgs = {
  authProfileId?: Maybe<Scalars['ID']>;
  user: UserCreateInput;
};

export type MutationUserSignUpResendArgs = {
  data: SignUpResendInput;
};

export type MutationUserSignUpWithPasswordArgs = {
  authProfileId?: Maybe<Scalars['ID']>;
  password: Scalars['String'];
  user: UserCreateInput;
};

export type MutationUserSignUpWithTokenArgs = {
  authProfileId?: Maybe<Scalars['ID']>;
  user: UserCreateInput;
};

export type MutationUserUpdateArgs = {
  data: UserUpdateInput;
  destroyDetached?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<UserKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationUserUpdateByFilterArgs = {
  data: UserUpdateByFilterInput;
  filter?: Maybe<UserFilter>;
};

export type MutationUserVerificationEmailResendArgs = {
  authProfileId?: Maybe<Scalars['ID']>;
  data: VerificationEmailResendInput;
};

export type MutationViewCreateArgs = {
  data: ViewCreateInput;
};

export type MutationViewUpdateArgs = {
  data: ViewUpdateInput;
};

export type MutationWorkspaceCreateArgs = {
  data: WorkspaceCreateMutationInput;
};

export type MutationWorkspaceCreateAsyncArgs = {
  data: WorkspaceCreateMutationInput;
};

export type MutationWorkspaceDeleteArgs = {
  data: WorkspaceDeleteMutationInput;
};

export type MutationWorkspaceLeaveArgs = {
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationWorkspaceUpdateArgs = {
  data: WorkspaceUpdateMutationInput;
};

export enum MutationType {
  Create = 'create',
  Delete = 'delete',
  Destroy = 'destroy',
  Update = 'update',
}

/** Number Field Attributes */
export type NumberFieldTypeAttributes = {
  __typename?: 'NumberFieldTypeAttributes';
  autoIncrement?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  format: Scalars['String'];
  isBigInt?: Maybe<Scalars['Boolean']>;
  maxValue?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Int']>;
};

/** Number Type Format Enum */
export enum NumberTypeFormatEnum {
  Currency = 'CURRENCY',
  Fraction = 'FRACTION',
  Number = 'NUMBER',
  Percentage = 'PERCENTAGE',
  Scientific = 'SCIENTIFIC',
}

export type OrganizationUserInvitationResponse = {
  __typename?: 'OrganizationUserInvitationResponse';
  invitationId: Scalars['String'];
};

/** PasswordForgotConfirmInput */
export type PasswordForgotConfirmInput = {
  authProfileId: Scalars['ID'];
  code: Scalars['String'];
  email: Scalars['String'];
  newPassword: Scalars['String'];
};

/** PasswordForgotInput */
export type PasswordForgotInput = {
  authProfileId: Scalars['ID'];
  email: Scalars['String'];
};

export type PatternFunctionArguments = {
  escape?: Maybe<Scalars['String']>;
  pattern: Scalars['String'];
};

export type Permission = {
  __typename?: 'Permission';
  _description?: Maybe<Scalars['String']>;
  appId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  permission?: Maybe<Scalars['JSON']>;
  resource?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PermissionFilter = {
  AND?: Maybe<Array<PermissionFilter>>;
  OR?: Maybe<Array<PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  appId?: Maybe<StringPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  deletedAt?: Maybe<IntPredicate>;
  resource?: Maybe<StringPredicate>;
  resourceType?: Maybe<StringPredicate>;
  role?: Maybe<RoleFilter>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type PermissionGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  appId?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  permission?: Maybe<Array<GroupByField>>;
  resource?: Maybe<Array<GroupByField>>;
  resourceType?: Maybe<Array<GroupByField>>;
  role?: Maybe<RoleGroupByQuery>;
  updatedAt?: Maybe<Array<GroupByField>>;
};

/** Permission Filter */
export type PermissionInputFilter = {
  action?: Maybe<Scalars['String']>;
  applicationName?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
  resourceType?: Maybe<PermissionResourceTypeEnum>;
};

/** PermissionListResponse output */
export type PermissionListResponse = {
  __typename?: 'PermissionListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Permission>;
};

/** Permissions subscription payload */
export type PermissionPayload = {
  __typename?: 'PermissionPayload';
  mutation: MutationType;
  node?: Maybe<Permission>;
  previousValues?: Maybe<Permission>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PermissionRelationFilter = {
  every?: Maybe<PermissionFilter>;
  none?: Maybe<PermissionFilter>;
  some?: Maybe<PermissionFilter>;
};

export enum PermissionResourceTypeEnum {
  Custom = 'custom',
  Data = 'data',
}

/** Permissions subscription filter */
export type PermissionSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<PermissionFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type Permission_PermissionFilter = {
  AND?: Maybe<Array<Permission_PermissionFilter>>;
  OR?: Maybe<Array<Permission_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  appId?: Maybe<StringPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  deletedAt?: Maybe<IntPredicate>;
  resource?: Maybe<StringPredicate>;
  resourceType?: Maybe<StringPredicate>;
  role?: Maybe<Role_PermissionFilter>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type Permission_PermissionRelationFilter = {
  every?: Maybe<Permission_PermissionFilter>;
  none?: Maybe<Permission_PermissionFilter>;
  some?: Maybe<Permission_PermissionFilter>;
};

/** custom permissions input */
export type PermissionsCustom = {
  api?: Maybe<PermissionsCustomApi>;
  data?: Maybe<PermissionsCustomData>;
  logic?: Maybe<PermissionsCustomLogic>;
  settings?: Maybe<PermissionsCustomSettings>;
  users?: Maybe<PermissionsCustomUsers>;
};

export type PermissionsCustomApi = {
  resetPassword?: Maybe<PermissionsCustomApiResolver>;
};

export type PermissionsCustomApiResolver = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomData = {
  schemaManagement?: Maybe<PermissionsCustomDataSchemaManagement>;
  viewerAccess?: Maybe<PermissionsCustomDataViewerAccess>;
};

export type PermissionsCustomDataSchemaManagement = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomDataViewerAccess = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogic = {
  deploy?: Maybe<PermissionsCustomLogicDeploy>;
  invoke?: Maybe<PermissionsCustomLogicInvoke>;
  logs?: Maybe<PermissionsCustomLogicLogs>;
  view?: Maybe<PermissionsCustomLogicView>;
};

export type PermissionsCustomLogicDeploy = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogicInvoke = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogicLogs = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogicView = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomSettings = {
  workspaceAdministration?: Maybe<PermissionsCustomSettingsWorkspaceAdministration>;
};

export type PermissionsCustomSettingsWorkspaceAdministration = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomUsers = {
  teamAdministration?: Maybe<PermissionsCustomUsersTeamAdministration>;
};

export type PermissionsCustomUsersTeamAdministration = {
  allow: Scalars['Boolean'];
};

/** Schema tables permissions input */
export type PermissionsData = {
  Address?: Maybe<PermissionsDataAddress>;
  CiCdMigrations?: Maybe<PermissionsDataCiCdMigrations>;
  ClockInOut?: Maybe<PermissionsDataClockInOut>;
  Customer?: Maybe<PermissionsDataCustomer>;
  Fieldworker?: Maybe<PermissionsDataFieldworker>;
  Files?: Maybe<PermissionsDataFiles>;
  Job?: Maybe<PermissionsDataJob>;
  JobFieldworker?: Maybe<PermissionsDataJobFieldworker>;
  JobType?: Maybe<PermissionsDataJobType>;
  Roles?: Maybe<PermissionsDataRoles>;
  TeamMembers?: Maybe<PermissionsDataTeamMembers>;
  Users?: Maybe<PermissionsDataUsers>;
};

export type PermissionsDataAddress = {
  create?: Maybe<PermissionsDataAddressCreate>;
  delete?: Maybe<PermissionsDataAddressDelete>;
  destroy?: Maybe<PermissionsDataAddressDestroy>;
  read?: Maybe<PermissionsDataAddressRead>;
  update?: Maybe<PermissionsDataAddressUpdate>;
};

export type PermissionsDataAddressCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataAddressDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataAddressDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataAddressRead = {
  allow: Scalars['Boolean'];
  fields?: Maybe<AddressFieldsPermissions>;
  filter?: Maybe<Address_PermissionFilter>;
};

export type PermissionsDataAddressUpdate = {
  allow: Scalars['Boolean'];
  fields?: Maybe<AddressFieldsPermissions>;
  filter?: Maybe<Address_PermissionFilter>;
};

export type PermissionsDataCiCdMigrations = {
  create?: Maybe<PermissionsDataCiCdMigrationsCreate>;
  delete?: Maybe<PermissionsDataCiCdMigrationsDelete>;
  destroy?: Maybe<PermissionsDataCiCdMigrationsDestroy>;
  read?: Maybe<PermissionsDataCiCdMigrationsRead>;
  update?: Maybe<PermissionsDataCiCdMigrationsUpdate>;
};

export type PermissionsDataCiCdMigrationsCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataCiCdMigrationsDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataCiCdMigrationsDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataCiCdMigrationsRead = {
  allow: Scalars['Boolean'];
  fields?: Maybe<CiCdMigrationFieldsPermissions>;
  filter?: Maybe<CiCdMigration_PermissionFilter>;
};

export type PermissionsDataCiCdMigrationsUpdate = {
  allow: Scalars['Boolean'];
  fields?: Maybe<CiCdMigrationFieldsPermissions>;
  filter?: Maybe<CiCdMigration_PermissionFilter>;
};

export type PermissionsDataClockInOut = {
  create?: Maybe<PermissionsDataClockInOutCreate>;
  delete?: Maybe<PermissionsDataClockInOutDelete>;
  destroy?: Maybe<PermissionsDataClockInOutDestroy>;
  read?: Maybe<PermissionsDataClockInOutRead>;
  update?: Maybe<PermissionsDataClockInOutUpdate>;
};

export type PermissionsDataClockInOutCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataClockInOutDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataClockInOutDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataClockInOutRead = {
  allow: Scalars['Boolean'];
  fields?: Maybe<ClockInOutFieldsPermissions>;
  filter?: Maybe<ClockInOut_PermissionFilter>;
};

export type PermissionsDataClockInOutUpdate = {
  allow: Scalars['Boolean'];
  fields?: Maybe<ClockInOutFieldsPermissions>;
  filter?: Maybe<ClockInOut_PermissionFilter>;
};

export type PermissionsDataCustomer = {
  create?: Maybe<PermissionsDataCustomerCreate>;
  delete?: Maybe<PermissionsDataCustomerDelete>;
  destroy?: Maybe<PermissionsDataCustomerDestroy>;
  read?: Maybe<PermissionsDataCustomerRead>;
  update?: Maybe<PermissionsDataCustomerUpdate>;
};

export type PermissionsDataCustomerCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataCustomerDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataCustomerDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataCustomerRead = {
  allow: Scalars['Boolean'];
  fields?: Maybe<CustomerFieldsPermissions>;
  filter?: Maybe<Customer_PermissionFilter>;
};

export type PermissionsDataCustomerUpdate = {
  allow: Scalars['Boolean'];
  fields?: Maybe<CustomerFieldsPermissions>;
  filter?: Maybe<Customer_PermissionFilter>;
};

export type PermissionsDataFieldworker = {
  create?: Maybe<PermissionsDataFieldworkerCreate>;
  delete?: Maybe<PermissionsDataFieldworkerDelete>;
  destroy?: Maybe<PermissionsDataFieldworkerDestroy>;
  read?: Maybe<PermissionsDataFieldworkerRead>;
  update?: Maybe<PermissionsDataFieldworkerUpdate>;
};

export type PermissionsDataFieldworkerCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataFieldworkerDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataFieldworkerDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataFieldworkerRead = {
  allow: Scalars['Boolean'];
  fields?: Maybe<FieldworkerFieldsPermissions>;
  filter?: Maybe<Fieldworker_PermissionFilter>;
};

export type PermissionsDataFieldworkerUpdate = {
  allow: Scalars['Boolean'];
  fields?: Maybe<FieldworkerFieldsPermissions>;
  filter?: Maybe<Fieldworker_PermissionFilter>;
};

export type PermissionsDataFiles = {
  create?: Maybe<PermissionsDataFilesCreate>;
  delete?: Maybe<PermissionsDataFilesDelete>;
  destroy?: Maybe<PermissionsDataFilesDestroy>;
  read?: Maybe<PermissionsDataFilesRead>;
  update?: Maybe<PermissionsDataFilesUpdate>;
};

export type PermissionsDataFilesCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataFilesDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataFilesDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataFilesRead = {
  allow: Scalars['Boolean'];
  fields?: Maybe<FileFieldsPermissions>;
  filter?: Maybe<File_PermissionFilter>;
};

export type PermissionsDataFilesUpdate = {
  allow: Scalars['Boolean'];
  fields?: Maybe<FileFieldsPermissions>;
  filter?: Maybe<File_PermissionFilter>;
};

export type PermissionsDataJob = {
  create?: Maybe<PermissionsDataJobCreate>;
  delete?: Maybe<PermissionsDataJobDelete>;
  destroy?: Maybe<PermissionsDataJobDestroy>;
  read?: Maybe<PermissionsDataJobRead>;
  update?: Maybe<PermissionsDataJobUpdate>;
};

export type PermissionsDataJobCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataJobDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataJobDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataJobFieldworker = {
  create?: Maybe<PermissionsDataJobFieldworkerCreate>;
  delete?: Maybe<PermissionsDataJobFieldworkerDelete>;
  destroy?: Maybe<PermissionsDataJobFieldworkerDestroy>;
  read?: Maybe<PermissionsDataJobFieldworkerRead>;
  update?: Maybe<PermissionsDataJobFieldworkerUpdate>;
};

export type PermissionsDataJobFieldworkerCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataJobFieldworkerDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataJobFieldworkerDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataJobFieldworkerRead = {
  allow: Scalars['Boolean'];
  fields?: Maybe<JobFieldworkerFieldsPermissions>;
  filter?: Maybe<JobFieldworker_PermissionFilter>;
};

export type PermissionsDataJobFieldworkerUpdate = {
  allow: Scalars['Boolean'];
  fields?: Maybe<JobFieldworkerFieldsPermissions>;
  filter?: Maybe<JobFieldworker_PermissionFilter>;
};

export type PermissionsDataJobRead = {
  allow: Scalars['Boolean'];
  fields?: Maybe<JobFieldsPermissions>;
  filter?: Maybe<Job_PermissionFilter>;
};

export type PermissionsDataJobType = {
  create?: Maybe<PermissionsDataJobTypeCreate>;
  delete?: Maybe<PermissionsDataJobTypeDelete>;
  destroy?: Maybe<PermissionsDataJobTypeDestroy>;
  read?: Maybe<PermissionsDataJobTypeRead>;
  update?: Maybe<PermissionsDataJobTypeUpdate>;
};

export type PermissionsDataJobTypeCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataJobTypeDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataJobTypeDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataJobTypeRead = {
  allow: Scalars['Boolean'];
  fields?: Maybe<JobTypeFieldsPermissions>;
  filter?: Maybe<JobType_PermissionFilter>;
};

export type PermissionsDataJobTypeUpdate = {
  allow: Scalars['Boolean'];
  fields?: Maybe<JobTypeFieldsPermissions>;
  filter?: Maybe<JobType_PermissionFilter>;
};

export type PermissionsDataJobUpdate = {
  allow: Scalars['Boolean'];
  fields?: Maybe<JobFieldsPermissions>;
  filter?: Maybe<Job_PermissionFilter>;
};

export type PermissionsDataRoles = {
  create?: Maybe<PermissionsDataRolesCreate>;
  delete?: Maybe<PermissionsDataRolesDelete>;
  destroy?: Maybe<PermissionsDataRolesDestroy>;
  read?: Maybe<PermissionsDataRolesRead>;
  update?: Maybe<PermissionsDataRolesUpdate>;
};

export type PermissionsDataRolesCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataRolesDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataRolesDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataRolesRead = {
  allow: Scalars['Boolean'];
  fields?: Maybe<RoleFieldsPermissions>;
  filter?: Maybe<Role_PermissionFilter>;
};

export type PermissionsDataRolesUpdate = {
  allow: Scalars['Boolean'];
  fields?: Maybe<RoleFieldsPermissions>;
  filter?: Maybe<Role_PermissionFilter>;
};

export type PermissionsDataTeamMembers = {
  create?: Maybe<PermissionsDataTeamMembersCreate>;
  delete?: Maybe<PermissionsDataTeamMembersDelete>;
  destroy?: Maybe<PermissionsDataTeamMembersDestroy>;
  read?: Maybe<PermissionsDataTeamMembersRead>;
  update?: Maybe<PermissionsDataTeamMembersUpdate>;
};

export type PermissionsDataTeamMembersCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataTeamMembersDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataTeamMembersDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataTeamMembersRead = {
  allow: Scalars['Boolean'];
  fields?: Maybe<TeamMemberFieldsPermissions>;
  filter?: Maybe<TeamMember_PermissionFilter>;
};

export type PermissionsDataTeamMembersUpdate = {
  allow: Scalars['Boolean'];
  fields?: Maybe<TeamMemberFieldsPermissions>;
  filter?: Maybe<TeamMember_PermissionFilter>;
};

export type PermissionsDataUsers = {
  create?: Maybe<PermissionsDataUsersCreate>;
  delete?: Maybe<PermissionsDataUsersDelete>;
  destroy?: Maybe<PermissionsDataUsersDestroy>;
  read?: Maybe<PermissionsDataUsersRead>;
  update?: Maybe<PermissionsDataUsersUpdate>;
};

export type PermissionsDataUsersCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataUsersDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataUsersDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataUsersRead = {
  allow: Scalars['Boolean'];
  fields?: Maybe<UserFieldsPermissions>;
  filter?: Maybe<User_PermissionFilter>;
};

export type PermissionsDataUsersUpdate = {
  allow: Scalars['Boolean'];
  fields?: Maybe<UserFieldsPermissions>;
  filter?: Maybe<User_PermissionFilter>;
};

/** PermissionsInput create input */
export type PermissionsInput = {
  custom?: Maybe<PermissionsCustom>;
  data?: Maybe<PermissionsData>;
};

export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  addressesList: AddressListResponse;
  apiToken?: Maybe<ApiToken>;
  apiTokensList: ApiTokenListResponse;
  /** @deprecated No longer supported. Use `system.application` instead. */
  application?: Maybe<Application>;
  /** @deprecated No longer supported. Use `system.applicationsList` instead. */
  applicationsList?: Maybe<ApplicationListResponse>;
  asyncSessionStatus?: Maybe<AsyncSessionStatusResponse>;
  authenticationProfile?: Maybe<AuthenticationProfile>;
  authenticationProfilesList: AuthenticationProfileListResponse;
  authenticationSettings?: Maybe<AuthenticationSetting>;
  /** @deprecated No longer supported. Use `system.billingCurrentPlan` instead. */
  billingCurrentPlan?: Maybe<BillingCurrentPlanResponse>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead. */
  billingDetails?: Maybe<BillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead. */
  billingInvoicesList: BillingInvoicesListResponse;
  /** @deprecated No longer supported. Use `system.billingMetricUsageQuotasList` instead. */
  billingMetricUsageQuotasList: BillingMetricUsageQuotasListResponse;
  /** @deprecated No longer supported. Use `system.billingMetricUsagesList` instead. */
  billingMetricUsagesList: BillingMetricUsagesListResponse;
  ciCdMigration?: Maybe<CiCdMigration>;
  ciCdMigrationsList: CiCdMigrationListResponse;
  clockInOut?: Maybe<ClockInOut>;
  clockInOutsList: ClockInOutListResponse;
  companyName?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
  customersList: CustomerListResponse;
  /** @deprecated No longer supported. Use `system.deployStatus` instead. */
  deployStatus: DeployStatusResult;
  environmentVariable?: Maybe<EnvironmentVariable>;
  environmentVariablesList: EnvironmentVariableListResponse;
  fieldworker?: Maybe<Fieldworker>;
  fieldworkersList: FieldworkerListResponse;
  file?: Maybe<File>;
  fileUploadInfo?: Maybe<FileUploadInfoResponse>;
  filesList: FileListResponse;
  /** @deprecated No longer supported. Use `system.functionsList` instead. */
  functionsList?: Maybe<FunctionListResponse>;
  getWorkspaceTransferInfo?: Maybe<WorkspaceTransferItem>;
  job?: Maybe<Job>;
  jobFieldworker?: Maybe<JobFieldworker>;
  jobFieldworkersList: JobFieldworkerListResponse;
  jobType?: Maybe<JobType>;
  jobTypesList: JobTypeListResponse;
  jobsList: JobListResponse;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']>>>;
  role?: Maybe<Role>;
  rolesList: RoleListResponse;
  settings?: Maybe<Setting>;
  system?: Maybe<SystemQuery>;
  /** @deprecated No longer supported. Use `system.table` instead. */
  table?: Maybe<Table>;
  /** @deprecated No longer supported. Use `system.tableField` instead. */
  tableField?: Maybe<TableField>;
  /** @deprecated No longer supported. Use `system.tablesList` instead. */
  tablesList: TableListResponse;
  teamMember?: Maybe<TeamMember>;
  teamMembersList: TeamMemberListResponse;
  user?: Maybe<User>;
  userBillingConfiguration: UserBillingConfigurationResponse;
  /** @deprecated No longer supported. Use `system.userInvitationsList` instead. */
  userInvitationsList?: Maybe<UserInvitationList>;
  usersList: UserListResponse;
  /** @deprecated No longer supported. Use `system.workspacesList` instead. */
  workspacesList?: Maybe<WorkspaceListResponse>;
};

export type QueryAddressArgs = {
  id?: Maybe<Scalars['ID']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryAddressesListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<AddressFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AddressGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AddressOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<AddressSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryApiTokenArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryApiTokensListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<ApiTokenFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ApiTokenGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<ApiTokenOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ApiTokenSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryApplicationArgs = {
  id: Scalars['String'];
};

export type QueryAsyncSessionStatusArgs = {
  sessionId: Scalars['String'];
};

export type QueryAuthenticationProfileArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryAuthenticationProfilesListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<AuthenticationProfileFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AuthenticationProfileGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AuthenticationProfileOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<AuthenticationProfileSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryBillingInvoicesListArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  by?: Maybe<BillingInvoicesListFilterType>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryBillingMetricUsagesListArgs = {
  filter?: Maybe<BillingMetricUsagesListFilter>;
};

export type QueryCiCdMigrationArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryCiCdMigrationsListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<CiCdMigrationFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<CiCdMigrationGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<CiCdMigrationOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<CiCdMigrationSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryClockInOutArgs = {
  id?: Maybe<Scalars['ID']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryClockInOutsListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<ClockInOutFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ClockInOutGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<ClockInOutOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ClockInOutSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryCustomerArgs = {
  id?: Maybe<Scalars['ID']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryCustomersListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<CustomerFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<CustomerGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<CustomerOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<CustomerSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryDeployStatusArgs = {
  buildName: Scalars['String'];
};

export type QueryEnvironmentVariableArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryEnvironmentVariablesListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<EnvironmentVariableFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<EnvironmentVariableGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<EnvironmentVariableOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<EnvironmentVariableSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryFieldworkerArgs = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  phoneNumber?: Maybe<Scalars['String']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryFieldworkersListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FieldworkerFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<FieldworkerGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<FieldworkerOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<FieldworkerSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryFileArgs = {
  fileId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryFilesListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FileFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<FileGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<FileOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<FileSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryFunctionsListArgs = {
  applicationId?: Maybe<Scalars['String']>;
  filter?: Maybe<FunctionInfoFilter>;
  orderBy?: Maybe<Array<Maybe<FunctionInfoOrderBy>>>;
};

export type QueryGetWorkspaceTransferInfoArgs = {
  workspaceId: Scalars['String'];
};

export type QueryJobArgs = {
  code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryJobFieldworkerArgs = {
  id?: Maybe<Scalars['ID']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryJobFieldworkersListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<JobFieldworkerFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<JobFieldworkerGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<JobFieldworkerOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<JobFieldworkerSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryJobTypeArgs = {
  id?: Maybe<Scalars['ID']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryJobTypesListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<JobTypeFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<JobTypeGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<JobTypeOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<JobTypeSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryJobsListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<JobFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<JobGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<JobOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<JobSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryLogsArgs = {
  applicationId?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['DateTime']>;
  functionName: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
};

export type QueryRoleArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryRolesListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<RoleFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<RoleSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryTableArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type QueryTableFieldArgs = {
  id: Scalars['ID'];
};

export type QueryTablesListArgs = {
  filter?: Maybe<TableListFilter>;
};

export type QueryTeamMemberArgs = {
  id?: Maybe<Scalars['ID']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryTeamMembersListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<TeamMemberFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamMemberGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<TeamMemberOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<TeamMemberSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryUserArgs = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryUsersListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<UserFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<UserSort>>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

/** RefreshTokenInput */
export type RefreshTokenInput = {
  authProfileId?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  refreshToken: Scalars['String'];
};

/** Relation */
export type Relation = {
  __typename?: 'Relation';
  refField?: Maybe<TableField>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList?: Maybe<Scalars['Boolean']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']>;
  refFieldName?: Maybe<Scalars['String']>;
  refTable: Table;
  relationFieldName?: Maybe<Scalars['String']>;
  relationTableName?: Maybe<Scalars['String']>;
};

/** Relation Create Input */
export type RelationCreateInput = {
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList: Scalars['Boolean'];
  refFieldIsRequired: Scalars['Boolean'];
  refFieldName?: Maybe<Scalars['String']>;
  refTableId: Scalars['ID'];
};

/** Relation Update Input */
export type RelationUpdateInput = {
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList?: Maybe<Scalars['Boolean']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']>;
  refFieldName?: Maybe<Scalars['String']>;
  refTableId?: Maybe<Scalars['ID']>;
};

/** Relative Date Predicate Operation Enum */
export enum RelativePredicateOpEnum {
  Add = 'ADD',
  Sub = 'SUB',
}

/** Relative Date Predicate Unit Enum */
export enum RelativePredicateUnitEnum {
  Day = 'DAY',
  DayHour = 'DAY_HOUR',
  DayMicrosecond = 'DAY_MICROSECOND',
  DayMinute = 'DAY_MINUTE',
  DaySecond = 'DAY_SECOND',
  Hour = 'HOUR',
  HourMicrosecond = 'HOUR_MICROSECOND',
  HourMinute = 'HOUR_MINUTE',
  HourSecond = 'HOUR_SECOND',
  Microsecond = 'MICROSECOND',
  Minute = 'MINUTE',
  MinuteMicrosecond = 'MINUTE_MICROSECOND',
  MinuteSecond = 'MINUTE_SECOND',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Second = 'SECOND',
  SecondMicrosecond = 'SECOND_MICROSECOND',
  Week = 'WEEK',
  Year = 'YEAR',
  YearMonth = 'YEAR_MONTH',
}

export type ReplaceFunctionArguments = {
  from: Scalars['String'];
  to: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  _description?: Maybe<Scalars['String']>;
  apiTokens?: Maybe<ApiTokenListResponse>;
  authenticationProfiles?: Maybe<AuthenticationProfileListResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  membersCount: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<PermissionListResponse>;
  teamMembers?: Maybe<TeamMemberListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserListResponse>;
};

export type RoleApiTokensArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<ApiTokenFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ApiTokenGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<ApiTokenOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ApiTokenSort>>;
};

export type RoleAuthenticationProfilesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<AuthenticationProfileFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AuthenticationProfileGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AuthenticationProfileOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<AuthenticationProfileSort>>;
};

export type RolePermissionsArgs = {
  filter?: Maybe<PermissionInputFilter>;
};

export type RoleTeamMembersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<TeamMemberFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamMemberGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<TeamMemberOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<TeamMemberSort>>;
};

export type RoleUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<UserFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<UserSort>>;
};

/** Roles create input */
export type RoleCreateInput = {
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<PermissionsInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
  users?: Maybe<RolesUsersRelationInput>;
};

/** Roles create many input */
export type RoleCreateManyInput = {
  apiTokens?: Maybe<RolesApiTokensManyRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesManyRelationInput>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  teamMembers?: Maybe<RolesTeamMembersManyRelationInput>;
  users?: Maybe<RolesUsersManyRelationInput>;
};

/** Roles delete input */
export type RoleDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

/** RoleFieldsPermissions create input */
export type RoleFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
};

export type RoleFilter = {
  AND?: Maybe<Array<RoleFilter>>;
  OR?: Maybe<Array<RoleFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  apiTokens?: Maybe<ApiTokenRelationFilter>;
  authenticationProfiles?: Maybe<AuthenticationProfileRelationFilter>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  deletedAt?: Maybe<IntPredicate>;
  description?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  name?: Maybe<StringPredicate>;
  permissions?: Maybe<PermissionRelationFilter>;
  teamMembers?: Maybe<TeamMemberRelationFilter>;
  updatedAt?: Maybe<DateTimePredicate>;
  users?: Maybe<UserRelationFilter>;
};

export type RoleGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: RoleGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type RoleGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  apiTokens?: Maybe<ApiTokenGroupByQuery>;
  authenticationProfiles?: Maybe<AuthenticationProfileGroupByQuery>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  description?: Maybe<Array<GroupByField>>;
  id?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  permissions?: Maybe<PermissionGroupByQuery>;
  teamMembers?: Maybe<TeamMemberGroupByQuery>;
  updatedAt?: Maybe<Array<GroupByField>>;
  users?: Maybe<UserGroupByQuery>;
};

export type RoleKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** RoleListResponse output */
export type RoleListResponse = {
  __typename?: 'RoleListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Role>;
};

/** RoleManyResponse output */
export type RoleManyResponse = {
  __typename?: 'RoleManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<Role>;
};

/** No longer supported. Use `sort` instead. */
export enum RoleOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SystemTypeAsc = 'systemType_ASC',
  SystemTypeDesc = 'systemType_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** Roles subscription payload */
export type RolePayload = {
  __typename?: 'RolePayload';
  mutation: MutationType;
  node?: Maybe<Role>;
  previousValues?: Maybe<Role>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RoleRelationFilter = {
  every?: Maybe<RoleFilter>;
  none?: Maybe<RoleFilter>;
  some?: Maybe<RoleFilter>;
};

export type RoleSort = {
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  deletedAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

/** Roles subscription filter */
export type RoleSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<RoleFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** Roles update input */
export type RoleUpdateByFilterInput = {
  description?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  name?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  systemType?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
};

/** Roles update input */
export type RoleUpdateInput = {
  apiTokens?: Maybe<RolesApiTokensUpdateRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesUpdateRelationInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<PermissionsInput>;
  teamMembers?: Maybe<RolesTeamMembersUpdateRelationInput>;
  users?: Maybe<RolesUsersUpdateRelationInput>;
};

export type Role_PermissionFilter = {
  AND?: Maybe<Array<Role_PermissionFilter>>;
  OR?: Maybe<Array<Role_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  apiTokens?: Maybe<ApiToken_PermissionRelationFilter>;
  authenticationProfiles?: Maybe<AuthenticationProfile_PermissionRelationFilter>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  deletedAt?: Maybe<IntPredicate>;
  description?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  name?: Maybe<StringPredicate>;
  permissions?: Maybe<Permission_PermissionRelationFilter>;
  teamMembers?: Maybe<TeamMember_PermissionRelationFilter>;
  updatedAt?: Maybe<DateTimePredicate>;
  users?: Maybe<User_PermissionRelationFilter>;
};

export type Role_PermissionRelationFilter = {
  every?: Maybe<Role_PermissionFilter>;
  none?: Maybe<Role_PermissionFilter>;
  some?: Maybe<Role_PermissionFilter>;
};

/** Roles relation input */
export type RolesApiTokensManyRelationInput = {
  connect?: Maybe<Array<ApiTokenKeyFilter>>;
};

/** Roles relation input */
export type RolesApiTokensRelationInput = {
  connect?: Maybe<Array<ApiTokenKeyFilter>>;
};

/** Roles relation input */
export type RolesApiTokensUpdateRelationInput = {
  connect?: Maybe<Array<ApiTokenKeyFilter>>;
  disconnect?: Maybe<Array<ApiTokenKeyFilter>>;
  reconnect?: Maybe<Array<ApiTokenKeyFilter>>;
  update?: Maybe<Array<Maybe<Roles_ApiTokenUpdateInput>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesManyRelationInput = {
  connect?: Maybe<Array<AuthenticationProfileKeyFilter>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesRelationInput = {
  connect?: Maybe<Array<AuthenticationProfileKeyFilter>>;
  create?: Maybe<Array<Maybe<Roles_AuthenticationProfileCreateInput>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesUpdateRelationInput = {
  connect?: Maybe<Array<AuthenticationProfileKeyFilter>>;
  create?: Maybe<Array<Maybe<Roles_AuthenticationProfileCreateInput>>>;
  disconnect?: Maybe<Array<AuthenticationProfileKeyFilter>>;
  reconnect?: Maybe<Array<AuthenticationProfileKeyFilter>>;
  update?: Maybe<Array<Maybe<Roles_AuthenticationProfileUpdateInput>>>;
};

/** Roles relation input */
export type RolesTeamMembersManyRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
};

/** Roles relation input */
export type RolesTeamMembersRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
};

/** Roles relation input */
export type RolesTeamMembersUpdateRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
  disconnect?: Maybe<Array<TeamMemberKeyFilter>>;
  reconnect?: Maybe<Array<TeamMemberKeyFilter>>;
  update?: Maybe<Array<Maybe<Roles_TeamMemberUpdateInput>>>;
};

/** Roles relation input */
export type RolesUsersManyRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
};

/** Roles relation input */
export type RolesUsersRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Roles_UserCreateInput>>>;
};

/** Roles relation input */
export type RolesUsersUpdateRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Roles_UserCreateInput>>>;
  disconnect?: Maybe<Array<UserKeyFilter>>;
  reconnect?: Maybe<Array<UserKeyFilter>>;
  update?: Maybe<Array<Maybe<Roles_UserUpdateInput>>>;
};

/** ApiTokens update input from roles */
export type Roles_ApiTokenUpdateInput = {
  data: ApiTokenUpdateInput;
  filter?: Maybe<ApiTokenKeyFilter>;
};

/** AuthenticationProfiles create input from roles */
export type Roles_AuthenticationProfileCreateInput = {
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientId?: Maybe<Scalars['String']>;
  databaseName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  managementDomain?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  roles?: Maybe<AuthenticationProfilesRolesRelationInput>;
  secret?: Maybe<Scalars['String']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
};

/** AuthenticationProfiles update input from roles */
export type Roles_AuthenticationProfileUpdateInput = {
  data: AuthenticationProfileUpdateInput;
  filter?: Maybe<AuthenticationProfileKeyFilter>;
};

/** TeamMembers update input from roles */
export type Roles_TeamMemberUpdateInput = {
  data: TeamMemberUpdateInput;
  filter?: Maybe<TeamMemberKeyFilter>;
};

/** Users create input from roles */
export type Roles_UserCreateInput = {
  avatar?: Maybe<UsersAvatarRelationInput>;
  email: Scalars['String'];
  fielworker?: Maybe<UsersFielworkerRelationInput>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<UsersRolesRelationInput>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  typeUser?: Maybe<Scalars['String']>;
};

/** Users update input from roles */
export type Roles_UserUpdateInput = {
  data: UserUpdateInput;
  filter?: Maybe<UserKeyFilter>;
};

/** Schema Origin */
export type SchemaOrigin = {
  __typename?: 'SchemaOrigin';
  provider?: Maybe<Scalars['String']>;
  type: SchemaOriginType;
};

/** Schema Origin Type Enum */
export enum SchemaOriginType {
  Local = 'LOCAL',
  Remote = 'REMOTE',
  View = 'VIEW',
}

export type Setting = {
  __typename?: 'Setting';
  _description?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  buttonLinkColor?: Maybe<Scalars['String']>;
  containerColor?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  currency?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  landingPageImage?: Maybe<File>;
  language?: Maybe<Scalars['String']>;
  leftNavColor?: Maybe<Scalars['String']>;
  menuBarBGColor?: Maybe<Scalars['String']>;
  menuBarIconsColor?: Maybe<Scalars['String']>;
  menuBarLogo?: Maybe<File>;
  passwordMinLength?: Maybe<Scalars['Int']>;
  passwordRequireLowercase?: Maybe<Scalars['Boolean']>;
  passwordRequireNumbers?: Maybe<Scalars['Boolean']>;
  passwordRequireSpecial?: Maybe<Scalars['Boolean']>;
  passwordRequireUppercase?: Maybe<Scalars['Boolean']>;
  passwordUpdateInterval?: Maybe<Scalars['Int']>;
  rememberDevice?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userInterfaceStyle?: Maybe<Scalars['String']>;
  vanityUrl?: Maybe<Scalars['String']>;
};

export type SettingFilter = {
  AND?: Maybe<Array<SettingFilter>>;
  OR?: Maybe<Array<SettingFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  bgColor?: Maybe<StringPredicate>;
  buttonLinkColor?: Maybe<StringPredicate>;
  containerColor?: Maybe<StringPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  currency?: Maybe<StringPredicate>;
  dateFormat?: Maybe<StringPredicate>;
  deletedAt?: Maybe<IntPredicate>;
  landingPageImage?: Maybe<FileFilter>;
  language?: Maybe<StringPredicate>;
  leftNavColor?: Maybe<StringPredicate>;
  menuBarBGColor?: Maybe<StringPredicate>;
  menuBarIconsColor?: Maybe<StringPredicate>;
  menuBarLogo?: Maybe<FileFilter>;
  passwordMinLength?: Maybe<IntPredicate>;
  passwordRequireLowercase?: Maybe<BoolPredicate>;
  passwordRequireNumbers?: Maybe<BoolPredicate>;
  passwordRequireSpecial?: Maybe<BoolPredicate>;
  passwordRequireUppercase?: Maybe<BoolPredicate>;
  passwordUpdateInterval?: Maybe<IntPredicate>;
  rememberDevice?: Maybe<StringPredicate>;
  timezone?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  userInterfaceStyle?: Maybe<StringPredicate>;
  vanityUrl?: Maybe<StringPredicate>;
};

export type SettingGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: SettingGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type SettingGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  bgColor?: Maybe<Array<GroupByField>>;
  buttonLinkColor?: Maybe<Array<GroupByField>>;
  containerColor?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  currency?: Maybe<Array<GroupByField>>;
  dateFormat?: Maybe<Array<GroupByField>>;
  landingPageImage?: Maybe<FileGroupByQuery>;
  language?: Maybe<Array<GroupByField>>;
  leftNavColor?: Maybe<Array<GroupByField>>;
  menuBarBGColor?: Maybe<Array<GroupByField>>;
  menuBarIconsColor?: Maybe<Array<GroupByField>>;
  menuBarLogo?: Maybe<FileGroupByQuery>;
  passwordMinLength?: Maybe<Array<GroupByField>>;
  passwordRequireLowercase?: Maybe<Array<GroupByField>>;
  passwordRequireNumbers?: Maybe<Array<GroupByField>>;
  passwordRequireSpecial?: Maybe<Array<GroupByField>>;
  passwordRequireUppercase?: Maybe<Array<GroupByField>>;
  passwordUpdateInterval?: Maybe<Array<GroupByField>>;
  rememberDevice?: Maybe<Array<GroupByField>>;
  timezone?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  userInterfaceStyle?: Maybe<Array<GroupByField>>;
  vanityUrl?: Maybe<Array<GroupByField>>;
};

/** SettingListResponse output */
export type SettingListResponse = {
  __typename?: 'SettingListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Setting>;
};

/** No longer supported. Use `sort` instead. */
export enum SettingOrderBy {
  BgColorAsc = 'bgColor_ASC',
  BgColorDesc = 'bgColor_DESC',
  ButtonLinkColorAsc = 'buttonLinkColor_ASC',
  ButtonLinkColorDesc = 'buttonLinkColor_DESC',
  ContainerColorAsc = 'containerColor_ASC',
  ContainerColorDesc = 'containerColor_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CurrencyAsc = 'currency_ASC',
  CurrencyDesc = 'currency_DESC',
  DateFormatAsc = 'dateFormat_ASC',
  DateFormatDesc = 'dateFormat_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  LeftNavColorAsc = 'leftNavColor_ASC',
  LeftNavColorDesc = 'leftNavColor_DESC',
  MenuBarBgColorAsc = 'menuBarBGColor_ASC',
  MenuBarBgColorDesc = 'menuBarBGColor_DESC',
  MenuBarIconsColorAsc = 'menuBarIconsColor_ASC',
  MenuBarIconsColorDesc = 'menuBarIconsColor_DESC',
  PasswordMinLengthAsc = 'passwordMinLength_ASC',
  PasswordMinLengthDesc = 'passwordMinLength_DESC',
  PasswordRequireLowercaseAsc = 'passwordRequireLowercase_ASC',
  PasswordRequireLowercaseDesc = 'passwordRequireLowercase_DESC',
  PasswordRequireNumbersAsc = 'passwordRequireNumbers_ASC',
  PasswordRequireNumbersDesc = 'passwordRequireNumbers_DESC',
  PasswordRequireSpecialAsc = 'passwordRequireSpecial_ASC',
  PasswordRequireSpecialDesc = 'passwordRequireSpecial_DESC',
  PasswordRequireUppercaseAsc = 'passwordRequireUppercase_ASC',
  PasswordRequireUppercaseDesc = 'passwordRequireUppercase_DESC',
  PasswordUpdateIntervalAsc = 'passwordUpdateInterval_ASC',
  PasswordUpdateIntervalDesc = 'passwordUpdateInterval_DESC',
  RememberDeviceAsc = 'rememberDevice_ASC',
  RememberDeviceDesc = 'rememberDevice_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserInterfaceStyleAsc = 'userInterfaceStyle_ASC',
  UserInterfaceStyleDesc = 'userInterfaceStyle_DESC',
  VanityUrlAsc = 'vanityUrl_ASC',
  VanityUrlDesc = 'vanityUrl_DESC',
}

/** Settings subscription payload */
export type SettingPayload = {
  __typename?: 'SettingPayload';
  mutation: MutationType;
  node?: Maybe<Setting>;
  previousValues?: Maybe<Setting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SettingRelationFilter = {
  every?: Maybe<SettingFilter>;
  none?: Maybe<SettingFilter>;
  some?: Maybe<SettingFilter>;
};

export type SettingSort = {
  bgColor?: Maybe<SortOrder>;
  buttonLinkColor?: Maybe<SortOrder>;
  containerColor?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  currency?: Maybe<SortOrder>;
  dateFormat?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  landingPageImage?: Maybe<FileSort>;
  language?: Maybe<SortOrder>;
  leftNavColor?: Maybe<SortOrder>;
  menuBarBGColor?: Maybe<SortOrder>;
  menuBarIconsColor?: Maybe<SortOrder>;
  menuBarLogo?: Maybe<FileSort>;
  passwordMinLength?: Maybe<SortOrder>;
  passwordRequireLowercase?: Maybe<SortOrder>;
  passwordRequireNumbers?: Maybe<SortOrder>;
  passwordRequireSpecial?: Maybe<SortOrder>;
  passwordRequireUppercase?: Maybe<SortOrder>;
  passwordUpdateInterval?: Maybe<SortOrder>;
  rememberDevice?: Maybe<SortOrder>;
  timezone?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userInterfaceStyle?: Maybe<SortOrder>;
  vanityUrl?: Maybe<SortOrder>;
};

/** Settings subscription filter */
export type SettingSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<SettingFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** Settings update input */
export type SettingUpdateInput = {
  bgColor?: Maybe<Scalars['String']>;
  buttonLinkColor?: Maybe<Scalars['String']>;
  containerColor?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  leftNavColor?: Maybe<Scalars['String']>;
  menuBarBGColor?: Maybe<Scalars['String']>;
  menuBarIconsColor?: Maybe<Scalars['String']>;
  passwordMinLength?: Maybe<Scalars['Int']>;
  passwordRequireLowercase?: Maybe<Scalars['Boolean']>;
  passwordRequireNumbers?: Maybe<Scalars['Boolean']>;
  passwordRequireSpecial?: Maybe<Scalars['Boolean']>;
  passwordRequireUppercase?: Maybe<Scalars['Boolean']>;
  passwordUpdateInterval?: Maybe<Scalars['Int']>;
  rememberDevice?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  userInterfaceStyle?: Maybe<Scalars['String']>;
  vanityUrl?: Maybe<Scalars['String']>;
};

export type Setting_PermissionFilter = {
  AND?: Maybe<Array<Setting_PermissionFilter>>;
  OR?: Maybe<Array<Setting_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  bgColor?: Maybe<StringPredicate>;
  buttonLinkColor?: Maybe<StringPredicate>;
  containerColor?: Maybe<StringPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  currency?: Maybe<StringPredicate>;
  dateFormat?: Maybe<StringPredicate>;
  deletedAt?: Maybe<IntPredicate>;
  landingPageImage?: Maybe<File_PermissionFilter>;
  language?: Maybe<StringPredicate>;
  leftNavColor?: Maybe<StringPredicate>;
  menuBarBGColor?: Maybe<StringPredicate>;
  menuBarIconsColor?: Maybe<StringPredicate>;
  menuBarLogo?: Maybe<File_PermissionFilter>;
  passwordMinLength?: Maybe<IntPredicate>;
  passwordRequireLowercase?: Maybe<BoolPredicate>;
  passwordRequireNumbers?: Maybe<BoolPredicate>;
  passwordRequireSpecial?: Maybe<BoolPredicate>;
  passwordRequireUppercase?: Maybe<BoolPredicate>;
  passwordUpdateInterval?: Maybe<IntPredicate>;
  rememberDevice?: Maybe<StringPredicate>;
  timezone?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  userInterfaceStyle?: Maybe<StringPredicate>;
  vanityUrl?: Maybe<StringPredicate>;
};

export type Setting_PermissionRelationFilter = {
  every?: Maybe<Setting_PermissionFilter>;
  none?: Maybe<Setting_PermissionFilter>;
  some?: Maybe<Setting_PermissionFilter>;
};

/** SignUpResendInput */
export type SignUpResendInput = {
  email: Scalars['String'];
};

/** Smart Field Attributes */
export type SmartFieldTypeAttributes = {
  __typename?: 'SmartFieldTypeAttributes';
  format: Scalars['String'];
  innerFields?: Maybe<Array<Maybe<CustomTableField>>>;
};

/** Smart Type Format Enum */
export enum SmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE',
}

/** SortOrder */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringPadFunctionArguments = {
  len: Scalars['Int'];
  str: Scalars['String'];
};

export type StringPredicate = {
  contains?: Maybe<Scalars['String']>;
  ends_with?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  not_contains?: Maybe<Scalars['String']>;
  not_ends_with?: Maybe<Scalars['String']>;
  not_equals?: Maybe<Scalars['String']>;
  not_in?: Maybe<Array<Scalars['String']>>;
  not_starts_with?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
};

export type StringPredicateHaving = {
  AND?: Maybe<Array<StringPredicateHaving>>;
  OR?: Maybe<Array<StringPredicateHaving>>;
  contains?: Maybe<Scalars['String']>;
  ends_with?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  not_contains?: Maybe<Scalars['String']>;
  not_ends_with?: Maybe<Scalars['String']>;
  not_equals?: Maybe<Scalars['String']>;
  not_in?: Maybe<Array<Scalars['String']>>;
  not_starts_with?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
};

export enum StringTrimMode {
  Both = 'BOTH',
  Leading = 'LEADING',
  Trailing = 'TRAILING',
}

export type Subscription = {
  __typename?: 'Subscription';
  Address?: Maybe<AddressPayload>;
  ApiTokens?: Maybe<ApiTokenPayload>;
  AuthenticationProfiles?: Maybe<AuthenticationProfilePayload>;
  AuthenticationSettings?: Maybe<AuthenticationSettingPayload>;
  CiCdMigrations?: Maybe<CiCdMigrationPayload>;
  ClockInOut?: Maybe<ClockInOutPayload>;
  Customer?: Maybe<CustomerPayload>;
  EnvironmentVariables?: Maybe<EnvironmentVariablePayload>;
  Fieldworker?: Maybe<FieldworkerPayload>;
  Files?: Maybe<FilePayload>;
  Job?: Maybe<JobPayload>;
  JobFieldworker?: Maybe<JobFieldworkerPayload>;
  JobType?: Maybe<JobTypePayload>;
  Permissions?: Maybe<PermissionPayload>;
  Roles?: Maybe<RolePayload>;
  Settings?: Maybe<SettingPayload>;
  TeamMembers?: Maybe<TeamMemberPayload>;
  Users?: Maybe<UserPayload>;
};

export type SubscriptionAddressArgs = {
  filter?: Maybe<AddressSubscriptionFilter>;
};

export type SubscriptionApiTokensArgs = {
  filter?: Maybe<ApiTokenSubscriptionFilter>;
};

export type SubscriptionAuthenticationProfilesArgs = {
  filter?: Maybe<AuthenticationProfileSubscriptionFilter>;
};

export type SubscriptionAuthenticationSettingsArgs = {
  filter?: Maybe<AuthenticationSettingSubscriptionFilter>;
};

export type SubscriptionCiCdMigrationsArgs = {
  filter?: Maybe<CiCdMigrationSubscriptionFilter>;
};

export type SubscriptionClockInOutArgs = {
  filter?: Maybe<ClockInOutSubscriptionFilter>;
};

export type SubscriptionCustomerArgs = {
  filter?: Maybe<CustomerSubscriptionFilter>;
};

export type SubscriptionEnvironmentVariablesArgs = {
  filter?: Maybe<EnvironmentVariableSubscriptionFilter>;
};

export type SubscriptionFieldworkerArgs = {
  filter?: Maybe<FieldworkerSubscriptionFilter>;
};

export type SubscriptionFilesArgs = {
  filter?: Maybe<FileSubscriptionFilter>;
};

export type SubscriptionJobArgs = {
  filter?: Maybe<JobSubscriptionFilter>;
};

export type SubscriptionJobFieldworkerArgs = {
  filter?: Maybe<JobFieldworkerSubscriptionFilter>;
};

export type SubscriptionJobTypeArgs = {
  filter?: Maybe<JobTypeSubscriptionFilter>;
};

export type SubscriptionPermissionsArgs = {
  filter?: Maybe<PermissionSubscriptionFilter>;
};

export type SubscriptionRolesArgs = {
  filter?: Maybe<RoleSubscriptionFilter>;
};

export type SubscriptionSettingsArgs = {
  filter?: Maybe<SettingSubscriptionFilter>;
};

export type SubscriptionTeamMembersArgs = {
  filter?: Maybe<TeamMemberSubscriptionFilter>;
};

export type SubscriptionUsersArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};

export type SubstringFunctionArguments = {
  len?: Maybe<Scalars['Int']>;
  pos: Scalars['Int'];
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  success?: Maybe<Scalars['Boolean']>;
};

/** Switch Field Attributes */
export type SwitchFieldTypeAttributes = {
  __typename?: 'SwitchFieldTypeAttributes';
  format: Scalars['String'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Switch Type Format Enum */
export enum SwitchTypeFormatEnum {
  ActiveInactive = 'ACTIVE_INACTIVE',
  Custom = 'CUSTOM',
  HighLow = 'HIGH_LOW',
  OnOff = 'ON_OFF',
  TrueFalse = 'TRUE_FALSE',
  YesNo = 'YES_NO',
}

/** Application */
export type SystemApplication = {
  __typename?: 'SystemApplication';
  appType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  status: SystemApplicationStatusEnum;
};

/** ApplicationDeleteMutationInput */
export type SystemApplicationDeleteMutationInput = {
  force?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
};

/** Application install input */
export type SystemApplicationInstallInput = {
  appType: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  status?: Maybe<SystemApplicationStatusEnum>;
};

/** SystemApplicationListResponse output */
export type SystemApplicationListResponse = {
  __typename?: 'SystemApplicationListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemApplication>;
};

/** Application Status Enum */
export enum SystemApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

/** Application update input */
export type SystemApplicationUpdateInput = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  status?: Maybe<SystemApplicationStatusEnum>;
};

export type SystemBillingCurrentPlanResponse = {
  __typename?: 'SystemBillingCurrentPlanResponse';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  price?: Maybe<Scalars['Int']>;
  status?: Maybe<SystemWorkspaceStatus>;
  trialEnd?: Maybe<Scalars['DateTime']>;
};

export type SystemBillingDetailsResponse = {
  __typename?: 'SystemBillingDetailsResponse';
  brand?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  last4?: Maybe<Scalars['String']>;
};

/** BillingDetailsUpdateMutationInput */
export type SystemBillingDetailsUpdateMutationInput = {
  cardToken: Scalars['String'];
};

export type SystemBillingInvoiceItem = {
  __typename?: 'SystemBillingInvoiceItem';
  amountDue?: Maybe<Scalars['Float']>;
  amountPaid?: Maybe<Scalars['Float']>;
  amountRemaining?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  endingBalance?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  invoicePdf?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['Boolean']>;
  periodEnd?: Maybe<Scalars['DateTime']>;
  periodStart?: Maybe<Scalars['DateTime']>;
  plan?: Maybe<SystemBillingInvoiceItemPlanInfo>;
  status?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  workspace?: Maybe<SystemBillingInvoiceItemWorkspaceInfo>;
};

export type SystemBillingInvoiceItemPlanInfo = {
  __typename?: 'SystemBillingInvoiceItemPlanInfo';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type SystemBillingInvoiceItemWorkspaceInfo = {
  __typename?: 'SystemBillingInvoiceItemWorkspaceInfo';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export enum SystemBillingInvoicesListFilterType {
  Customer = 'CUSTOMER',
  Workspace = 'WORKSPACE',
}

/** SystemBillingInvoicesListResponse output */
export type SystemBillingInvoicesListResponse = {
  __typename?: 'SystemBillingInvoicesListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemBillingInvoiceItem>;
};

export type SystemBillingLimitMetricItem = {
  __typename?: 'SystemBillingLimitMetricItem';
  displayName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  showPriority?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
};

export type SystemBillingMetricUsageItem = {
  __typename?: 'SystemBillingMetricUsageItem';
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']>;
};

export type SystemBillingMetricUsageQuotaItem = {
  __typename?: 'SystemBillingMetricUsageQuotaItem';
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']>;
};

/** SystemBillingMetricUsageQuotasListResponse output */
export type SystemBillingMetricUsageQuotasListResponse = {
  __typename?: 'SystemBillingMetricUsageQuotasListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemBillingMetricUsageQuotaItem>;
};

export type SystemBillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

/** SystemBillingMetricUsagesListResponse output */
export type SystemBillingMetricUsagesListResponse = {
  __typename?: 'SystemBillingMetricUsagesListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemBillingMetricUsageItem>;
};

export type SystemBillingNextPlanResponse = {
  __typename?: 'SystemBillingNextPlanResponse';
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type SystemBillingPlanBaseInfo = {
  __typename?: 'SystemBillingPlanBaseInfo';
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isCustom?: Maybe<Scalars['Boolean']>;
  isLegacy?: Maybe<Scalars['Boolean']>;
  limitMetrics?: Maybe<Array<Maybe<SystemBillingPlanLimitMetricItem>>>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type SystemBillingPlanBaseScalarInfo = {
  __typename?: 'SystemBillingPlanBaseScalarInfo';
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type SystemBillingPlanLimitMetricItem = {
  __typename?: 'SystemBillingPlanLimitMetricItem';
  displayName?: Maybe<Scalars['String']>;
  hardLimit?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  overagePrice?: Maybe<Scalars['Int']>;
  softLimit?: Maybe<Scalars['Float']>;
};

/** BillingPlanUpdateMutationInput */
export type SystemBillingPlanUpdateMutationInput = {
  planId: Scalars['ID'];
};

export enum SystemBranchEnvironmentMode {
  Full = 'FULL',
  System = 'SYSTEM',
}

/** Ci Commit Mode */
export enum SystemCiCommitMode {
  Full = 'FULL',
  OnlyMigrations = 'ONLY_MIGRATIONS',
  OnlyProject = 'ONLY_PROJECT',
}

/** Ci Status */
export type SystemCiStatusOutput = {
  __typename?: 'SystemCiStatusOutput';
  migrations?: Maybe<Array<Maybe<Scalars['String']>>>;
  status: Scalars['String'];
};

/** Computed field mode */
export enum SystemComputedFieldMode {
  Stored = 'STORED',
  Virtual = 'VIRTUAL',
}

/** Custom Table Field Type */
export type SystemCustomTableField = {
  __typename?: 'SystemCustomTableField';
  computedMode?: Maybe<SystemComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  fieldType?: Maybe<SystemFieldType>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

/** Date Field Attributes */
export type SystemDateFieldTypeAttributes = {
  __typename?: 'SystemDateFieldTypeAttributes';
  format: Scalars['String'];
};

/** Date Type Format Enum */
export enum SystemDateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME',
}

/** DeployDataResponse */
export type SystemDeployDataResponse = {
  __typename?: 'SystemDeployDataResponse';
  buildName: Scalars['String'];
  uploadBuildUrl: Scalars['String'];
  uploadMetaDataUrl: Scalars['String'];
};

export enum SystemDeployModeEnum {
  Full = 'FULL',
  Functions = 'FUNCTIONS',
  Migrations = 'MIGRATIONS',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT',
}

/** DeployOptions */
export type SystemDeployOptions = {
  extensionNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  mode?: Maybe<SystemDeployModeEnum>;
  pluginNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum SystemDeployStatusEnum {
  Compiling = 'compiling',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Deploying = 'deploying',
  Initialize = 'initialize',
  Preparing = 'preparing',
}

/** SystemDeployStatusResult */
export type SystemDeployStatusResult = {
  __typename?: 'SystemDeployStatusResult';
  message?: Maybe<Scalars['String']>;
  status: SystemDeployStatusEnum;
};

/** DeployingBuildInput */
export type SystemDeployingBuildInput = {
  buildName: Scalars['String'];
  options?: Maybe<SystemDeployOptions>;
};

/** SystemEnvironmentBackupListResponse output */
export type SystemEnvironmentBackupListResponse = {
  __typename?: 'SystemEnvironmentBackupListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<EnvironmentBackupItem>;
};

export type SystemEnvironmentMember = {
  __typename?: 'SystemEnvironmentMember';
  avatar?: Maybe<SystemEnvironmentMemberAvatar>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  permissions?: Maybe<SystemEnvironmentMemberPermissionsList>;
  roles?: Maybe<SystemEnvironmentMemberRolesList>;
  status: Scalars['String'];
};

export type SystemEnvironmentMemberAvatar = {
  __typename?: 'SystemEnvironmentMemberAvatar';
  downloadUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SystemEnvironmentMemberFilter = {
  email: Scalars['String'];
};

export type SystemEnvironmentMemberPermission = {
  __typename?: 'SystemEnvironmentMemberPermission';
  permission?: Maybe<Scalars['JSON']>;
  resource?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
};

export type SystemEnvironmentMemberPermissionsList = {
  __typename?: 'SystemEnvironmentMemberPermissionsList';
  count: Scalars['Int'];
  items?: Maybe<Array<SystemEnvironmentMemberPermission>>;
};

export type SystemEnvironmentMemberRole = {
  __typename?: 'SystemEnvironmentMemberRole';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type SystemEnvironmentMemberRoleIdFilterPredicate = {
  equals?: Maybe<Scalars['ID']>;
  not_equals?: Maybe<Scalars['ID']>;
};

export type SystemEnvironmentMemberRolesList = {
  __typename?: 'SystemEnvironmentMemberRolesList';
  count: Scalars['Int'];
  items?: Maybe<Array<SystemEnvironmentMemberRole>>;
};

export type SystemEnvironmentMemberUpdateData = {
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SystemEnvironmentMembersFilter = {
  email: Scalars['String'];
};

export type SystemEnvironmentMembersListFilter = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  roleId?: Maybe<SystemEnvironmentMemberRoleIdFilterPredicate>;
};

/** SystemEnvironmentMembersListResponse output */
export type SystemEnvironmentMembersListResponse = {
  __typename?: 'SystemEnvironmentMembersListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemEnvironmentMember>;
};

export type SystemEnvironmentMembersListSort = {
  email?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  isOwner?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
};

export type SystemEnvironmentRoleBaseInfo = {
  __typename?: 'SystemEnvironmentRoleBaseInfo';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type SystemEnvironmentRoleList = {
  __typename?: 'SystemEnvironmentRoleList';
  environmentId: Scalars['String'];
  environmentName: Scalars['String'];
  exists?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<Array<Maybe<SystemEnvironmentRoleBaseInfo>>>;
};

export type SystemEnvironmentSettings = {
  __typename?: 'SystemEnvironmentSettings';
  deleteLock?: Maybe<Scalars['Boolean']>;
  fileManagementProvider?: Maybe<Scalars['String']>;
};

/** SystemEnvironmentsListResponse output */
export type SystemEnvironmentsListResponse = {
  __typename?: 'SystemEnvironmentsListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<EnvironmentItem>;
};

/** Field Data Features */
export type SystemFieldDataFeatures = {
  __typename?: 'SystemFieldDataFeatures';
  create: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

/** Field Schema Features */
export type SystemFieldSchemaFeatures = {
  __typename?: 'SystemFieldSchemaFeatures';
  delete: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

/** Field types */
export enum SystemFieldType {
  Date = 'DATE',
  File = 'FILE',
  Geo = 'GEO',
  Id = 'ID',
  Json = 'JSON',
  MissingRelation = 'MISSING_RELATION',
  Number = 'NUMBER',
  OneWayRelation = 'ONE_WAY_RELATION',
  Relation = 'RELATION',
  Smart = 'SMART',
  Switch = 'SWITCH',
  Text = 'TEXT',
  Uuid = 'UUID',
}

/** Field Type Attributes */
export type SystemFieldTypeAttributes =
  | SystemDateFieldTypeAttributes
  | SystemFileFieldTypeAttributes
  | SystemGeoFieldTypeAttributes
  | SystemMissingRelationFieldTypeAttributes
  | SystemNumberFieldTypeAttributes
  | SystemSmartFieldTypeAttributes
  | SystemSwitchFieldTypeAttributes
  | SystemTextFieldTypeAttributes
  | SystemUuidFieldTypeAttributes;

/** Field Type Attributes Input */
export type SystemFieldTypeAttributesInput = {
  autoIncrement?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  expiration?: Maybe<Scalars['Int']>;
  fieldSize?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
  isBigInt?: Maybe<Scalars['Boolean']>;
  listOptions?: Maybe<Array<Scalars['String']>>;
  maxSize?: Maybe<Scalars['Int']>;
  maxValue?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Int']>;
  srid?: Maybe<Scalars['Int']>;
  typeRestrictions?: Maybe<Array<Scalars['String']>>;
};

/** File Field Attributes */
export type SystemFileFieldTypeAttributes = {
  __typename?: 'SystemFileFieldTypeAttributes';
  expiration?: Maybe<Scalars['Int']>;
  format: Scalars['String'];
  maxSize?: Maybe<Scalars['Int']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']>;
  typeRestrictions?: Maybe<Array<Scalars['String']>>;
};

/** File Type Format Enum */
export enum SystemFileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE',
}

/** FunctionInfo */
export type SystemFunctionInfo = {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']>;
  functionType: SystemFunctionType;
  name: Scalars['String'];
};

/** FunctionInfoFilter */
export type SystemFunctionInfoFilter = {
  description?: Maybe<Scalars['String']>;
  functionType?: Maybe<SystemFunctionType>;
  name?: Maybe<Scalars['String']>;
};

/** FunctionInfoOrderBy */
export enum SystemFunctionInfoOrderBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

/** SystemFunctionListResponse output */
export type SystemFunctionListResponse = {
  __typename?: 'SystemFunctionListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemFunctionInfo>;
};

/** FunctionLogEntry */
export type SystemFunctionLogEntry = {
  __typename?: 'SystemFunctionLogEntry';
  message?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

/** FunctionResolverInfo */
export type SystemFunctionResolverInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionResolverInfo';
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']>;
  functionType: SystemFunctionType;
  gqlType: Scalars['String'];
  name: Scalars['String'];
};

/** FunctionTaskInfo */
export type SystemFunctionTaskInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionTaskInfo';
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']>;
  functionType: SystemFunctionType;
  name: Scalars['String'];
  scheduleExpression?: Maybe<Scalars['String']>;
};

/** FunctionTriggerInfo */
export type SystemFunctionTriggerInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionTriggerInfo';
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']>;
  functionType: SystemFunctionType;
  name: Scalars['String'];
  operation: Scalars['String'];
  tableName: Scalars['String'];
  type: Scalars['String'];
};

/** FunctionType */
export enum SystemFunctionType {
  Resolver = 'resolver',
  Schedule = 'schedule',
  Task = 'task',
  Trigger = 'trigger',
  Webhook = 'webhook',
}

/** FunctionWebhookInfo */
export type SystemFunctionWebhookInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionWebhookInfo';
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']>;
  functionType: SystemFunctionType;
  httpMethod: Scalars['String'];
  name: Scalars['String'];
  workspaceFullPath: Scalars['String'];
  workspaceRelativePath: Scalars['String'];
};

/** Diff Environment Input */
export type SystemGenerateEnvironmentOutput = {
  __typename?: 'SystemGenerateEnvironmentOutput';
  url?: Maybe<Scalars['String']>;
};

/** Geo Field Attributes */
export type SystemGeoFieldTypeAttributes = {
  __typename?: 'SystemGeoFieldTypeAttributes';
  format: Scalars['String'];
  srid?: Maybe<Scalars['Int']>;
};

export type SystemInboxEventDetailsUnion =
  | SystemInboxEventEnvironmentInvitationDetails
  | SystemInboxEventOrganizationInvitationDetails;

export type SystemInboxEventEnvironmentInvitationDetails = {
  __typename?: 'SystemInboxEventEnvironmentInvitationDetails';
  environmentName?: Maybe<Scalars['String']>;
  invitedBy?: Maybe<SystemInboxEventInvitedBy>;
  status?: Maybe<SystemInboxEventStatusEnum>;
  uuid?: Maybe<Scalars['String']>;
  workspace?: Maybe<SystemInboxEventWorkspace>;
};

export type SystemInboxEventInvitedBy = {
  __typename?: 'SystemInboxEventInvitedBy';
  avatar?: Maybe<GraphQlFileItemResponse>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type SystemInboxEventItem = {
  __typename?: 'SystemInboxEventItem';
  createdAt: Scalars['DateTime'];
  details?: Maybe<SystemInboxEventDetailsUnion>;
  id: Scalars['ID'];
  isCompleted?: Maybe<Scalars['Boolean']>;
  type?: Maybe<SystemInboxEventTypeEnum>;
};

export type SystemInboxEventOrganization = {
  __typename?: 'SystemInboxEventOrganization';
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type SystemInboxEventOrganizationInvitationDetails = {
  __typename?: 'SystemInboxEventOrganizationInvitationDetails';
  invitedBy?: Maybe<SystemInboxEventInvitedBy>;
  organization?: Maybe<SystemInboxEventOrganization>;
  status?: Maybe<SystemInboxEventStatusEnum>;
  uuid?: Maybe<Scalars['String']>;
};

export enum SystemInboxEventStatusEnum {
  Accepted = 'accepted',
  Declined = 'declined',
  Sent = 'sent',
}

export enum SystemInboxEventTypeEnum {
  EnvironmentInvitation = 'EnvironmentInvitation',
  OrganizationInvitation = 'OrganizationInvitation',
}

export type SystemInboxEventWorkspace = {
  __typename?: 'SystemInboxEventWorkspace';
  apiHost?: Maybe<Scalars['String']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

/** SystemInboxEventsListResponse output */
export type SystemInboxEventsListResponse = {
  __typename?: 'SystemInboxEventsListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemInboxEventItem>;
};

/** Table Create Index Input */
export type SystemIndexCreateInput = {
  columns: Array<SystemTableIndexColumnInput>;
  force?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  tableId: Scalars['ID'];
  type: TableIndexType;
};

/** Table Delete Index Input */
export type SystemIndexDeleteInput = {
  id: Scalars['ID'];
};

/** Table Update Index Input */
export type SystemIndexUpdateInput = {
  columns?: Maybe<Array<SystemTableIndexColumnInput>>;
  force?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<TableIndexType>;
};

/** Invite members input */
export type SystemInviteMembersInput = {
  recipients: Array<SystemInviteRecipientInput>;
};

/** Invite recipient input */
export type SystemInviteRecipientInput = {
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['ID']>>;
};

/** Invited By Name */
export type SystemInvitedByName = {
  __typename?: 'SystemInvitedByName';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  workspaceName?: Maybe<Scalars['String']>;
};

/** InvokeData */
export type SystemInvokeData = {
  functionName: Scalars['String'];
  inputArgs?: Maybe<Scalars['String']>;
};

/** InvokeFunctionResponse */
export type SystemInvokeFunctionResponse = {
  __typename?: 'SystemInvokeFunctionResponse';
  responseData: Scalars['String'];
};

export type SystemMemberAccountInfo = {
  __typename?: 'SystemMemberAccountInfo';
  aboutMe?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  city?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  githubUsername?: Maybe<Scalars['String']>;
  isDeveloper?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  learningMode?: Maybe<Scalars['Boolean']>;
  linkedInUsername?: Maybe<Scalars['String']>;
  projectDescription?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  twitterUsername?: Maybe<Scalars['String']>;
  type?: Maybe<SystemUserType>;
  website?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type SystemMemberAccountUpsertDataInput = {
  aboutMe?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  avatar?: Maybe<GraphQlCreateFileItemInput>;
  city?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  githubUsername?: Maybe<Scalars['String']>;
  isDeveloper?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  learningMode?: Maybe<Scalars['Boolean']>;
  linkedInUsername?: Maybe<Scalars['String']>;
  projectDescription?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  twitterUsername?: Maybe<Scalars['String']>;
  type?: Maybe<SystemUserType>;
  website?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

/** Member Invitation */
export type SystemMemberInvitation = {
  __typename?: 'SystemMemberInvitation';
  accepted?: Maybe<Scalars['Boolean']>;
  acceptedOn?: Maybe<Scalars['DateTime']>;
  apiHost?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  resentOn?: Maybe<Scalars['DateTime']>;
};

/** Member invitation accept input */
export type SystemMemberInvitationAcceptInput = {
  accepted: Scalars['Boolean'];
  id: Scalars['String'];
};

/** Member Invitation Accept Response */
export type SystemMemberInvitationAcceptResponse = {
  __typename?: 'SystemMemberInvitationAcceptResponse';
  success: Scalars['Boolean'];
};

/** Cancel members invitations input */
export type SystemMemberInvitationCancelInput = {
  email: Scalars['String'];
};

/** Resend member invitation input */
export type SystemMemberInvitationResendInput = {
  email: Scalars['ID'];
};

export type SystemMemberInvitationsList = {
  __typename?: 'SystemMemberInvitationsList';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<SystemMemberInvitation>>>;
};

/** MemberPaymentDetailsUpdateMutationInput */
export type SystemMemberPaymentDetailsUpdateMutationInput = {
  cardToken: Scalars['String'];
};

/** MissingRelation Field Attributes */
export type SystemMissingRelationFieldTypeAttributes = {
  __typename?: 'SystemMissingRelationFieldTypeAttributes';
  missingTable: Scalars['String'];
};

export type SystemMutation = {
  __typename?: 'SystemMutation';
  applicationDelete?: Maybe<SuccessResponse>;
  applicationInstall?: Maybe<SystemApplication>;
  applicationUpdate?: Maybe<SystemApplication>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetailsUpdate, system.organizationPaymentDetailsUpdate or system.workspacePaymentDetailsUpdate` instead. */
  billingDetailsUpdate?: Maybe<SystemBillingDetailsResponse>;
  billingPlanUpdate?: Maybe<SystemBillingCurrentPlanResponse>;
  ciCommit?: Maybe<AsyncSession>;
  ciInstall?: Maybe<SuccessResponse>;
  deploy?: Maybe<Scalars['Boolean']>;
  environmentBackup?: Maybe<AsyncSession>;
  environmentBranch?: Maybe<AsyncSession>;
  environmentDelete?: Maybe<SuccessResponse>;
  environmentDeleteAsync?: Maybe<AsyncSession>;
  environmentMemberDelete: SuccessResponse;
  environmentMemberUpdate?: Maybe<SystemEnvironmentMember>;
  environmentRestore?: Maybe<AsyncSession>;
  environmentSetup?: Maybe<SuccessResponse>;
  fieldCreate: SystemTableField;
  fieldDelete: SuccessResponse;
  fieldUpdate: SystemTableField;
  fieldUpdatePosition: SuccessResponse;
  indexCreate: SystemTableIndex;
  indexDelete?: Maybe<SuccessResponse>;
  indexUpdate: SystemTableIndex;
  inviteMembers: Array<Maybe<SystemTeamInvitationDetails>>;
  invoke?: Maybe<SystemInvokeFunctionResponse>;
  memberAccountUpsert?: Maybe<SystemMemberAccountInfo>;
  memberInvitationAccept: SystemMemberInvitationAcceptResponse;
  memberInvitationCancel?: Maybe<SuccessResponse>;
  memberInvitationResend?: Maybe<SuccessResponse>;
  memberPaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse>;
  organizationInviteUser?: Maybe<OrganizationUserInvitationResponse>;
  organizationInviteUserAccept?: Maybe<SuccessResponse>;
  organizationInviteUserCancel?: Maybe<SuccessResponse>;
  organizationPaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse>;
  organizationUpdate?: Maybe<SystemOrganizationItem>;
  organizationUserRemove?: Maybe<SuccessResponse>;
  organizationWorkspaceAdd?: Maybe<SuccessResponse>;
  organizationWorkspaceAddAccept?: Maybe<SuccessResponse>;
  organizationWorkspaceAddCancel?: Maybe<SuccessResponse>;
  organizationWorkspaceRemove?: Maybe<SuccessResponse>;
  organizationWorkspaceUserRemove?: Maybe<SuccessResponse>;
  organizationWorkspaceUserShare?: Maybe<SuccessResponse>;
  prepareDeploy: SystemDeployDataResponse;
  tableCreate: SystemTable;
  tableDelete: SuccessResponse;
  tableUpdate: SystemTable;
  viewCreate: SystemTable;
  viewUpdate: SystemTable;
  workspaceCreate?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceCreateAsync?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceDelete?: Maybe<SuccessResponse>;
  workspaceLeave?: Maybe<SuccessResponse>;
  workspacePaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse>;
  workspaceTransferAccept?: Maybe<SuccessResponse>;
  workspaceTransferCancel?: Maybe<SuccessResponse>;
  workspaceTransferRegister?: Maybe<SuccessResponse>;
  workspaceUpdate?: Maybe<SystemWorkspaceUpdateResponse>;
};

export type SystemMutationApplicationDeleteArgs = {
  data: SystemApplicationDeleteMutationInput;
};

export type SystemMutationApplicationInstallArgs = {
  data: SystemApplicationInstallInput;
};

export type SystemMutationApplicationUpdateArgs = {
  data: SystemApplicationUpdateInput;
};

export type SystemMutationBillingDetailsUpdateArgs = {
  data: SystemBillingDetailsUpdateMutationInput;
};

export type SystemMutationBillingPlanUpdateArgs = {
  data: SystemBillingPlanUpdateMutationInput;
};

export type SystemMutationCiCommitArgs = {
  build?: Maybe<Scalars['String']>;
  migrationNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  mode?: Maybe<SystemCiCommitMode>;
};

export type SystemMutationDeployArgs = {
  data?: Maybe<SystemDeployingBuildInput>;
};

export type SystemMutationEnvironmentBackupArgs = {
  environmentName: Scalars['String'];
};

export type SystemMutationEnvironmentBranchArgs = {
  mode?: Maybe<SystemBranchEnvironmentMode>;
  name: Scalars['String'];
};

export type SystemMutationEnvironmentDeleteArgs = {
  environmentName: Scalars['String'];
};

export type SystemMutationEnvironmentDeleteAsyncArgs = {
  environmentName: Scalars['String'];
};

export type SystemMutationEnvironmentMemberDeleteArgs = {
  filter?: Maybe<SystemEnvironmentMembersFilter>;
};

export type SystemMutationEnvironmentMemberUpdateArgs = {
  data?: Maybe<SystemEnvironmentMemberUpdateData>;
  filter?: Maybe<SystemEnvironmentMembersFilter>;
};

export type SystemMutationEnvironmentRestoreArgs = {
  backup: Scalars['String'];
  environmentName: Scalars['String'];
};

export type SystemMutationEnvironmentSetupArgs = {
  data?: Maybe<EnvironmentSetupInput>;
};

export type SystemMutationFieldCreateArgs = {
  data: SystemTableFieldCreateInput;
};

export type SystemMutationFieldDeleteArgs = {
  data: SystemTableFieldDeleteInput;
};

export type SystemMutationFieldUpdateArgs = {
  data: SystemTableFieldUpdateInput;
};

export type SystemMutationFieldUpdatePositionArgs = {
  data: SystemTableFieldPositionUpdateInput;
};

export type SystemMutationIndexCreateArgs = {
  data: SystemIndexCreateInput;
};

export type SystemMutationIndexDeleteArgs = {
  data: SystemIndexDeleteInput;
};

export type SystemMutationIndexUpdateArgs = {
  data: SystemIndexUpdateInput;
};

export type SystemMutationInviteMembersArgs = {
  data: SystemInviteMembersInput;
  force?: Maybe<Scalars['Boolean']>;
};

export type SystemMutationInvokeArgs = {
  data?: Maybe<SystemInvokeData>;
};

export type SystemMutationMemberAccountUpsertArgs = {
  data?: Maybe<SystemMemberAccountUpsertDataInput>;
};

export type SystemMutationMemberInvitationAcceptArgs = {
  data: SystemMemberInvitationAcceptInput;
};

export type SystemMutationMemberInvitationCancelArgs = {
  data: SystemMemberInvitationCancelInput;
};

export type SystemMutationMemberInvitationResendArgs = {
  data: SystemMemberInvitationResendInput;
};

export type SystemMutationMemberPaymentDetailsUpdateArgs = {
  data: SystemMemberPaymentDetailsUpdateMutationInput;
};

export type SystemMutationOrganizationInviteUserArgs = {
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  organizationId: Scalars['String'];
  role: Scalars['String'];
};

export type SystemMutationOrganizationInviteUserAcceptArgs = {
  invitationId: Scalars['String'];
};

export type SystemMutationOrganizationInviteUserCancelArgs = {
  invitationId: Scalars['String'];
};

export type SystemMutationOrganizationPaymentDetailsUpdateArgs = {
  data: SystemOrganizationPaymentDetailsUpdateMutationInput;
};

export type SystemMutationOrganizationUpdateArgs = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<GraphQlCreateFileItemInput>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<SystemOrganizationTypeEnum>;
};

export type SystemMutationOrganizationUserRemoveArgs = {
  email: Scalars['String'];
  organizationId: Scalars['String'];
};

export type SystemMutationOrganizationWorkspaceAddArgs = {
  organizationId: Scalars['String'];
  workspaceId: Scalars['String'];
};

export type SystemMutationOrganizationWorkspaceAddAcceptArgs = {
  sessionId: Scalars['String'];
};

export type SystemMutationOrganizationWorkspaceAddCancelArgs = {
  sessionId: Scalars['String'];
};

export type SystemMutationOrganizationWorkspaceRemoveArgs = {
  organizationId: Scalars['String'];
  workspaceId: Scalars['String'];
};

export type SystemMutationOrganizationWorkspaceUserRemoveArgs = {
  email: Scalars['String'];
  organizationId: Scalars['String'];
  workspaceId: Scalars['String'];
};

export type SystemMutationOrganizationWorkspaceUserShareArgs = {
  email: Scalars['String'];
  environments?: Maybe<Array<Maybe<SystemOrganizationWorkspaceUserShareInfo>>>;
};

export type SystemMutationTableCreateArgs = {
  data: SystemTableCreateInput;
};

export type SystemMutationTableDeleteArgs = {
  data: SystemTableDeleteInput;
};

export type SystemMutationTableUpdateArgs = {
  data: SystemTableUpdateInput;
};

export type SystemMutationViewCreateArgs = {
  data: SystemViewCreateInput;
};

export type SystemMutationViewUpdateArgs = {
  data: SystemViewUpdateInput;
};

export type SystemMutationWorkspaceCreateArgs = {
  data: SystemWorkspaceCreateMutationInput;
};

export type SystemMutationWorkspaceCreateAsyncArgs = {
  data: SystemWorkspaceCreateMutationInput;
};

export type SystemMutationWorkspaceDeleteArgs = {
  data: SystemWorkspaceDeleteMutationInput;
};

export type SystemMutationWorkspaceLeaveArgs = {
  force?: Maybe<Scalars['Boolean']>;
};

export type SystemMutationWorkspacePaymentDetailsUpdateArgs = {
  data: SystemWorkspacePaymentDetailsUpdateMutationInput;
};

export type SystemMutationWorkspaceTransferAcceptArgs = {
  workspaceId: Scalars['String'];
};

export type SystemMutationWorkspaceTransferCancelArgs = {
  workspaceId: Scalars['String'];
};

export type SystemMutationWorkspaceTransferRegisterArgs = {
  owner: Scalars['String'];
  workspaceId: Scalars['String'];
};

export type SystemMutationWorkspaceUpdateArgs = {
  data: SystemWorkspaceUpdateMutationInput;
};

/** Number Field Attributes */
export type SystemNumberFieldTypeAttributes = {
  __typename?: 'SystemNumberFieldTypeAttributes';
  autoIncrement?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  format: Scalars['String'];
  isBigInt?: Maybe<Scalars['Boolean']>;
  maxValue?: Maybe<Scalars['Float']>;
  minValue?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Int']>;
};

/** Number Type Format Enum */
export enum SystemNumberTypeFormatEnum {
  Currency = 'CURRENCY',
  Fraction = 'FRACTION',
  Number = 'NUMBER',
  Percentage = 'PERCENTAGE',
  Scientific = 'SCIENTIFIC',
}

export type SystemOrganizationBaseItem = {
  __typename?: 'SystemOrganizationBaseItem';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<SystemOrganizationTypeEnum>;
};

export type SystemOrganizationInvitation = {
  __typename?: 'SystemOrganizationInvitation';
  accepted?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  emailFrom: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  firstNameFrom?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  lastNameFrom?: Maybe<Scalars['String']>;
  organization: SystemOrganizationBaseItem;
  role: Scalars['String'];
};

export type SystemOrganizationItem = {
  __typename?: 'SystemOrganizationItem';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<SystemOrganizationItemImage>;
  name: Scalars['String'];
  predefinedPlans?: Maybe<Array<Maybe<SystemBillingPlanBaseScalarInfo>>>;
  type?: Maybe<SystemOrganizationTypeEnum>;
  users?: Maybe<Array<Maybe<SystemOrganizationUserInfo>>>;
};

export type SystemOrganizationItemImage = {
  __typename?: 'SystemOrganizationItemImage';
  downloadUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** OrganizationPaymentDetailsUpdateMutationInput */
export type SystemOrganizationPaymentDetailsUpdateMutationInput = {
  cardToken: Scalars['String'];
  organizationId: Scalars['ID'];
};

export enum SystemOrganizationTypeEnum {
  Agency = 'agency',
  Community = 'community',
  Company = 'company',
}

export type SystemOrganizationUserBaseInfo = {
  __typename?: 'SystemOrganizationUserBaseInfo';
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  status: Scalars['String'];
};

export type SystemOrganizationUserInfo = {
  __typename?: 'SystemOrganizationUserInfo';
  avatar?: Maybe<GraphQlFileItemResponse>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  status: Scalars['String'];
  workspaces?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem>>>;
};

export type SystemOrganizationWorkspaceAddSession = {
  __typename?: 'SystemOrganizationWorkspaceAddSession';
  organization: SystemOrganizationBaseItem;
  status?: Maybe<Scalars['String']>;
  user?: Maybe<SystemOrganizationUserBaseInfo>;
  workspace: SystemOrganizationWorkspaceItem;
};

export type SystemOrganizationWorkspaceItem = {
  __typename?: 'SystemOrganizationWorkspaceItem';
  id: Scalars['ID'];
  name: Scalars['String'];
  organization?: Maybe<SystemOrganizationBaseItem>;
};

export type SystemOrganizationWorkspaceUserShareInfo = {
  environmentId: Scalars['String'];
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** SystemOrganizationsListAllResponse output */
export type SystemOrganizationsListAllResponse = {
  __typename?: 'SystemOrganizationsListAllResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemOrganizationItem>;
};

/** SystemOrganizationsListResponse output */
export type SystemOrganizationsListResponse = {
  __typename?: 'SystemOrganizationsListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemOrganizationItem>;
};

export type SystemPaymentDetailsResponse = {
  __typename?: 'SystemPaymentDetailsResponse';
  brand?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  last4?: Maybe<Scalars['String']>;
};

/** Diff Environment Input */
export type SystemPlanEnvironmentOutput = {
  __typename?: 'SystemPlanEnvironmentOutput';
  url?: Maybe<Scalars['String']>;
};

export type SystemQuery = {
  __typename?: 'SystemQuery';
  application?: Maybe<SystemApplication>;
  applicationsList?: Maybe<SystemApplicationListResponse>;
  billingCurrentPlan?: Maybe<SystemBillingCurrentPlanResponse>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead. */
  billingDetails?: Maybe<SystemBillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead. */
  billingInvoicesList: SystemBillingInvoicesListResponse;
  billingMetricUsageQuotasList: SystemBillingMetricUsageQuotasListResponse;
  billingMetricUsagesList: SystemBillingMetricUsagesListResponse;
  ciGenerate?: Maybe<SystemGenerateEnvironmentOutput>;
  /** @deprecated No longer supported. Use `ciGenerate` instead. */
  ciPlan?: Maybe<SystemPlanEnvironmentOutput>;
  ciStatus?: Maybe<SystemCiStatusOutput>;
  deployStatus: SystemDeployStatusResult;
  environmentBackupsList?: Maybe<SystemEnvironmentBackupListResponse>;
  environmentMember?: Maybe<SystemEnvironmentMember>;
  environmentMembersList?: Maybe<SystemEnvironmentMembersListResponse>;
  environmentSettings?: Maybe<SystemEnvironmentSettings>;
  environmentsList?: Maybe<SystemEnvironmentsListResponse>;
  functionsList?: Maybe<SystemFunctionListResponse>;
  getEnvironmentRoles?: Maybe<Array<Maybe<SystemEnvironmentRoleList>>>;
  getWorkspaceTransferInfo?: Maybe<WorkspaceTransferItem>;
  inboxEventsList?: Maybe<SystemInboxEventsListResponse>;
  introspection?: Maybe<IntrospectionQueryResponse>;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']>>>;
  logsList?: Maybe<Array<Maybe<SystemFunctionLogEntry>>>;
  memberAccount?: Maybe<SystemMemberAccountInfo>;
  memberInvitation?: Maybe<SystemMemberInvitation>;
  memberInvitationsList?: Maybe<SystemMemberInvitationsList>;
  memberPaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  organizationById?: Maybe<SystemOrganizationItem>;
  organizationInvitationById?: Maybe<SystemOrganizationInvitation>;
  organizationPaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  organizationWorkspaceAddSession?: Maybe<SystemOrganizationWorkspaceAddSession>;
  organizationsListAll?: Maybe<SystemOrganizationsListAllResponse>;
  organizationsListByUser?: Maybe<SystemOrganizationsListResponse>;
  table?: Maybe<SystemTable>;
  tableField?: Maybe<SystemTableField>;
  tablesList: SystemTableListResponse;
  userBillingConfiguration: SystemUserBillingConfigurationResponse;
  userInvitationsList?: Maybe<SystemUserInvitationList>;
  workspacePaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  workspacesFrontendList?: Maybe<SystemWorkspaceListResponse>;
  workspacesList?: Maybe<SystemWorkspaceListResponse>;
};

export type SystemQueryApplicationArgs = {
  id: Scalars['String'];
};

export type SystemQueryBillingInvoicesListArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  by?: Maybe<SystemBillingInvoicesListFilterType>;
  limit?: Maybe<Scalars['Int']>;
};

export type SystemQueryBillingMetricUsagesListArgs = {
  filter?: Maybe<SystemBillingMetricUsagesListFilter>;
};

export type SystemQueryCiGenerateArgs = {
  sourceEnvironmentId?: Maybe<Scalars['String']>;
  tables?: Maybe<Array<Scalars['String']>>;
  targetEnvironmentId?: Maybe<Scalars['String']>;
};

export type SystemQueryCiPlanArgs = {
  sourceEnvironmentId?: Maybe<Scalars['String']>;
  tables?: Maybe<Array<Scalars['String']>>;
  targetEnvironmentId?: Maybe<Scalars['String']>;
};

export type SystemQueryDeployStatusArgs = {
  buildName: Scalars['String'];
};

export type SystemQueryEnvironmentBackupsListArgs = {
  environmentName?: Maybe<Scalars['String']>;
};

export type SystemQueryEnvironmentMemberArgs = {
  filter?: Maybe<SystemEnvironmentMemberFilter>;
};

export type SystemQueryEnvironmentMembersListArgs = {
  filter?: Maybe<SystemEnvironmentMembersListFilter>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SystemEnvironmentMembersListSort>>;
};

export type SystemQueryFunctionsListArgs = {
  applicationId?: Maybe<Scalars['String']>;
  filter?: Maybe<SystemFunctionInfoFilter>;
  orderBy?: Maybe<Array<Maybe<SystemFunctionInfoOrderBy>>>;
};

export type SystemQueryGetEnvironmentRolesArgs = {
  email?: Maybe<Scalars['String']>;
  workspaceId: Scalars['String'];
};

export type SystemQueryGetWorkspaceTransferInfoArgs = {
  workspaceId: Scalars['String'];
};

export type SystemQueryInboxEventsListArgs = {
  filter?: Maybe<InboxEventsListFilter>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type SystemQueryLogsArgs = {
  applicationId?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['DateTime']>;
  functionName: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
};

export type SystemQueryLogsListArgs = {
  applicationId?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['DateTime']>;
  functionName: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
};

export type SystemQueryMemberInvitationArgs = {
  id: Scalars['String'];
};

export type SystemQueryOrganizationByIdArgs = {
  organizationId: Scalars['String'];
};

export type SystemQueryOrganizationInvitationByIdArgs = {
  invitationId: Scalars['String'];
};

export type SystemQueryOrganizationPaymentDetailsArgs = {
  organizationId: Scalars['ID'];
};

export type SystemQueryOrganizationWorkspaceAddSessionArgs = {
  sessionId: Scalars['String'];
};

export type SystemQueryTableArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type SystemQueryTableFieldArgs = {
  id: Scalars['ID'];
};

export type SystemQueryTablesListArgs = {
  filter?: Maybe<SystemTableListFilter>;
};

/** Relation */
export type SystemRelation = {
  __typename?: 'SystemRelation';
  refField?: Maybe<SystemTableField>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList?: Maybe<Scalars['Boolean']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']>;
  refFieldName?: Maybe<Scalars['String']>;
  refTable: SystemTable;
  relationFieldName?: Maybe<Scalars['String']>;
  relationTableName?: Maybe<Scalars['String']>;
};

/** Relation Create Input */
export type SystemRelationCreateInput = {
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList: Scalars['Boolean'];
  refFieldIsRequired: Scalars['Boolean'];
  refFieldName?: Maybe<Scalars['String']>;
  refTableId: Scalars['ID'];
};

/** Relation Update Input */
export type SystemRelationUpdateInput = {
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList?: Maybe<Scalars['Boolean']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']>;
  refFieldName?: Maybe<Scalars['String']>;
  refTableId?: Maybe<Scalars['ID']>;
};

/** Schema Origin */
export type SystemSchemaOrigin = {
  __typename?: 'SystemSchemaOrigin';
  provider?: Maybe<Scalars['String']>;
  type: SystemSchemaOriginType;
};

/** Schema Origin Type Enum */
export enum SystemSchemaOriginType {
  Local = 'LOCAL',
  Remote = 'REMOTE',
  View = 'VIEW',
}

/** Smart Field Attributes */
export type SystemSmartFieldTypeAttributes = {
  __typename?: 'SystemSmartFieldTypeAttributes';
  format: Scalars['String'];
  innerFields?: Maybe<Array<Maybe<SystemCustomTableField>>>;
};

/** Smart Type Format Enum */
export enum SystemSmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE',
}

/** Switch Field Attributes */
export type SystemSwitchFieldTypeAttributes = {
  __typename?: 'SystemSwitchFieldTypeAttributes';
  format: Scalars['String'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Switch Type Format Enum */
export enum SystemSwitchTypeFormatEnum {
  ActiveInactive = 'ACTIVE_INACTIVE',
  Custom = 'CUSTOM',
  HighLow = 'HIGH_LOW',
  OnOff = 'ON_OFF',
  TrueFalse = 'TRUE_FALSE',
  YesNo = 'YES_NO',
}

/** Table */
export type SystemTable = {
  __typename?: 'SystemTable';
  application?: Maybe<SystemApplication>;
  attributes?: Maybe<SystemTableAttributes>;
  dataFeatures: SystemTableDataFeatures;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<SystemTableField>>;
  id: Scalars['ID'];
  indexes?: Maybe<Array<SystemTableIndex>>;
  isSystem: Scalars['Boolean'];
  name: Scalars['String'];
  origin: SystemSchemaOrigin;
  schemaFeatures: SystemTableSchemaFeatures;
};

/** Table Attributes */
export type SystemTableAttributes = SystemViewAttributes;

/** Table Create Input */
export type SystemTableCreateInput = {
  applicationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** Table Data Features */
export type SystemTableDataFeatures = {
  __typename?: 'SystemTableDataFeatures';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

/** Table Delete Input */
export type SystemTableDeleteInput = {
  id: Scalars['ID'];
};

/** TableField */
export type SystemTableField = {
  __typename?: 'SystemTableField';
  computedMode?: Maybe<SystemComputedFieldMode>;
  dataFeatures: SystemFieldDataFeatures;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  fieldType: SystemFieldType;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
  id: Scalars['ID'];
  isList: Scalars['Boolean'];
  isMeta: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isSystem: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  origin: SystemSchemaOrigin;
  relation?: Maybe<SystemRelation>;
  schemaFeatures: SystemFieldSchemaFeatures;
  table: SystemTable;
};

/** Table Field Create Input */
export type SystemTableFieldCreateInput = {
  computedMode?: Maybe<SystemComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  fieldType: SystemFieldType;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributesInput>;
  force?: Maybe<Scalars['Boolean']>;
  initialValue?: Maybe<Scalars['String']>;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  position?: Maybe<Scalars['Int']>;
  relation?: Maybe<SystemRelationCreateInput>;
  tableId: Scalars['ID'];
};

/** Table Field Delete Input */
export type SystemTableFieldDeleteInput = {
  id: Scalars['ID'];
};

/** Table Field Position Update Input */
export type SystemTableFieldPositionUpdateInput = {
  id: Scalars['ID'];
  newPosition: Scalars['Int'];
};

/** Table Field Update Input */
export type SystemTableFieldUpdateInput = {
  computedMode?: Maybe<SystemComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  fieldType?: Maybe<SystemFieldType>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributesInput>;
  force?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  initialValue?: Maybe<Scalars['String']>;
  isList?: Maybe<Scalars['Boolean']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isUnique?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  relation?: Maybe<SystemRelationUpdateInput>;
};

/** Table Index */
export type SystemTableIndex = {
  __typename?: 'SystemTableIndex';
  columns?: Maybe<Array<SystemTableIndexColumn>>;
  id: Scalars['ID'];
  isSystem: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  table: SystemTable;
  type: Scalars['String'];
};

/** Table Index Column */
export type SystemTableIndexColumn = {
  __typename?: 'SystemTableIndexColumn';
  name: Scalars['String'];
};

/** Table Index Column Input */
export type SystemTableIndexColumnInput = {
  name: Scalars['String'];
};

/** Table List Application Filter */
export type SystemTableListApplicationFilter = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** Table List Filter */
export type SystemTableListFilter = {
  applications?: Maybe<Array<Maybe<SystemTableListApplicationFilter>>>;
  onlyUserTables?: Maybe<Scalars['Boolean']>;
  tableNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Table List Response */
export type SystemTableListResponse = {
  __typename?: 'SystemTableListResponse';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<SystemTable>>>;
};

/** Table Schema Create Features */
export type SystemTableSchemaCreateFeatures = {
  __typename?: 'SystemTableSchemaCreateFeatures';
  DATE: Scalars['Boolean'];
  FILE: Scalars['Boolean'];
  GEO: Scalars['Boolean'];
  ID: Scalars['Boolean'];
  JSON: Scalars['Boolean'];
  MISSING_RELATION: Scalars['Boolean'];
  NUMBER: Scalars['Boolean'];
  ONE_WAY_RELATION: Scalars['Boolean'];
  RELATION: Scalars['Boolean'];
  SMART: Scalars['Boolean'];
  SWITCH: Scalars['Boolean'];
  TEXT: Scalars['Boolean'];
  UUID: Scalars['Boolean'];
};

/** Table Schema Features */
export type SystemTableSchemaFeatures = {
  __typename?: 'SystemTableSchemaFeatures';
  computedFields: Scalars['Boolean'];
  create: SystemTableSchemaCreateFeatures;
  update?: Maybe<SystemTableSchemaMetaFieldFeatures>;
};

/** Table Schema Meta Field Features */
export type SystemTableSchemaMetaFieldFeatures = {
  __typename?: 'SystemTableSchemaMetaFieldFeatures';
  displayName: Scalars['Boolean'];
  name: Scalars['Boolean'];
};

/** Table Update Input */
export type SystemTableUpdateInput = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

/** Team Invitation Details */
export type SystemTeamInvitationDetails = {
  __typename?: 'SystemTeamInvitationDetails';
  accepted?: Maybe<Scalars['Boolean']>;
  acceptedOn?: Maybe<Scalars['DateTime']>;
  apiHost?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  resentOn?: Maybe<Scalars['DateTime']>;
};

/** Text Field Attributes */
export type SystemTextFieldTypeAttributes = {
  __typename?: 'SystemTextFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']>;
  format: Scalars['String'];
};

/** Text Type Format Enum */
export enum SystemTextTypeFormatEnum {
  Ein = 'EIN',
  Email = 'EMAIL',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Name = 'NAME',
  Unformatted = 'UNFORMATTED',
}

/** UUID Field Attributes */
export type SystemUuidFieldTypeAttributes = {
  __typename?: 'SystemUUIDFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']>;
};

export type SystemUserBillingConfigurationResponse = {
  __typename?: 'SystemUserBillingConfigurationResponse';
  availablePlans: Array<SystemBillingPlanBaseInfo>;
  isCancelSubscriptionAvailable: Scalars['Boolean'];
  isFreePlanAvailable: Scalars['Boolean'];
};

/** User Invitation Details */
export type SystemUserInvitationDetails = {
  __typename?: 'SystemUserInvitationDetails';
  accepted?: Maybe<Scalars['Boolean']>;
  acceptedOn?: Maybe<Scalars['DateTime']>;
  apiHost?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  resentOn?: Maybe<Scalars['DateTime']>;
};

/** User Invitation List */
export type SystemUserInvitationList = {
  __typename?: 'SystemUserInvitationList';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<SystemUserInvitationDetails>>>;
};

/** User Type */
export enum SystemUserType {
  Agency = 'Agency',
  MyOwn = 'MyOwn',
  Team = 'Team',
}

/** View Attributes */
export type SystemViewAttributes = {
  __typename?: 'SystemViewAttributes';
  query?: Maybe<Scalars['String']>;
};

/** View Create Input */
export type SystemViewCreateInput = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  query: Scalars['String'];
};

/** View Update Input */
export type SystemViewUpdateInput = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

/** WorkspaceCreateMutationInput */
export type SystemWorkspaceCreateMutationInput = {
  billingPlanId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<GraphQlCreateFileItemInput>;
  kind?: Maybe<SystemWorkspaceKind>;
  name: Scalars['String'];
  organizationId?: Maybe<Scalars['ID']>;
};

export type SystemWorkspaceCreateResponse = {
  __typename?: 'SystemWorkspaceCreateResponse';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  kind?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** WorkspaceDeleteMutationInput */
export type SystemWorkspaceDeleteMutationInput = {
  id: Scalars['ID'];
};

export type SystemWorkspaceImage = {
  __typename?: 'SystemWorkspaceImage';
  downloadUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SystemWorkspaceItem = {
  __typename?: 'SystemWorkspaceItem';
  apiHost?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<SystemWorkspaceImage>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']>;
  isOwner: Scalars['Boolean'];
  kind?: Maybe<Scalars['String']>;
  lastAccess?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
  region?: Maybe<Scalars['String']>;
  teamMemberCount?: Maybe<Scalars['Int']>;
  webSocket?: Maybe<Scalars['String']>;
};

/** Workspace Kind */
export enum SystemWorkspaceKind {
  Frontend = 'frontend',
  General = 'general',
}

/** SystemWorkspaceListResponse output */
export type SystemWorkspaceListResponse = {
  __typename?: 'SystemWorkspaceListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<SystemWorkspaceItem>;
};

/** WorkspacePaymentDetailsUpdateMutationInput */
export type SystemWorkspacePaymentDetailsUpdateMutationInput = {
  cardToken: Scalars['String'];
};

export enum SystemWorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Canceling = 'canceling',
  Pending = 'pending',
  Suspended = 'suspended',
}

/** WorkspaceUpdateMutationInput */
export type SystemWorkspaceUpdateMutationInput = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<GraphQlCreateFileItemInput>;
  name?: Maybe<Scalars['String']>;
};

export type SystemWorkspaceUpdateResponse = {
  __typename?: 'SystemWorkspaceUpdateResponse';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']>;
};

/** Table */
export type Table = {
  __typename?: 'Table';
  application?: Maybe<Application>;
  attributes?: Maybe<TableAttributes>;
  dataFeatures: TableDataFeatures;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<TableField>>;
  id: Scalars['ID'];
  indexes?: Maybe<Array<TableIndex>>;
  isSystem: Scalars['Boolean'];
  name: Scalars['String'];
  origin: SchemaOrigin;
  schemaFeatures: TableSchemaFeatures;
};

/** Table Attributes */
export type TableAttributes = ViewAttributes;

/** Table Create Input */
export type TableCreateInput = {
  applicationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** Table Data Features */
export type TableDataFeatures = {
  __typename?: 'TableDataFeatures';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

/** Table Delete Input */
export type TableDeleteInput = {
  id: Scalars['ID'];
};

/** TableField */
export type TableField = {
  __typename?: 'TableField';
  computedMode?: Maybe<ComputedFieldMode>;
  dataFeatures: FieldDataFeatures;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  fieldType: FieldType;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
  id: Scalars['ID'];
  isList: Scalars['Boolean'];
  isMeta: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isSystem: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  origin: SchemaOrigin;
  relation?: Maybe<Relation>;
  schemaFeatures: FieldSchemaFeatures;
  table: Table;
};

/** Table Field Create Input */
export type TableFieldCreateInput = {
  computedMode?: Maybe<ComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  fieldType: FieldType;
  fieldTypeAttributes?: Maybe<FieldTypeAttributesInput>;
  force?: Maybe<Scalars['Boolean']>;
  initialValue?: Maybe<Scalars['String']>;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  position?: Maybe<Scalars['Int']>;
  relation?: Maybe<RelationCreateInput>;
  tableId: Scalars['ID'];
};

/** Table Field Delete Input */
export type TableFieldDeleteInput = {
  id: Scalars['ID'];
};

/** Table Field Position Update Input */
export type TableFieldPositionUpdateInput = {
  id: Scalars['ID'];
  newPosition: Scalars['Int'];
};

/** Table Field Update Input */
export type TableFieldUpdateInput = {
  computedMode?: Maybe<ComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  fieldType?: Maybe<FieldType>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributesInput>;
  force?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  initialValue?: Maybe<Scalars['String']>;
  isList?: Maybe<Scalars['Boolean']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isUnique?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  relation?: Maybe<RelationUpdateInput>;
};

/** Table Index */
export type TableIndex = {
  __typename?: 'TableIndex';
  columns?: Maybe<Array<TableIndexColumn>>;
  id: Scalars['ID'];
  isSystem: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  table: Table;
  type: Scalars['String'];
};

/** Table Index Column */
export type TableIndexColumn = {
  __typename?: 'TableIndexColumn';
  name: Scalars['String'];
};

/** Table Index Column Input */
export type TableIndexColumnInput = {
  name: Scalars['String'];
};

export enum TableIndexType {
  Index = 'INDEX',
  Unique = 'UNIQUE',
}

/** Table List Application Filter */
export type TableListApplicationFilter = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** Table List Filter */
export type TableListFilter = {
  applications?: Maybe<Array<Maybe<TableListApplicationFilter>>>;
  onlyUserTables?: Maybe<Scalars['Boolean']>;
  tableNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Table List Response */
export type TableListResponse = {
  __typename?: 'TableListResponse';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<Table>>>;
};

/** Table Schema Create Features */
export type TableSchemaCreateFeatures = {
  __typename?: 'TableSchemaCreateFeatures';
  DATE: Scalars['Boolean'];
  FILE: Scalars['Boolean'];
  GEO: Scalars['Boolean'];
  ID: Scalars['Boolean'];
  JSON: Scalars['Boolean'];
  MISSING_RELATION: Scalars['Boolean'];
  NUMBER: Scalars['Boolean'];
  ONE_WAY_RELATION: Scalars['Boolean'];
  RELATION: Scalars['Boolean'];
  SMART: Scalars['Boolean'];
  SWITCH: Scalars['Boolean'];
  TEXT: Scalars['Boolean'];
  UUID: Scalars['Boolean'];
};

/** Table Schema Features */
export type TableSchemaFeatures = {
  __typename?: 'TableSchemaFeatures';
  computedFields: Scalars['Boolean'];
  create: TableSchemaCreateFeatures;
  update?: Maybe<TableSchemaMetaFieldFeatures>;
};

/** Table Schema Meta Field Features */
export type TableSchemaMetaFieldFeatures = {
  __typename?: 'TableSchemaMetaFieldFeatures';
  displayName: Scalars['Boolean'];
  name: Scalars['Boolean'];
};

/** Table Update Input */
export type TableUpdateInput = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  _description?: Maybe<Scalars['String']>;
  avatar?: Maybe<File>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  isOwner?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<RoleListResponse>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type TeamMemberRolesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<RoleFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<RoleSort>>;
};

/** TeamMembers delete input */
export type TeamMemberDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

/** TeamMemberFieldsPermissions create input */
export type TeamMemberFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  isOwner?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
};

export type TeamMemberFilter = {
  AND?: Maybe<Array<TeamMemberFilter>>;
  OR?: Maybe<Array<TeamMemberFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  avatar?: Maybe<FileFilter>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  deletedAt?: Maybe<IntPredicate>;
  id?: Maybe<IdPredicate>;
  isOwner?: Maybe<BoolPredicate>;
  roles?: Maybe<RoleRelationFilter>;
  status?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  user?: Maybe<UserFilter>;
};

export type TeamMemberGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: TeamMemberGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type TeamMemberGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  avatar?: Maybe<FileGroupByQuery>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  id?: Maybe<Array<GroupByField>>;
  isOwner?: Maybe<Array<GroupByField>>;
  roles?: Maybe<RoleGroupByQuery>;
  status?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  user?: Maybe<UserGroupByQuery>;
};

export type TeamMemberKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

/** TeamMemberListResponse output */
export type TeamMemberListResponse = {
  __typename?: 'TeamMemberListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<TeamMember>;
};

/** TeamMemberManyResponse output */
export type TeamMemberManyResponse = {
  __typename?: 'TeamMemberManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<TeamMember>;
};

/** No longer supported. Use `sort` instead. */
export enum TeamMemberOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsOwnerAsc = 'isOwner_ASC',
  IsOwnerDesc = 'isOwner_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** TeamMembers subscription payload */
export type TeamMemberPayload = {
  __typename?: 'TeamMemberPayload';
  mutation: MutationType;
  node?: Maybe<TeamMember>;
  previousValues?: Maybe<TeamMember>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TeamMemberRelationFilter = {
  every?: Maybe<TeamMemberFilter>;
  none?: Maybe<TeamMemberFilter>;
  some?: Maybe<TeamMemberFilter>;
};

export type TeamMemberSort = {
  avatar?: Maybe<FileSort>;
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  deletedAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isOwner?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  user?: Maybe<UserSort>;
};

/** TeamMembers subscription filter */
export type TeamMemberSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<TeamMemberFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** TeamMembers update input */
export type TeamMemberUpdateByFilterInput = {
  isOwner?: Maybe<Array<Maybe<UpdateByFilterBooleanSwitchInput>>>;
  status?: Maybe<Array<Maybe<UpdateByFilterStringSwitchInput>>>;
};

/** TeamMembers update input */
export type TeamMemberUpdateInput = {
  avatar?: Maybe<TeamMembersAvatarUpdateRelationInput>;
  id?: Maybe<Scalars['ID']>;
  roles?: Maybe<TeamMembersRolesUpdateRelationInput>;
};

export type TeamMember_PermissionFilter = {
  AND?: Maybe<Array<TeamMember_PermissionFilter>>;
  OR?: Maybe<Array<TeamMember_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  avatar?: Maybe<File_PermissionFilter>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  deletedAt?: Maybe<IntPredicate>;
  id?: Maybe<IdPredicate>;
  isOwner?: Maybe<BoolPredicate>;
  roles?: Maybe<Role_PermissionRelationFilter>;
  status?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  user?: Maybe<User_PermissionFilter>;
};

export type TeamMember_PermissionRelationFilter = {
  every?: Maybe<TeamMember_PermissionFilter>;
  none?: Maybe<TeamMember_PermissionFilter>;
  some?: Maybe<TeamMember_PermissionFilter>;
};

/** TeamMembers relation input */
export type TeamMembersAvatarUpdateRelationInput = {
  connect?: Maybe<FileKeyFilter>;
  create?: Maybe<TeamMembers_Avatar_FileCreateInput>;
  disconnect?: Maybe<FileKeyFilter>;
  reconnect?: Maybe<FileKeyFilter>;
  update?: Maybe<TeamMembers_Avatar_FileUpdateInput>;
};

/** TeamMembers relation input */
export type TeamMembersRolesUpdateRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<TeamMembers_RoleCreateInput>>>;
  disconnect?: Maybe<Array<RoleKeyFilter>>;
  reconnect?: Maybe<Array<RoleKeyFilter>>;
  update?: Maybe<Array<Maybe<TeamMembers_RoleUpdateInput>>>;
};

/** Roles create input from teamMembers */
export type TeamMembers_RoleCreateInput = {
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<PermissionsInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
  users?: Maybe<RolesUsersRelationInput>;
};

/** Roles update input from teamMembers */
export type TeamMembers_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: Maybe<RoleKeyFilter>;
};

/** Files create input from teamMembers_avatar */
export type TeamMembers_Avatar_FileCreateInput = {
  fileId?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  public?: Maybe<Scalars['Boolean']>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarRelationInput>;
  users_avatar?: Maybe<FilesUsers_AvatarRelationInput>;
};

/** Files update input from teamMembers_avatar */
export type TeamMembers_Avatar_FileUpdateInput = {
  fileId?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  public?: Maybe<Scalars['Boolean']>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarUpdateRelationInput>;
  users_avatar?: Maybe<FilesUsers_AvatarUpdateRelationInput>;
};

/** Text Field Attributes */
export type TextFieldTypeAttributes = {
  __typename?: 'TextFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']>;
  format: Scalars['String'];
};

/** Text Type Format Enum */
export enum TextTypeFormatEnum {
  Ein = 'EIN',
  Email = 'EMAIL',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Name = 'NAME',
  Unformatted = 'UNFORMATTED',
}

export type TrimFunctionArguments = {
  mode?: Maybe<StringTrimMode>;
  str: Scalars['String'];
};

/** JobType create input from typeJobRelation */
export type TypeJobRelation_JobTypeCreateInput = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  typeJobRelation?: Maybe<JobTypeTypeJobRelationRelationInput>;
};

/** JobType update input from typeJobRelation */
export type TypeJobRelation_JobTypeUpdateInput = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  typeJobRelation?: Maybe<JobTypeTypeJobRelationUpdateRelationInput>;
};

/** Job create input from type */
export type Type_JobCreateInput = {
  address?: Maybe<JobAddressRelationInput>;
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  callID?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  fieldworkerNotes?: Maybe<Scalars['String']>;
  jobClockInOutRelation?: Maybe<JobJobClockInOutRelationRelationInput>;
  jobJobFieldWorkerRelation?: Maybe<JobJobJobFieldWorkerRelationRelationInput>;
  model?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  priority?: Maybe<Scalars['String']>;
  purchaseOrder?: Maybe<Scalars['String']>;
  sendNotification?: Maybe<Scalars['Boolean']>;
  serial?: Maybe<Scalars['String']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<JobTypeRelationInput>;
  unitServiced?: Maybe<Scalars['String']>;
  workOrder?: Maybe<Scalars['String']>;
  workPerformed?: Maybe<Scalars['String']>;
};

/** Job update input from type */
export type Type_JobUpdateInput = {
  data: JobUpdateInput;
  filter?: Maybe<JobKeyFilter>;
};

/** UUID Field Attributes */
export type UuidFieldTypeAttributes = {
  __typename?: 'UUIDFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']>;
};

export type UpdateByFilterBooleanSwitchInput = {
  invert?: Maybe<Scalars['Boolean']>;
  set?: Maybe<Scalars['Boolean']>;
};

export type UpdateByFilterDateTimeInput = {
  add?: Maybe<UpdateByFilterDateTimePartsInput>;
  set?: Maybe<Scalars['String']>;
  sub?: Maybe<UpdateByFilterDateTimePartsInput>;
};

export type UpdateByFilterDateTimePartsInput = {
  days?: Maybe<Scalars['Int']>;
  hours?: Maybe<Scalars['Int']>;
  microseconds?: Maybe<Scalars['Int']>;
  minutes?: Maybe<Scalars['Int']>;
  months?: Maybe<Scalars['Int']>;
  seconds?: Maybe<Scalars['Int']>;
  years?: Maybe<Scalars['Int']>;
};

export type UpdateByFilterIntInput = {
  add?: Maybe<Scalars['Int']>;
  div?: Maybe<Scalars['Int']>;
  mod?: Maybe<Scalars['Int']>;
  mult?: Maybe<Scalars['Int']>;
  pow?: Maybe<Scalars['Int']>;
  prec?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
  sqrt?: Maybe<Scalars['Boolean']>;
  sub?: Maybe<Scalars['Int']>;
};

export type UpdateByFilterJsonInput = {
  set?: Maybe<Scalars['JSON']>;
};

export type UpdateByFilterListStringInput = {
  insert?: Maybe<UpdateByFilterListStringInsertOperationInput>;
  push?: Maybe<Array<Maybe<Scalars['String']>>>;
  remove?: Maybe<Array<Maybe<Scalars['Int']>>>;
  removeValue?: Maybe<Scalars['String']>;
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
  swap?: Maybe<Array<Maybe<Scalars['Int']>>>;
  unshift?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateByFilterListStringInsertOperationInput = {
  start: Scalars['Int'];
  values: Array<Scalars['String']>;
};

export type UpdateByFilterStringInput = {
  postfix?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  set?: Maybe<Scalars['String']>;
};

export type UpdateByFilterStringSwitchInput = {
  set?: Maybe<Scalars['String']>;
};

/** UpdatedFieldsFilter */
export type UpdatedFieldsFilter = {
  contains?: Maybe<Array<Maybe<Scalars['String']>>>;
  every?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type User = {
  __typename?: 'User';
  _description?: Maybe<Scalars['String']>;
  avatar?: Maybe<File>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  fielworker?: Maybe<Fieldworker>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is8base?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  permissions?: Maybe<UserPermissionList>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<RoleListResponse>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  typeUser?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserPermissionsArgs = {
  filter?: Maybe<PermissionInputFilter>;
};

export type UserRolesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<RoleFilter>;
  first?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<RoleSort>>;
};

export type UserBillingConfigurationResponse = {
  __typename?: 'UserBillingConfigurationResponse';
  availablePlans: Array<BillingPlanBaseInfo>;
  isCancelSubscriptionAvailable: Scalars['Boolean'];
  isFreePlanAvailable: Scalars['Boolean'];
};

/** Users create input */
export type UserCreateInput = {
  avatar?: Maybe<UsersAvatarRelationInput>;
  email: Scalars['String'];
  fielworker?: Maybe<UsersFielworkerRelationInput>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<UsersRolesRelationInput>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  typeUser?: Maybe<Scalars['String']>;
};

/** Users create many input */
export type UserCreateManyInput = {
  avatar?: Maybe<UsersAvatarManyRelationInput>;
  email: Scalars['String'];
  fielworker?: Maybe<UsersFielworkerManyRelationInput>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<UsersRolesManyRelationInput>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  typeUser?: Maybe<Scalars['String']>;
};

/** Users delete input */
export type UserDeleteInput = {
  force?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

/** UserFieldsPermissions create input */
export type UserFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['Boolean']>;
  is8base?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['Boolean']>;
  origin?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Boolean']>;
  timezone?: Maybe<Scalars['Boolean']>;
  typeUser?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
};

export type UserFilter = {
  AND?: Maybe<Array<UserFilter>>;
  OR?: Maybe<Array<UserFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  avatar?: Maybe<FileFilter>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<UserFilter>;
  deletedAt?: Maybe<IntPredicate>;
  email?: Maybe<StringPredicate>;
  fielworker?: Maybe<FieldworkerFilter>;
  firstName?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  is8base?: Maybe<BoolPredicate>;
  is_self?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<StringPredicate>;
  not_self?: Maybe<Scalars['Boolean']>;
  origin?: Maybe<StringPredicate>;
  phone?: Maybe<StringPredicate>;
  roles?: Maybe<RoleRelationFilter>;
  status?: Maybe<StringPredicate>;
  timezone?: Maybe<StringPredicate>;
  typeUser?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type UserGroupBy = {
  first?: Maybe<Scalars['Int']>;
  having?: Maybe<Having>;
  last?: Maybe<Scalars['Int']>;
  query: UserGroupByQuery;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<GroupBySort>>;
};

export type UserGroupByQuery = {
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
  avatar?: Maybe<FileGroupByQuery>;
  createdAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  email?: Maybe<Array<GroupByField>>;
  fielworker?: Maybe<FieldworkerGroupByQuery>;
  firstName?: Maybe<Array<GroupByField>>;
  id?: Maybe<Array<GroupByField>>;
  is8base?: Maybe<Array<GroupByField>>;
  lastName?: Maybe<Array<GroupByField>>;
  origin?: Maybe<Array<GroupByField>>;
  phone?: Maybe<Array<GroupByField>>;
  roles?: Maybe<RoleGroupByQuery>;
  status?: Maybe<Array<GroupByField>>;
  timezone?: Maybe<Array<GroupByField>>;
  typeUser?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
};

/** User Invitation Details */
export type UserInvitationDetails = {
  __typename?: 'UserInvitationDetails';
  accepted?: Maybe<Scalars['Boolean']>;
  acceptedOn?: Maybe<Scalars['DateTime']>;
  apiHost?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invitedBy?: Maybe<InvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  resentOn?: Maybe<Scalars['DateTime']>;
};

/** User Invitation List */
export type UserInvitationList = {
  __typename?: 'UserInvitationList';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<UserInvitationDetails>>>;
};

export type UserKeyFilter = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

/** UserListResponse output */
export type UserListResponse = {
  __typename?: 'UserListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<User>;
};

/** UserLoginInput */
export type UserLoginInput = {
  authProfileId?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  fromInvitation?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

/** UserManyResponse output */
export type UserManyResponse = {
  __typename?: 'UserManyResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<User>;
};

/** No longer supported. Use `sort` instead. */
export enum UserOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  Is8baseAsc = 'is8base_ASC',
  Is8baseDesc = 'is8base_DESC',
  IsOwnerAsc = 'isOwner_ASC',
  IsOwnerDesc = 'isOwner_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  OriginAsc = 'origin_ASC',
  OriginDesc = 'origin_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  TypeUserAsc = 'typeUser_ASC',
  TypeUserDesc = 'typeUser_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** Users subscription payload */
export type UserPayload = {
  __typename?: 'UserPayload';
  mutation: MutationType;
  node?: Maybe<User>;
  previousValues?: Maybe<User>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** User Permission */
export type UserPermission = {
  __typename?: 'UserPermission';
  permission?: Maybe<Scalars['JSON']>;
  resource?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
};

/** User Permission List */
export type UserPermissionList = {
  __typename?: 'UserPermissionList';
  count: Scalars['Int'];
  items?: Maybe<Array<UserPermission>>;
};

export type UserRelationFilter = {
  every?: Maybe<UserFilter>;
  none?: Maybe<UserFilter>;
  some?: Maybe<UserFilter>;
};

export type UserSort = {
  avatar?: Maybe<FileSort>;
  createdAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  deletedAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fielworker?: Maybe<FieldworkerSort>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is8base?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  origin?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  timezone?: Maybe<SortOrder>;
  typeUser?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

/** Users subscription filter */
export type UserSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<UserFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** Users update input */
export type UserUpdateByFilterInput = {
  email?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  firstName?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  is8base?: Maybe<Array<Maybe<UpdateByFilterBooleanSwitchInput>>>;
  isOwner?: Maybe<Array<Maybe<UpdateByFilterBooleanSwitchInput>>>;
  lastName?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  origin?: Maybe<Array<Maybe<UpdateByFilterStringSwitchInput>>>;
  phone?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  status?: Maybe<Array<Maybe<UpdateByFilterStringSwitchInput>>>;
  timezone?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  typeUser?: Maybe<Array<Maybe<UpdateByFilterStringSwitchInput>>>;
};

/** Users update input */
export type UserUpdateInput = {
  avatar?: Maybe<UsersAvatarUpdateRelationInput>;
  email?: Maybe<Scalars['String']>;
  fielworker?: Maybe<UsersFielworkerUpdateRelationInput>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<UsersRolesUpdateRelationInput>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  typeUser?: Maybe<Scalars['String']>;
};

/** Fieldworker create input from user */
export type User_FieldworkerCreateInput = {
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fieldworkerClockInOutRelation?: Maybe<FieldworkerFieldworkerClockInOutRelationRelationInput>;
  fieldworkerJobFieldworkerRelation?: Maybe<FieldworkerFieldworkerJobFieldworkerRelationRelationInput>;
  fullName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  user?: Maybe<FieldworkerUserRelationInput>;
};

/** Fieldworker update input from user */
export type User_FieldworkerUpdateInput = {
  /** It indicates the date when the record was archived. If Null, it means that the record is not archived */
  archived?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fieldworkerClockInOutRelation?: Maybe<FieldworkerFieldworkerClockInOutRelationUpdateRelationInput>;
  fieldworkerJobFieldworkerRelation?: Maybe<FieldworkerFieldworkerJobFieldworkerRelationUpdateRelationInput>;
  fullName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  user?: Maybe<FieldworkerUserUpdateRelationInput>;
};

export type User_PermissionFilter = {
  AND?: Maybe<Array<User_PermissionFilter>>;
  OR?: Maybe<Array<User_PermissionFilter>>;
  _fullText?: Maybe<Scalars['String']>;
  avatar?: Maybe<File_PermissionFilter>;
  createdAt?: Maybe<DateTimePredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  deletedAt?: Maybe<IntPredicate>;
  email?: Maybe<StringPredicate>;
  fielworker?: Maybe<Fieldworker_PermissionFilter>;
  firstName?: Maybe<StringPredicate>;
  id?: Maybe<IdPredicate>;
  is8base?: Maybe<BoolPredicate>;
  is_self?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<StringPredicate>;
  not_self?: Maybe<Scalars['Boolean']>;
  origin?: Maybe<StringPredicate>;
  phone?: Maybe<StringPredicate>;
  roles?: Maybe<Role_PermissionRelationFilter>;
  status?: Maybe<StringPredicate>;
  timezone?: Maybe<StringPredicate>;
  typeUser?: Maybe<StringPredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
};

export type User_PermissionRelationFilter = {
  every?: Maybe<User_PermissionFilter>;
  none?: Maybe<User_PermissionFilter>;
  some?: Maybe<User_PermissionFilter>;
};

/** Users relation input */
export type UsersAvatarManyRelationInput = {
  connect?: Maybe<FileKeyFilter>;
};

/** Users relation input */
export type UsersAvatarRelationInput = {
  connect?: Maybe<FileKeyFilter>;
  create?: Maybe<Users_Avatar_FileCreateInput>;
};

/** Users relation input */
export type UsersAvatarUpdateRelationInput = {
  connect?: Maybe<FileKeyFilter>;
  create?: Maybe<Users_Avatar_FileCreateInput>;
  disconnect?: Maybe<FileKeyFilter>;
  reconnect?: Maybe<FileKeyFilter>;
  update?: Maybe<Users_Avatar_FileUpdateInput>;
};

/** Users relation input */
export type UsersFielworkerManyRelationInput = {
  connect?: Maybe<FieldworkerKeyFilter>;
};

/** Users relation input */
export type UsersFielworkerRelationInput = {
  connect?: Maybe<FieldworkerKeyFilter>;
  create?: Maybe<User_FieldworkerCreateInput>;
};

/** Users relation input */
export type UsersFielworkerUpdateRelationInput = {
  connect?: Maybe<FieldworkerKeyFilter>;
  create?: Maybe<User_FieldworkerCreateInput>;
  disconnect?: Maybe<FieldworkerKeyFilter>;
  reconnect?: Maybe<FieldworkerKeyFilter>;
  update?: Maybe<User_FieldworkerUpdateInput>;
};

/** Users relation input */
export type UsersRolesManyRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
};

/** Users relation input */
export type UsersRolesRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<Users_RoleCreateInput>>>;
};

/** Users relation input */
export type UsersRolesUpdateRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<Users_RoleCreateInput>>>;
  disconnect?: Maybe<Array<RoleKeyFilter>>;
  reconnect?: Maybe<Array<RoleKeyFilter>>;
  update?: Maybe<Array<Maybe<Users_RoleUpdateInput>>>;
};

/** Roles create input from users */
export type Users_RoleCreateInput = {
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<PermissionsInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
  users?: Maybe<RolesUsersRelationInput>;
};

/** Roles update input from users */
export type Users_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: Maybe<RoleKeyFilter>;
};

/** Files create input from users_avatar */
export type Users_Avatar_FileCreateInput = {
  fileId?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  public?: Maybe<Scalars['Boolean']>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarRelationInput>;
  users_avatar?: Maybe<FilesUsers_AvatarRelationInput>;
};

/** Files update input from users_avatar */
export type Users_Avatar_FileUpdateInput = {
  fileId?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  public?: Maybe<Scalars['Boolean']>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarUpdateRelationInput>;
  users_avatar?: Maybe<FilesUsers_AvatarUpdateRelationInput>;
};

/** VerificationEmailResendInput */
export type VerificationEmailResendInput = {
  email: Scalars['String'];
};

/** View Attributes */
export type ViewAttributes = {
  __typename?: 'ViewAttributes';
  query?: Maybe<Scalars['String']>;
};

/** View Create Input */
export type ViewCreateInput = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  query: Scalars['String'];
};

/** View Update Input */
export type ViewUpdateInput = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};

/** WorkspaceCreateMutationInput */
export type WorkspaceCreateMutationInput = {
  billingPlanId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<GraphQlCreateFileItemInput>;
  kind?: Maybe<WorkspaceKind>;
  name: Scalars['String'];
  organizationId?: Maybe<Scalars['ID']>;
};

export type WorkspaceCreateResponse = {
  __typename?: 'WorkspaceCreateResponse';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  kind?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** WorkspaceDeleteMutationInput */
export type WorkspaceDeleteMutationInput = {
  id: Scalars['ID'];
};

export type WorkspaceImage = {
  __typename?: 'WorkspaceImage';
  downloadUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** LoginResponseWorkspace name and id */
export type WorkspaceInfo = {
  __typename?: 'WorkspaceInfo';
  name?: Maybe<Scalars['String']>;
  workspace?: Maybe<Scalars['ID']>;
};

export type WorkspaceItem = {
  __typename?: 'WorkspaceItem';
  apiHost?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<WorkspaceImage>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']>;
  isOwner: Scalars['Boolean'];
  kind?: Maybe<Scalars['String']>;
  lastAccess?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  nextPlan?: Maybe<BillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<BillingCurrentPlanResponse>;
  region?: Maybe<Scalars['String']>;
  teamMemberCount?: Maybe<Scalars['Int']>;
  webSocket?: Maybe<Scalars['String']>;
};

/** Workspace Kind */
export enum WorkspaceKind {
  Frontend = 'frontend',
  General = 'general',
}

/** WorkspaceListResponse output */
export type WorkspaceListResponse = {
  __typename?: 'WorkspaceListResponse';
  /** List items count */
  count: Scalars['Int'];
  /** List items */
  items: Array<WorkspaceItem>;
};

export enum WorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Canceling = 'canceling',
  Pending = 'pending',
  Suspended = 'suspended',
}

export type WorkspaceTransferItem = {
  __typename?: 'WorkspaceTransferItem';
  newOwnerEmail: Scalars['String'];
  newOwnerFirstName?: Maybe<Scalars['String']>;
  newOwnerLastName?: Maybe<Scalars['String']>;
  ownerEmail: Scalars['String'];
  ownerFirstName?: Maybe<Scalars['String']>;
  ownerLastName?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  workspaceId: Scalars['String'];
  workspaceName: Scalars['String'];
};

/** WorkspaceUpdateMutationInput */
export type WorkspaceUpdateMutationInput = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<GraphQlCreateFileItemInput>;
  name?: Maybe<Scalars['String']>;
};

export type WorkspaceUpdateResponse = {
  __typename?: 'WorkspaceUpdateResponse';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']>;
};

export type ResetPasswordResponse = {
  __typename?: 'resetPasswordResponse';
  status?: Maybe<SuccessResponse>;
};

export type CustomersListQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  filter?: Maybe<CustomerFilter>;
}>;

export type CustomersListQuery = {
  __typename?: 'Query';
  customersList: {
    __typename?: 'CustomerListResponse';
    count: number;
    items: Array<{
      __typename?: 'Customer';
      name: Maybe<string>;
      email: Maybe<string>;
      id: Maybe<string>;
      archived: Maybe<string>;
      createdAt: Maybe<string>;
    }>;
  };
};

export type CustomerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type CustomerQuery = {
  __typename?: 'Query';
  customer: Maybe<{
    __typename?: 'Customer';
    updatedAt: Maybe<string>;
    phoneNumber: Maybe<string>;
    name: Maybe<string>;
    id: Maybe<string>;
    email: Maybe<string>;
    deletedAt: Maybe<number>;
    archived: Maybe<string>;
    createdAt: Maybe<string>;
    customerAddressRelation: Maybe<{
      __typename?: 'AddressListResponse';
      count: number;
      items: Array<{
        __typename?: 'Address';
        id: Maybe<string>;
        city: Maybe<string>;
        zipCode: Maybe<string>;
        state: Maybe<string>;
        name: Maybe<string>;
        streetAddress: Maybe<string>;
        addressJobRelation: Maybe<{
          __typename?: 'JobListResponse';
          items: Array<{
            __typename?: 'Job';
            code: Maybe<number>;
            id: Maybe<string>;
            name: Maybe<string>;
            status: Maybe<string>;
            startDateTime: Maybe<string>;
            type: Maybe<{ __typename?: 'JobType'; name: Maybe<string> }>;
          }>;
        }>;
      }>;
    }>;
  }>;
};

export type CustomerEQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type CustomerEQuery = {
  __typename?: 'Query';
  customer: Maybe<{
    __typename?: 'Customer';
    updatedAt: Maybe<string>;
    phoneNumber: Maybe<string>;
    name: Maybe<string>;
    id: Maybe<string>;
    email: Maybe<string>;
    deletedAt: Maybe<number>;
    archived: Maybe<string>;
    createdAt: Maybe<string>;
    customerAddressRelation: Maybe<{
      __typename?: 'AddressListResponse';
      count: number;
      items: Array<{
        __typename?: 'Address';
        id: Maybe<string>;
        city: Maybe<string>;
        zipCode: Maybe<string>;
        state: Maybe<string>;
        name: Maybe<string>;
        streetAddress: Maybe<string>;
      }>;
    }>;
  }>;
};

export type CreateCustomerMutationVariables = Exact<{
  data: CustomerCreateInput;
}>;

export type CreateCustomerMutation = {
  __typename?: 'Mutation';
  customerCreate: { __typename?: 'Customer'; id: Maybe<string> };
};

export type UpdateCustomerMutationVariables = Exact<{
  data: CustomerUpdateByFilterInput;
  filter: CustomerFilter;
}>;

export type UpdateCustomerMutation = {
  __typename?: 'Mutation';
  customerUpdateByFilter: {
    __typename?: 'CustomerManyResponse';
    items: Array<{ __typename?: 'Customer'; id: Maybe<string> }>;
  };
};

export type UpdateCustomer2MutationVariables = Exact<{
  data: CustomerUpdateInput;
  filter: CustomerKeyFilter;
}>;

export type UpdateCustomer2Mutation = {
  __typename?: 'Mutation';
  customerUpdate: { __typename?: 'Customer'; id: Maybe<string> };
};

export type CustomerDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type CustomerDestroyMutation = {
  __typename?: 'Mutation';
  customerDestroy: Maybe<{
    __typename?: 'SuccessResponse';
    success: Maybe<boolean>;
  }>;
};

export type CustomerListSubscriptionSubscriptionVariables = Exact<{
  filter?: Maybe<CustomerFilter>;
}>;

export type CustomerListSubscriptionSubscription = {
  __typename?: 'Subscription';
  Customer: Maybe<{ __typename?: 'CustomerPayload'; mutation: MutationType }>;
};

export type ListFieldworkersQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  filter?: Maybe<FieldworkerFilter>;
  sort?: Maybe<Array<FieldworkerSort> | FieldworkerSort>;
}>;

export type ListFieldworkersQuery = {
  __typename?: 'Query';
  fieldworkersList: {
    __typename?: 'FieldworkerListResponse';
    count: number;
    items: Array<{
      __typename?: 'Fieldworker';
      id: Maybe<string>;
      fullName: Maybe<string>;
      phoneNumber: Maybe<string>;
      email: Maybe<string>;
      archived: Maybe<string>;
    }>;
  };
};

export type FieldworkerDetailQueryVariables = Exact<{
  id: Scalars['ID'];
  jobFilter?: Maybe<JobFieldworkerFilter>;
}>;

export type FieldworkerDetailQuery = {
  __typename?: 'Query';
  fieldworker: Maybe<{
    __typename?: 'Fieldworker';
    fullName: Maybe<string>;
    phoneNumber: Maybe<string>;
    email: Maybe<string>;
    archived: Maybe<string>;
    fieldworkerJobFieldworkerRelation: Maybe<{
      __typename?: 'JobFieldworkerListResponse';
      items: Array<{
        __typename?: 'JobFieldworker';
        job: Maybe<{
          __typename?: 'Job';
          id: Maybe<string>;
          name: Maybe<string>;
          code: Maybe<number>;
          status: Maybe<string>;
          startDateTime: Maybe<string>;
          address: Maybe<{
            __typename?: 'Address';
            customer: Maybe<{ __typename?: 'Customer'; name: Maybe<string> }>;
          }>;
          type: Maybe<{ __typename?: 'JobType'; name: Maybe<string> }>;
        }>;
      }>;
    }>;
  }>;
};

export type FieldworkerCreateMutationVariables = Exact<{
  data: FieldworkerCreateInput;
}>;

export type FieldworkerCreateMutation = {
  __typename?: 'Mutation';
  fieldworkerCreate: {
    __typename?: 'Fieldworker';
    id: Maybe<string>;
    fullName: Maybe<string>;
  };
};

export type FieldworkerUpdateMutationVariables = Exact<{
  data: FieldworkerUpdateInput;
}>;

export type FieldworkerUpdateMutation = {
  __typename?: 'Mutation';
  fieldworkerUpdate: {
    __typename?: 'Fieldworker';
    id: Maybe<string>;
    fullName: Maybe<string>;
    email: Maybe<string>;
    phoneNumber: Maybe<string>;
  };
};

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
  newPassword: Scalars['String'];
}>;

export type ResetPasswordMutation = {
  __typename?: 'Mutation';
  resetPassword: Maybe<{
    __typename?: 'resetPasswordResponse';
    status: Maybe<{ __typename?: 'SuccessResponse'; success: Maybe<boolean> }>;
  }>;
};

export type JobsListQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  filter?: Maybe<JobFilter>;
  sort?: Maybe<Array<JobSort> | JobSort>;
}>;

export type JobsListQuery = {
  __typename?: 'Query';
  jobsList: {
    __typename?: 'JobListResponse';
    count: number;
    items: Array<{
      __typename?: 'Job';
      id: Maybe<string>;
      code: Maybe<number>;
      name: Maybe<string>;
      createdAt: Maybe<string>;
      startDateTime: Maybe<string>;
      status: Maybe<string>;
      archived: Maybe<string>;
      address: Maybe<{
        __typename?: 'Address';
        customer: Maybe<{ __typename?: 'Customer'; name: Maybe<string> }>;
      }>;
      type: Maybe<{ __typename?: 'JobType'; name: Maybe<string> }>;
      jobJobFieldWorkerRelation: Maybe<{
        __typename?: 'JobFieldworkerListResponse';
        items: Array<{
          __typename?: 'JobFieldworker';
          fieldworker: Maybe<{
            __typename?: 'Fieldworker';
            fullName: Maybe<string>;
          }>;
        }>;
      }>;
    }>;
  };
};

export type JobQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type JobQuery = {
  __typename?: 'Query';
  job: Maybe<{
    __typename?: 'Job';
    priority: Maybe<string>;
    status: Maybe<string>;
    archived: Maybe<string>;
    startDateTime: Maybe<string>;
    endDateTime: Maybe<string>;
    description: Maybe<string>;
    name: Maybe<string>;
    fieldworkerNotes: Maybe<string>;
    workPerformed: Maybe<string>;
    workOrder: Maybe<string>;
    model: Maybe<string>;
    unitServiced: Maybe<string>;
    callID: Maybe<string>;
    serial: Maybe<string>;
    purchaseOrder: Maybe<string>;
    address: Maybe<{
      __typename?: 'Address';
      id: Maybe<string>;
      name: Maybe<string>;
      customer: Maybe<{ __typename?: 'Customer'; name: Maybe<string> }>;
    }>;
    jobJobFieldWorkerRelation: Maybe<{
      __typename?: 'JobFieldworkerListResponse';
      items: Array<{
        __typename?: 'JobFieldworker';
        id: Maybe<string>;
        fieldworker: Maybe<{
          __typename?: 'Fieldworker';
          id: Maybe<string>;
          fullName: Maybe<string>;
        }>;
      }>;
    }>;
    type: Maybe<{ __typename?: 'JobType'; id: Maybe<string> }>;
  }>;
};

export type JobTypeListForSelectsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type JobTypeListForSelectsQuery = {
  __typename?: 'Query';
  jobTypesList: {
    __typename?: 'JobTypeListResponse';
    items: Array<{
      __typename?: 'JobType';
      id: Maybe<string>;
      name: Maybe<string>;
    }>;
  };
};

export type AddressesSelectListQueryVariables = Exact<{ [key: string]: never }>;

export type AddressesSelectListQuery = {
  __typename?: 'Query';
  addressesList: {
    __typename?: 'AddressListResponse';
    items: Array<{
      __typename?: 'Address';
      id: Maybe<string>;
      name: Maybe<string>;
      customer: Maybe<{
        __typename?: 'Customer';
        id: Maybe<string>;
        name: Maybe<string>;
      }>;
    }>;
  };
};

export type JobDetailQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type JobDetailQuery = {
  __typename?: 'Query';
  job: Maybe<{
    __typename?: 'Job';
    code: Maybe<number>;
    createdAt: Maybe<string>;
    priority: Maybe<string>;
    status: Maybe<string>;
    archived: Maybe<string>;
    description: Maybe<string>;
    endDateTime: Maybe<string>;
    name: Maybe<string>;
    startDateTime: Maybe<string>;
    fieldworkerNotes: Maybe<string>;
    workPerformed: Maybe<string>;
    workOrder: Maybe<string>;
    model: Maybe<string>;
    unitServiced: Maybe<string>;
    callID: Maybe<string>;
    serial: Maybe<string>;
    purchaseOrder: Maybe<string>;
    jobJobFieldWorkerRelation: Maybe<{
      __typename?: 'JobFieldworkerListResponse';
      items: Array<{
        __typename?: 'JobFieldworker';
        id: Maybe<string>;
        fieldworker: Maybe<{
          __typename?: 'Fieldworker';
          fullName: Maybe<string>;
          id: Maybe<string>;
          user: Maybe<{ __typename?: 'User'; id: Maybe<string> }>;
        }>;
      }>;
    }>;
    address: Maybe<{
      __typename?: 'Address';
      city: Maybe<string>;
      state: Maybe<string>;
      streetAddress: Maybe<string>;
      customer: Maybe<{
        __typename?: 'Customer';
        name: Maybe<string>;
        email: Maybe<string>;
        phoneNumber: Maybe<string>;
      }>;
    }>;
    type: Maybe<{ __typename?: 'JobType'; name: Maybe<string> }>;
  }>;
};

export type Job_CreateMutationVariables = Exact<{
  data: JobCreateInput;
}>;

export type Job_CreateMutation = {
  __typename?: 'Mutation';
  jobCreate: { __typename?: 'Job'; id: Maybe<string> };
};

export type FieldworkerSelectListQueryVariables = Exact<{
  [key: string]: never;
}>;

export type FieldworkerSelectListQuery = {
  __typename?: 'Query';
  fieldworkersList: {
    __typename?: 'FieldworkerListResponse';
    items: Array<{
      __typename?: 'Fieldworker';
      id: Maybe<string>;
      fullName: Maybe<string>;
    }>;
  };
};

export type JobFieldworkerSelectListQueryVariables = Exact<{
  [key: string]: never;
}>;

export type JobFieldworkerSelectListQuery = {
  __typename?: 'Query';
  jobFieldworkersList: {
    __typename?: 'JobFieldworkerListResponse';
    items: Array<{
      __typename?: 'JobFieldworker';
      id: Maybe<string>;
      fieldworker: Maybe<{
        __typename?: 'Fieldworker';
        id: Maybe<string>;
        fullName: Maybe<string>;
      }>;
    }>;
  };
};

export type JobCreateMutationVariables = Exact<{
  data: JobCreateInput;
}>;

export type JobCreateMutation = {
  __typename?: 'Mutation';
  jobCreate: { __typename?: 'Job'; id: Maybe<string>; name: Maybe<string> };
};

export type JobUpdateMutationVariables = Exact<{
  data: JobUpdateInput;
  id: Scalars['ID'];
}>;

export type JobUpdateMutation = {
  __typename?: 'Mutation';
  jobUpdate: { __typename?: 'Job'; id: Maybe<string> };
};

export type ClockListQueryVariables = Exact<{
  filter?: Maybe<ClockInOutFilter>;
}>;

export type ClockListQuery = {
  __typename?: 'Query';
  clockInOutsList: {
    __typename?: 'ClockInOutListResponse';
    items: Array<{
      __typename?: 'ClockInOut';
      id: Maybe<string>;
      createdAt: Maybe<string>;
      type: Maybe<string>;
      updatedAt: Maybe<string>;
      fieldworker: Maybe<{
        __typename?: 'Fieldworker';
        fullName: Maybe<string>;
        user: Maybe<{ __typename?: 'User'; id: Maybe<string> }>;
      }>;
    }>;
  };
};

export type CreateClockMutationMutationVariables = Exact<{
  clock: Scalars['String'];
  idJob: Scalars['ID'];
  idFieldworker: Scalars['ID'];
}>;

export type CreateClockMutationMutation = {
  __typename?: 'Mutation';
  clockInOutCreate: {
    __typename?: 'ClockInOut';
    id: Maybe<string>;
    type: Maybe<string>;
  };
};

export type UserSessionQueryVariables = Exact<{ [key: string]: never }>;

export type UserSessionQuery = {
  __typename?: 'Query';
  user: Maybe<{
    __typename?: 'User';
    id: Maybe<string>;
    lastName: Maybe<string>;
    firstName: Maybe<string>;
    email: Maybe<string>;
    typeUser: Maybe<string>;
    avatar: Maybe<{ __typename?: 'File'; shareUrl: Maybe<string> }>;
    roles: Maybe<{
      __typename?: 'RoleListResponse';
      items: Array<{ __typename?: 'Role'; name: Maybe<string> }>;
    }>;
  }>;
};

export const CustomersListDocument = gql`
  query CustomersList(
    $skip: Int = 0
    $first: Int = 10
    $filter: CustomerFilter
  ) {
    customersList(
      skip: $skip
      first: $first
      filter: $filter
      sort: [{ name: ASC }, { createdAt: DESC }]
    ) {
      items {
        name
        email
        id
        archived
        createdAt
      }
      count
    }
  }
`;

/**
 * __useCustomersListQuery__
 *
 * To run a query within a React component, call `useCustomersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomersListQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useCustomersListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CustomersListQuery,
    CustomersListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CustomersListQuery, CustomersListQueryVariables>(
    CustomersListDocument,
    options,
  );
}
export function useCustomersListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CustomersListQuery,
    CustomersListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CustomersListQuery, CustomersListQueryVariables>(
    CustomersListDocument,
    options,
  );
}
export type CustomersListQueryHookResult = ReturnType<
  typeof useCustomersListQuery
>;
export type CustomersListLazyQueryHookResult = ReturnType<
  typeof useCustomersListLazyQuery
>;
export type CustomersListQueryResult = Apollo.QueryResult<
  CustomersListQuery,
  CustomersListQueryVariables
>;
export const CustomerDocument = gql`
  query Customer($id: ID!) {
    customer(id: $id) {
      updatedAt
      phoneNumber
      name
      id
      email
      deletedAt
      archived
      createdAt
      customerAddressRelation(filter: { archived: { is_empty: true } }) {
        count
        items {
          id
          city
          zipCode
          state
          name
          streetAddress
          addressJobRelation {
            items {
              code
              id
              name
              status
              startDateTime
              type {
                name
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useCustomerQuery__
 *
 * To run a query within a React component, call `useCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCustomerQuery(
  baseOptions: Apollo.QueryHookOptions<CustomerQuery, CustomerQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CustomerQuery, CustomerQueryVariables>(
    CustomerDocument,
    options,
  );
}
export function useCustomerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CustomerQuery,
    CustomerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CustomerQuery, CustomerQueryVariables>(
    CustomerDocument,
    options,
  );
}
export type CustomerQueryHookResult = ReturnType<typeof useCustomerQuery>;
export type CustomerLazyQueryHookResult = ReturnType<
  typeof useCustomerLazyQuery
>;
export type CustomerQueryResult = Apollo.QueryResult<
  CustomerQuery,
  CustomerQueryVariables
>;
export const CustomerEDocument = gql`
  query CustomerE($id: ID!) {
    customer(id: $id) {
      updatedAt
      phoneNumber
      name
      id
      email
      deletedAt
      archived
      createdAt
      customerAddressRelation(filter: { archived: { is_empty: true } }) {
        count
        items {
          id
          city
          zipCode
          state
          name
          streetAddress
        }
      }
    }
  }
`;

/**
 * __useCustomerEQuery__
 *
 * To run a query within a React component, call `useCustomerEQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerEQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerEQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCustomerEQuery(
  baseOptions: Apollo.QueryHookOptions<CustomerEQuery, CustomerEQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CustomerEQuery, CustomerEQueryVariables>(
    CustomerEDocument,
    options,
  );
}
export function useCustomerELazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CustomerEQuery,
    CustomerEQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CustomerEQuery, CustomerEQueryVariables>(
    CustomerEDocument,
    options,
  );
}
export type CustomerEQueryHookResult = ReturnType<typeof useCustomerEQuery>;
export type CustomerELazyQueryHookResult = ReturnType<
  typeof useCustomerELazyQuery
>;
export type CustomerEQueryResult = Apollo.QueryResult<
  CustomerEQuery,
  CustomerEQueryVariables
>;
export const CreateCustomerDocument = gql`
  mutation CreateCustomer($data: CustomerCreateInput!) {
    customerCreate(data: $data) {
      id
    }
  }
`;
export type CreateCustomerMutationFn = Apollo.MutationFunction<
  CreateCustomerMutation,
  CreateCustomerMutationVariables
>;

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCustomerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCustomerMutation,
    CreateCustomerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCustomerMutation,
    CreateCustomerMutationVariables
  >(CreateCustomerDocument, options);
}
export type CreateCustomerMutationHookResult = ReturnType<
  typeof useCreateCustomerMutation
>;
export type CreateCustomerMutationResult =
  Apollo.MutationResult<CreateCustomerMutation>;
export type CreateCustomerMutationOptions = Apollo.BaseMutationOptions<
  CreateCustomerMutation,
  CreateCustomerMutationVariables
>;
export const UpdateCustomerDocument = gql`
  mutation UpdateCustomer(
    $data: CustomerUpdateByFilterInput!
    $filter: CustomerFilter!
  ) {
    customerUpdateByFilter(data: $data, filter: $filter) {
      items {
        id
      }
    }
  }
`;
export type UpdateCustomerMutationFn = Apollo.MutationFunction<
  UpdateCustomerMutation,
  UpdateCustomerMutationVariables
>;

/**
 * __useUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerMutation, { data, loading, error }] = useUpdateCustomerMutation({
 *   variables: {
 *      data: // value for 'data'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdateCustomerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCustomerMutation,
    UpdateCustomerMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCustomerMutation,
    UpdateCustomerMutationVariables
  >(UpdateCustomerDocument, options);
}
export type UpdateCustomerMutationHookResult = ReturnType<
  typeof useUpdateCustomerMutation
>;
export type UpdateCustomerMutationResult =
  Apollo.MutationResult<UpdateCustomerMutation>;
export type UpdateCustomerMutationOptions = Apollo.BaseMutationOptions<
  UpdateCustomerMutation,
  UpdateCustomerMutationVariables
>;
export const UpdateCustomer2Document = gql`
  mutation UpdateCustomer2(
    $data: CustomerUpdateInput!
    $filter: CustomerKeyFilter!
  ) {
    customerUpdate(data: $data, filter: $filter) {
      id
    }
  }
`;
export type UpdateCustomer2MutationFn = Apollo.MutationFunction<
  UpdateCustomer2Mutation,
  UpdateCustomer2MutationVariables
>;

/**
 * __useUpdateCustomer2Mutation__
 *
 * To run a mutation, you first call `useUpdateCustomer2Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomer2Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomer2Mutation, { data, loading, error }] = useUpdateCustomer2Mutation({
 *   variables: {
 *      data: // value for 'data'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdateCustomer2Mutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCustomer2Mutation,
    UpdateCustomer2MutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCustomer2Mutation,
    UpdateCustomer2MutationVariables
  >(UpdateCustomer2Document, options);
}
export type UpdateCustomer2MutationHookResult = ReturnType<
  typeof useUpdateCustomer2Mutation
>;
export type UpdateCustomer2MutationResult =
  Apollo.MutationResult<UpdateCustomer2Mutation>;
export type UpdateCustomer2MutationOptions = Apollo.BaseMutationOptions<
  UpdateCustomer2Mutation,
  UpdateCustomer2MutationVariables
>;
export const CustomerDestroyDocument = gql`
  mutation CustomerDestroy($id: ID!) {
    customerDestroy(force: true, filter: { id: $id }) {
      success
    }
  }
`;
export type CustomerDestroyMutationFn = Apollo.MutationFunction<
  CustomerDestroyMutation,
  CustomerDestroyMutationVariables
>;

/**
 * __useCustomerDestroyMutation__
 *
 * To run a mutation, you first call `useCustomerDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerDestroyMutation, { data, loading, error }] = useCustomerDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCustomerDestroyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CustomerDestroyMutation,
    CustomerDestroyMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CustomerDestroyMutation,
    CustomerDestroyMutationVariables
  >(CustomerDestroyDocument, options);
}
export type CustomerDestroyMutationHookResult = ReturnType<
  typeof useCustomerDestroyMutation
>;
export type CustomerDestroyMutationResult =
  Apollo.MutationResult<CustomerDestroyMutation>;
export type CustomerDestroyMutationOptions = Apollo.BaseMutationOptions<
  CustomerDestroyMutation,
  CustomerDestroyMutationVariables
>;
export const CustomerListSubscriptionDocument = gql`
  subscription CustomerListSubscription($filter: CustomerFilter) {
    Customer(filter: { mutation_in: [create, update], node: $filter }) {
      mutation
    }
  }
`;

/**
 * __useCustomerListSubscriptionSubscription__
 *
 * To run a query within a React component, call `useCustomerListSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCustomerListSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerListSubscriptionSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useCustomerListSubscriptionSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    CustomerListSubscriptionSubscription,
    CustomerListSubscriptionSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    CustomerListSubscriptionSubscription,
    CustomerListSubscriptionSubscriptionVariables
  >(CustomerListSubscriptionDocument, options);
}
export type CustomerListSubscriptionSubscriptionHookResult = ReturnType<
  typeof useCustomerListSubscriptionSubscription
>;
export type CustomerListSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<CustomerListSubscriptionSubscription>;
export const ListFieldworkersDocument = gql`
  query ListFieldworkers(
    $skip: Int
    $first: Int
    $filter: FieldworkerFilter
    $sort: [FieldworkerSort!]
  ) {
    fieldworkersList(skip: $skip, first: $first, filter: $filter, sort: $sort) {
      items {
        id
        fullName
        phoneNumber
        email
        archived
      }
      count
    }
  }
`;

/**
 * __useListFieldworkersQuery__
 *
 * To run a query within a React component, call `useListFieldworkersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFieldworkersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFieldworkersQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useListFieldworkersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListFieldworkersQuery,
    ListFieldworkersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ListFieldworkersQuery, ListFieldworkersQueryVariables>(
    ListFieldworkersDocument,
    options,
  );
}
export function useListFieldworkersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListFieldworkersQuery,
    ListFieldworkersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ListFieldworkersQuery,
    ListFieldworkersQueryVariables
  >(ListFieldworkersDocument, options);
}
export type ListFieldworkersQueryHookResult = ReturnType<
  typeof useListFieldworkersQuery
>;
export type ListFieldworkersLazyQueryHookResult = ReturnType<
  typeof useListFieldworkersLazyQuery
>;
export type ListFieldworkersQueryResult = Apollo.QueryResult<
  ListFieldworkersQuery,
  ListFieldworkersQueryVariables
>;
export const FieldworkerDetailDocument = gql`
  query FieldworkerDetail($id: ID!, $jobFilter: JobFieldworkerFilter) {
    fieldworker(id: $id) {
      fullName
      phoneNumber
      email
      archived
      fieldworkerJobFieldworkerRelation(filter: $jobFilter) {
        items {
          job {
            id
            name
            code
            status
            startDateTime
            address {
              customer {
                name
              }
            }
            type {
              name
            }
          }
        }
      }
    }
  }
`;

/**
 * __useFieldworkerDetailQuery__
 *
 * To run a query within a React component, call `useFieldworkerDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useFieldworkerDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFieldworkerDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *      jobFilter: // value for 'jobFilter'
 *   },
 * });
 */
export function useFieldworkerDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    FieldworkerDetailQuery,
    FieldworkerDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FieldworkerDetailQuery,
    FieldworkerDetailQueryVariables
  >(FieldworkerDetailDocument, options);
}
export function useFieldworkerDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FieldworkerDetailQuery,
    FieldworkerDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FieldworkerDetailQuery,
    FieldworkerDetailQueryVariables
  >(FieldworkerDetailDocument, options);
}
export type FieldworkerDetailQueryHookResult = ReturnType<
  typeof useFieldworkerDetailQuery
>;
export type FieldworkerDetailLazyQueryHookResult = ReturnType<
  typeof useFieldworkerDetailLazyQuery
>;
export type FieldworkerDetailQueryResult = Apollo.QueryResult<
  FieldworkerDetailQuery,
  FieldworkerDetailQueryVariables
>;
export const FieldworkerCreateDocument = gql`
  mutation FieldworkerCreate($data: FieldworkerCreateInput!) {
    fieldworkerCreate(data: $data) {
      id
      fullName
    }
  }
`;
export type FieldworkerCreateMutationFn = Apollo.MutationFunction<
  FieldworkerCreateMutation,
  FieldworkerCreateMutationVariables
>;

/**
 * __useFieldworkerCreateMutation__
 *
 * To run a mutation, you first call `useFieldworkerCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFieldworkerCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fieldworkerCreateMutation, { data, loading, error }] = useFieldworkerCreateMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useFieldworkerCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    FieldworkerCreateMutation,
    FieldworkerCreateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    FieldworkerCreateMutation,
    FieldworkerCreateMutationVariables
  >(FieldworkerCreateDocument, options);
}
export type FieldworkerCreateMutationHookResult = ReturnType<
  typeof useFieldworkerCreateMutation
>;
export type FieldworkerCreateMutationResult =
  Apollo.MutationResult<FieldworkerCreateMutation>;
export type FieldworkerCreateMutationOptions = Apollo.BaseMutationOptions<
  FieldworkerCreateMutation,
  FieldworkerCreateMutationVariables
>;
export const FieldworkerUpdateDocument = gql`
  mutation FieldworkerUpdate($data: FieldworkerUpdateInput!) {
    fieldworkerUpdate(data: $data) {
      id
      fullName
      email
      phoneNumber
    }
  }
`;
export type FieldworkerUpdateMutationFn = Apollo.MutationFunction<
  FieldworkerUpdateMutation,
  FieldworkerUpdateMutationVariables
>;

/**
 * __useFieldworkerUpdateMutation__
 *
 * To run a mutation, you first call `useFieldworkerUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFieldworkerUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fieldworkerUpdateMutation, { data, loading, error }] = useFieldworkerUpdateMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useFieldworkerUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    FieldworkerUpdateMutation,
    FieldworkerUpdateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    FieldworkerUpdateMutation,
    FieldworkerUpdateMutationVariables
  >(FieldworkerUpdateDocument, options);
}
export type FieldworkerUpdateMutationHookResult = ReturnType<
  typeof useFieldworkerUpdateMutation
>;
export type FieldworkerUpdateMutationResult =
  Apollo.MutationResult<FieldworkerUpdateMutation>;
export type FieldworkerUpdateMutationOptions = Apollo.BaseMutationOptions<
  FieldworkerUpdateMutation,
  FieldworkerUpdateMutationVariables
>;
export const ResetPasswordDocument = gql`
  mutation resetPassword($email: String!, $newPassword: String!) {
    resetPassword(email: $email, newPassword: $newPassword) {
      status {
        success
      }
    }
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, options);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult =
  Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const JobsListDocument = gql`
  query JobsList(
    $skip: Int
    $first: Int
    $filter: JobFilter
    $sort: [JobSort!]
  ) {
    jobsList(skip: $skip, first: $first, filter: $filter, sort: $sort) {
      items {
        id
        code
        name
        createdAt
        startDateTime
        status
        archived
        address {
          customer {
            name
          }
        }
        type {
          name
        }
        jobJobFieldWorkerRelation(first: 3) {
          items {
            fieldworker {
              fullName
            }
          }
        }
      }
      count
    }
  }
`;

/**
 * __useJobsListQuery__
 *
 * To run a query within a React component, call `useJobsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobsListQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useJobsListQuery(
  baseOptions?: Apollo.QueryHookOptions<JobsListQuery, JobsListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<JobsListQuery, JobsListQueryVariables>(
    JobsListDocument,
    options,
  );
}
export function useJobsListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    JobsListQuery,
    JobsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<JobsListQuery, JobsListQueryVariables>(
    JobsListDocument,
    options,
  );
}
export type JobsListQueryHookResult = ReturnType<typeof useJobsListQuery>;
export type JobsListLazyQueryHookResult = ReturnType<
  typeof useJobsListLazyQuery
>;
export type JobsListQueryResult = Apollo.QueryResult<
  JobsListQuery,
  JobsListQueryVariables
>;
export const JobDocument = gql`
  query job($id: ID!) {
    job(id: $id) {
      priority
      status
      archived
      startDateTime
      endDateTime
      description
      name
      fieldworkerNotes
      workPerformed
      workOrder
      model
      unitServiced
      callID
      serial
      purchaseOrder
      address {
        id
        name
        customer {
          name
        }
      }
      jobJobFieldWorkerRelation {
        items {
          id
          fieldworker {
            id
            fullName
          }
        }
      }
      type {
        id
      }
    }
  }
`;

/**
 * __useJobQuery__
 *
 * To run a query within a React component, call `useJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useJobQuery(
  baseOptions: Apollo.QueryHookOptions<JobQuery, JobQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<JobQuery, JobQueryVariables>(JobDocument, options);
}
export function useJobLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<JobQuery, JobQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<JobQuery, JobQueryVariables>(JobDocument, options);
}
export type JobQueryHookResult = ReturnType<typeof useJobQuery>;
export type JobLazyQueryHookResult = ReturnType<typeof useJobLazyQuery>;
export type JobQueryResult = Apollo.QueryResult<JobQuery, JobQueryVariables>;
export const JobTypeListForSelectsDocument = gql`
  query JobTypeListForSelects {
    jobTypesList {
      items {
        id
        name
      }
    }
  }
`;

/**
 * __useJobTypeListForSelectsQuery__
 *
 * To run a query within a React component, call `useJobTypeListForSelectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobTypeListForSelectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobTypeListForSelectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useJobTypeListForSelectsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    JobTypeListForSelectsQuery,
    JobTypeListForSelectsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    JobTypeListForSelectsQuery,
    JobTypeListForSelectsQueryVariables
  >(JobTypeListForSelectsDocument, options);
}
export function useJobTypeListForSelectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    JobTypeListForSelectsQuery,
    JobTypeListForSelectsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    JobTypeListForSelectsQuery,
    JobTypeListForSelectsQueryVariables
  >(JobTypeListForSelectsDocument, options);
}
export type JobTypeListForSelectsQueryHookResult = ReturnType<
  typeof useJobTypeListForSelectsQuery
>;
export type JobTypeListForSelectsLazyQueryHookResult = ReturnType<
  typeof useJobTypeListForSelectsLazyQuery
>;
export type JobTypeListForSelectsQueryResult = Apollo.QueryResult<
  JobTypeListForSelectsQuery,
  JobTypeListForSelectsQueryVariables
>;
export const AddressesSelectListDocument = gql`
  query AddressesSelectList {
    addressesList(filter: { customer: { archived: { is_empty: true } } }) {
      items {
        customer {
          id
          name
        }
        id
        name
      }
    }
  }
`;

/**
 * __useAddressesSelectListQuery__
 *
 * To run a query within a React component, call `useAddressesSelectListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddressesSelectListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddressesSelectListQuery({
 *   variables: {
 *   },
 * });
 */
export function useAddressesSelectListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AddressesSelectListQuery,
    AddressesSelectListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AddressesSelectListQuery,
    AddressesSelectListQueryVariables
  >(AddressesSelectListDocument, options);
}
export function useAddressesSelectListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AddressesSelectListQuery,
    AddressesSelectListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AddressesSelectListQuery,
    AddressesSelectListQueryVariables
  >(AddressesSelectListDocument, options);
}
export type AddressesSelectListQueryHookResult = ReturnType<
  typeof useAddressesSelectListQuery
>;
export type AddressesSelectListLazyQueryHookResult = ReturnType<
  typeof useAddressesSelectListLazyQuery
>;
export type AddressesSelectListQueryResult = Apollo.QueryResult<
  AddressesSelectListQuery,
  AddressesSelectListQueryVariables
>;
export const JobDetailDocument = gql`
  query JobDetail($id: ID!) {
    job(id: $id) {
      code
      createdAt
      priority
      status
      archived
      description
      endDateTime
      name
      startDateTime
      fieldworkerNotes
      workPerformed
      workOrder
      model
      unitServiced
      callID
      serial
      purchaseOrder
      jobJobFieldWorkerRelation {
        items {
          fieldworker {
            fullName
            id
            user {
              id
            }
          }
          id
        }
      }
      address {
        customer {
          name
          email
          phoneNumber
        }
        city
        state
        streetAddress
      }
      type {
        name
      }
    }
  }
`;

/**
 * __useJobDetailQuery__
 *
 * To run a query within a React component, call `useJobDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useJobDetailQuery(
  baseOptions: Apollo.QueryHookOptions<JobDetailQuery, JobDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<JobDetailQuery, JobDetailQueryVariables>(
    JobDetailDocument,
    options,
  );
}
export function useJobDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    JobDetailQuery,
    JobDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<JobDetailQuery, JobDetailQueryVariables>(
    JobDetailDocument,
    options,
  );
}
export type JobDetailQueryHookResult = ReturnType<typeof useJobDetailQuery>;
export type JobDetailLazyQueryHookResult = ReturnType<
  typeof useJobDetailLazyQuery
>;
export type JobDetailQueryResult = Apollo.QueryResult<
  JobDetailQuery,
  JobDetailQueryVariables
>;
export const Job_CreateDocument = gql`
  mutation JOB_CREATE($data: JobCreateInput!) {
    jobCreate(data: $data) {
      id
    }
  }
`;
export type Job_CreateMutationFn = Apollo.MutationFunction<
  Job_CreateMutation,
  Job_CreateMutationVariables
>;

/**
 * __useJob_CreateMutation__
 *
 * To run a mutation, you first call `useJob_CreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJob_CreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jobCreateMutation, { data, loading, error }] = useJob_CreateMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useJob_CreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Job_CreateMutation,
    Job_CreateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Job_CreateMutation, Job_CreateMutationVariables>(
    Job_CreateDocument,
    options,
  );
}
export type Job_CreateMutationHookResult = ReturnType<
  typeof useJob_CreateMutation
>;
export type Job_CreateMutationResult =
  Apollo.MutationResult<Job_CreateMutation>;
export type Job_CreateMutationOptions = Apollo.BaseMutationOptions<
  Job_CreateMutation,
  Job_CreateMutationVariables
>;
export const FieldworkerSelectListDocument = gql`
  query FieldworkerSelectList {
    fieldworkersList {
      items {
        id
        fullName
      }
    }
  }
`;

/**
 * __useFieldworkerSelectListQuery__
 *
 * To run a query within a React component, call `useFieldworkerSelectListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFieldworkerSelectListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFieldworkerSelectListQuery({
 *   variables: {
 *   },
 * });
 */
export function useFieldworkerSelectListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FieldworkerSelectListQuery,
    FieldworkerSelectListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    FieldworkerSelectListQuery,
    FieldworkerSelectListQueryVariables
  >(FieldworkerSelectListDocument, options);
}
export function useFieldworkerSelectListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FieldworkerSelectListQuery,
    FieldworkerSelectListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    FieldworkerSelectListQuery,
    FieldworkerSelectListQueryVariables
  >(FieldworkerSelectListDocument, options);
}
export type FieldworkerSelectListQueryHookResult = ReturnType<
  typeof useFieldworkerSelectListQuery
>;
export type FieldworkerSelectListLazyQueryHookResult = ReturnType<
  typeof useFieldworkerSelectListLazyQuery
>;
export type FieldworkerSelectListQueryResult = Apollo.QueryResult<
  FieldworkerSelectListQuery,
  FieldworkerSelectListQueryVariables
>;
export const JobFieldworkerSelectListDocument = gql`
  query JobFieldworkerSelectList {
    jobFieldworkersList {
      items {
        id
        fieldworker {
          id
          fullName
        }
      }
    }
  }
`;

/**
 * __useJobFieldworkerSelectListQuery__
 *
 * To run a query within a React component, call `useJobFieldworkerSelectListQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobFieldworkerSelectListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobFieldworkerSelectListQuery({
 *   variables: {
 *   },
 * });
 */
export function useJobFieldworkerSelectListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    JobFieldworkerSelectListQuery,
    JobFieldworkerSelectListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    JobFieldworkerSelectListQuery,
    JobFieldworkerSelectListQueryVariables
  >(JobFieldworkerSelectListDocument, options);
}
export function useJobFieldworkerSelectListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    JobFieldworkerSelectListQuery,
    JobFieldworkerSelectListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    JobFieldworkerSelectListQuery,
    JobFieldworkerSelectListQueryVariables
  >(JobFieldworkerSelectListDocument, options);
}
export type JobFieldworkerSelectListQueryHookResult = ReturnType<
  typeof useJobFieldworkerSelectListQuery
>;
export type JobFieldworkerSelectListLazyQueryHookResult = ReturnType<
  typeof useJobFieldworkerSelectListLazyQuery
>;
export type JobFieldworkerSelectListQueryResult = Apollo.QueryResult<
  JobFieldworkerSelectListQuery,
  JobFieldworkerSelectListQueryVariables
>;
export const JobCreateDocument = gql`
  mutation JobCreate($data: JobCreateInput!) {
    jobCreate(data: $data) {
      id
      name
    }
  }
`;
export type JobCreateMutationFn = Apollo.MutationFunction<
  JobCreateMutation,
  JobCreateMutationVariables
>;

/**
 * __useJobCreateMutation__
 *
 * To run a mutation, you first call `useJobCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJobCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jobCreateMutation, { data, loading, error }] = useJobCreateMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useJobCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    JobCreateMutation,
    JobCreateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<JobCreateMutation, JobCreateMutationVariables>(
    JobCreateDocument,
    options,
  );
}
export type JobCreateMutationHookResult = ReturnType<
  typeof useJobCreateMutation
>;
export type JobCreateMutationResult = Apollo.MutationResult<JobCreateMutation>;
export type JobCreateMutationOptions = Apollo.BaseMutationOptions<
  JobCreateMutation,
  JobCreateMutationVariables
>;
export const JobUpdateDocument = gql`
  mutation JobUpdate($data: JobUpdateInput!, $id: ID!) {
    jobUpdate(
      data: $data
      filter: { id: $id }
      force: true
      destroyDetached: true
    ) {
      id
    }
  }
`;
export type JobUpdateMutationFn = Apollo.MutationFunction<
  JobUpdateMutation,
  JobUpdateMutationVariables
>;

/**
 * __useJobUpdateMutation__
 *
 * To run a mutation, you first call `useJobUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJobUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jobUpdateMutation, { data, loading, error }] = useJobUpdateMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useJobUpdateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    JobUpdateMutation,
    JobUpdateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<JobUpdateMutation, JobUpdateMutationVariables>(
    JobUpdateDocument,
    options,
  );
}
export type JobUpdateMutationHookResult = ReturnType<
  typeof useJobUpdateMutation
>;
export type JobUpdateMutationResult = Apollo.MutationResult<JobUpdateMutation>;
export type JobUpdateMutationOptions = Apollo.BaseMutationOptions<
  JobUpdateMutation,
  JobUpdateMutationVariables
>;
export const ClockListDocument = gql`
  query clockList($filter: ClockInOutFilter) {
    clockInOutsList(filter: $filter, sort: { createdAt: DESC }) {
      items {
        id
        fieldworker {
          fullName
          user {
            id
          }
        }
        createdAt
        type
        updatedAt
      }
    }
  }
`;

/**
 * __useClockListQuery__
 *
 * To run a query within a React component, call `useClockListQuery` and pass it any options that fit your needs.
 * When your component renders, `useClockListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClockListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useClockListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ClockListQuery,
    ClockListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ClockListQuery, ClockListQueryVariables>(
    ClockListDocument,
    options,
  );
}
export function useClockListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClockListQuery,
    ClockListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ClockListQuery, ClockListQueryVariables>(
    ClockListDocument,
    options,
  );
}
export type ClockListQueryHookResult = ReturnType<typeof useClockListQuery>;
export type ClockListLazyQueryHookResult = ReturnType<
  typeof useClockListLazyQuery
>;
export type ClockListQueryResult = Apollo.QueryResult<
  ClockListQuery,
  ClockListQueryVariables
>;
export const CreateClockMutationDocument = gql`
  mutation createClockMutation(
    $clock: String!
    $idJob: ID!
    $idFieldworker: ID!
  ) {
    clockInOutCreate(
      data: {
        fieldworker: { connect: { id: $idFieldworker } }
        job: { connect: { id: $idJob } }
        type: $clock
      }
    ) {
      id
      type
    }
  }
`;
export type CreateClockMutationMutationFn = Apollo.MutationFunction<
  CreateClockMutationMutation,
  CreateClockMutationMutationVariables
>;

/**
 * __useCreateClockMutationMutation__
 *
 * To run a mutation, you first call `useCreateClockMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClockMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClockMutationMutation, { data, loading, error }] = useCreateClockMutationMutation({
 *   variables: {
 *      clock: // value for 'clock'
 *      idJob: // value for 'idJob'
 *      idFieldworker: // value for 'idFieldworker'
 *   },
 * });
 */
export function useCreateClockMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateClockMutationMutation,
    CreateClockMutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateClockMutationMutation,
    CreateClockMutationMutationVariables
  >(CreateClockMutationDocument, options);
}
export type CreateClockMutationMutationHookResult = ReturnType<
  typeof useCreateClockMutationMutation
>;
export type CreateClockMutationMutationResult =
  Apollo.MutationResult<CreateClockMutationMutation>;
export type CreateClockMutationMutationOptions = Apollo.BaseMutationOptions<
  CreateClockMutationMutation,
  CreateClockMutationMutationVariables
>;
export const UserSessionDocument = gql`
  query UserSession {
    user {
      id
      lastName
      firstName
      email
      avatar {
        shareUrl
      }
      typeUser
      roles {
        items {
          name
        }
      }
    }
  }
`;

/**
 * __useUserSessionQuery__
 *
 * To run a query within a React component, call `useUserSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserSessionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserSessionQuery,
    UserSessionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserSessionQuery, UserSessionQueryVariables>(
    UserSessionDocument,
    options,
  );
}
export function useUserSessionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserSessionQuery,
    UserSessionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserSessionQuery, UserSessionQueryVariables>(
    UserSessionDocument,
    options,
  );
}
export type UserSessionQueryHookResult = ReturnType<typeof useUserSessionQuery>;
export type UserSessionLazyQueryHookResult = ReturnType<
  typeof useUserSessionLazyQuery
>;
export type UserSessionQueryResult = Apollo.QueryResult<
  UserSessionQuery,
  UserSessionQueryVariables
>;
