var Doctum = {
    treeJson: {"tree":{"l":0,"n":"","p":"","c":[{"l":1,"n":"Poweradmin","p":"Poweradmin","c":[{"l":2,"n":"Application","p":"Poweradmin/Application","c":[{"l":3,"n":"Controller","p":"Poweradmin/Application/Controller","c":[{"l":4,"n":"Api","p":"Poweradmin/Application/Controller/Api","c":[{"l":5,"n":"Docs","p":"Poweradmin/Application/Controller/Api/Docs","c":[{"l":6,"n":"JsonController","p":"Poweradmin/Application/Controller/Api/Docs/JsonController"}]},{"l":5,"n":"Internal","p":"Poweradmin/Application/Controller/Api/Internal","c":[{"l":6,"n":"UserPreferencesController","p":"Poweradmin/Application/Controller/Api/Internal/UserPreferencesController"},{"l":6,"n":"ValidationController","p":"Poweradmin/Application/Controller/Api/Internal/ValidationController"},{"l":6,"n":"ZoneController","p":"Poweradmin/Application/Controller/Api/Internal/ZoneController"}]},{"l":5,"n":"V2","p":"Poweradmin/Application/Controller/Api/V2","c":[{"l":6,"n":"DynamicDnsController","p":"Poweradmin/Application/Controller/Api/V2/DynamicDnsController"},{"l":6,"n":"GroupMembersController","p":"Poweradmin/Application/Controller/Api/V2/GroupMembersController"},{"l":6,"n":"GroupZonesController","p":"Poweradmin/Application/Controller/Api/V2/GroupZonesController"},{"l":6,"n":"GroupsController","p":"Poweradmin/Application/Controller/Api/V2/GroupsController"},{"l":6,"n":"PermissionTemplatesController","p":"Poweradmin/Application/Controller/Api/V2/PermissionTemplatesController"},{"l":6,"n":"PermissionsController","p":"Poweradmin/Application/Controller/Api/V2/PermissionsController"},{"l":6,"n":"UsersController","p":"Poweradmin/Application/Controller/Api/V2/UsersController"},{"l":6,"n":"ZoneDnssecController","p":"Poweradmin/Application/Controller/Api/V2/ZoneDnssecController"},{"l":6,"n":"ZoneMetadataController","p":"Poweradmin/Application/Controller/Api/V2/ZoneMetadataController"},{"l":6,"n":"ZoneOwnersController","p":"Poweradmin/Application/Controller/Api/V2/ZoneOwnersController"},{"l":6,"n":"ZoneTemplateRecordsController","p":"Poweradmin/Application/Controller/Api/V2/ZoneTemplateRecordsController"},{"l":6,"n":"ZoneTemplatesController","p":"Poweradmin/Application/Controller/Api/V2/ZoneTemplatesController"},{"l":6,"n":"ZonesController","p":"Poweradmin/Application/Controller/Api/V2/ZonesController"},{"l":6,"n":"ZonesRRSetsController","p":"Poweradmin/Application/Controller/Api/V2/ZonesRRSetsController"},{"l":6,"n":"ZonesRecordsBulkController","p":"Poweradmin/Application/Controller/Api/V2/ZonesRecordsBulkController"},{"l":6,"n":"ZonesRecordsController","p":"Poweradmin/Application/Controller/Api/V2/ZonesRecordsController"}]},{"l":5,"n":"AbstractApiController","p":"Poweradmin/Application/Controller/Api/AbstractApiController"},{"l":5,"n":"DocsController","p":"Poweradmin/Application/Controller/Api/DocsController"},{"l":5,"n":"HeadlessNotFoundController","p":"Poweradmin/Application/Controller/Api/HeadlessNotFoundController"},{"l":5,"n":"HealthController","p":"Poweradmin/Application/Controller/Api/HealthController"},{"l":5,"n":"InternalApiController","p":"Poweradmin/Application/Controller/Api/InternalApiController"},{"l":5,"n":"PublicApiController","p":"Poweradmin/Application/Controller/Api/PublicApiController"},{"l":5,"n":"V1GoneController","p":"Poweradmin/Application/Controller/Api/V1GoneController"}]},{"l":4,"n":"AddGroupController","p":"Poweradmin/Application/Controller/AddGroupController"},{"l":4,"n":"AddPermTemplController","p":"Poweradmin/Application/Controller/AddPermTemplController"},{"l":4,"n":"AddRecordController","p":"Poweradmin/Application/Controller/AddRecordController"},{"l":4,"n":"AddSupermasterController","p":"Poweradmin/Application/Controller/AddSupermasterController"},{"l":4,"n":"AddUserController","p":"Poweradmin/Application/Controller/AddUserController"},{"l":4,"n":"AddZoneMasterController","p":"Poweradmin/Application/Controller/AddZoneMasterController"},{"l":4,"n":"AddZoneSlaveController","p":"Poweradmin/Application/Controller/AddZoneSlaveController"},{"l":4,"n":"AddZoneTemplController","p":"Poweradmin/Application/Controller/AddZoneTemplController"},{"l":4,"n":"AddZoneTemplRecordController","p":"Poweradmin/Application/Controller/AddZoneTemplRecordController"},{"l":4,"n":"ApiKeysController","p":"Poweradmin/Application/Controller/ApiKeysController"},{"l":4,"n":"BatchPtrRecordController","p":"Poweradmin/Application/Controller/BatchPtrRecordController"},{"l":4,"n":"BulkRecordAddController","p":"Poweradmin/Application/Controller/BulkRecordAddController"},{"l":4,"n":"BulkRegistrationController","p":"Poweradmin/Application/Controller/BulkRegistrationController"},{"l":4,"n":"ChangePasswordController","p":"Poweradmin/Application/Controller/ChangePasswordController"},{"l":4,"n":"DatabaseConsistencyController","p":"Poweradmin/Application/Controller/DatabaseConsistencyController"},{"l":4,"n":"DeleteDomainController","p":"Poweradmin/Application/Controller/DeleteDomainController"},{"l":4,"n":"DeleteDomainsController","p":"Poweradmin/Application/Controller/DeleteDomainsController"},{"l":4,"n":"DeleteGroupController","p":"Poweradmin/Application/Controller/DeleteGroupController"},{"l":4,"n":"DeletePermTemplController","p":"Poweradmin/Application/Controller/DeletePermTemplController"},{"l":4,"n":"DeleteRecordController","p":"Poweradmin/Application/Controller/DeleteRecordController"},{"l":4,"n":"DeleteRecordsController","p":"Poweradmin/Application/Controller/DeleteRecordsController"},{"l":4,"n":"DeleteSupermasterController","p":"Poweradmin/Application/Controller/DeleteSupermasterController"},{"l":4,"n":"DeleteUserController","p":"Poweradmin/Application/Controller/DeleteUserController"},{"l":4,"n":"DeleteZoneTemplController","p":"Poweradmin/Application/Controller/DeleteZoneTemplController"},{"l":4,"n":"DeleteZoneTemplRecordController","p":"Poweradmin/Application/Controller/DeleteZoneTemplRecordController"},{"l":4,"n":"DnssecAddKeyController","p":"Poweradmin/Application/Controller/DnssecAddKeyController"},{"l":4,"n":"DnssecController","p":"Poweradmin/Application/Controller/DnssecController"},{"l":4,"n":"DnssecDeleteKeyController","p":"Poweradmin/Application/Controller/DnssecDeleteKeyController"},{"l":4,"n":"DnssecDsDnskeyController","p":"Poweradmin/Application/Controller/DnssecDsDnskeyController"},{"l":4,"n":"DnssecEditKeyController","p":"Poweradmin/Application/Controller/DnssecEditKeyController"},{"l":4,"n":"DnssecKeyController","p":"Poweradmin/Application/Controller/DnssecKeyController"},{"l":4,"n":"DnssecKeyExportController","p":"Poweradmin/Application/Controller/DnssecKeyExportController"},{"l":4,"n":"DnssecKeyImportController","p":"Poweradmin/Application/Controller/DnssecKeyImportController"},{"l":4,"n":"DnssecToggleKeyController","p":"Poweradmin/Application/Controller/DnssecToggleKeyController"},{"l":4,"n":"EditCommentController","p":"Poweradmin/Application/Controller/EditCommentController"},{"l":4,"n":"EditController","p":"Poweradmin/Application/Controller/EditController"},{"l":4,"n":"EditGroupController","p":"Poweradmin/Application/Controller/EditGroupController"},{"l":4,"n":"EditPermTemplController","p":"Poweradmin/Application/Controller/EditPermTemplController"},{"l":4,"n":"EditRecordController","p":"Poweradmin/Application/Controller/EditRecordController"},{"l":4,"n":"EditSupermasterController","p":"Poweradmin/Application/Controller/EditSupermasterController"},{"l":4,"n":"EditUserController","p":"Poweradmin/Application/Controller/EditUserController"},{"l":4,"n":"EditZoneMetadataController","p":"Poweradmin/Application/Controller/EditZoneMetadataController"},{"l":4,"n":"EditZoneTemplController","p":"Poweradmin/Application/Controller/EditZoneTemplController"},{"l":4,"n":"EditZoneTemplRecordController","p":"Poweradmin/Application/Controller/EditZoneTemplRecordController"},{"l":4,"n":"ForgotPasswordController","p":"Poweradmin/Application/Controller/ForgotPasswordController"},{"l":4,"n":"ForgotUsernameController","p":"Poweradmin/Application/Controller/ForgotUsernameController"},{"l":4,"n":"IndexController","p":"Poweradmin/Application/Controller/IndexController"},{"l":4,"n":"ListForwardZonesController","p":"Poweradmin/Application/Controller/ListForwardZonesController"},{"l":4,"n":"ListGroupsController","p":"Poweradmin/Application/Controller/ListGroupsController"},{"l":4,"n":"ListLogApiController","p":"Poweradmin/Application/Controller/ListLogApiController"},{"l":4,"n":"ListLogGroupsController","p":"Poweradmin/Application/Controller/ListLogGroupsController"},{"l":4,"n":"ListLogUsersController","p":"Poweradmin/Application/Controller/ListLogUsersController"},{"l":4,"n":"ListLogZonesController","p":"Poweradmin/Application/Controller/ListLogZonesController"},{"l":4,"n":"ListNetworksController","p":"Poweradmin/Application/Controller/ListNetworksController"},{"l":4,"n":"ListPermTemplController","p":"Poweradmin/Application/Controller/ListPermTemplController"},{"l":4,"n":"ListRecordChangesController","p":"Poweradmin/Application/Controller/ListRecordChangesController"},{"l":4,"n":"ListReverseZonesController","p":"Poweradmin/Application/Controller/ListReverseZonesController"},{"l":4,"n":"ListSupermastersController","p":"Poweradmin/Application/Controller/ListSupermastersController"},{"l":4,"n":"ListTemplateZonesController","p":"Poweradmin/Application/Controller/ListTemplateZonesController"},{"l":4,"n":"ListViewsController","p":"Poweradmin/Application/Controller/ListViewsController"},{"l":4,"n":"ListZoneTemplController","p":"Poweradmin/Application/Controller/ListZoneTemplController"},{"l":4,"n":"LoginController","p":"Poweradmin/Application/Controller/LoginController"},{"l":4,"n":"LogoutController","p":"Poweradmin/Application/Controller/LogoutController"},{"l":4,"n":"ManageGroupMembersController","p":"Poweradmin/Application/Controller/ManageGroupMembersController"},{"l":4,"n":"ManageGroupZonesController","p":"Poweradmin/Application/Controller/ManageGroupZonesController"},{"l":4,"n":"MfaSetupController","p":"Poweradmin/Application/Controller/MfaSetupController"},{"l":4,"n":"MfaVerifyController","p":"Poweradmin/Application/Controller/MfaVerifyController"},{"l":4,"n":"NotFoundController","p":"Poweradmin/Application/Controller/NotFoundController"},{"l":4,"n":"OidcCallbackController","p":"Poweradmin/Application/Controller/OidcCallbackController"},{"l":4,"n":"OidcLoginController","p":"Poweradmin/Application/Controller/OidcLoginController"},{"l":4,"n":"PdnsStatusController","p":"Poweradmin/Application/Controller/PdnsStatusController"},{"l":4,"n":"PingController","p":"Poweradmin/Application/Controller/PingController"},{"l":4,"n":"QuickRemoveGroupMemberController","p":"Poweradmin/Application/Controller/QuickRemoveGroupMemberController"},{"l":4,"n":"QuickRemoveGroupZoneController","p":"Poweradmin/Application/Controller/QuickRemoveGroupZoneController"},{"l":4,"n":"RecordTypeDefaultsController","p":"Poweradmin/Application/Controller/RecordTypeDefaultsController"},{"l":4,"n":"RemoveUserGroupController","p":"Poweradmin/Application/Controller/RemoveUserGroupController"},{"l":4,"n":"ResetPasswordController","p":"Poweradmin/Application/Controller/ResetPasswordController"},{"l":4,"n":"SamlCallbackController","p":"Poweradmin/Application/Controller/SamlCallbackController"},{"l":4,"n":"SamlLoginController","p":"Poweradmin/Application/Controller/SamlLoginController"},{"l":4,"n":"SamlMetadataController","p":"Poweradmin/Application/Controller/SamlMetadataController"},{"l":4,"n":"SaveZoneAsTemplateController","p":"Poweradmin/Application/Controller/SaveZoneAsTemplateController"},{"l":4,"n":"SearchController","p":"Poweradmin/Application/Controller/SearchController"},{"l":4,"n":"SetDefaultZoneTemplController","p":"Poweradmin/Application/Controller/SetDefaultZoneTemplController"},{"l":4,"n":"StaticAssetController","p":"Poweradmin/Application/Controller/StaticAssetController"},{"l":4,"n":"UnlinkZonesTemplController","p":"Poweradmin/Application/Controller/UnlinkZonesTemplController"},{"l":4,"n":"UserAgreementController","p":"Poweradmin/Application/Controller/UserAgreementController"},{"l":4,"n":"UserPreferencesController","p":"Poweradmin/Application/Controller/UserPreferencesController"},{"l":4,"n":"UsersController","p":"Poweradmin/Application/Controller/UsersController"},{"l":4,"n":"ZoneCatalogController","p":"Poweradmin/Application/Controller/ZoneCatalogController"},{"l":4,"n":"ZoneOwnershipController","p":"Poweradmin/Application/Controller/ZoneOwnershipController"}]},{"l":3,"n":"Http","p":"Poweradmin/Application/Http","c":[{"l":4,"n":"BootstrapErrorResponder","p":"Poweradmin/Application/Http/BootstrapErrorResponder"},{"l":4,"n":"Request","p":"Poweradmin/Application/Http/Request"},{"l":4,"n":"RequestContext","p":"Poweradmin/Application/Http/RequestContext"}]},{"l":3,"n":"Presenter","p":"Poweradmin/Application/Presenter","c":[{"l":4,"n":"OwnerGroupColumnPresenter","p":"Poweradmin/Application/Presenter/OwnerGroupColumnPresenter"},{"l":4,"n":"PaginationPresenter","p":"Poweradmin/Application/Presenter/PaginationPresenter"},{"l":4,"n":"ZoneStartingLettersPresenter","p":"Poweradmin/Application/Presenter/ZoneStartingLettersPresenter"}]},{"l":3,"n":"Routing","p":"Poweradmin/Application/Routing","c":[{"l":4,"n":"HeadlessRouteFilter","p":"Poweradmin/Application/Routing/HeadlessRouteFilter"},{"l":4,"n":"SymfonyRouter","p":"Poweradmin/Application/Routing/SymfonyRouter"}]},{"l":3,"n":"Service","p":"Poweradmin/Application/Service","c":[{"l":4,"n":"ApiStatusService","p":"Poweradmin/Application/Service/ApiStatusService"},{"l":4,"n":"AuditService","p":"Poweradmin/Application/Service/AuditService"},{"l":4,"n":"AvatarService","p":"Poweradmin/Application/Service/AvatarService"},{"l":4,"n":"ControllerServiceFactory","p":"Poweradmin/Application/Service/ControllerServiceFactory"},{"l":4,"n":"CsrfTokenService","p":"Poweradmin/Application/Service/CsrfTokenService"},{"l":4,"n":"DashboardStatsService","p":"Poweradmin/Application/Service/DashboardStatsService"},{"l":4,"n":"DatabaseService","p":"Poweradmin/Application/Service/DatabaseService"},{"l":4,"n":"DnsBackendProviderFactory","p":"Poweradmin/Application/Service/DnsBackendProviderFactory"},{"l":4,"n":"DnsDataService","p":"Poweradmin/Application/Service/DnsDataService"},{"l":4,"n":"DnssecProviderFactory","p":"Poweradmin/Application/Service/DnssecProviderFactory"},{"l":4,"n":"DynamicDnsRequestFactory","p":"Poweradmin/Application/Service/DynamicDnsRequestFactory"},{"l":4,"n":"EmailTemplateService","p":"Poweradmin/Application/Service/EmailTemplateService"},{"l":4,"n":"GroupMembershipService","p":"Poweradmin/Application/Service/GroupMembershipService"},{"l":4,"n":"GroupService","p":"Poweradmin/Application/Service/GroupService"},{"l":4,"n":"LdapAuthenticator","p":"Poweradmin/Application/Service/LdapAuthenticator"},{"l":4,"n":"LocaleResolver","p":"Poweradmin/Application/Service/LocaleResolver"},{"l":4,"n":"LoggingService","p":"Poweradmin/Application/Service/LoggingService"},{"l":4,"n":"LoginAttemptService","p":"Poweradmin/Application/Service/LoginAttemptService"},{"l":4,"n":"MailService","p":"Poweradmin/Application/Service/MailService"},{"l":4,"n":"OidcConfigurationService","p":"Poweradmin/Application/Service/OidcConfigurationService"},{"l":4,"n":"OidcService","p":"Poweradmin/Application/Service/OidcService"},{"l":4,"n":"PaginationService","p":"Poweradmin/Application/Service/PaginationService"},{"l":4,"n":"PasswordChangeService","p":"Poweradmin/Application/Service/PasswordChangeService"},{"l":4,"n":"PasswordGenerationService","p":"Poweradmin/Application/Service/PasswordGenerationService"},{"l":4,"n":"PasswordPolicyService","p":"Poweradmin/Application/Service/PasswordPolicyService"},{"l":4,"n":"PasswordResetService","p":"Poweradmin/Application/Service/PasswordResetService"},{"l":4,"n":"PdnsVersionService","p":"Poweradmin/Application/Service/PdnsVersionService"},{"l":4,"n":"PermissionTemplateWriteService","p":"Poweradmin/Application/Service/PermissionTemplateWriteService"},{"l":4,"n":"PowerdnsStatusService","p":"Poweradmin/Application/Service/PowerdnsStatusService"},{"l":4,"n":"RecaptchaService","p":"Poweradmin/Application/Service/RecaptchaService"},{"l":4,"n":"RecordAddMessages","p":"Poweradmin/Application/Service/RecordAddMessages"},{"l":4,"n":"RecordAddResult","p":"Poweradmin/Application/Service/RecordAddResult"},{"l":4,"n":"RecordAddService","p":"Poweradmin/Application/Service/RecordAddService"},{"l":4,"n":"RecordCommentService","p":"Poweradmin/Application/Service/RecordCommentService"},{"l":4,"n":"RecordCommentSyncService","p":"Poweradmin/Application/Service/RecordCommentSyncService"},{"l":4,"n":"RecordManagerService","p":"Poweradmin/Application/Service/RecordManagerService"},{"l":4,"n":"RejectedZoneEditPresenter","p":"Poweradmin/Application/Service/RejectedZoneEditPresenter"},{"l":4,"n":"RepositoryFactory","p":"Poweradmin/Application/Service/RepositoryFactory"},{"l":4,"n":"RequestValidator","p":"Poweradmin/Application/Service/RequestValidator"},{"l":4,"n":"ResultPaginator","p":"Poweradmin/Application/Service/ResultPaginator"},{"l":4,"n":"SamlConfigurationService","p":"Poweradmin/Application/Service/SamlConfigurationService"},{"l":4,"n":"SamlService","p":"Poweradmin/Application/Service/SamlService"},{"l":4,"n":"SqlAuthenticator","p":"Poweradmin/Application/Service/SqlAuthenticator"},{"l":4,"n":"StatsDisplayService","p":"Poweradmin/Application/Service/StatsDisplayService"},{"l":4,"n":"UrlService","p":"Poweradmin/Application/Service/UrlService"},{"l":4,"n":"UserAuthenticationService","p":"Poweradmin/Application/Service/UserAuthenticationService"},{"l":4,"n":"UserEventLogger","p":"Poweradmin/Application/Service/UserEventLogger"},{"l":4,"n":"UserFormMessages","p":"Poweradmin/Application/Service/UserFormMessages"},{"l":4,"n":"UserProvisioningService","p":"Poweradmin/Application/Service/UserProvisioningService"},{"l":4,"n":"UsernameRecoveryService","p":"Poweradmin/Application/Service/UsernameRecoveryService"},{"l":4,"n":"ZoneAccessNotificationService","p":"Poweradmin/Application/Service/ZoneAccessNotificationService"},{"l":4,"n":"ZoneCreateFormMessages","p":"Poweradmin/Application/Service/ZoneCreateFormMessages"},{"l":4,"n":"ZoneGroupService","p":"Poweradmin/Application/Service/ZoneGroupService"},{"l":4,"n":"ZoneMetadataFormMessages","p":"Poweradmin/Application/Service/ZoneMetadataFormMessages"},{"l":4,"n":"ZoneOwnershipFormResolver","p":"Poweradmin/Application/Service/ZoneOwnershipFormResolver"},{"l":4,"n":"ZoneSaveMessages","p":"Poweradmin/Application/Service/ZoneSaveMessages"},{"l":4,"n":"ZoneSigningMessages","p":"Poweradmin/Application/Service/ZoneSigningMessages"},{"l":4,"n":"ZoneSyncService","p":"Poweradmin/Application/Service/ZoneSyncService"}]},{"l":3,"n":"Bootstrap","p":"Poweradmin/Application/Bootstrap"}]},{"l":2,"n":"Domain","p":"Poweradmin/Domain","c":[{"l":3,"n":"Error","p":"Poweradmin/Domain/Error","c":[{"l":4,"n":"ApiErrorException","p":"Poweradmin/Domain/Error/ApiErrorException"},{"l":4,"n":"GroupNotFoundException","p":"Poweradmin/Domain/Error/GroupNotFoundException"}]},{"l":3,"n":"Model","p":"Poweradmin/Domain/Model","c":[{"l":4,"n":"ApiKey","p":"Poweradmin/Domain/Model/ApiKey"},{"l":4,"n":"ApiKeyScope","p":"Poweradmin/Domain/Model/ApiKeyScope"},{"l":4,"n":"Constants","p":"Poweradmin/Domain/Model/Constants"},{"l":4,"n":"CryptoKey","p":"Poweradmin/Domain/Model/CryptoKey"},{"l":4,"n":"DnssecAlgorithm","p":"Poweradmin/Domain/Model/DnssecAlgorithm"},{"l":4,"n":"DnssecAlgorithmName","p":"Poweradmin/Domain/Model/DnssecAlgorithmName"},{"l":4,"n":"MetadataDefinitions","p":"Poweradmin/Domain/Model/MetadataDefinitions"},{"l":4,"n":"Pagination","p":"Poweradmin/Domain/Model/Pagination"},{"l":4,"n":"Permission","p":"Poweradmin/Domain/Model/Permission"},{"l":4,"n":"RecordComment","p":"Poweradmin/Domain/Model/RecordComment"},{"l":4,"n":"RecordType","p":"Poweradmin/Domain/Model/RecordType"},{"l":4,"n":"SessionEntity","p":"Poweradmin/Domain/Model/SessionEntity"},{"l":4,"n":"User","p":"Poweradmin/Domain/Model/User"},{"l":4,"n":"UserGroup","p":"Poweradmin/Domain/Model/UserGroup"},{"l":4,"n":"UserGroupMember","p":"Poweradmin/Domain/Model/UserGroupMember"},{"l":4,"n":"UserMfa","p":"Poweradmin/Domain/Model/UserMfa"},{"l":4,"n":"UserPreference","p":"Poweradmin/Domain/Model/UserPreference"},{"l":4,"n":"Zone","p":"Poweradmin/Domain/Model/Zone"},{"l":4,"n":"ZoneGroup","p":"Poweradmin/Domain/Model/ZoneGroup"},{"l":4,"n":"ZoneTemplate","p":"Poweradmin/Domain/Model/ZoneTemplate"},{"l":4,"n":"ZoneType","p":"Poweradmin/Domain/Model/ZoneType"}]},{"l":3,"n":"Repository","p":"Poweradmin/Domain/Repository","c":[{"l":4,"n":"ApiKeyRepositoryInterface","p":"Poweradmin/Domain/Repository/ApiKeyRepositoryInterface"},{"l":4,"n":"AppSettingRepositoryInterface","p":"Poweradmin/Domain/Repository/AppSettingRepositoryInterface"},{"l":4,"n":"DomainRepositoryInterface","p":"Poweradmin/Domain/Repository/DomainRepositoryInterface"},{"l":4,"n":"DynamicDnsRepositoryInterface","p":"Poweradmin/Domain/Repository/DynamicDnsRepositoryInterface"},{"l":4,"n":"RecordCommentRepositoryInterface","p":"Poweradmin/Domain/Repository/RecordCommentRepositoryInterface"},{"l":4,"n":"RecordRepositoryInterface","p":"Poweradmin/Domain/Repository/RecordRepositoryInterface"},{"l":4,"n":"RecordTypeDefaultRepositoryInterface","p":"Poweradmin/Domain/Repository/RecordTypeDefaultRepositoryInterface"},{"l":4,"n":"UserGroupMemberRepositoryInterface","p":"Poweradmin/Domain/Repository/UserGroupMemberRepositoryInterface"},{"l":4,"n":"UserGroupRepositoryInterface","p":"Poweradmin/Domain/Repository/UserGroupRepositoryInterface"},{"l":4,"n":"UserMfaRepositoryInterface","p":"Poweradmin/Domain/Repository/UserMfaRepositoryInterface"},{"l":4,"n":"UserPreferenceRepositoryInterface","p":"Poweradmin/Domain/Repository/UserPreferenceRepositoryInterface"},{"l":4,"n":"UserRepositoryInterface","p":"Poweradmin/Domain/Repository/UserRepositoryInterface"},{"l":4,"n":"ZoneGroupRepositoryInterface","p":"Poweradmin/Domain/Repository/ZoneGroupRepositoryInterface"},{"l":4,"n":"ZoneRepositoryInterface","p":"Poweradmin/Domain/Repository/ZoneRepositoryInterface"}]},{"l":3,"n":"Service","p":"Poweradmin/Domain/Service","c":[{"l":4,"n":"Dns","p":"Poweradmin/Domain/Service/Dns","c":[{"l":5,"n":"DomainManager","p":"Poweradmin/Domain/Service/Dns/DomainManager"},{"l":5,"n":"DomainManagerInterface","p":"Poweradmin/Domain/Service/Dns/DomainManagerInterface"},{"l":5,"n":"RecordManager","p":"Poweradmin/Domain/Service/Dns/RecordManager"},{"l":5,"n":"RecordManagerInterface","p":"Poweradmin/Domain/Service/Dns/RecordManagerInterface"},{"l":5,"n":"RecordWriteResult","p":"Poweradmin/Domain/Service/Dns/RecordWriteResult"},{"l":5,"n":"SOARecordManager","p":"Poweradmin/Domain/Service/Dns/SOARecordManager"},{"l":5,"n":"SOARecordManagerInterface","p":"Poweradmin/Domain/Service/Dns/SOARecordManagerInterface"},{"l":5,"n":"SupermasterManager","p":"Poweradmin/Domain/Service/Dns/SupermasterManager"},{"l":5,"n":"ZoneWriteResult","p":"Poweradmin/Domain/Service/Dns/ZoneWriteResult"}]},{"l":4,"n":"DnsValidation","p":"Poweradmin/Domain/Service/DnsValidation","c":[{"l":5,"n":"AAAARecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/AAAARecordValidator"},{"l":5,"n":"AFSDBRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/AFSDBRecordValidator"},{"l":5,"n":"ALIASRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/ALIASRecordValidator"},{"l":5,"n":"APLRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/APLRecordValidator"},{"l":5,"n":"ARecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/ARecordValidator"},{"l":5,"n":"BRIDRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/BRIDRecordValidator"},{"l":5,"n":"Base64BlobValidator","p":"Poweradmin/Domain/Service/DnsValidation/Base64BlobValidator"},{"l":5,"n":"CAARecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/CAARecordValidator"},{"l":5,"n":"CDNSKEYRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/CDNSKEYRecordValidator"},{"l":5,"n":"CDSRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/CDSRecordValidator"},{"l":5,"n":"CERTRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/CERTRecordValidator"},{"l":5,"n":"CNAMERecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/CNAMERecordValidator"},{"l":5,"n":"CSYNCRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/CSYNCRecordValidator"},{"l":5,"n":"CharacterStringParser","p":"Poweradmin/Domain/Service/DnsValidation/CharacterStringParser"},{"l":5,"n":"DHCIDRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/DHCIDRecordValidator"},{"l":5,"n":"DLVRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/DLVRecordValidator"},{"l":5,"n":"DMARCRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/DMARCRecordValidator"},{"l":5,"n":"DNAMERecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/DNAMERecordValidator"},{"l":5,"n":"DNSKEYRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/DNSKEYRecordValidator"},{"l":5,"n":"DNSViolationValidator","p":"Poweradmin/Domain/Service/DnsValidation/DNSViolationValidator"},{"l":5,"n":"DSRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/DSRecordValidator"},{"l":5,"n":"DefaultRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/DefaultRecordValidator"},{"l":5,"n":"DnsCommonValidator","p":"Poweradmin/Domain/Service/DnsValidation/DnsCommonValidator"},{"l":5,"n":"DnsRecordValidatorInterface","p":"Poweradmin/Domain/Service/DnsValidation/DnsRecordValidatorInterface"},{"l":5,"n":"DnsValidatorRegistry","p":"Poweradmin/Domain/Service/DnsValidation/DnsValidatorRegistry"},{"l":5,"n":"EUI48RecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/EUI48RecordValidator"},{"l":5,"n":"EUI64RecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/EUI64RecordValidator"},{"l":5,"n":"HHITRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/HHITRecordValidator"},{"l":5,"n":"HINFORecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/HINFORecordValidator"},{"l":5,"n":"HTTPSRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/HTTPSRecordValidator"},{"l":5,"n":"HostnameValidator","p":"Poweradmin/Domain/Service/DnsValidation/HostnameValidator"},{"l":5,"n":"IPAddressValidator","p":"Poweradmin/Domain/Service/DnsValidation/IPAddressValidator"},{"l":5,"n":"IPSECKEYRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/IPSECKEYRecordValidator"},{"l":5,"n":"KEYRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/KEYRecordValidator"},{"l":5,"n":"KXRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/KXRecordValidator"},{"l":5,"n":"L32RecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/L32RecordValidator"},{"l":5,"n":"L64RecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/L64RecordValidator"},{"l":5,"n":"LOCRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/LOCRecordValidator"},{"l":5,"n":"LPRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/LPRecordValidator"},{"l":5,"n":"LUARecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/LUARecordValidator"},{"l":5,"n":"MINFORecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/MINFORecordValidator"},{"l":5,"n":"MRRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/MRRecordValidator"},{"l":5,"n":"MXRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/MXRecordValidator"},{"l":5,"n":"NAPTRRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/NAPTRRecordValidator"},{"l":5,"n":"NIDRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/NIDRecordValidator"},{"l":5,"n":"NSEC3PARAMRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/NSEC3PARAMRecordValidator"},{"l":5,"n":"NSEC3RecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/NSEC3RecordValidator"},{"l":5,"n":"NSECRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/NSECRecordValidator"},{"l":5,"n":"NSRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/NSRecordValidator"},{"l":5,"n":"OPENPGPKEYRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/OPENPGPKEYRecordValidator"},{"l":5,"n":"PTRRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/PTRRecordValidator"},{"l":5,"n":"RESINFORecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/RESINFORecordValidator"},{"l":5,"n":"RKEYRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/RKEYRecordValidator"},{"l":5,"n":"RPRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/RPRecordValidator"},{"l":5,"n":"RRSIGRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/RRSIGRecordValidator"},{"l":5,"n":"SMIMEARecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/SMIMEARecordValidator"},{"l":5,"n":"SOARecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/SOARecordValidator"},{"l":5,"n":"SPFRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/SPFRecordValidator"},{"l":5,"n":"SRVRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/SRVRecordValidator"},{"l":5,"n":"SSHFPRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/SSHFPRecordValidator"},{"l":5,"n":"SVCBRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/SVCBRecordValidator"},{"l":5,"n":"StringValidator","p":"Poweradmin/Domain/Service/DnsValidation/StringValidator"},{"l":5,"n":"TKEYRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/TKEYRecordValidator"},{"l":5,"n":"TLSARecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/TLSARecordValidator"},{"l":5,"n":"TSIGRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/TSIGRecordValidator"},{"l":5,"n":"TTLValidator","p":"Poweradmin/Domain/Service/DnsValidation/TTLValidator"},{"l":5,"n":"TXTRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/TXTRecordValidator"},{"l":5,"n":"URIRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/URIRecordValidator"},{"l":5,"n":"WALLETRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/WALLETRecordValidator"},{"l":5,"n":"ZONEMDRecordValidator","p":"Poweradmin/Domain/Service/DnsValidation/ZONEMDRecordValidator"}]},{"l":4,"n":"Validation","p":"Poweradmin/Domain/Service/Validation","c":[{"l":5,"n":"ValidationResult","p":"Poweradmin/Domain/Service/Validation/ValidationResult"}]},{"l":4,"n":"ApiKeyService","p":"Poweradmin/Domain/Service/ApiKeyService"},{"l":4,"n":"ApiPermissionService","p":"Poweradmin/Domain/Service/ApiPermissionService"},{"l":4,"n":"AppSettingsService","p":"Poweradmin/Domain/Service/AppSettingsService"},{"l":4,"n":"AuthenticationService","p":"Poweradmin/Domain/Service/AuthenticationService"},{"l":4,"n":"BatchReverseRecordCreator","p":"Poweradmin/Domain/Service/BatchReverseRecordCreator"},{"l":4,"n":"BulkRecordParser","p":"Poweradmin/Domain/Service/BulkRecordParser"},{"l":4,"n":"CatalogZoneService","p":"Poweradmin/Domain/Service/CatalogZoneService"},{"l":4,"n":"DatabaseConsistencyService","p":"Poweradmin/Domain/Service/DatabaseConsistencyService"},{"l":4,"n":"DatabaseCredentialMapper","p":"Poweradmin/Domain/Service/DatabaseCredentialMapper"},{"l":4,"n":"DatabaseSchemaService","p":"Poweradmin/Domain/Service/DatabaseSchemaService"},{"l":4,"n":"DnsBackendProviderInterface","p":"Poweradmin/Domain/Service/DnsBackendProviderInterface"},{"l":4,"n":"DnsFormatter","p":"Poweradmin/Domain/Service/DnsFormatter"},{"l":4,"n":"DnsIdnService","p":"Poweradmin/Domain/Service/DnsIdnService"},{"l":4,"n":"DnsRecordValidationService","p":"Poweradmin/Domain/Service/DnsRecordValidationService"},{"l":4,"n":"DnsRecordValidationServiceInterface","p":"Poweradmin/Domain/Service/DnsRecordValidationServiceInterface"},{"l":4,"n":"DnssecProviderInterface","p":"Poweradmin/Domain/Service/DnssecProviderInterface"},{"l":4,"n":"DomainParsingService","p":"Poweradmin/Domain/Service/DomainParsingService"},{"l":4,"n":"DomainRecordCreator","p":"Poweradmin/Domain/Service/DomainRecordCreator"},{"l":4,"n":"DynamicDnsAuthenticationService","p":"Poweradmin/Domain/Service/DynamicDnsAuthenticationService"},{"l":4,"n":"DynamicDnsHelper","p":"Poweradmin/Domain/Service/DynamicDnsHelper"},{"l":4,"n":"DynamicDnsUpdateService","p":"Poweradmin/Domain/Service/DynamicDnsUpdateService"},{"l":4,"n":"DynamicDnsValidationService","p":"Poweradmin/Domain/Service/DynamicDnsValidationService"},{"l":4,"n":"ForwardZoneAssociationService","p":"Poweradmin/Domain/Service/ForwardZoneAssociationService"},{"l":4,"n":"GroupReferenceResolver","p":"Poweradmin/Domain/Service/GroupReferenceResolver"},{"l":4,"n":"MfaService","p":"Poweradmin/Domain/Service/MfaService"},{"l":4,"n":"PasswordEncryptionService","p":"Poweradmin/Domain/Service/PasswordEncryptionService"},{"l":4,"n":"PdnsCapabilities","p":"Poweradmin/Domain/Service/PdnsCapabilities"},{"l":4,"n":"PermissionService","p":"Poweradmin/Domain/Service/PermissionService"},{"l":4,"n":"PermissionTemplateAssignmentGuard","p":"Poweradmin/Domain/Service/PermissionTemplateAssignmentGuard"},{"l":4,"n":"PermissionTemplateContentGuard","p":"Poweradmin/Domain/Service/PermissionTemplateContentGuard"},{"l":4,"n":"RecordDisplayService","p":"Poweradmin/Domain/Service/RecordDisplayService"},{"l":4,"n":"RecordLog","p":"Poweradmin/Domain/Service/RecordLog"},{"l":4,"n":"RecordMatchingService","p":"Poweradmin/Domain/Service/RecordMatchingService"},{"l":4,"n":"RecordTypeService","p":"Poweradmin/Domain/Service/RecordTypeService"},{"l":4,"n":"ReverseRecordCreator","p":"Poweradmin/Domain/Service/ReverseRecordCreator"},{"l":4,"n":"ReverseTtlResolver","p":"Poweradmin/Domain/Service/ReverseTtlResolver"},{"l":4,"n":"SelfEditFieldGuard","p":"Poweradmin/Domain/Service/SelfEditFieldGuard"},{"l":4,"n":"SessionKeys","p":"Poweradmin/Domain/Service/SessionKeys"},{"l":4,"n":"UserAgreementService","p":"Poweradmin/Domain/Service/UserAgreementService"},{"l":4,"n":"UserContextService","p":"Poweradmin/Domain/Service/UserContextService"},{"l":4,"n":"UserManagementService","p":"Poweradmin/Domain/Service/UserManagementService"},{"l":4,"n":"UserPreferenceService","p":"Poweradmin/Domain/Service/UserPreferenceService"},{"l":4,"n":"UserProfileAssembler","p":"Poweradmin/Domain/Service/UserProfileAssembler"},{"l":4,"n":"UserTimezoneService","p":"Poweradmin/Domain/Service/UserTimezoneService"},{"l":4,"n":"Validator","p":"Poweradmin/Domain/Service/Validator"},{"l":4,"n":"ZoneAccessPolicy","p":"Poweradmin/Domain/Service/ZoneAccessPolicy"},{"l":4,"n":"ZoneAccountSyncService","p":"Poweradmin/Domain/Service/ZoneAccountSyncService"},{"l":4,"n":"ZoneCountService","p":"Poweradmin/Domain/Service/ZoneCountService"},{"l":4,"n":"ZoneCreateOwnershipResolver","p":"Poweradmin/Domain/Service/ZoneCreateOwnershipResolver"},{"l":4,"n":"ZoneEditService","p":"Poweradmin/Domain/Service/ZoneEditService"},{"l":4,"n":"ZoneEditSubmission","p":"Poweradmin/Domain/Service/ZoneEditSubmission"},{"l":4,"n":"ZoneListPermissionService","p":"Poweradmin/Domain/Service/ZoneListPermissionService"},{"l":4,"n":"ZoneManagementService","p":"Poweradmin/Domain/Service/ZoneManagementService"},{"l":4,"n":"ZoneMetadataResult","p":"Poweradmin/Domain/Service/ZoneMetadataResult"},{"l":4,"n":"ZoneMetadataService","p":"Poweradmin/Domain/Service/ZoneMetadataService"},{"l":4,"n":"ZoneOverlapService","p":"Poweradmin/Domain/Service/ZoneOverlapService"},{"l":4,"n":"ZoneOwnershipIndex","p":"Poweradmin/Domain/Service/ZoneOwnershipIndex"},{"l":4,"n":"ZoneOwnershipModeService","p":"Poweradmin/Domain/Service/ZoneOwnershipModeService"},{"l":4,"n":"ZoneOwnershipResolution","p":"Poweradmin/Domain/Service/ZoneOwnershipResolution"},{"l":4,"n":"ZoneSaveResult","p":"Poweradmin/Domain/Service/ZoneSaveResult"},{"l":4,"n":"ZoneSigningResult","p":"Poweradmin/Domain/Service/ZoneSigningResult"},{"l":4,"n":"ZoneSigningService","p":"Poweradmin/Domain/Service/ZoneSigningService"},{"l":4,"n":"ZoneSortingService","p":"Poweradmin/Domain/Service/ZoneSortingService"},{"l":4,"n":"ZoneTemplateRecordValidationService","p":"Poweradmin/Domain/Service/ZoneTemplateRecordValidationService"},{"l":4,"n":"ZoneTemplateSyncService","p":"Poweradmin/Domain/Service/ZoneTemplateSyncService"},{"l":4,"n":"ZoneValidationService","p":"Poweradmin/Domain/Service/ZoneValidationService"}]},{"l":3,"n":"Utility","p":"Poweradmin/Domain/Utility","c":[{"l":4,"n":"DnsHelper","p":"Poweradmin/Domain/Utility/DnsHelper"},{"l":4,"n":"DnssecDataTransformer","p":"Poweradmin/Domain/Utility/DnssecDataTransformer"},{"l":4,"n":"DomainHelper","p":"Poweradmin/Domain/Utility/DomainHelper"},{"l":4,"n":"DomainUtility","p":"Poweradmin/Domain/Utility/DomainUtility"},{"l":4,"n":"IpHelper","p":"Poweradmin/Domain/Utility/IpHelper"},{"l":4,"n":"RecordIdHelper","p":"Poweradmin/Domain/Utility/RecordIdHelper"},{"l":4,"n":"TopLevelDomain","p":"Poweradmin/Domain/Utility/TopLevelDomain"}]},{"l":3,"n":"ValueObject","p":"Poweradmin/Domain/ValueObject","c":[{"l":4,"n":"DynamicDnsRequest","p":"Poweradmin/Domain/ValueObject/DynamicDnsRequest"},{"l":4,"n":"HostnameValue","p":"Poweradmin/Domain/ValueObject/HostnameValue"},{"l":4,"n":"IpAddressList","p":"Poweradmin/Domain/ValueObject/IpAddressList"},{"l":4,"n":"LdapUserInfo","p":"Poweradmin/Domain/ValueObject/LdapUserInfo"},{"l":4,"n":"OidcUserInfo","p":"Poweradmin/Domain/ValueObject/OidcUserInfo"},{"l":4,"n":"RecordIdentifier","p":"Poweradmin/Domain/ValueObject/RecordIdentifier"},{"l":4,"n":"SamlUserInfo","p":"Poweradmin/Domain/ValueObject/SamlUserInfo"},{"l":4,"n":"UserInfoInterface","p":"Poweradmin/Domain/ValueObject/UserInfoInterface"}]}]},{"l":2,"n":"Infrastructure","p":"Poweradmin/Infrastructure","c":[{"l":3,"n":"Api","p":"Poweradmin/Infrastructure/Api","c":[{"l":4,"n":"HttpClient","p":"Poweradmin/Infrastructure/Api/HttpClient"},{"l":4,"n":"PowerdnsApiClient","p":"Poweradmin/Infrastructure/Api/PowerdnsApiClient"}]},{"l":3,"n":"Configuration","p":"Poweradmin/Infrastructure/Configuration","c":[{"l":4,"n":"ConfigValidator","p":"Poweradmin/Infrastructure/Configuration/ConfigValidator"},{"l":4,"n":"ConfigurationInterface","p":"Poweradmin/Infrastructure/Configuration/ConfigurationInterface"},{"l":4,"n":"ConfigurationManager","p":"Poweradmin/Infrastructure/Configuration/ConfigurationManager"},{"l":4,"n":"FakeConfiguration","p":"Poweradmin/Infrastructure/Configuration/FakeConfiguration"},{"l":4,"n":"ThemePathResolver","p":"Poweradmin/Infrastructure/Configuration/ThemePathResolver"}]},{"l":3,"n":"Database","p":"Poweradmin/Infrastructure/Database","c":[{"l":4,"n":"CanonicalZoneSql","p":"Poweradmin/Infrastructure/Database/CanonicalZoneSql"},{"l":4,"n":"DbCompat","p":"Poweradmin/Infrastructure/Database/DbCompat"},{"l":4,"n":"DebugPDO","p":"Poweradmin/Infrastructure/Database/DebugPDO"},{"l":4,"n":"PDODatabaseConnection","p":"Poweradmin/Infrastructure/Database/PDODatabaseConnection"},{"l":4,"n":"TableNameService","p":"Poweradmin/Infrastructure/Database/TableNameService"},{"l":4,"n":"ZoneHealthSql","p":"Poweradmin/Infrastructure/Database/ZoneHealthSql"}]},{"l":3,"n":"Logger","p":"Poweradmin/Infrastructure/Logger","c":[{"l":4,"n":"DbApiLogger","p":"Poweradmin/Infrastructure/Logger/DbApiLogger"},{"l":4,"n":"DbGroupLogger","p":"Poweradmin/Infrastructure/Logger/DbGroupLogger"},{"l":4,"n":"DbUserLogger","p":"Poweradmin/Infrastructure/Logger/DbUserLogger"},{"l":4,"n":"DbZoneLogger","p":"Poweradmin/Infrastructure/Logger/DbZoneLogger"},{"l":4,"n":"LdapUserEventLogger","p":"Poweradmin/Infrastructure/Logger/LdapUserEventLogger"},{"l":4,"n":"LegacyLogger","p":"Poweradmin/Infrastructure/Logger/LegacyLogger"},{"l":4,"n":"LogHandlerInterface","p":"Poweradmin/Infrastructure/Logger/LogHandlerInterface"},{"l":4,"n":"Logger","p":"Poweradmin/Infrastructure/Logger/Logger"},{"l":4,"n":"NativeLogHandler","p":"Poweradmin/Infrastructure/Logger/NativeLogHandler"},{"l":4,"n":"RecordChangeLogger","p":"Poweradmin/Infrastructure/Logger/RecordChangeLogger"},{"l":4,"n":"SyslogLogger","p":"Poweradmin/Infrastructure/Logger/SyslogLogger"}]},{"l":3,"n":"Network","p":"Poweradmin/Infrastructure/Network","c":[{"l":4,"n":"ProxyContext","p":"Poweradmin/Infrastructure/Network/ProxyContext"}]},{"l":3,"n":"Repository","p":"Poweradmin/Infrastructure/Repository","c":[{"l":4,"n":"ApiDomainRepository","p":"Poweradmin/Infrastructure/Repository/ApiDomainRepository"},{"l":4,"n":"ApiDynamicDnsRepository","p":"Poweradmin/Infrastructure/Repository/ApiDynamicDnsRepository"},{"l":4,"n":"ApiRecordCommentRepository","p":"Poweradmin/Infrastructure/Repository/ApiRecordCommentRepository"},{"l":4,"n":"ApiRecordRepository","p":"Poweradmin/Infrastructure/Repository/ApiRecordRepository"},{"l":4,"n":"ApiZoneRepository","p":"Poweradmin/Infrastructure/Repository/ApiZoneRepository"},{"l":4,"n":"BaseSearch","p":"Poweradmin/Infrastructure/Repository/BaseSearch"},{"l":4,"n":"DbApiKeyRepository","p":"Poweradmin/Infrastructure/Repository/DbApiKeyRepository"},{"l":4,"n":"DbAppSettingRepository","p":"Poweradmin/Infrastructure/Repository/DbAppSettingRepository"},{"l":4,"n":"DbPasswordResetTokenRepository","p":"Poweradmin/Infrastructure/Repository/DbPasswordResetTokenRepository"},{"l":4,"n":"DbPermissionTemplateRepository","p":"Poweradmin/Infrastructure/Repository/DbPermissionTemplateRepository"},{"l":4,"n":"DbRecordCommentRepository","p":"Poweradmin/Infrastructure/Repository/DbRecordCommentRepository"},{"l":4,"n":"DbRecordTypeDefaultRepository","p":"Poweradmin/Infrastructure/Repository/DbRecordTypeDefaultRepository"},{"l":4,"n":"DbUserAgreementRepository","p":"Poweradmin/Infrastructure/Repository/DbUserAgreementRepository"},{"l":4,"n":"DbUserGroupMemberRepository","p":"Poweradmin/Infrastructure/Repository/DbUserGroupMemberRepository"},{"l":4,"n":"DbUserGroupRepository","p":"Poweradmin/Infrastructure/Repository/DbUserGroupRepository"},{"l":4,"n":"DbUserMfaRepository","p":"Poweradmin/Infrastructure/Repository/DbUserMfaRepository"},{"l":4,"n":"DbUserPreferenceRepository","p":"Poweradmin/Infrastructure/Repository/DbUserPreferenceRepository"},{"l":4,"n":"DbUserRepository","p":"Poweradmin/Infrastructure/Repository/DbUserRepository"},{"l":4,"n":"DbUsernameRecoveryRepository","p":"Poweradmin/Infrastructure/Repository/DbUsernameRecoveryRepository"},{"l":4,"n":"DbZoneGroupRepository","p":"Poweradmin/Infrastructure/Repository/DbZoneGroupRepository"},{"l":4,"n":"DbZoneRepository","p":"Poweradmin/Infrastructure/Repository/DbZoneRepository"},{"l":4,"n":"DbZoneTemplateRepository","p":"Poweradmin/Infrastructure/Repository/DbZoneTemplateRepository"},{"l":4,"n":"RecordSearch","p":"Poweradmin/Infrastructure/Repository/RecordSearch"},{"l":4,"n":"SqlDomainRepository","p":"Poweradmin/Infrastructure/Repository/SqlDomainRepository"},{"l":4,"n":"SqlDynamicDnsRepository","p":"Poweradmin/Infrastructure/Repository/SqlDynamicDnsRepository"},{"l":4,"n":"SqlRecordRepository","p":"Poweradmin/Infrastructure/Repository/SqlRecordRepository"},{"l":4,"n":"ZoneSearch","p":"Poweradmin/Infrastructure/Repository/ZoneSearch"}]},{"l":3,"n":"Service","p":"Poweradmin/Infrastructure/Service","c":[{"l":4,"n":"ApiDnsBackendProvider","p":"Poweradmin/Infrastructure/Service/ApiDnsBackendProvider"},{"l":4,"n":"ApiKeyAuthenticationMiddleware","p":"Poweradmin/Infrastructure/Service/ApiKeyAuthenticationMiddleware"},{"l":4,"n":"BasicAuthenticationMiddleware","p":"Poweradmin/Infrastructure/Service/BasicAuthenticationMiddleware"},{"l":4,"n":"DnsSecApiProvider","p":"Poweradmin/Infrastructure/Service/DnsSecApiProvider"},{"l":4,"n":"DnsServiceFactory","p":"Poweradmin/Infrastructure/Service/DnsServiceFactory"},{"l":4,"n":"MessageService","p":"Poweradmin/Infrastructure/Service/MessageService"},{"l":4,"n":"NullDnssecProvider","p":"Poweradmin/Infrastructure/Service/NullDnssecProvider"},{"l":4,"n":"RedirectService","p":"Poweradmin/Infrastructure/Service/RedirectService"},{"l":4,"n":"SessionAuthenticator","p":"Poweradmin/Infrastructure/Service/SessionAuthenticator"},{"l":4,"n":"SqlDnsBackendProvider","p":"Poweradmin/Infrastructure/Service/SqlDnsBackendProvider"},{"l":4,"n":"StyleManager","p":"Poweradmin/Infrastructure/Service/StyleManager"},{"l":4,"n":"TemplateCacheResolver","p":"Poweradmin/Infrastructure/Service/TemplateCacheResolver"}]},{"l":3,"n":"Session","p":"Poweradmin/Infrastructure/Session","c":[{"l":4,"n":"FormStateService","p":"Poweradmin/Infrastructure/Session/FormStateService"},{"l":4,"n":"MfaSessionManager","p":"Poweradmin/Infrastructure/Session/MfaSessionManager"},{"l":4,"n":"SessionService","p":"Poweradmin/Infrastructure/Session/SessionService"}]},{"l":3,"n":"Utility","p":"Poweradmin/Infrastructure/Utility","c":[{"l":4,"n":"CsvFormulaEscaper","p":"Poweradmin/Infrastructure/Utility/CsvFormulaEscaper"},{"l":4,"n":"DependencyCheck","p":"Poweradmin/Infrastructure/Utility/DependencyCheck"},{"l":4,"n":"IpAddressRetriever","p":"Poweradmin/Infrastructure/Utility/IpAddressRetriever"},{"l":4,"n":"LanguageCode","p":"Poweradmin/Infrastructure/Utility/LanguageCode"},{"l":4,"n":"ProtocolDetector","p":"Poweradmin/Infrastructure/Utility/ProtocolDetector"},{"l":4,"n":"ReverseDomainHierarchySorting","p":"Poweradmin/Infrastructure/Utility/ReverseDomainHierarchySorting"},{"l":4,"n":"ReverseZoneSorting","p":"Poweradmin/Infrastructure/Utility/ReverseZoneSorting"},{"l":4,"n":"SortHelper","p":"Poweradmin/Infrastructure/Utility/SortHelper"},{"l":4,"n":"UserAgentService","p":"Poweradmin/Infrastructure/Utility/UserAgentService"}]},{"l":3,"n":"Web","p":"Poweradmin/Infrastructure/Web","c":[{"l":4,"n":"BadgeTwigExtension","p":"Poweradmin/Infrastructure/Web/BadgeTwigExtension"},{"l":4,"n":"PageRenderer","p":"Poweradmin/Infrastructure/Web/PageRenderer"},{"l":4,"n":"PermissionTwigExtension","p":"Poweradmin/Infrastructure/Web/PermissionTwigExtension"}]}]},{"l":2,"n":"Module","p":"Poweradmin/Module","c":[{"l":3,"n":"CsvExport","p":"Poweradmin/Module/CsvExport","c":[{"l":4,"n":"Controller","p":"Poweradmin/Module/CsvExport/Controller","c":[{"l":5,"n":"CsvExportController","p":"Poweradmin/Module/CsvExport/Controller/CsvExportController"}]},{"l":4,"n":"CsvExportModule","p":"Poweradmin/Module/CsvExport/CsvExportModule"}]},{"l":3,"n":"DnsWizard","p":"Poweradmin/Module/DnsWizard","c":[{"l":4,"n":"Controller","p":"Poweradmin/Module/DnsWizard/Controller","c":[{"l":5,"n":"Api","p":"Poweradmin/Module/DnsWizard/Controller/Api","c":[{"l":6,"n":"DnsWizardApiController","p":"Poweradmin/Module/DnsWizard/Controller/Api/DnsWizardApiController"}]},{"l":5,"n":"DnsWizardFormController","p":"Poweradmin/Module/DnsWizard/Controller/DnsWizardFormController"},{"l":5,"n":"DnsWizardSelectController","p":"Poweradmin/Module/DnsWizard/Controller/DnsWizardSelectController"}]},{"l":4,"n":"Service","p":"Poweradmin/Module/DnsWizard/Service","c":[{"l":5,"n":"AbstractDnsWizard","p":"Poweradmin/Module/DnsWizard/Service/AbstractDnsWizard"},{"l":5,"n":"CAAWizard","p":"Poweradmin/Module/DnsWizard/Service/CAAWizard"},{"l":5,"n":"DKIMWizard","p":"Poweradmin/Module/DnsWizard/Service/DKIMWizard"},{"l":5,"n":"DMARCWizard","p":"Poweradmin/Module/DnsWizard/Service/DMARCWizard"},{"l":5,"n":"SPFWizard","p":"Poweradmin/Module/DnsWizard/Service/SPFWizard"},{"l":5,"n":"SRVWizard","p":"Poweradmin/Module/DnsWizard/Service/SRVWizard"},{"l":5,"n":"TLSAWizard","p":"Poweradmin/Module/DnsWizard/Service/TLSAWizard"},{"l":5,"n":"WizardRegistry","p":"Poweradmin/Module/DnsWizard/Service/WizardRegistry"}]},{"l":4,"n":"DnsWizardModule","p":"Poweradmin/Module/DnsWizard/DnsWizardModule"}]},{"l":3,"n":"EmailPreviews","p":"Poweradmin/Module/EmailPreviews","c":[{"l":4,"n":"Controller","p":"Poweradmin/Module/EmailPreviews/Controller","c":[{"l":5,"n":"EmailPreviewsController","p":"Poweradmin/Module/EmailPreviews/Controller/EmailPreviewsController"}]},{"l":4,"n":"Service","p":"Poweradmin/Module/EmailPreviews/Service","c":[{"l":5,"n":"EmailPreviewService","p":"Poweradmin/Module/EmailPreviews/Service/EmailPreviewService"}]},{"l":4,"n":"EmailPreviewsModule","p":"Poweradmin/Module/EmailPreviews/EmailPreviewsModule"}]},{"l":3,"n":"Rdap","p":"Poweradmin/Module/Rdap","c":[{"l":4,"n":"Controller","p":"Poweradmin/Module/Rdap/Controller","c":[{"l":5,"n":"RdapController","p":"Poweradmin/Module/Rdap/Controller/RdapController"}]},{"l":4,"n":"Service","p":"Poweradmin/Module/Rdap/Service","c":[{"l":5,"n":"RdapService","p":"Poweradmin/Module/Rdap/Service/RdapService"}]},{"l":4,"n":"RdapModule","p":"Poweradmin/Module/Rdap/RdapModule"}]},{"l":3,"n":"SecondaryZoneImport","p":"Poweradmin/Module/SecondaryZoneImport","c":[{"l":4,"n":"Controller","p":"Poweradmin/Module/SecondaryZoneImport/Controller","c":[{"l":5,"n":"SecondaryZoneImportController","p":"Poweradmin/Module/SecondaryZoneImport/Controller/SecondaryZoneImportController"}]},{"l":4,"n":"SecondaryZoneImportModule","p":"Poweradmin/Module/SecondaryZoneImport/SecondaryZoneImportModule"}]},{"l":3,"n":"Whois","p":"Poweradmin/Module/Whois","c":[{"l":4,"n":"Controller","p":"Poweradmin/Module/Whois/Controller","c":[{"l":5,"n":"WhoisController","p":"Poweradmin/Module/Whois/Controller/WhoisController"}]},{"l":4,"n":"Service","p":"Poweradmin/Module/Whois/Service","c":[{"l":5,"n":"WhoisService","p":"Poweradmin/Module/Whois/Service/WhoisService"}]},{"l":4,"n":"WhoisModule","p":"Poweradmin/Module/Whois/WhoisModule"}]},{"l":3,"n":"ZoneImportExport","p":"Poweradmin/Module/ZoneImportExport","c":[{"l":4,"n":"Controller","p":"Poweradmin/Module/ZoneImportExport/Controller","c":[{"l":5,"n":"ZoneFileExportController","p":"Poweradmin/Module/ZoneImportExport/Controller/ZoneFileExportController"},{"l":5,"n":"ZoneFileImportController","p":"Poweradmin/Module/ZoneImportExport/Controller/ZoneFileImportController"}]},{"l":4,"n":"Service","p":"Poweradmin/Module/ZoneImportExport/Service","c":[{"l":5,"n":"BindZoneFileGenerator","p":"Poweradmin/Module/ZoneImportExport/Service/BindZoneFileGenerator"},{"l":5,"n":"BindZoneFileParser","p":"Poweradmin/Module/ZoneImportExport/Service/BindZoneFileParser"},{"l":5,"n":"ParsedRecord","p":"Poweradmin/Module/ZoneImportExport/Service/ParsedRecord"},{"l":5,"n":"ParsedZoneFile","p":"Poweradmin/Module/ZoneImportExport/Service/ParsedZoneFile"}]},{"l":4,"n":"ZoneImportExportModule","p":"Poweradmin/Module/ZoneImportExport/ZoneImportExportModule"}]},{"l":3,"n":"ModuleInterface","p":"Poweradmin/Module/ModuleInterface"},{"l":3,"n":"ModuleRegistry","p":"Poweradmin/Module/ModuleRegistry"}]},{"l":2,"n":"AppInitializer","p":"Poweradmin/AppInitializer"},{"l":2,"n":"AppManager","p":"Poweradmin/AppManager"},{"l":2,"n":"BaseController","p":"Poweradmin/BaseController"},{"l":2,"n":"LocaleManager","p":"Poweradmin/LocaleManager"},{"l":2,"n":"Pages","p":"Poweradmin/Pages"},{"l":2,"n":"Version","p":"Poweradmin/Version"}]}]},"treeOpenLevel":2},
    /** @var boolean */
    treeLoaded: false,
    /** @var boolean */
    listenersRegistered: false,
    autoCompleteData: null,
    /** @var boolean */
    autoCompleteLoading: false,
    /** @var boolean */
    autoCompleteLoaded: false,
    /** @var string|null */
    rootPath: null,
    /** @var string|null */
    autoCompleteDataUrl: null,
    /** @var HTMLElement|null */
    doctumSearchAutoComplete: null,
    /** @var HTMLElement|null */
    doctumSearchAutoCompleteProgressBarContainer: null,
    /** @var HTMLElement|null */
    doctumSearchAutoCompleteProgressBar: null,
    /** @var number */
    doctumSearchAutoCompleteProgressBarPercent: 0,
    /** @var autoComplete|null */
    autoCompleteJS: null,
    querySearchSecurityRegex: /([^0-9a-zA-Z:\\\\_\s])/gi,
    buildTreeNode: function (treeNode, htmlNode, treeOpenLevel) {
        var ulNode = document.createElement('ul');
        for (var childKey in treeNode.c) {
            var child = treeNode.c[childKey];
            var liClass = document.createElement('li');
            var hasChildren = child.hasOwnProperty('c');
            var nodeSpecialName = (hasChildren ? 'namespace:' : 'class:') + child.p.replace(/\//g, '_');
            liClass.setAttribute('data-name', nodeSpecialName);

            // Create the node that will have the text
            var divHd = document.createElement('div');
            var levelCss = child.l - 1;
            divHd.className = hasChildren ? 'hd' : 'hd leaf';
            divHd.style.paddingLeft = (hasChildren ? (levelCss * 18) : (8 + (levelCss * 18))) + 'px';
            if (hasChildren) {
                if (child.l <= treeOpenLevel) {
                    liClass.className = 'opened';
                }
                var spanIcon = document.createElement('span');
                spanIcon.className = 'icon icon-play';
                divHd.appendChild(spanIcon);
            }
            var aLink = document.createElement('a');

            // Edit the HTML link to work correctly based on the current depth
            aLink.href = Doctum.rootPath + child.p + '.html';
            aLink.innerText = child.n;
            divHd.appendChild(aLink);
            liClass.appendChild(divHd);

            // It has children
            if (hasChildren) {
                var divBd = document.createElement('div');
                divBd.className = 'bd';
                Doctum.buildTreeNode(child, divBd, treeOpenLevel);
                liClass.appendChild(divBd);
            }
            ulNode.appendChild(liClass);
        }
        htmlNode.appendChild(ulNode);
    },
    initListeners: function () {
        if (Doctum.listenersRegistered) {
            // Quick exit, already registered
            return;
        }
                Doctum.listenersRegistered = true;
    },
    loadTree: function () {
        if (Doctum.treeLoaded) {
            // Quick exit, already registered
            return;
        }
        Doctum.rootPath = document.body.getAttribute('data-root-path');
        Doctum.buildTreeNode(Doctum.treeJson.tree, document.getElementById('api-tree'), Doctum.treeJson.treeOpenLevel);

        // Toggle left-nav divs on click
        $('#api-tree .hd span').on('click', function () {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }
        Doctum.treeLoaded = true;
    },
    pagePartiallyLoaded: function (event) {
        Doctum.initListeners();
        Doctum.loadTree();
        Doctum.loadAutoComplete();
    },
    pageFullyLoaded: function (event) {
        // it may not have received DOMContentLoaded event
        Doctum.initListeners();
        Doctum.loadTree();
        Doctum.loadAutoComplete();
        // Fire the event in the search page too
        if (typeof DoctumSearch === 'object') {
            DoctumSearch.pageFullyLoaded();
        }
    },
    loadAutoComplete: function () {
        if (Doctum.autoCompleteLoaded) {
            // Quick exit, already loaded
            return;
        }
        Doctum.autoCompleteDataUrl = document.body.getAttribute('data-search-index-url');
        Doctum.doctumSearchAutoComplete = document.getElementById('doctum-search-auto-complete');
        Doctum.doctumSearchAutoCompleteProgressBarContainer = document.getElementById('search-progress-bar-container');
        Doctum.doctumSearchAutoCompleteProgressBar = document.getElementById('search-progress-bar');
        if (Doctum.doctumSearchAutoComplete !== null) {
            // Wait for it to be loaded
            Doctum.doctumSearchAutoComplete.addEventListener('init', function (_) {
                Doctum.autoCompleteLoaded = true;
                Doctum.doctumSearchAutoComplete.addEventListener('selection', function (event) {
                    // Go to selection page
                    window.location = Doctum.rootPath + event.detail.selection.value.p;
                });
                Doctum.doctumSearchAutoComplete.addEventListener('navigate', function (event) {
                    // Set selection in text box
                    if (typeof event.detail.selection.value === 'object') {
                        Doctum.doctumSearchAutoComplete.value = event.detail.selection.value.n;
                    }
                });
                Doctum.doctumSearchAutoComplete.addEventListener('results', function (event) {
                    Doctum.markProgressFinished();
                });
            });
        }
        // Check if the lib is loaded
        if (typeof autoComplete === 'function') {
            Doctum.bootAutoComplete();
        }
    },
    markInProgress: function () {
            Doctum.doctumSearchAutoCompleteProgressBarContainer.className = 'search-bar';
            Doctum.doctumSearchAutoCompleteProgressBar.className = 'progress-bar indeterminate';
            if (typeof DoctumSearch === 'object' && DoctumSearch.pageFullyLoaded) {
                DoctumSearch.doctumSearchPageAutoCompleteProgressBarContainer.className = 'search-bar';
                DoctumSearch.doctumSearchPageAutoCompleteProgressBar.className = 'progress-bar indeterminate';
            }
    },
    markProgressFinished: function () {
        Doctum.doctumSearchAutoCompleteProgressBarContainer.className = 'search-bar hidden';
        Doctum.doctumSearchAutoCompleteProgressBar.className = 'progress-bar';
        if (typeof DoctumSearch === 'object' && DoctumSearch.pageFullyLoaded) {
            DoctumSearch.doctumSearchPageAutoCompleteProgressBarContainer.className = 'search-bar hidden';
            DoctumSearch.doctumSearchPageAutoCompleteProgressBar.className = 'progress-bar';
        }
    },
    makeProgess: function () {
        Doctum.makeProgressOnProgressBar(
            Doctum.doctumSearchAutoCompleteProgressBarPercent,
            Doctum.doctumSearchAutoCompleteProgressBar
        );
        if (typeof DoctumSearch === 'object' && DoctumSearch.pageFullyLoaded) {
            Doctum.makeProgressOnProgressBar(
                Doctum.doctumSearchAutoCompleteProgressBarPercent,
                DoctumSearch.doctumSearchPageAutoCompleteProgressBar
            );
        }
    },
    loadAutoCompleteData: function (query) {
        return new Promise(function (resolve, reject) {
            if (Doctum.autoCompleteData !== null) {
                resolve(Doctum.autoCompleteData);
                return;
            }
            Doctum.markInProgress();
            function reqListener() {
                Doctum.autoCompleteLoading = false;
                Doctum.autoCompleteData = JSON.parse(this.responseText).items;
                Doctum.markProgressFinished();

                setTimeout(function () {
                    resolve(Doctum.autoCompleteData);
                }, 50);// Let the UI render once before sending the results for processing. This gives time to the progress bar to hide
            }
            function reqError(err) {
                Doctum.autoCompleteLoading = false;
                Doctum.autoCompleteData = null;
                console.error(err);
                reject(err);
            }

            var oReq = new XMLHttpRequest();
            oReq.onload = reqListener;
            oReq.onerror = reqError;
            oReq.onprogress = function (pe) {
                if (pe.lengthComputable) {
                    Doctum.doctumSearchAutoCompleteProgressBarPercent = parseInt(pe.loaded / pe.total * 100, 10);
                    Doctum.makeProgess();
                }
            };
            oReq.onloadend = function (_) {
                Doctum.markProgressFinished();
            };
            oReq.open('get', Doctum.autoCompleteDataUrl, true);
            oReq.send();
        });
    },
    /**
     * Make some progress on a progress bar
     *
     * @param number percentage
     * @param HTMLElement progressBar
     * @return void
     */
    makeProgressOnProgressBar: function(percentage, progressBar) {
        progressBar.className = 'progress-bar';
        progressBar.style.width = percentage + '%';
        progressBar.setAttribute(
            'aria-valuenow', percentage
        );
    },
    searchEngine: function (query, record) {
        if (typeof query !== 'string') {
            return '';
        }
        // replace all (mode = g) spaces and non breaking spaces (\s) by pipes
        // g = global mode to mark also the second word searched
        // i = case insensitive
        // how this function works:
        // First: search if the query has the keywords in sequence
        // Second: replace the keywords by a mark and leave all the text in between non marked
        
        if (record.match(new RegExp('(' + query.replace(/\s/g, ').*(') + ')', 'gi')) === null) {
            return '';// Does not match
        }

        var replacedRecord = record.replace(new RegExp('(' + query.replace(/\s/g, '|') + ')', 'gi'), function (group) {
            return '<mark class="auto-complete-highlight">' + group + '</mark>';
        });

        if (replacedRecord !== record) {
            return replacedRecord;// This should not happen but just in case there was no match done
        }

        return '';
    },
    /**
     * Clean the search query
     *
     * @param string|null query
     * @return string
     */
    cleanSearchQuery: function (query) {
        if (typeof query !== 'string') {
            return '';
        }
        // replace any chars that could lead to injecting code in our regex
        // remove start or end spaces
        // replace backslashes by an escaped version, use case in search: \myRootFunction
        return query.replace(Doctum.querySearchSecurityRegex, '').trim().replace(/\\/g, '\\\\');
    },
    bootAutoComplete: function () {
        Doctum.autoCompleteJS = new autoComplete(
            {
                selector: '#doctum-search-auto-complete',
                searchEngine: function (query, record) {
                    return Doctum.searchEngine(query, record);
                },
                submit: true,
                data: {
                    src: function (q) {
                        Doctum.markInProgress();
                        return Doctum.loadAutoCompleteData(q);
                    },
                    keys: ['n'],// Data 'Object' key to be searched
                    cache: false, // Is not compatible with async fetch of data
                },
                query: (input) => {
                    return Doctum.cleanSearchQuery(input);
                },
                trigger: (query) => {
                    return Doctum.cleanSearchQuery(query).length > 0;
                },
                resultsList: {
                    tag: 'ul',
                    class: 'auto-complete-dropdown-menu',
                    destination: '#auto-complete-results',
                    position: 'afterbegin',
                    maxResults: 500,
                    noResults: false,
                },
                resultItem: {
                    tag: 'li',
                    class: 'auto-complete-result',
                    highlight: 'auto-complete-highlight',
                    selected: 'auto-complete-selected'
                },
            }
        );
    }
};


document.addEventListener('DOMContentLoaded', Doctum.pagePartiallyLoaded, false);
window.addEventListener('load', Doctum.pageFullyLoaded, false);
