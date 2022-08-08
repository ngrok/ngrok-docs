
| Code | Message |
|---|---|
| [ERR_NGROK_100](/error_details/100) | Invalid metadata length: `<VAL>` bytes. Max: `<MAX>` |
| [ERR_NGROK_102](/error_details/102) | The last payment for the `<ACCOUNT>` account failed.The account has been suspended. Update the payment information here:https://dashboard.ngrok.com/billing/payment-method |
| [ERR_NGROK_103](/error_details/103) | The account `<ACCOUNT>` has been suspended.This is usually the result of violating the ngrok Terms of Service.Email contact@ngrok.com if you think your suspension is an error. |
| [ERR_NGROK_105](/error_details/105) | The authtoken you specified does not look like a proper ngrok tunnel authtoken.Your authtoken: `<TOKEN>`Instructions to install your authtoken are on your ngrok dashboard:https://dashboard.ngrok.com/get-started/your-authtoken |
| [ERR_NGROK_106](/error_details/106) | The authtoken you specified is an ngrok v1 authtoken, but you're using ngrok v2.Your authtoken: `<TOKEN>`Instructions to install your authtoken are on your ngrok dashboard:https://dashboard.ngrok.com/get-started/your-authtoken |
| [ERR_NGROK_107](/error_details/107) | The authtoken you specified is properly formed, but it is invalid.Your authtoken: `<TOKEN>`This usually happens when:    - You reset your authtoken    - Your authtoken was for a team account that you were removed from    - You are using ngrok link and this credential was explicitly revokedGo to your ngrok dashboard and double check that your authtoken is correct:https://dashboard.ngrok.com/get-started/your-authtoken |
| [ERR_NGROK_108](/error_details/108) | Your account is limited to `<MAX>` simultaneous ngrok agent session`<PLURAL>`.`<MSG>` |
| [ERR_NGROK_109](/error_details/109) | The authentication payload you specified is not valid.This usually indiciates a bug in the client's protocol implementation.The parsing error encountered was:`<ERR>` |
| [ERR_NGROK_110](/error_details/110) | The session cookie you specified is not valid.This usually indiciates a bug in the client's protocol implementation. |
| [ERR_NGROK_111](/error_details/111) | The heartbeat interval you specified is not valid.It must be at least `<MIN>`, you specified `<VAL>` |
| [ERR_NGROK_112](/error_details/112) | The heartbeat tolerance you specified is not valid.It must be at least `<MIN>`, you specified `<VAL>` |
| [ERR_NGROK_115](/error_details/115) | Your IP `<IP>` does not match the IP Policies specified by the Agent IP Restriction for this account. Please authenticate from an IP in the correct range or update your Agent IP Restrictions from the ngrok dashboard. https://dashboard.ngrok.com/security/ip-restrictions |
| [ERR_NGROK_116](/error_details/116) | Your IP `<IP>` does not match the IP ACL policy specified for your credentials. Please authenticate from an IP in the correct range or make sure you are using the correct credentials |
| [ERR_NGROK_118](/error_details/118) | Only Enterprise accounts can use the enterprise tunnel ingress feature.Your account `<ACCOUNTNAME>` is not permitted to use the ngrok enterprise tunnel ingress. Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_119](/error_details/119) | The agent specified an invalid semantic version string: `<VERSION>` |
| [ERR_NGROK_120](/error_details/120) | Your ngrok agent version "`<VERSION>`" is no longer supported. Only the most recent version of the ngrok agent is supported without an account.Update to a newer version with `ngrok update` or by downloading from https://ngrok.com/download.Sign up for an account to avoid forced version upgrades: https://ngrok.com/signup. |
| [ERR_NGROK_121](/error_details/121) | Your ngrok agent version "`<VERSION>`" is too old. The minimum supported agent version for your account is "`<MINVERSION>`". Please update to a newer version with `ngrok update` or by downloading from https://ngrok.com/download. |
| [ERR_NGROK_122](/error_details/122) | Your account is not permitted to use the agent ingress "`<DOMAIN>`". |
| [ERR_NGROK_123](/error_details/123) | The account "`<NAME>`" may not start an ngrok agent session until the admin's email address is verified. Verify your email at https://dashboard.ngrok.com/user/settings |
| [ERR_NGROK_200](/error_details/200) | The ngrok API requires that you set the Authorization header for authentication. Your API keys and instructions are available on your dashboard: https://dashboard.ngrok.com/api |
| [ERR_NGROK_201](/error_details/201) | The ngrok API requires that you use Basic or Bearer authentication via the Authorization header. It could not parse the header in this request. Authorization Header: `<VAL>`. API keys and instructions are available on your dashboard: https://dashboard.ngrok.com/api |
| [ERR_NGROK_202](/error_details/202) | The API authentication you specified does not look like a valid credential. Your credential: `<TOKEN>`. API keys and instructions are available on your dashboard: https://dashboard.ngrok.com/api |
| [ERR_NGROK_203](/error_details/203) | The API authentication you specified is properly formed, but it is invalid. Your authentication: `<TOKEN>`. API keys and instructions are available on your dashboard: https://dashboard.ngrok.com/api |
| [ERR_NGROK_204](/error_details/204) | Only the Pro and Enterprise accounts can use the ngrok API.This is a valid API token, but the account `<ACCOUNT>` is not authorized to use the ngrok API. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_205](/error_details/205) | The account `<ACCOUNT>` has been suspended. This is usually the result of violating the ngrok Terms of Service. Email contact@ngrok.com if you think your suspension is an error. |
| [ERR_NGROK_206](/error_details/206) | The authentication you specified is actually a tunnel credential. Your credential: `<TOKEN>`. Please check your records for an API key. API keys and instructions are available on your dashboard: https://dashboard.ngrok.com/api |
| [ERR_NGROK_207](/error_details/207) | The authentication you specified is actually a tunnel credential, not an API key token. Your key: `<TOKEN>`. Please check your records for an API key with the form FIRSTPART_SECONDPART. API keys and instructions are available on your dashboard: https://dashboard.ngrok.com/api |
| [ERR_NGROK_208](/error_details/208) | The authentication you specified is actually an API key ID, not an API key token. Your credential: `<TOKEN>`. Please check your records for an API key with the form FIRSTPART_SECONDPART. API keys and instructions are available on your dashboard: https://dashboard.ngrok.com/api |
| [ERR_NGROK_210](/error_details/210) | The content type you specified `<CTYPE>` is not supported by the API. Please check your API client implementation and see the list of supported content types: https://ngrok.com/docs/ngrok-link#service-api-content-type |
| [ERR_NGROK_211](/error_details/211) | The `<METHOD>` request you made does not expect a body, but you provided one. Please check your API client implementation and review the API documentation: https://ngrok.com/docs/ngrok-link#service-api. |
| [ERR_NGROK_212](/error_details/212) | The server was unable to read the complete request body. Please check your API client implementation and review the API documentation: https://ngrok.com/docs/ngrok-link#service-api. |
| [ERR_NGROK_213](/error_details/213) | The `<CTYPE>` request body could not be parsed. Please check your API client implementation and review the API documentation: https://ngrok.com/docs/ngrok-link#service-api. |
| [ERR_NGROK_214](/error_details/214) | The request parameter `<NAME>` is unknown and not expected. The supported fields are: `<SUPPORTED>`. Please check your API client implementation and review the API documentation: https://ngrok.com/docs/ngrok-link#service-api. |
| [ERR_NGROK_215](/error_details/215) | The value provided for the request parameter `<NAME>` is invalid. Please check your request and review the API documentation: https://ngrok.com/docs/ngrok-link#service-api |
| [ERR_NGROK_216](/error_details/216) | You did not provide a Content-Type with your request. Please check your API client implementation and use one of the supported content types: https://ngrok.com/docs/ngrok-link#service-api-content-type |
| [ERR_NGROK_217](/error_details/217) | The provided API version `<VERSION>` is invalid or unsupported. Supported versions: `<SUPPORTED>`. Please check your API client implementation. |
| [ERR_NGROK_218](/error_details/218) | Your request has not specified an API version. Please include the version you wish to use in the Ngrok-Version header. Supported versions: `<SUPPORTED>`. |
| [ERR_NGROK_219](/error_details/219) | `<TLSVERSION>` is not a supported TLS version. Supported versions: `<SUPPORTED>`. |
| [ERR_NGROK_220](/error_details/220) | Your IP does not match the IP Policy for this Account.  Please authenticate from an IP in the correct range or update your IP Restrictions from the ngrok dashboard. https://dashboard.ngrok.com/security/ip-restrictions |
| [ERR_NGROK_221](/error_details/221) | This is a valid API token, but the account `<ACCOUNT>` is not authorized to submit or view abuse reports. Email contact@ngrok.com if you believe this is an error. |
| [ERR_NGROK_223](/error_details/223) | `<ID>` is not a valid resource reference identifier. |
| [ERR_NGROK_224](/error_details/224) | The value `<VAL>` is not valid for the terminate_at property of the TLS Termination endpoint configuration module. Must be either 'edge' or 'upstream'. |
| [ERR_NGROK_225](/error_details/225) | Your account is limited to `<MAX>` simultaneous API requests. |
| [ERR_NGROK_226](/error_details/226) | Your account is rate limited to `<MAX>` API requests per `<INTERVAL>`. |
| [ERR_NGROK_227](/error_details/227) | The ID `<VAL>` is invalid. Expected an ID with a prefix of `<PREFIX>`. |
| [ERR_NGROK_228](/error_details/228) | The ID `<VAL>` is not a valid Certificate Authority ID. |
| [ERR_NGROK_229](/error_details/229) | The ID `<VAL>` is not a valid IP Policy ID. |
| [ERR_NGROK_230](/error_details/230) | The query part of the requested URI is invalid: `<ERR>`. Please check your API client implementation and review the API documentation: https://ngrok.com/docs/ngrok-link#service-api. |
| [ERR_NGROK_231](/error_details/231) | The query part of the requested URI includes unknown parameters: `<UNKNOWN>`. The supported parameters are: `<SUPPORTED>`. Please check your API client implementation and review the API documentation: https://ngrok.com/docs/ngrok-link#service-api. |
| [ERR_NGROK_232](/error_details/232) | The request must specify only a single value for the `<NAME>` parameter but got `<COUNT>`: `<VALUES>`. Please check your API client implementation and review the API documentation: https://ngrok.com/docs/ngrok-link#service-api. |
| [ERR_NGROK_233](/error_details/233) | The page size limit must be between 1 and `<MAX>` but `<VAL>` was provided. |
| [ERR_NGROK_235](/error_details/235) | The Format `<VAL>` is missing or is not a valid Event Destination Format. Supported formats are: `<SUPPORTED>`. |
| [ERR_NGROK_236](/error_details/236) | The destination target is invalid. Expected fields include one of the following: `<TARGETS>` |
| [ERR_NGROK_238](/error_details/238) | The provided event type: `<TYP>` is not valid. Valid event types are `<ID>` |
| [ERR_NGROK_239](/error_details/239) | The provided field: `<TYP>` is not valid. |
| [ERR_NGROK_240](/error_details/240) | The provided event destination auth is invalid. |
| [ERR_NGROK_241](/error_details/241) | The value "`<TS>`" is not a valid RFC3339 timestamp. Error while parsing: "`<ERR>`". |
| [ERR_NGROK_242](/error_details/242) | The ID `<VAL>` is not a valid Backend ID. |
| [ERR_NGROK_243](/error_details/243) | The ID `<VAL>` is invalid. Expected an ID with prefix one of `<PREFIXES>`. |
| [ERR_NGROK_244](/error_details/244) | The page size limit must be a number between 1 and `<MAX>` but `<VAL>` was provided. |
| [ERR_NGROK_247](/error_details/247) | The account `<ACCOUNT>` has been suspended for non-payment. Update your payment method to pay your oustanding bill and resume service: https://dashboard.ngrok.com/billing/payment-method |
| [ERR_NGROK_300](/error_details/300) | The authtoken credential `<ID>` has been revokedand is no longer valid. |
| [ERR_NGROK_301](/error_details/301) | The bind payload you specified is not valid.This usually indiciates a bug in the client's protocol implementation.The parsing error encountered was:`<ERR>` |
| [ERR_NGROK_302](/error_details/302) | TCP tunnels are only available after you sign up.Sign up at: https://dashboard.ngrok.com/signupIf you have already signed up, make sure your authtoken is installed.Your authtoken is available on your dashboard: https://dashboard.ngrok.com/get-started/your-authtoken |
| [ERR_NGROK_303](/error_details/303) | TLS tunnels are only available for Pro and Business paid plans.Sign up at: https://dashboard.ngrok.com/signupIf you have already signed up, make sure your authtoken is installed.Your authtoken is available on your dashboard: https://dashboard.ngrok.com/get-started/your-authtoken |
| [ERR_NGROK_304](/error_details/304) | HTTP auth is only available after you sign up.Failed to bind a tunnel with HTTP authentication for an unauthenticated client.Sign up at: https://dashboard.ngrok.com/signupIf you have already signed up, make sure your authtoken is installed.Your authtoken is available on your dashboard: https://dashboard.ngrok.com/get-started/your-authtoken |
| [ERR_NGROK_305](/error_details/305) | Only paid plans may bind custom subdomains.Failed to bind the custom subdomain `<SUBDOMAIN>` for an unauthenticated client.Sign up at: https://dashboard.ngrok.com/signupIf you have already signed up, make sure your authtoken is installed.Your authtoken is available on your dashboard: https://dashboard.ngrok.com/get-started/your-authtoken |
| [ERR_NGROK_306](/error_details/306) | Custom hostnames are only available for Pro and Business paid plans.Failed to bind the custom hostname `<HOSTNAME>` for an unauthenticated client.Sign up at: https://dashboard.ngrok.com/signupIf you have already signed up, make sure your authtoken is installed.Your authtoken is available on your dashboard: https://dashboard.ngrok.com/get-started/your-authtoken |
| [ERR_NGROK_307](/error_details/307) | You must reserve an address for your account before it can be bound.Failed to bind the address `<ADDR>` for the account `<ACCOUNT>` in region `<REGION>`.(Hint: Did you reserve the address in this region?)Reserve an address on your dashboard: https://dashboard.ngrok.com/cloud-edge/tcp-addresses |
| [ERR_NGROK_308](/error_details/308) | The credential ACL policy does not permit binding this address.Credential ID: `<ID>`Address: `<ADDR>` |
| [ERR_NGROK_309](/error_details/309) | This address is reserved for another account.Failed to bind the address `<ADDR>` for the account `<ACCOUNT>`.Reserve an address on your dashboard: https://dashboard.ngrok.com/cloud-edge/tcp-addresses/newIf you have reserved this address, make sure that you are using anauthtoken credential for the appropriate account. |
| [ERR_NGROK_310](/error_details/310) | Only Pro and Enterprise plans may bind reserved addresses.Failed to bind the address `<ADDR>` for the account `<ACCOUNT>`.This account is on the `<PLAN>` plan.This usually only happens if you downgraded your ngrok.com account and it nolonger has permission to use reserved addresses.Upgrade to Pro or Enterprise: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_311](/error_details/311) | This address is allocated for a different region.Failed to bind the address `<ADDR>` in region `<WANT>` because it is reservedin the `<HAVE>` region.Try connecting to a different region: https://ngrok.com/docs/platform#pops |
| [ERR_NGROK_312](/error_details/312) | Failed to bind a TLS tunnel for the account `<ACCOUNT>`.Only Enterprise plans may bind TLS tunnels.This account is on the `<PLAN>` plan.Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_313](/error_details/313) | Only paid plans may bind custom subdomains.Failed to bind the custom subdomain `<SUBDOMAIN>` for the account `<ACCOUNT>`.This account is on the `<PLAN>` plan.Upgrade to a paid plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_314](/error_details/314) | Only Pro and Enterprise plans may bind custom hostnames.Failed to bind the custom hostname `<HOSTNAME>` for the account `<ACCOUNT>`.This account is on the `<PLAN>` plan.Upgrade to a paid plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_315](/error_details/315) | Only Enterprise plans may bind wildcard names.Failed to bind the wildcard name `<DOMAIN>` for the account `<ACCOUNT>`.This account is on the `<PLAN>` plan.Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_316](/error_details/316) | The credential ACL policy does not permit binding this name.Credential ID: `<ID>`Name: `<DOMAIN>` |
| [ERR_NGROK_317](/error_details/317) | You cannot bind the domain `<DOMAIN>` in region`<WANT>` because it is only available in the `<HAVE>` region.Try connecting to a different region: https://ngrok.com/docs/platform#pops |
| [ERR_NGROK_318](/error_details/318) | You must reserve a wildcard domain for your account before it can be bound.Failed to bind the wildcard domain `<DOMAIN>` for the account `<ACCOUNT>` in region `<REGION>`.Reserve a domain on your dashboard: https://dashboard.ngrok.com/cloud-edge/domains/new |
| [ERR_NGROK_319](/error_details/319) | You must reserve a custom hostname for your account before it can be bound.Failed to bind the domain `<DOMAIN>` for the account `<ACCOUNT>` in region `<REGION>`.(Hint: Did you reserve the domain in this region?)Reserve this name on your dashboard: https://dashboard.ngrok.com/cloud-edge/domains/new |
| [ERR_NGROK_320](/error_details/320) | This domain is reserved for another account.Failed to bind the domain `<DOMAIN>` for the account `<ACCOUNT>`.If you have reserved this name, make sure that you are using anauthtoken credential for the appropriate account.Reserve a name on your dashboard: https://dashboard.ngrok.com/cloud-edge/domains/new |
| [ERR_NGROK_321](/error_details/321) | Wildcard names must be reserved exactly.Failed to bind the wildcard domain `<DOMAIN>` for the account `<ACCOUNT>`.This name matches `<MATCH>` which is reserved for your account, butwildcard domains must be reserved with an exact match.Reserve this name on your dashboard: https://dashboard.ngrok.com/cloud-edge/domains/new |
| [ERR_NGROK_322](/error_details/322) | This name is reserved in a different region.Failed to bind the domain `<DOMAIN>` in the region `<WANT>` because it is reservedin the `<HAVE>` region.Try connecting to a different region: https://ngrok.com/docs/platform#pops |
| [ERR_NGROK_323](/error_details/323) | You may not run more than `<MAX>` tunnels over a single ngrok session without an account.You may increase this limit by signing up and upgrading.The tunnels already running on this session are:`<URLS>`Sign up at: https://dashboard.ngrok.com/signupIf you have already signed up, make sure your authtoken is installed.Your authtoken is available on your dashboard: https://dashboard.ngrok.com/get-started/your-authtoken |
| [ERR_NGROK_324](/error_details/324) | Your account may not run more than `<MAX>` tunnels over a single ngrok agent session.The tunnels already running on this session are:`<URLS>` |
| [ERR_NGROK_326](/error_details/326) | Invalid character `<CHAR>` in domain name. Valid domains may contain only a-z, A-Z, 0-9, . * and - characters. Failed to bind the domain `<DOMAIN>`. |
| [ERR_NGROK_327](/error_details/327) | Domain has an invalid character sequence. Valid domains may not contain repeated periods '..'. Failed to bind the domain `<DOMAIN>`. |
| [ERR_NGROK_328](/error_details/328) | Domain part `<PART>` has an invalid first character. Valid domain parts must begin with a-z, A-Z, 0-9 or *. Failed to bind the domain `<DOMAIN>`. |
| [ERR_NGROK_329](/error_details/329) | Domain part `<PART>` has an invalid last character. Valid domains must end with a-z A-Z or 0-9. Failed to bind the domain `<DOMAIN>`. |
| [ERR_NGROK_330](/error_details/330) | Domain has an invalid character sequence. Valid domains may not contain '--' in positions 3 and 4 unless the domain has a punycode prefix of 'xn--'. Failed to bind the domain `<DOMAIN>`. |
| [ERR_NGROK_331](/error_details/331) | You may not bind a domain with the TLD `<SUFFIX>`. This TLD is not reachable over the public internet. Failed to bind the domain `<DOMAIN>`. |
| [ERR_NGROK_332](/error_details/332) | `<PROTO>` is not a supported tunnel protocol |
| [ERR_NGROK_333](/error_details/333) | No tunnel found with the ID `<ID>` |
| [ERR_NGROK_334](/error_details/334) | The tunnel `<URL>` is already bound to another tunnel session |
| [ERR_NGROK_335](/error_details/335) | The bind cookie you specified is malformed. This usually indicates a bug in the client's protocol implementation. |
| [ERR_NGROK_336](/error_details/336) | Could not find an account while creating this tunnel. This is either an internal server error or you deleted your account. |
| [ERR_NGROK_337](/error_details/337) | The last payment for the `<ACCOUNT>` account failed.The account has been suspended. Update the payment information here:https://dashboard.ngrok.com/billing/payment-method |
| [ERR_NGROK_338](/error_details/338) | The account `<ACCOUNT>` has been suspended.This is usually the result of violating the ngrok Terms of Service.Email contact@ngrok.com if you think your suspension is an error. |
| [ERR_NGROK_339](/error_details/339) | Forwarding to a local file:/// URL is only available after you sign up.Sign up at: https://dashboard.ngrok.com/signupIf you have already signed up, make sure your authtoken is installed.Your authtoken is available on your dashboard: https://dashboard.ngrok.com/get-started/your-authtoken |
| [ERR_NGROK_340](/error_details/340) | Forwarding to local port 443 or a local https:// URL is only available after you sign up.Sign up at: https://dashboard.ngrok.com/signupIf you have already signed up, make sure your authtoken is installed.Your authtoken is available on your dashboard: https://dashboard.ngrok.com/get-started/your-authtoken |
| [ERR_NGROK_341](/error_details/341) | IP Policy with ID `<ID>` not found |
| [ERR_NGROK_342](/error_details/342) | Only Enterprise plans may use per-tunnel IP policies.Your account is not authorized to use per-tunnel IP policies.Upgrade to Enterprise: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_343](/error_details/343) | Endpoint configuration `<ID>` does not allow the agent to set basic authentication.Update the endpoint configuration to specify 'agent' as the auth provider or remove the basic authentication settings from the agent's tunnel creation definition. |
| [ERR_NGROK_344](/error_details/344) | Endpoint configuration `<ID>` does not allow clients to set an IP policy. |
| [ERR_NGROK_345](/error_details/345) | Endpoint configuration `<ID>`s HTTPS module terminates TLS which is incompatible with a 'tls' tunnel. You may either:  - Modify the endpoint configuration to include the HTTPS module with 'terminate_tls' disabled.  - OR start an 'http' tunnel with -bind-tls=true or -bind-tls=both instead |
| [ERR_NGROK_346](/error_details/346) | Endpoint configuration `<ID>`s HTTPS module does not terminate TLS which is incompatible with a 'https' tunnel. You may either:  - Modify the endpoint configuration to enable the 'terminate_tls' option  - OR start a 'tls' tunnel instead |
| [ERR_NGROK_347](/error_details/347) | Domain has invalid punycode: `<IDNA_ERROR>`. Failed to bind the domain `<DOMAIN>`. |
| [ERR_NGROK_348](/error_details/348) | Your account is limited to `<MAX>` sessions. |
| [ERR_NGROK_349](/error_details/349) | Your account is rate limited for adding `<MAX>` sessions per `<INTERVAL>`. |
| [ERR_NGROK_350](/error_details/350) | Your account is limited to `<MAX>` tunnels in a session. |
| [ERR_NGROK_351](/error_details/351) | Your account is rate limited for adding `<MAX>` tunnels per `<INTERVAL>`. |
| [ERR_NGROK_352](/error_details/352) | Anonymous sessions are limited to `<MAX>` tunnels. |
| [ERR_NGROK_353](/error_details/353) | Anonymous sessions are rate limited for adding `<MAX>` tunnels per `<INTERVAL>`. |
| [ERR_NGROK_354](/error_details/354) | Failed to bind `<DOMAIN>`. Nested subdomains of the ngrok base endpoint domain `<ENDPOINT_DOMAIN>` must be reserved first. Alternatively, try `<SUGGESTION>` instead. |
| [ERR_NGROK_355](/error_details/355) | Invalid '_' in domain name. Valid domains may not contain underscores. Failed to bind the domain `<DOMAIN>`. |
| [ERR_NGROK_356](/error_details/356) | The credential ACL policy does not permit binding random TCP addresses.Credential ID: `<ID>` |
| [ERR_NGROK_357](/error_details/357) | Labeled tunnels are only available after you sign up.Sign up at: https://dashboard.ngrok.com/signupIf you have already signed up, make sure your authtoken is configured.Your authtoken is available on your dashboard: https://dashboard.ngrok.com/get-started/your-authtoken |
| [ERR_NGROK_358](/error_details/358) | Your account doesn't have permission to create labeled tunnels. |
| [ERR_NGROK_359](/error_details/359) | Invalid basic auth credential. Username must not be zero length. |
| [ERR_NGROK_360](/error_details/360) | Invalid basic auth credential. Password must be between `<MINLENGTH>` and `<MAXLENGTH>` characters, got `<GOTLENGTH>`. |
| [ERR_NGROK_361](/error_details/361) | Invalid circuit breaker configuration, error threshold percentage must be between 0.0 and 1.0 inclusive, was `<VAL>`. |
| [ERR_NGROK_362](/error_details/362) | Invalid IP restriction configuration, invalid CIDR: `<CIDR>` |
| [ERR_NGROK_363](/error_details/363) | You must specify a supported provider name. Supported providers: [`<SUPPORTED>`] |
| [ERR_NGROK_364](/error_details/364) | Webhook provider `<PROVIDER>` is not supported. Supported providers: [`<SUPPORTED>`] |
| [ERR_NGROK_365](/error_details/365) | OAuth provider `<PROVIDER>` is not supported. Supported providers: [`<SUPPORTED>`] |
| [ERR_NGROK_366](/error_details/366) | You may not authorize more than `<MAX>` emails. Got `<GOT>`. |
| [ERR_NGROK_367](/error_details/367) | You may not authorize more than `<MAX>` email domains. Got `<GOT>`. |
| [ERR_NGROK_368](/error_details/368) | You may not request more than `<MAX>` oauth scopes. Got `<GOT>`. |
| [ERR_NGROK_370](/error_details/370) | Added request header should be in key:value format, got `<VAL>` |
| [ERR_NGROK_371](/error_details/371) | Added response header should be in key:value format, got `<VAL>` |
| [ERR_NGROK_372](/error_details/372) | `<KEY>` is not a valid HTTP header name because it contains at least one invalid character. |
| [ERR_NGROK_373](/error_details/373) | `<KEY>` is not a valid HTTP header name because it contains at least one invalid character. |
| [ERR_NGROK_374](/error_details/374) | `<VAL>` is not a valid HTTP header value: `<REASON>`. |
| [ERR_NGROK_375](/error_details/375) | Duplicate 'add' header, `<HEADER>` was provided twice with different casings: `<CASE_ONE>` and `<CASE_TWO>`. |
| [ERR_NGROK_376](/error_details/376) | Exceeded the maximum number of added headers. You specified `<VAL>`, the maximum is `<MAX>`. |
| [ERR_NGROK_377](/error_details/377) | The header beginning with `<PREFIX>`...' exceeds the maximum header name length of 128 bytes. |
| [ERR_NGROK_378](/error_details/378) | The header value for `<HEADERKEY>` beginning with `<PREFIX>`...' exceeds the maximum header value length of 1024 bytes. |
| [ERR_NGROK_379](/error_details/379) | The sendgrid verification key is not a base64 encoded ecdsa public key. The following error was encountered while trying to parse it: "`<ERROR>`" |
| [ERR_NGROK_380](/error_details/380) | The resource `<ID>` was referenced, but not found. Please retry, and contact support if this error persists. |
| [ERR_NGROK_381](/error_details/381) | The host `<HOST>` and port `<PORT>` you requested is already reserved by an edge. |
| [ERR_NGROK_382](/error_details/382) | The account "`<NAME>`" may not start a tunnel until the admin's email address is verified. Verify your email at https://dashboard.ngrok.com/user/settings |
| [ERR_NGROK_383](/error_details/383) | You may not specify an OAuth Client ID without also specifying a Client Secret. Specify both or neither. |
| [ERR_NGROK_384](/error_details/384) | You may not specify an OAuth Client Secret without also specifying a Client ID. Specify both or neither. |
| [ERR_NGROK_385](/error_details/385) | You must specify an OIDC Client ID. |
| [ERR_NGROK_386](/error_details/386) | You must specify an OIDC Client Secret. |
| [ERR_NGROK_387](/error_details/387) | You must specify the OIDC Issuer URL. |
| [ERR_NGROK_388](/error_details/388) | You may not request more than `<MAX>` OIDC scopes. Got `<GOT>`. |
| [ERR_NGROK_389](/error_details/389) | You must specify an OAuth client ID and secret for a custom application or neither client ID nor a secret for the ngrok-managed OAuth application. |
| [ERR_NGROK_390](/error_details/390) | You must use your own OAuth application, specifying its client ID and secret, in order to specify scopes. |
| [ERR_NGROK_391](/error_details/391) | You may not request an individual OAuth scope with length greater than `<MAX>`. Got scope `<SCOPE>` with length `<GOT>`. |
| [ERR_NGROK_392](/error_details/392) | You may not request an individual OIDC scope with length greater than `<MAX>`. Got scope `<SCOPE>` with length `<GOT>`. |
| [ERR_NGROK_393](/error_details/393) | When specifying CIDRs to deny, you must specify at least one CIDR to allow. Otherwise all traffic will be denied. Use 0.0.0.0/0 and ::0/0 to accept all traffic not explicitly blocked by your deny rules. |
| [ERR_NGROK_394](/error_details/394) | Each tunnel must specify either a protocol or labels, but neither was set. |
| [ERR_NGROK_395](/error_details/395) | Bind rules in authtoken ACLs are not supported with labeled tunnels at this time. |
| [ERR_NGROK_396](/error_details/396) | Domain `<DOMAIN>` is not a valid DNS name. No domain part may be more than 63 characters long. |
| [ERR_NGROK_397](/error_details/397) | Domain `<DOMAIN>` is not a valid DNS name. Domains may not be more than 253 characters long. |
| [ERR_NGROK_398](/error_details/398) | The `<ID>` header cannot be removed without specifying a replacement. |
| [ERR_NGROK_399](/error_details/399) | The credential ACL policy does not permit binding this label.Credential ID: `<ID>`Label: `<LABEL>` |
| [ERR_NGROK_400](/error_details/400) | The region you specified, `<REGION>` is invalid. Please use one of the following acceptable values: `<VALID>` |
| [ERR_NGROK_401](/error_details/401) | Only Pro or Enterprise accounts can reserve domains.Your account can't reserve domains. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_402](/error_details/402) | Only the first part of a reserved domain may be a '*' wildcard. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_403](/error_details/403) | The first subdomain of a wildcard domain must be a single '*' character. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_404](/error_details/404) | You may not reserve names on ngrok.com. Please use an ngrok.io suffix. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_405](/error_details/405) | You may not reserve a domain with the suffix `<SUFFIX>` in the `<WANT>` region because names with this suffix must be reserved for the `<HAVE>` region. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_406](/error_details/406) | Invalid character `<CHAR>` in domain name. Valid domains may contain only a-z, A-Z, 0-9, . * and - characters. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_407](/error_details/407) | Domain part `<PART>` has an invalid first character. Valid domain parts must begin with a-z, A-Z, 0-9 or *. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_408](/error_details/408) | Domain part `<PART>` has an invalid last character. Valid domains must end with a-z A-Z or 0-9. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_409](/error_details/409) | Domain has an invalid character sequence. Valid domains may not contain repeated periods '..'. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_410](/error_details/410) | Domain has an invalid character sequence. Valid domains may not contain '--' in positions 3 and 4 unless the domain has a punycode prefix of 'xn--'. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_411](/error_details/411) | You may not reserve a name on the TLD `<SUFFIX>`. This TLD is not reachable over the public internet. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_412](/error_details/412) | Only Pro or Enterprise accounts can reserve tunnels on custom domains.Your account cannot reserve tunnels on custom domains (`<DOMAIN>` is not a subdomain of `<BASE>`).Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_413](/error_details/413) | This domain is already reserved for your account. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_414](/error_details/414) | This domain is already reserved for another account. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_415](/error_details/415) | Your account is limited to `<MAX>` reserved domains. Email sales@ngrok.com to purchase additional domains. |
| [ERR_NGROK_416](/error_details/416) | You may not register a wildcard for all `<SUFFIX>` domains. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_417](/error_details/417) | This wildcard domain would conflict with a domain reserved for another account. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_418](/error_details/418) | Your account is limited to `<MAX>` wildcard domains. Email contact@ngrok.com to purchase additional wildcard domains. |
| [ERR_NGROK_419](/error_details/419) | Only Pro or Enterprise accounts can reserve wildcard domains.Your account can't reserve wildcard domains.Upgrade to a Pro or Enterprise plan at https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_420](/error_details/420) | A description is limited to `<MAX>` characters; you have entered `<VAL>` characters. |
| [ERR_NGROK_421](/error_details/421) | Metadata is limited to `<MAX>` characters; you have entered `<VAL>` characters. |
| [ERR_NGROK_422](/error_details/422) | The reserved domain name update failed because no values were provided. Specify at least one value. |
| [ERR_NGROK_423](/error_details/423) | The reserved domain name is limited to `<MAX>` characters; you are using `<VAL>` characters.The name you've requested is: `<DOMAIN>` |
| [ERR_NGROK_424](/error_details/424) | Domain `<DOMAIN>` does not require a CNAME record |
| [ERR_NGROK_425](/error_details/425) | Domain `<DOMAIN>` CNAME record not found |
| [ERR_NGROK_426](/error_details/426) | Domain `<DOMAIN>` CNAME record not found, A record `<IPS>` found |
| [ERR_NGROK_427](/error_details/427) | Domain `<DOMAIN>` CNAME record resolved to `<HAVE>`, should have been `<WANT>` |
| [ERR_NGROK_428](/error_details/428) | You may not assign endpoint configuration `<ID>` because it is type `<TYPE>`. You must assign a configuration with type `<EXPECTEDTYPE>`. |
| [ERR_NGROK_429](/error_details/429) | Domain has invalid punycode: `<IDNA_ERROR>`. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_430](/error_details/430) | Another account is running an active tunnel on the domain `<DOMAIN>`. You may not reserve domains that are actively in use. |
| [ERR_NGROK_431](/error_details/431) | Your account is limited to `<MAX>` reserved domains. |
| [ERR_NGROK_432](/error_details/432) | Your account is rate limited for adding `<MAX>` reserved domains per `<INTERVAL>`. |
| [ERR_NGROK_433](/error_details/433) | Your account is limited to `<MAX>` reserved wildcard domains. |
| [ERR_NGROK_434](/error_details/434) | Either a certificate or a certificate management policy may be specified, not both |
| [ERR_NGROK_435](/error_details/435) | Invalid authority specified in managed certificate policy. |
| [ERR_NGROK_436](/error_details/436) | The certificate of a reserved domain with a managed certificate policy can not be detached directly, instead the managed certificate policy itself should be detached. |
| [ERR_NGROK_438](/error_details/438) | Invalid '_' in domain name. Valid domains may not contain underscores. Failed to reserve `<DOMAIN>`. |
| [ERR_NGROK_439](/error_details/439) | The certificate_management_policy field must be null for domains owned by ngrok. |
| [ERR_NGROK_440](/error_details/440) | Uploaded certificates are not allowed for domains owned by ngrok. |
| [ERR_NGROK_441](/error_details/441) | Domain `<DOMAIN>` does not require an ACME Challenge CNAME record |
| [ERR_NGROK_442](/error_details/442) | Domain `<RECORD>` ACME Challenge CNAME record not found |
| [ERR_NGROK_443](/error_details/443) | ACME Challenge `<RECORD>` CNAME record not found, A record `<IPS>` found |
| [ERR_NGROK_444](/error_details/444) | ACME Challenge `<RECORD>` CNAME record resolved to `<HAVE>`, should have been `<WANT>` |
| [ERR_NGROK_445](/error_details/445) | There was an error looking up the DNS `<RTYPE>` record for domain `<DOMAIN>` (status: `<STATUS>`): `<MSG>` |
| [ERR_NGROK_500](/error_details/500) | The region you specified, `<REGION>` is invalid. Please use one of the following acceptable values: `<VALID>` |
| [ERR_NGROK_501](/error_details/501) | Only Pro or Enterprise accounts can reserve addresses.Your account can't reserve addresses. Upgrade to a Pro or Enterprise plan at https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_502](/error_details/502) | Your account is limited to `<MAX>` reserved addresses. Email contact@ngrok.com to purchase additional addresses. |
| [ERR_NGROK_503](/error_details/503) | No available reserved addresses in region `<REGION>` |
| [ERR_NGROK_504](/error_details/504) | A description is limited to `<MAX>` characters; you have entered `<VAL>` characters. |
| [ERR_NGROK_505](/error_details/505) | Metadata is limited to `<MAX>` characters; you have entered `<VAL>` characters. |
| [ERR_NGROK_506](/error_details/506) | The reserved address update failed because no values were provided. Specify at least one value. |
| [ERR_NGROK_507](/error_details/507) | You may not assign endpoint configuration `<ID>` because it is type `<TYPE>`. You must assign a configuration with type 'tcp'. |
| [ERR_NGROK_508](/error_details/508) | Your account is limited to `<MAX>` reserved addresses. |
| [ERR_NGROK_509](/error_details/509) | Your account is rate limited for adding `<MAX>` reserved addresses per `<INTERVAL>`. |
| [ERR_NGROK_511](/error_details/511) | The domain `<DOMAIN>` has a dangling CNAME record. The CNAME must be deleted before this domain can be reserved. |
| [ERR_NGROK_512](/error_details/512) | The domain `<DOMAIN>` has a dangling A, AAAA, ALIAS or other record pointing to ngrok. The record must be deleted before this domain can be reserved. |
| [ERR_NGROK_513](/error_details/513) | The domain `<DOMAIN>` is not a valid DNS name. No domain part may be more than 63 characters long. |
| [ERR_NGROK_514](/error_details/514) | The domain `<DOMAIN>` is not a valid DNS name. Domains may not be more than 253 characters long. |
| [ERR_NGROK_600](/error_details/600) | Invalid ACL rule. An ACL rule must be '*' or start with 'bind:'. The bind value must match the format of a domain, address, or label. You specified: `<RULE>`. |
| [ERR_NGROK_601](/error_details/601) | Cannot delete user credential `<ID>`. |
| [ERR_NGROK_602](/error_details/602) | Your account is limited to `<MAX>` tunnel credentials. Email contact@ngrok.com to increase the limit. |
| [ERR_NGROK_603](/error_details/603) | Your account is limited to `<MAX>` API keys. Email contact@ngrok.com to increase the limit. |
| [ERR_NGROK_604](/error_details/604) | A description is limited to `<MAX>` characters; you have entered `<VAL>` characters. |
| [ERR_NGROK_605](/error_details/605) | Metadata is limited to `<MAX>` characters; you have entered `<VAL>` characters. |
| [ERR_NGROK_606](/error_details/606) | The credentials update failed because no values were provided. Specify at least one value. |
| [ERR_NGROK_607](/error_details/607) | Only Pro and Enterprise accounts can use the SSH tunnel feature.SSH tunnel feature is not enabled.  Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_608](/error_details/608) | Your account is limited to `<MAX>` SSH keys. Email contact@ngrok.com to increase the limit. |
| [ERR_NGROK_609](/error_details/609) | The public key `<PUBKEY>` already exists on your account. |
| [ERR_NGROK_610](/error_details/610) | The public key `<PUBKEY>` is already used in a different account. Remove it from the other ngrok account or generate a new SSH key pair (hint: use ssh-keygen). |
| [ERR_NGROK_611](/error_details/611) | Public key is missing or empty. |
| [ERR_NGROK_612](/error_details/612) | Invalid public key `<PUBKEY>`: `<ERR>` |
| [ERR_NGROK_613](/error_details/613) | Your account is limited to `<MAX>` API keys. |
| [ERR_NGROK_614](/error_details/614) | Your account is rate limited for adding `<MAX>` API keys per `<INTERVAL>`. |
| [ERR_NGROK_615](/error_details/615) | Your account is limited to `<MAX>` tunnel credentials. |
| [ERR_NGROK_617](/error_details/617) | Your account is limited to `<MAX>` SSH keys. |
| [ERR_NGROK_619](/error_details/619) | Your account is not authorized to use this ACL rule type. You specified: `<RULE>`. |
| [ERR_NGROK_620](/error_details/620) | Only Enterprise plans can use tunnel ACL rules.Your account is not authorized to use tunnel ACL rules.Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_621](/error_details/621) | Only Enterprise plans can use API ACL rules.Your account is not authorized to use API ACL rules.Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_622](/error_details/622) | Only Enterprise plans can use SSH ACL rules.Your account is not authorized to use SSH ACL rules.Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_702](/error_details/702) | Too many connections! The tunnel session `<SESSION>` has violated the rate-limit policy of `<THRESHOLD>` connections per minute by initiating `<COUNT>` connections in the last `<SECONDS>` seconds. Please decrease your inbound connection volume or upgrade to a paid plan for additional capacity. |
| [ERR_NGROK_703](/error_details/703) | Too many connections! The account hosting this endpoint has violated the rate-limit policy of `<THRESHOLD>` connections per minute by initiating `<COUNT>` connections in the last `<SECONDS>` seconds. Please decrease your inbound connection volume or upgrade your account plan for additional capacity. |
| [ERR_NGROK_708](/error_details/708) | This URL has expired. Please sign up for a free ngrok account to create URLs that do not expire. You can also restart the ngrok agent which will create a new URL that will expire after the same amount of time. |
| [ERR_NGROK_714](/error_details/714) | Your account is limited to `<MAX>` connections. |
| [ERR_NGROK_715](/error_details/715) | Your account is rate limited for adding `<MAX>` connections per `<INTERVAL>`. |
| [ERR_NGROK_716](/error_details/716) | Anonymous sessions are limited to `<MAX>` connections. |
| [ERR_NGROK_717](/error_details/717) | Anonymous sessions are rate limited for adding `<MAX>` connections per `<INTERVAL>`. |
| [ERR_NGROK_718](/error_details/718) | Your account is rate limited to `<MAX>` bytes incoming traffic per `<INTERVAL>`. |
| [ERR_NGROK_719](/error_details/719) | Anonymous sessions are rate limited to `<MAX>` bytes incoming traffic per `<INTERVAL>`. |
| [ERR_NGROK_720](/error_details/720) | Your account is rate limited to `<MAX>` bytes outgoing traffic per `<INTERVAL>`. |
| [ERR_NGROK_721](/error_details/721) | Anonymous sessions are rate limited to `<MAX>` bytes outgoing traffic per `<INTERVAL>`. |
| [ERR_NGROK_722](/error_details/722) | internal server error |
| [ERR_NGROK_724](/error_details/724) | No backend is available to serve requests for endpoint `<URL>`. |
| [ERR_NGROK_800](/error_details/800) | Unknown stream type: `<TYPE>`.This usually indiciates a bug in the client's protocol implementation. |
| [ERR_NGROK_801](/error_details/801) | The request payload you specified is not valid.This usually indiciates a bug in the client's protocol implementation.The parsing error encountered was:`<ERR>` |
| [ERR_NGROK_802](/error_details/802) | internal server error |
| [ERR_NGROK_803](/error_details/803) | The server process is shutting down and refusing new requests. |
| [ERR_NGROK_804](/error_details/804) | This ngrok agent does not support remote restarting: `<REASON>`. |
| [ERR_NGROK_805](/error_details/805) | This ngrok agent does not support remote stopping: `<REASON>`. |
| [ERR_NGROK_806](/error_details/806) | This ngrok agent does not support remote updating: `<REASON>`. |
| [ERR_NGROK_807](/error_details/807) | The remote ngrok agent failed to stop because of an error: `<ERR>` |
| [ERR_NGROK_808](/error_details/808) | The remote ngrok agent failed to restart because of an error: `<ERR>` |
| [ERR_NGROK_809](/error_details/809) | The remote ngrok agent failed to update because of an error: `<ERR>` |
| [ERR_NGROK_810](/error_details/810) | There was a networking error while trying to send this operation to the ngrok agent or trying to read the response. This usually indicates that the ngrok agent was in the process of shutting down or reconnecting, but it could also result from a networking timeout or failure. It is possible, but unlikely, that the operation succeeded. |
| [ERR_NGROK_811](/error_details/811) | Could not negotiate a protocol version. Requested: "`<REQUESTED>`", Supported: `<SUPPORTED>`" |
| [ERR_NGROK_812](/error_details/812) | Your request exceeded the maximum size of `<SIZE>`. |
| [ERR_NGROK_1000](/error_details/1000) | Your billing address is too long: `<VAL>` bytes. Max: `<MAX>` |
| [ERR_NGROK_1001](/error_details/1001) | Your tax ID is too long: `<VAL>` bytes. Max: `<MAX>` |
| [ERR_NGROK_1002](/error_details/1002) | Your account is limited to `<MAX>` billing email addresses. Email contact@ngrok.com to increase the limit |
| [ERR_NGROK_1003](/error_details/1003) | The billing email `<ID>` (`<EMAIL>`) may not be deleted |
| [ERR_NGROK_1004](/error_details/1004) | The billing email is too long: `<VAL>` bytes. Max: `<MAX>` |
| [ERR_NGROK_1005](/error_details/1005) | The billing email address `<EMAIL>` is invalid: `<ERR>` |
| [ERR_NGROK_1006](/error_details/1006) | There was a problem with your credit card: `<MSG>` |
| [ERR_NGROK_1007](/error_details/1007) | Your subscription was updated, by we failed to charge your card: `<MSG>`. |
| [ERR_NGROK_1008](/error_details/1008) | Your account is limited to `<MAX>` billing email addresses. |
| [ERR_NGROK_1010](/error_details/1010) | The email address "`<EMAIL>`" is invalid. |
| [ERR_NGROK_1011](/error_details/1011) | Your account is currently past due. You may only enter a payment method to pay your overdue invoice or switch to the free plan. |
| [ERR_NGROK_1012](/error_details/1012) | You may not purchase fewer licenses than users. Your account currently has `<USERS>` users. |
| [ERR_NGROK_1013](/error_details/1013) | Yearly plans can only be downgraded or canceled in their final month. Try again after `<TIMESTAMP>`. |
| [ERR_NGROK_1014](/error_details/1014) | You may only purchase one license product at a time. |
| [ERR_NGROK_1015](/error_details/1015) | You are on an old custom subscription. Please contact support@ngrok.com for help with changing your subscription. |
| [ERR_NGROK_1016](/error_details/1016) | Cannot charge customer that has no active payment source. |
| [ERR_NGROK_1017](/error_details/1017) | Accounts in bad standing may only switch to a free plan or update their payment method. |
| [ERR_NGROK_1100](/error_details/1100) | No public keys were sent for this SSH tunnel.Configure SSH with public key authentication and register your keys at https://dashboard.ngrok.com/tunnels/ssh-keys Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription to enable SSH tunnels. |
| [ERR_NGROK_1101](/error_details/1101) | Too many public keys sent for this SSH tunnel (sent `<VAL>`, max `<MAX>`).Rerun ssh with '-v' to check what keys get sent |
| [ERR_NGROK_1102](/error_details/1102) | Could not find your account based on the public keys sent for this SSH tunnel. Anonymous SSH tunneling is not supported.Check your SSH configuration and register your keys at https://dashboard.ngrok.com/tunnels/ssh-keys |
| [ERR_NGROK_1103](/error_details/1103) | Only Pro or Enterprise accounts can use the SSH tunneling feature.The account `<ACCOUNT>` doesn't have the SSH tunneling feature enabled. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription to enable SSH tunnels. |
| [ERR_NGROK_1104](/error_details/1104) | Multiplexing is not supported with SSH tunneling |
| [ERR_NGROK_1105](/error_details/1105) | Only one port forward per tunneling session is supported. |
| [ERR_NGROK_1106](/error_details/1106) | Could not find `<USER>` API version. Use `<VERSION>` as user when connecting with SSH to get the latest version. |
| [ERR_NGROK_1107](/error_details/1107) | No tunnel type specified. The SSH command specifies the type of tunnel to create, one of 'http', 'tls', or 'tcp'. |
| [ERR_NGROK_1108](/error_details/1108) | `<CMD>` is not a valid tunnel type. The SSH command must be one of 'http', 'tls', or 'tcp'. |
| [ERR_NGROK_1109](/error_details/1109) | `<FLAG>` flag is not supported when using SSH tunneling |
| [ERR_NGROK_1110](/error_details/1110) | Error while parsing the `<CMD>` command:`<OUT>` |
| [ERR_NGROK_1111](/error_details/1111) | Timeout while waiting for SSH session |
| [ERR_NGROK_1112](/error_details/1112) | Timeout while waiting for port forward request.Use 'ssh -R ...' option to specify your port forwarding. |
| [ERR_NGROK_1113](/error_details/1113) | Cannot use bind port `<PORT>` when using `<CMD>` command.Use 'ssh -R 0:host:hostport ...' to let the server choose the remote port based on the command. |
| [ERR_NGROK_1114](/error_details/1114) | Cannot use bind address '-R `<HOST>`:`<PORT>`:' with '-remote-addr=`<ADDR>` parameter.You may either specify -R `<HOST>`:`<PORT>`:' or -remote-addr=`<ADDR>` but not both. |
| [ERR_NGROK_1115](/error_details/1115) | Cannot request a custom TCP port '-R `<PORT>`:' with '-remote-addr=`<ADDR>` parameter.Remove -remote-addr and specify 'ssh -R address:port:host:port' to bind on your reserved address.Example: ssh -R 0:localhost:22 ...Example: ssh -R 1.tcp.eu.ngrok.io:21412:localhost:22 ... |
| [ERR_NGROK_1116](/error_details/1116) | Cannot request a custom bind port '-R `<PORT>`:'.You may either specify a reserved TCP address with '-R address:port:' or you may let the server choose a random remote port for you with '-R 0:'.Example: ssh -R 0:localhost:22 ...Example: ssh -R 1.tcp.eu.ngrok.io:21412:localhost:22 ... |
| [ERR_NGROK_1117](/error_details/1117) | Cannot request a random port with a custom bind address `<ADDR>` in '-R `<ADDR>`:0:'.You may either specify a reserved TCP address with '-R address:port:' or you may let the server choose a random remote port for you with '-R 0:'.Example: ssh -R 0:localhost:22 ...Example: ssh -R 1.tcp.eu.ngrok.io:21412:localhost:22 ... |
| [ERR_NGROK_1118](/error_details/1118) | Cannot use binding address '-R `<ADDR>`:' with '-hostname=`<HOSTNAME>` parameter.You may either specify '-R `<ADDR>`:' or '-hostname=`<HOSTNAME>` but not both. |
| [ERR_NGROK_1119](/error_details/1119) | Cannot use binding address '-R `<ADDR>`:' with '-subdomain=`<SUBDOMAIN>` parameter.You may either specify binding address '-R `<ADDR>`:' or '-subdomain=`<SUBDOMAIN>` but not both. |
| [ERR_NGROK_1120](/error_details/1120) | Cannot use '-hostname=`<HOSTNAME>` with '-subdomain=`<SUBDOMAIN>` parameter.You may either specify '-hostname=`<HOSTNAME>` or '-subdomain=`<SUBDOMAIN>` but not both. |
| [ERR_NGROK_1121](/error_details/1121) | SSH sessions do not support update. |
| [ERR_NGROK_1122](/error_details/1122) | SSH sessions do not support restart. |
| [ERR_NGROK_1123](/error_details/1123) | Tunnel '-proxy-proto=`<PROXYPROTO>` specifies invalid protocol version.Use one of version '1' or '2' to enable proxy proto. |
| [ERR_NGROK_1200](/error_details/1200) | Authorized account's primary email `<EMAIL>` is not verified. |
| [ERR_NGROK_1202](/error_details/1202) | You can't enable Google OAuth without first connecting a Google Apps login. |
| [ERR_NGROK_1203](/error_details/1203) | You can't enable Google OAuth because your connected Google login does not have a Google Apps domain. |
| [ERR_NGROK_1204](/error_details/1204) | You can't delete your payment method while you have an active subscription. |
| [ERR_NGROK_1205](/error_details/1205) | You failed to solve the catpcha, please try again. |
| [ERR_NGROK_1207](/error_details/1207) | Cannot switch to an account you are not a member of. |
| [ERR_NGROK_1208](/error_details/1208) | You failed to solve the catpcha, please try again. |
| [ERR_NGROK_1210](/error_details/1210) | Invalid subscription interval `<INTERVAL>`. |
| [ERR_NGROK_1211](/error_details/1211) | Warning: Your IP does not match the IP Policy for this Account. When IP Restrictions are enforced you will not be able to access the dashboard.  Please authenticate from an IP in the correct range or update your IP Restrictions. |
| [ERR_NGROK_1212](/error_details/1212) | Your IP does not match the IP Policy for this Account.  Please authenticate from an IP in the correct range or update your IP Restrictions from the ngrok dashboard. https://dashboard.ngrok.com/security/ip-restrictions |
| [ERR_NGROK_1213](/error_details/1213) | A new version of the ngrok dashboard is required to continue. Please refresh the page to update. |
| [ERR_NGROK_1214](/error_details/1214) | Your account is rate limited to `<MAX>` requests per `<INTERVAL>`. |
| [ERR_NGROK_1215](/error_details/1215) | The user `<EMAIL>` does not have permissions to invite other team members. |
| [ERR_NGROK_1216](/error_details/1216) | The user `<EMAIL>` does not have permissions to manage team members. |
| [ERR_NGROK_1217](/error_details/1217) | The user `<EMAIL>` does not have permissions to view billing information. |
| [ERR_NGROK_1218](/error_details/1218) | The user `<EMAIL>` does not have permissions to change billing information. |
| [ERR_NGROK_1219](/error_details/1219) | The user `<EMAIL>` does not have permissions to change developer resources. |
| [ERR_NGROK_1220](/error_details/1220) | The user `<EMAIL>` does not have administrative privileges which are required to perform this operation. |
| [ERR_NGROK_1221](/error_details/1221) | Refusing to perform an account delete operation because you are using the dashboard with a different active account than the one you requested deletion for. |
| [ERR_NGROK_1222](/error_details/1222) | You are not a member of any account. |
| [ERR_NGROK_1223](/error_details/1223) | You are logged out, please log back in. |
| [ERR_NGROK_1224](/error_details/1224) | You are no longer a member of the current account. |
| [ERR_NGROK_1225](/error_details/1225) | You must accept the terms of service and privacy policy to sign up for ngrok. |
| [ERR_NGROK_1226](/error_details/1226) | You are disallowed from creating an ngrok account due to violation of the terms of service. |
| [ERR_NGROK_1227](/error_details/1227) | The number of login attempts with this email has been exceeded, please try again later. |
| [ERR_NGROK_1400](/error_details/1400) | The IP Policy update failed because no values were provided. Specify at least one value |
| [ERR_NGROK_1401](/error_details/1401) | The IP Policy Rule update failed because no values were provided. Specify at least one value |
| [ERR_NGROK_1402](/error_details/1402) | IP Policy not found |
| [ERR_NGROK_1404](/error_details/1404) | IP Policy Rule not found |
| [ERR_NGROK_1405](/error_details/1405) | Required parameter is missing. Please specify `<PARAM>` |
| [ERR_NGROK_1406](/error_details/1406) | Invalid CIDR: `<CIDR>` |
| [ERR_NGROK_1407](/error_details/1407) | IP Policy with name `<NAME>` already exists |
| [ERR_NGROK_1408](/error_details/1408) | IP Policy Rule with CIDR `<CIDR>` already exists |
| [ERR_NGROK_1409](/error_details/1409) | IP Policy Rule CIDR `<CIDR>` must be specified using the lowest IP address in the range. Did you mean `<SUGGESTION>`? |
| [ERR_NGROK_1410](/error_details/1410) | Your account is limited to a maximum of `<MAX>` IP Policies |
| [ERR_NGROK_1411](/error_details/1411) | Your account is limited to a maximum of `<MAX>` IP Policy rules for each IP Policy |
| [ERR_NGROK_1412](/error_details/1412) | Only Pro or Enterprise accounts can use per-tunnel IP policies.Your account is not authorized to use per-tunnel IP policies. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_1413](/error_details/1413) | IP Policy Rule is missing a network mask. Consider using `<IP>`/`<BITS>` if you want to target a single host IP. |
| [ERR_NGROK_1414](/error_details/1414) | The provided ip_policy_id is invalid. Please check the value given with your request. |
| [ERR_NGROK_1415](/error_details/1415) | Your account is limited to `<MAX>` IP Policies. |
| [ERR_NGROK_1417](/error_details/1417) | Your account is limited to `<MAX>` rules per IP Policy. |
| [ERR_NGROK_1419](/error_details/1419) | Cannot delete only rule (`<RULEID>`) in use by dashboard IP Restriction (`<RESTRICTIONID>`). Please detach this IP Policy from IP Restriction before deleting this rule. |
| [ERR_NGROK_1420](/error_details/1420) | Cannot delete IP Policy (`<POLICYID>`) because it is referenced by one or more IP Restrictions: (`<RESTRICTIONIDS>`). Please detach this IP Policy from all IP Restrictions before deleting it. |
| [ERR_NGROK_1421](/error_details/1421) | The IP Policy Rule description exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_1422](/error_details/1422) | An IP Policy Rule must have an 'action' of either 'allow' or 'deny'. |
| [ERR_NGROK_1423](/error_details/1423) | An action should now be specified on the IP Policy Rule, not IP Policy. Please contact ngrok support if you need additional time to migrate. |
| [ERR_NGROK_1500](/error_details/1500) | Maintenance in progress, operations for some resources are read-only |
| [ERR_NGROK_1501](/error_details/1501) | Maintenance in progress, some operations are unavailable |
| [ERR_NGROK_1600](/error_details/1600) | Endpoint configuration not found |
| [ERR_NGROK_1601](/error_details/1601) | Invalid endpoint configuration ID |
| [ERR_NGROK_1602](/error_details/1602) | Invalid endpoint configuration request |
| [ERR_NGROK_1607](/error_details/1607) | The IP Policy ID `<ID>` specified for the IP Policy module does not exist. |
| [ERR_NGROK_1608](/error_details/1608) | Only Pro or Enterprise accounts can use endpoint configuration.Your account is not authorized to use endpoint configurations. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_1609](/error_details/1609) | Your account is limited to a maximum of `<MAX>` endpoint configurations. |
| [ERR_NGROK_1611](/error_details/1611) | Invalid endpoint configuration, circuit breaker error threshold percentage must be between 0.0 and 1.0 inclusive, was `<VAL>`. |
| [ERR_NGROK_1612](/error_details/1612) | The auth provider `<VAL>` does not exist. Specify an auth provider ID or the special value 'agent'. |
| [ERR_NGROK_1613](/error_details/1613) | The endpoint configuration exceeds the max number of ip policies. You specified `<VAL>`, the maximum is `<MAX>`. |
| [ERR_NGROK_1614](/error_details/1614) | The endpoint configuration TLS CA certificate size exceeds the max. You specified `<VAL>`, the maximum is `<MAX>`. |
| [ERR_NGROK_1615](/error_details/1615) | The endpoint configuration exceeds the max number of headers. You specified `<VAL>`, the maximum is `<MAX>`. |
| [ERR_NGROK_1616](/error_details/1616) | Invalid endpoint configuration, circuit breaker tripped duration must be greater than 0, was `<VAL>`. |
| [ERR_NGROK_1617](/error_details/1617) | Invalid endpoint configuration, circuit breaker rolling window must be greater than 0, was `<VAL>`. |
| [ERR_NGROK_1618](/error_details/1618) | Invalid endpoint configuration, circuit breaker num buckets must be greater than 0 and less than `<MAX>`, was `<VAL>`. |
| [ERR_NGROK_1619](/error_details/1619) | The endpoint configuration could not be deleted because it is still referenced by at least one reserved domain or reserved address. |
| [ERR_NGROK_1620](/error_details/1620) | The endpoint configuration must specify a type. |
| [ERR_NGROK_1621](/error_details/1621) | The module `<NAME>` is not supported on an endpoint configuration of type `<TYPE>`. |
| [ERR_NGROK_1622](/error_details/1622) | `<NAME>` is not a valid endpoint configuration type. Must be one of 'http', 'https', 'tcp'. |
| [ERR_NGROK_1623](/error_details/1623) | `<KEY>` is not a valid HTTP header name because it contains at least one invalid character. |
| [ERR_NGROK_1624](/error_details/1624) | `<VAL>` is not a valid HTTP header value: `<REASON>`. |
| [ERR_NGROK_1625](/error_details/1625) | You must specify at least one IP policy in the IP Policy module. |
| [ERR_NGROK_1626](/error_details/1626) | SNS webhook validation does not accept a secret. |
| [ERR_NGROK_1627](/error_details/1627) | Webhook validation for `<T>` requires a secret. |
| [ERR_NGROK_1628](/error_details/1628) | There were validation errors while saving the endpoint configuration:`<ERRS>` |
| [ERR_NGROK_1629](/error_details/1629) | You must specify a supported provider name.  Supported providers: [`<T>`] |
| [ERR_NGROK_1630](/error_details/1630) | Webhook provider `<T>` is not supported.  Supported providers: [`<TYPE>`] |
| [ERR_NGROK_1631](/error_details/1631) | Only Pro or Enterprise accounts can use webhook validation.Your account is not authorized to use webhook validation.  Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_1632](/error_details/1632) | You may not configure the TLS termination parameter `<PARAMETER>` when the HTTPS module disables TLS termination. |
| [ERR_NGROK_1633](/error_details/1633) | Invalid endpoint configuration, unmanaged provider configurations must specify a client ID and a client secret. |
| [ERR_NGROK_1634](/error_details/1634) | Invalid endpoint configuration, custom OAuth scopes on a managed OAuth application are not allowed.  Define a custom OAuth application to use custom scopes. |
| [ERR_NGROK_1635](/error_details/1635) | Invalid endpoint configuration, OAuth auth check interval must be at least `<MIN>`, was `<ACTUAL>`. |
| [ERR_NGROK_1636](/error_details/1636) | Invalid endpoint configuration, OAuth may only have one provider configuration but multiple are defined: [`<PROVIDER_NAMES>`]. |
| [ERR_NGROK_1637](/error_details/1637) | Invalid endpoint configuration, OAuth does not define any provider configurations but one is required. |
| [ERR_NGROK_1638](/error_details/1638) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` requires at least the `<SCOPE>` scope to authenticate by `<AUTH_FEATURE>`.' |
| [ERR_NGROK_1639](/error_details/1639) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` contains an invalid email domain: `<NAME>`. |
| [ERR_NGROK_1640](/error_details/1640) | Invalid endpoint configuration, OAuth GitHub Teams must be listed as either numerical ids or in the format 'org_slug/team_slug', `<TEAM>` does not match either format. |
| [ERR_NGROK_1641](/error_details/1641) | Only Pro or Enterprise accounts can use OAuth.Your account is not authorized to use OAuth. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_1642](/error_details/1642) | Invalid endpoint configuration, OAuth cookie prefix `<PREFIX>` must consist of only alphanumeric characters with periods. |
| [ERR_NGROK_1643](/error_details/1643) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` contains an invalid email address, `<NAME>`. |
| [ERR_NGROK_1644](/error_details/1644) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` contains an email domain with invalid punycode: `<NAME>`. |
| [ERR_NGROK_1645](/error_details/1645) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` contains an email address with invalid punycode: `<NAME>`. |
| [ERR_NGROK_1646](/error_details/1646) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` email addresses must be unique, but a duplicate is present: `<DUPLICATE>`. |
| [ERR_NGROK_1647](/error_details/1647) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` email domains must be unique, but a duplicate is present: `<DUPLICATE>`. |
| [ERR_NGROK_1648](/error_details/1648) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` teams must be unique, but a duplicate is present: `<DUPLICATE>`. |
| [ERR_NGROK_1649](/error_details/1649) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` organizations must be unique, but a duplicate is present: `<DUPLICATE>`. |
| [ERR_NGROK_1650](/error_details/1650) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` groups must be unique, but a duplicate is present: `<DUPLICATE>`. |
| [ERR_NGROK_1651](/error_details/1651) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` email addresses must not contain empty values |
| [ERR_NGROK_1652](/error_details/1652) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` email domains must not contain empty values |
| [ERR_NGROK_1653](/error_details/1653) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` teams must not contain empty values |
| [ERR_NGROK_1654](/error_details/1654) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` organizations must not contain empty values |
| [ERR_NGROK_1655](/error_details/1655) | Invalid endpoint configuration, OAuth provider `<PROVIDER>` groups must not contain empty values |
| [ERR_NGROK_1656](/error_details/1656) | The endpoint configuration exceeds the maximum number of OAuth scopes. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_1657](/error_details/1657) | The endpoint configuration exceeds the maximum number of OAuth Github teams. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_1658](/error_details/1658) | The endpoint configuration exceeds the maximum number of OAuth Github orgs. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_1659](/error_details/1659) | The endpoint configuration exceeds the maximum number of OAuth Google groups. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_1660](/error_details/1660) | The endpoint configuration exceeds the maximum number of OAuth emails. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_1661](/error_details/1661) | The endpoint configuration exceeds the maximum number of OAuth domains. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_1662](/error_details/1662) | The endpoint configuration specifies the following modules which may not be enabled when TLS is not terminated: `<MODULE_NAMES>`. |
| [ERR_NGROK_1667](/error_details/1667) | Invalid endpoint configuration, email addresses must be lowercase but `<EMAIL>` is not. |
| [ERR_NGROK_1668](/error_details/1668) | Invalid endpoint configuration, email domains must be lowercase but `<DOMAIN>` is not. |
| [ERR_NGROK_1669](/error_details/1669) | Duplicate 'add' header, `<HEADER>` was provided twice with different casings: `<CASE_ONE>` and `<CASE_TWO>`. |
| [ERR_NGROK_1670](/error_details/1670) | Your account is limited to `<MAX>` endpoint configurations. |
| [ERR_NGROK_1672](/error_details/1672) | The CA ID `<ID>` specified for the Mutual TLS module does not exist. |
| [ERR_NGROK_1673](/error_details/1673) | Description is limited to `<MAX>` characters; you have entered `<VAL>` characters. |
| [ERR_NGROK_1674](/error_details/1674) | Metadata is limited to `<MAX>` characters; you have entered `<VAL>` characters. |
| [ERR_NGROK_1675](/error_details/1675) | The Mutual TLS configurations exceeds the limit of `<LIMIT>` attached certificate authorities. |
| [ERR_NGROK_1679](/error_details/1679) | The endpoint configuration specifies conflicting authentication modules. Only one of SAML, OIDC, OAuth or Basic Auth may be enabled. |
| [ERR_NGROK_1680](/error_details/1680) | The SAML metadata exceeds the maximum length of 16834 bytes, got `<NBYTES>`. |
| [ERR_NGROK_1681](/error_details/1681) | You must specify only the SAML IdP metadata or the SAML IdP metadata URL, but not both. |
| [ERR_NGROK_1682](/error_details/1682) | Failed to connect to IdP metadata URL `<MDURL>`: `<ERR>`. |
| [ERR_NGROK_1683](/error_details/1683) | Failed to parse the SAML IdP metadata: `<ERR>`. |
| [ERR_NGROK_1684](/error_details/1684) | Received unexpected status code `<STATUSCODE>` while fetching metadata URL `<MDURL>` |
| [ERR_NGROK_1685](/error_details/1685) | Failed to parse the SAML IdP metadata fetched from URL `<MDURL>`: `<ERR>`. |
| [ERR_NGROK_1686](/error_details/1686) | Encountered an error while reading the response body from the IdP metadata URL `<MDURL>`: `<ERR>`. |
| [ERR_NGROK_1687](/error_details/1687) | The specified OIDC issuer has a maximum length of 255 bytes. The specified value is `<N>` bytes. |
| [ERR_NGROK_1688](/error_details/1688) | The OIDC issuer property is required. |
| [ERR_NGROK_1689](/error_details/1689) | The OIDC Client ID property is required. |
| [ERR_NGROK_1690](/error_details/1690) | The OIDC Client Secret property is required. |
| [ERR_NGROK_1691](/error_details/1691) | One of the SAML IdP Metadata or IdP Metadata URL properties must be specified. |
| [ERR_NGROK_1692](/error_details/1692) | Invalid endpoint configuration, session inactivity timeout cannot be more than one year, was `<ACTUAL>`. |
| [ERR_NGROK_1693](/error_details/1693) | "`<FORMAT>`" is not a supported SAML nameid format. |
| [ERR_NGROK_1694](/error_details/1694) | Mutual TLS at edge requires TLS termination at edge. |
| [ERR_NGROK_1695](/error_details/1695) | No PEM data found in provided mutual TLS CA. |
| [ERR_NGROK_1696](/error_details/1696) | Certificate provided for mutual TLS is not a valid CA. |
| [ERR_NGROK_1697](/error_details/1697) | The header beginning with `<PREFIX>`...' exceeds the maximum header name length of 128 bytes. |
| [ERR_NGROK_1698](/error_details/1698) | The header value for `<HEADERKEY>` beginning with `<PREFIX>`...' exceeds the maximum header value length of 1024 bytes. |
| [ERR_NGROK_1699](/error_details/1699) | The sendgrid verification key is not a base64 encoded ecdsa public key. The following error was encountered while trying to parse it: "`<ERROR>`" |
| [ERR_NGROK_1700](/error_details/1700) | Only Enterprise accounts can use session operations.Your account is not authorized to use session operations. Upgrade to an Enterprise plan at https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_1701](/error_details/1701) | Only Enterprise accounts can stop or restart the agent.Your account is not authorized to stop or restart the agent. Upgrade to an Enterprise plan at https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_1702](/error_details/1702) | Only Enterprise accounts can update the agent.Your account is not authorized to update the agent. Upgrade to an Enterprise plan at https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_1800](/error_details/1800) | You have reached the maximum of `<MAX>` IP Policies on a restriction. |
| [ERR_NGROK_1801](/error_details/1801) | Invalid IP Restriction. The policy `<POLICY_ID>` does not exist on your account. |
| [ERR_NGROK_1802](/error_details/1802) | Only one IP Restriction is allowed per type. Consider either deleting the existing `<TYPE>` restriction first, or updating it instead. |
| [ERR_NGROK_1803](/error_details/1803) | The provided IP Restriction type "`<TYPE>`" is invalid. Valid types: `<SUPPORTED>`. |
| [ERR_NGROK_1804](/error_details/1804) | An IP Restriction must specify at least one IP Policy. |
| [ERR_NGROK_1805](/error_details/1805) | Only Pro or Enterprise accounts can use dashboard IP restrictions.Your account is not authorized to use dashboard IP restrictions.  Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_1806](/error_details/1806) | Only Pro or Enterprise accounts can use API IP restrictions.Your account is not authorized to use API IP restrictions.  Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_1807](/error_details/1807) | Only Pro or Enterprise accounts can use agent IP restrictions.Your account is not authorized to use agent IP restrictions.  Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_1808](/error_details/1808) | Only Pro or Enterprise accounts can use endpoints IP restrictions.Your account is not authorized to use endpoints IP restrictions.  Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_1900](/error_details/1900) | The provided certificate is in an unknown or unsupported format. The error encountered while parsing was: "`<ERROR>`" |
| [ERR_NGROK_1901](/error_details/1901) | No PEM-encoded private key was found in the creation request. |
| [ERR_NGROK_1902](/error_details/1902) | The provided private key is encrypted. |
| [ERR_NGROK_1903](/error_details/1903) | The provided private key is in an unknown or unsupported format. |
| [ERR_NGROK_1904](/error_details/1904) | Your account can't upload custom TLS certificates. |
| [ERR_NGROK_1905](/error_details/1905) | Your account can't use managed TLS certificates. |
| [ERR_NGROK_1906](/error_details/1906) | The domain `<DOMAIN>` is not a valid domain name. |
| [ERR_NGROK_1907](/error_details/1907) | The ip `<IP>` is not a valid IP address. |
| [ERR_NGROK_1908](/error_details/1908) | Invalid authority `<AUTHORITY>`. Valid authorities: `<SUPPORTED>`. |
| [ERR_NGROK_1909](/error_details/1909) | Invalid private key type `<TYPE>`. Valid types: `<SUPPORTED>`. |
| [ERR_NGROK_1910](/error_details/1910) | The provided PEM data contains a non-zero number of headers, which are not allowed. |
| [ERR_NGROK_1911](/error_details/1911) | The provided data is a valid PEM, but it has an unexpected type: `<TYPE>`. It must be "CERTIFICATE". |
| [ERR_NGROK_1912](/error_details/1912) | The upload contained `<COUNT>` certificates: `<CNS>`. Only a single certificate may be uploaded at a time. |
| [ERR_NGROK_1913](/error_details/1913) | The uploaded certificate's x509 Basic Constraints did not mark it as a certificate authority (see RFC 5280, 4.2.1.9). |
| [ERR_NGROK_1914](/error_details/1914) | The description is limited to `<MAX>` characters, but the provided value had `<VAL>` characters. |
| [ERR_NGROK_1915](/error_details/1915) | Metadata is limited to `<MAX>` characters, but the provided value had `<VAL>` characters. |
| [ERR_NGROK_1916](/error_details/1916) | The description is limited to `<MAX>` characters, but the provided value had `<VAL>` characters. |
| [ERR_NGROK_1917](/error_details/1917) | Metadata is limited to `<MAX>` characters, but the provided value had `<VAL>` characters. |
| [ERR_NGROK_1918](/error_details/1918) | Your account is not allowed to upload certificate authorities. |
| [ERR_NGROK_1919](/error_details/1919) | No certificate PEM data was sent. |
| [ERR_NGROK_1920](/error_details/1920) | The certificate data could not be parsed as PEM. Certificate data: "`<PREFIX>`". |
| [ERR_NGROK_1921](/error_details/1921) | The uploaded certificate PEM data exceeds the maximum length limit of `<MAX_SIZE>` bytes. |
| [ERR_NGROK_1922](/error_details/1922) | No PEM-encoded certificate was found in the creation request. |
| [ERR_NGROK_1923](/error_details/1923) | The provided certificate and private key do not match each other. |
| [ERR_NGROK_1924](/error_details/1924) | The provided private key is actually a certificate. |
| [ERR_NGROK_1925](/error_details/1925) | The provided certificate is actually a private key. |
| [ERR_NGROK_1926](/error_details/1926) | The uploaded certificate bundle contained the following certificates in this order: [`<ORDER>`], however `<INVALID>` has not been signed by `<INTERMEDIATE>`. |
| [ERR_NGROK_1927](/error_details/1927) | The domain `<DOMAIN>` is not available for certificate management. |
| [ERR_NGROK_1929](/error_details/1929) | Invalid nameserver count. There should be `<WANT>` but only found `<GOT>` for `<ZONE>` |
| [ERR_NGROK_1930](/error_details/1930) | Nameservers are not set up correctly for `<DOMAIN>`, expected `<WANT>` but got `<GOT>` |
| [ERR_NGROK_1934](/error_details/1934) | Got error `<ERROR>` where parsing public key `<PUBLICKEY>` |
| [ERR_NGROK_1935](/error_details/1935) | `<CERTTYPE>` is not a valid SSH certificate type. Valid certificate types: `<SUPPORTED>`. |
| [ERR_NGROK_1936](/error_details/1936) | "`<KEYTYPE>`" is not a valid SSH key type. Valid key types: `<SUPPORTED>`. |
| [ERR_NGROK_1937](/error_details/1937) | The description is limited to `<MAX>` characters, but the provided value had `<VAL>` characters. |
| [ERR_NGROK_1938](/error_details/1938) | Metadata is limited to `<MAX>` characters, but the provided value had `<VAL>` characters. |
| [ERR_NGROK_1939](/error_details/1939) | Invalid key size `<KEYSIZE>`. Valid key sizes: `<SUPPORTED>`. |
| [ERR_NGROK_1940](/error_details/1940) | Key size is supported only with a key type of "rsa", but the specified key type was "`<KEYTYPE>`". |
| [ERR_NGROK_1941](/error_details/1941) | Invalid elliptic curve "`<CURVE>`". Valid elliptic curves: `<SUPPORTED>`. |
| [ERR_NGROK_1942](/error_details/1942) | Elliptic curve is supported only with a key type of "ecdsa", but the specified key type was "`<KEYTYPE>`". |
| [ERR_NGROK_1943](/error_details/1943) | The SSH CA Certificate duration must be greater than zero; got duration of `<DURATION>`. |
| [ERR_NGROK_1945](/error_details/1945) | The description is limited to `<MAX>` characters, but the provided value had `<VAL>` characters. |
| [ERR_NGROK_1946](/error_details/1946) | Metadata is limited to `<MAX>` characters, but the provided value had `<VAL>` characters. |
| [ERR_NGROK_1947](/error_details/1947) | The description is limited to `<MAX>` characters, but the provided value had `<VAL>` characters. |
| [ERR_NGROK_1948](/error_details/1948) | Metadata is limited to `<MAX>` characters, but the provided value had `<VAL>` characters. |
| [ERR_NGROK_1949](/error_details/1949) | The SSH CA `<CA>` does not exist. |
| [ERR_NGROK_1950](/error_details/1950) | Certificates are not supported for public keys of type `<KEYTYPE>`. |
| [ERR_NGROK_1951](/error_details/1951) | The SSH CA `<CA>` does not exist. |
| [ERR_NGROK_1952](/error_details/1952) | The public key to sign in the certificate is required, but no public key was specified. |
| [ERR_NGROK_1953](/error_details/1953) | Your account is not allowed to use SSH certificates. |
| [ERR_NGROK_1954](/error_details/1954) | Your account is limited to `<MAX>` Certificate Authorities. |
| [ERR_NGROK_1956](/error_details/1956) | Your account is limited to `<MAX>` SSH Certificate Authorities. |
| [ERR_NGROK_1958](/error_details/1958) | Your account is limited to `<MAX>` SSH Host Certificates. |
| [ERR_NGROK_1960](/error_details/1960) | Your account is limited to `<MAX>` SSH User Certificates. |
| [ERR_NGROK_1962](/error_details/1962) | SSH User Certificate duration must be greater than zero; got duration of `<DURATION>`. |
| [ERR_NGROK_1963](/error_details/1963) | SSH Host Certificate duration must be greater than zero; got duration of `<DURATION>`. |
| [ERR_NGROK_1964](/error_details/1964) | Can't delete SSH CA `<ID>` because an SSH certificate signed by it exists. Delete all host and user SSH certificates signed by this CA before deleting it. |
| [ERR_NGROK_1965](/error_details/1965) | The certificate `<ID>` does not exist. |
| [ERR_NGROK_1966](/error_details/1966) | The certificate `<ID>` could not be deleted because it has an attached Managed Certificate Policy. If this certificate is automatically generated, delete the domain reservation or use a different certificate type. |
| [ERR_NGROK_2062](/error_details/2062) | Paths given in HTTPMux rules must be either empty or absolute. Perhaps you meant to specify '/`<PATH>`? |
| [ERR_NGROK_2063](/error_details/2063) | The method `<METHOD>` was specified multiple times for the path `<PATH>`. Each method must be unique among all rules with the same path. |
| [ERR_NGROK_2065](/error_details/2065) | HTTPMux must have at least one rule. |
| [ERR_NGROK_2067](/error_details/2067) | Too many rules given to HTTPMux. You provided `<VAL>` rules, but the limit is `<MAX>`. |
| [ERR_NGROK_2069](/error_details/2069) | The method (`<METHOD>`) specified in an HTTPMux rule is invalid or otherwise not currently supported. |
| [ERR_NGROK_2070](/error_details/2070) | The path specified in an HTTPMux rule is too long. The path provided has `<VAL>` bytes, but the limit is `<MAX>`. |
| [ERR_NGROK_2071](/error_details/2071) | The path specified in an HTTPMux rule is unsupported or otherwise invalid. |
| [ERR_NGROK_2089](/error_details/2089) | Found duplicate routing rule. Each rule must be unique. |
| [ERR_NGROK_3002](/error_details/3002) | Error performing TLS handshake: `<ERR>` |
| [ERR_NGROK_3003](/error_details/3003) | This client does not support TLS SNI, but the endpoint's TLS configuration requires SNI. See https://ngrok.com/docs/cloud-edge#compatible-clients |
| [ERR_NGROK_3004](/error_details/3004) | ngrok gateway errorThe server returned an invalid or incomplete HTTP response. |
| [ERR_NGROK_3005](/error_details/3005) | ngrok gateway timeoutA connection to the server not be established. |
| [ERR_NGROK_3006](/error_details/3006) | ngrok gateway errorThe server refused our connection |
| [ERR_NGROK_3007](/error_details/3007) | ngrok gateway error |
| [ERR_NGROK_3008](/error_details/3008) | ngrok gateway errorNone of the configured backends responded in time |
| [ERR_NGROK_3009](/error_details/3009) | ngrok gateway errorReceived an HTTP network error (status code 0) from a backend |
| [ERR_NGROK_3010](/error_details/3010) | ngrok gateway errorReceived an HTTP response with unknown status code `<CODE>` from a backend |
| [ERR_NGROK_3100](/error_details/3100) | Your session has expired due to age.Refresh this page or use the link below to log back in with `<PROVIDER>`. |
| [ERR_NGROK_3101](/error_details/3101) | We lack permission to retrieve your data from `<PROVIDER>` and cannot continue.Make sure to allow all requested permissions for this application. |
| [ERR_NGROK_3102](/error_details/3102) | `<PROVIDER>` requires that you correct an issue with your account prior to using this website.Please log in to `<PROVIDER>`, correct the issue, and then refresh this page. |
| [ERR_NGROK_3103](/error_details/3103) | `<PROVIDER>` requires that you correct an issue with your account prior to using this website:`<ERROR_TITLE>`: `<ERROR_MESSAGE>`After correcting the issue with `<PROVIDER>`, refresh this page. |
| [ERR_NGROK_3104](/error_details/3104) | The email "`<EMAIL>`" associated with your `<PROVIDER>` account is not valid.Please correct your email with `<PROVIDER>` and then refresh this page. |
| [ERR_NGROK_3105](/error_details/3105) | You lack the required permission to use this site.Contact the owner to obtain permission and then refresh this page. |
| [ERR_NGROK_3106](/error_details/3106) | The initial information required to authenticate with `<PROVIDER>` is invalid. |
| [ERR_NGROK_3107](/error_details/3107) | The state parameter used to validate your request is missing.Please close this page and try again. |
| [ERR_NGROK_3108](/error_details/3108) | The state parameter used to validate your request cannot be read.Please close this page and try again. |
| [ERR_NGROK_3109](/error_details/3109) | `<PROVIDER>` did not provide an email for your account.Check that you have a primary email and that it's confirmed before trying again. |
| [ERR_NGROK_3110](/error_details/3110) | The email permission from `<PROVIDER>` was not granted but is required. Please ensure that the email permission is granted. |
| [ERR_NGROK_3111](/error_details/3111) | All requested permissions with `<PROVIDER>` must be granted in order to use this site, but the following were not: `<PERMISSIONS>`. |
| [ERR_NGROK_3112](/error_details/3112) | `<PROVIDER>` has returned an error when attempting to authorize you to use this site:`<ERROR>` |
| [ERR_NGROK_3113](/error_details/3113) | `<PROVIDER>` denied access to this application when retrieving your information. This is likely caused by expiration or revocation of your authorization. |
| [ERR_NGROK_3114](/error_details/3114) | In order to continue, you must authorize this application's access to `<PROVIDER>`. |
| [ERR_NGROK_3115](/error_details/3115) | The redirect_uri configured for this application is not properly configured or whitelisted with `<PROVIDER>`.Please contact the owner of this application in order to fix this error. |
| [ERR_NGROK_3116](/error_details/3116) | `<PROVIDER>` denied access to your data when attempting to authorize you.Please contact the owner of this application to ensure it is properly installed for your organization. |
| [ERR_NGROK_3117](/error_details/3117) | The initial link used to authorize with `<PROVIDER>` had unsupported parameters. |
| [ERR_NGROK_3118](/error_details/3118) | `<PROVIDER>` denied access to your data.Please contact the owner of this application to ensure it is properly installed for your organization. |
| [ERR_NGROK_3119](/error_details/3119) | Logging in with `<PROVIDER>` took more than 15 minutes and was rejected for security.Please try again. |
| [ERR_NGROK_3120](/error_details/3120) | The state parameter required to finish authorization with `<PROVIDER>` is missing.Please start over to try again. |
| [ERR_NGROK_3121](/error_details/3121) | The nonce cookie required to finish authorization with `<PROVIDER>` is missing.Please start over to try again. |
| [ERR_NGROK_3122](/error_details/3122) | The access code from `<PROVIDER>` has expired and cannot be used.Please try again and finish authorization more quickly. |
| [ERR_NGROK_3123](/error_details/3123) | The access code from `<PROVIDER>` has already been used.Please remove any bookmarks to this page and start reauthorization again. |
| [ERR_NGROK_3124](/error_details/3124) | The state parameter required to finish authorization with `<PROVIDER>` does not match this host.Please try again. |
| [ERR_NGROK_3125](/error_details/3125) | `<PROVIDER>` denied access to your data.The owner of this application should verify the OAuth application client ID and secret are valid. |
| [ERR_NGROK_3126](/error_details/3126) | `<PROVIDER>` rejected authorization due to a invalid or unknown scope requested by this application.The owner of this application must correct the application configuration before you can continue. |
| [ERR_NGROK_3127](/error_details/3127) | `<PROVIDER>` rejected authorization due to invalid or expired credentials.If this error persists after reauthorizing, contact the owner of the application to ensure you have permission. |
| [ERR_NGROK_3150](/error_details/3150) | An error occurred when retrieving your session.Please refresh the page to log in and try again. |
| [ERR_NGROK_3151](/error_details/3151) | `<PROVIDER>` rejected use of your session's OAuth token: "`<ERROR>`". Your session is invalid and cannot continue. |
| [ERR_NGROK_3152](/error_details/3152) | An invalid request was sent to `<PROVIDER>` but its response is required in order to continue. This is a bug and it has been reported; please try again in a couple of hours to see if it has been resolved. |
| [ERR_NGROK_3160](/error_details/3160) | An unexpected error occurred when communicating with `<PROVIDER>`. |
| [ERR_NGROK_3161](/error_details/3161) | `<PROVIDER>` has throttled this application and cannot be reached right now.Please try again in a few minutes. |
| [ERR_NGROK_3162](/error_details/3162) | `<PROVIDER>` has throttled this application and cannot be reached right now.Please try again in about an hour. |
| [ERR_NGROK_3163](/error_details/3163) | An error occurred when finishing authorization with `<PROVIDER>`. This is likely caused by authorization taking too long.Please try again. |
| [ERR_NGROK_3164](/error_details/3164) | An error occurred when authorizing with `<PROVIDER>`:`<ERROR>` |
| [ERR_NGROK_3165](/error_details/3165) | `<PROVIDER>` is too busy to handle requests and authorization cannot be completed at this time. |
| [ERR_NGROK_3166](/error_details/3166) | `<PROVIDER>` enountered an error and authorization cannot be completed at this time. |
| [ERR_NGROK_3167](/error_details/3167) | `<PROVIDER>` is too busy to handle requests and required data cannot be retrieved right now. Wait a few minutes before trying again. |
| [ERR_NGROK_3200](/error_details/3200) | Tunnel `<HOSTNAME>` not found |
| [ERR_NGROK_3202](/error_details/3202) | Circuit breaker tripped |
| [ERR_NGROK_3203](/error_details/3203) | Request blocked by IP Policy |
| [ERR_NGROK_3204](/error_details/3204) | Request failed webhook verification |
| [ERR_NGROK_3205](/error_details/3205) | Request blocked by Endpoints IP Restriction |
| [ERR_NGROK_3206](/error_details/3206) | Expected a websocket request with a "Connection: upgrade" header but did not receive one. |
| [ERR_NGROK_3208](/error_details/3208) | The account associated with this hostname has been banned.We've determined this account to be in violation of ngrok's terms of service.If you are the account owner and believe this is a mistake, please contact support@ngrok.com. |
| [ERR_NGROK_3209](/error_details/3209) | Tunnel not found |
| [ERR_NGROK_3210](/error_details/3210) | Error forwarding the connection to the ngrok agent |
| [ERR_NGROK_3300](/error_details/3300) | URL "state" parameter is invalid |
| [ERR_NGROK_3301](/error_details/3301) | URL "state" parameter is expired. |
| [ERR_NGROK_3302](/error_details/3302) | URL "state" parameter is invalid. |
| [ERR_NGROK_3303](/error_details/3303) | URL "state" parameter is invalid. |
| [ERR_NGROK_3304](/error_details/3304) | URL "state" parameter is invalid. |
| [ERR_NGROK_3305](/error_details/3305) | This request has expired. Please try again. |
| [ERR_NGROK_3306](/error_details/3306) | URL "state" parameter is invalid. |
| [ERR_NGROK_3307](/error_details/3307) | URL "state" parameter is invalid. |
| [ERR_NGROK_3308](/error_details/3308) | URL "state" parameter is invalid. |
| [ERR_NGROK_3309](/error_details/3309) | The route match type ``<TYP>`` is incompatible with OAuth, OIDC, or SAML. Compatible selector match types are "EXACT_PATH" or "PATH_PREFIX". |
| [ERR_NGROK_3310](/error_details/3310) | URL "state" parameter is invalid. |
| [ERR_NGROK_3311](/error_details/3311) | URL "state" parameter is invalid. |
| [ERR_NGROK_3312](/error_details/3312) | URL "state" parameter is invalid. |
| [ERR_NGROK_4001](/error_details/4001) | Plan `<PLAN_ID>` does not exist. |
| [ERR_NGROK_4003](/error_details/4003) | Account name must not be empty. |
| [ERR_NGROK_4004](/error_details/4004) | Account name exceeds max length, `<LENGTH>` bytes, max: `<MAX>`. |
| [ERR_NGROK_4005](/error_details/4005) | Another account is already configured with the GSuite domain `<DOMAIN>`. |
| [ERR_NGROK_4011](/error_details/4011) | Your password must be at least `<LENGTH>` characters. |
| [ERR_NGROK_4012](/error_details/4012) | Your account does not have access to `<FEATURE>`.Upgrade to get access: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_4013](/error_details/4013) | You may not create a new account because you are already a member of the free account "`<ACCOUNT_NAME>`". Upgrade or delete that account first before creating a new account. |
| [ERR_NGROK_4014](/error_details/4014) | The account `<NAME>` was suspended. It may not be deleted. Contact support@ngrok.com if you believe this is an error. |
| [ERR_NGROK_4015](/error_details/4015) | The account `<NAME>` was banned for violation of the terms of service. It may not be deleted. Contact support@ngrok.com if you believe this is an error. |
| [ERR_NGROK_4016](/error_details/4016) | You may not create a new account because another account you were the administator of was suspended. Contact support@ngrok.com if you believe this is an error. |
| [ERR_NGROK_4017](/error_details/4017) | You may not create a new account because another account you were the administrator of was banned for violation of the terms of service. Contact support@ngrok.com if you believe this is an error. |
| [ERR_NGROK_4018](/error_details/4018) | You must signup for ngrok and add your authtoken to perform this operation.Sign up for an account: https://dashboard.ngrok.com/signupInstall your authoken: https://dashboard.ngrok.com/get-started/your-authtoken |
| [ERR_NGROK_4019](/error_details/4019) | This account cannot be deleted because it has an active billing subscription. Please contact support@ngrok.com for help deleting this account. |
| [ERR_NGROK_4020](/error_details/4020) | Your password must be less then `<LENGTH>` characters. |
| [ERR_NGROK_4100](/error_details/4100) | The email or password you entered is not valid. |
| [ERR_NGROK_4101](/error_details/4101) | A user with the email address `<EMAIL>` already exists. |
| [ERR_NGROK_4103](/error_details/4103) | `<EMAIL>` is not a valid email address. |
| [ERR_NGROK_4104](/error_details/4104) | User name must not be empty. |
| [ERR_NGROK_4105](/error_details/4105) | User name exceeds max length, `<LENGTH>` bytes, max: `<MAX>`. |
| [ERR_NGROK_4106](/error_details/4106) | Your user `<EMAIL>` was suspended for violation of the terms of service. It may not be deleted. Contact support@ngrok.com if you believe this is an error. |
| [ERR_NGROK_4107](/error_details/4107) | Your user `<EMAIL>` was banned for violation of the terms of service. It may not be deleted. Contact support@ngrok.com if you believe this is an error. |
| [ERR_NGROK_4108](/error_details/4108) | Sign ups are disallowed for the email provider "`<DOMAIN>`". Please sign up with a different email provider. |
| [ERR_NGROK_4200](/error_details/4200) | You may not delete all or your logins, you must have at least one. |
| [ERR_NGROK_4201](/error_details/4201) | This `<LOGIN>` login is already connected to another ngrok user. |
| [ERR_NGROK_4300](/error_details/4300) | No user with the email address `<EMAIL>` exists. |
| [ERR_NGROK_4301](/error_details/4301) | This account does not support a password reset. |
| [ERR_NGROK_4302](/error_details/4302) | Unable to redeem password: `<REASON>` |
| [ERR_NGROK_4400](/error_details/4400) | An email address is required to invite a new user |
| [ERR_NGROK_4401](/error_details/4401) | The invited email address is too long: `<LENGTH>` bytes. Max `<MAX>` bytes. |
| [ERR_NGROK_4402](/error_details/4402) | The invited user would exceed your team size limit of `<TEAM_SIZE>`. Delete unused invitations or users to make room, or upgrade to a Pro or Enterprise plan: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_4403](/error_details/4403) | You cannot invite any more users. Please email contact@ngrok.com if you believe this is an error. |
| [ERR_NGROK_4404](/error_details/4404) | Unabled to redeem invitation: `<REASON>` |
| [ERR_NGROK_4405](/error_details/4405) | `<EMAIL>` is not a valid email address. |
| [ERR_NGROK_4407](/error_details/4407) | You are not currently permitted to enroll in the beta. |
| [ERR_NGROK_4408](/error_details/4408) | Feature request suggestions must be between 1 and `<MAXLEN>` characters, got `<LENGTH>`. |
| [ERR_NGROK_4409](/error_details/4409) | Your account is not allowed to set invitation permissions. |
| [ERR_NGROK_4410](/error_details/4410) | You do not have permissions to invite an administrator to the account. Only administrators may invite other administrators. |
| [ERR_NGROK_4411](/error_details/4411) | You do not have permissions to invite users to the account. |
| [ERR_NGROK_4412](/error_details/4412) | You may not invite users to the account with higher permissions than your own. |
| [ERR_NGROK_4413](/error_details/4413) | Developer Read Write must set on a user if thier permissions include Invite. |
| [ERR_NGROK_4451](/error_details/4451) | A user with the email address `<EMAIL>` already exists. |
| [ERR_NGROK_4452](/error_details/4452) | The email address being verified, `<EMAIL>`, belongs to another user. |
| [ERR_NGROK_4500](/error_details/4500) | The URL `<URL>` is not a valid tcp address or URL.  Please use either hostname:port or a full URL including protocol for HTTP or TLS endpoints. |
| [ERR_NGROK_4501](/error_details/4501) | The TCP port `<PORT>` in `<HOST>` is not a valid numerical TCP port. |
| [ERR_NGROK_4502](/error_details/4502) | The TCP port `<PORT>` for `<HOST>` is not within the range of possible ngrok ports. |
| [ERR_NGROK_4503](/error_details/4503) | The IP `<IP>` is not a known ngrok TCP IP. |
| [ERR_NGROK_4504](/error_details/4504) | The host `<HOST>` is not a known ngrok TCP hostname. |
| [ERR_NGROK_5000](/error_details/5000) | Your account is limited to `<MAX>` `<RESOURCE>`. |
| [ERR_NGROK_5001](/error_details/5001) | Your account is rate limited to `<MAX>` `<RESOURCE>` per `<INTERVAL>`. |
| [ERR_NGROK_5100](/error_details/5100) | An event destination must specify a destination target. Valid targets include: `<TYPE>`. |
| [ERR_NGROK_5102](/error_details/5102) | You have reached the maximum of `<MAX>` destinations for your account. |
| [ERR_NGROK_5103](/error_details/5103) | No event destinations with ID: `<ID>` associated with this account. |
| [ERR_NGROK_5104](/error_details/5104) | Event Destination role ARN "`<ARN>`" is not a valid ARN for an aws IAM role. Error: `<MSG>`. |
| [ERR_NGROK_5105](/error_details/5105) | Event Destination role is missing an external ID. |
| [ERR_NGROK_5106](/error_details/5106) | Event Destination target is missing the auth field. |
| [ERR_NGROK_5107](/error_details/5107) | Event Destination auth is missing a role or credentials to send events to the destination target. |
| [ERR_NGROK_5108](/error_details/5108) | Update to target type not allowed. Create a new destination if you would like to send to a new target. |
| [ERR_NGROK_5112](/error_details/5112) | Event Destination "`<ID>`" cannot be deleted because it is still in use by at least one Event Stream |
| [ERR_NGROK_5115](/error_details/5115) | An event destination may not specify more than one destination target. |
| [ERR_NGROK_5116](/error_details/5116) | An event destination may not specify more than one type of authentication. |
| [ERR_NGROK_5117](/error_details/5117) | The property `<NAME>` is an immutable property and may not be updated. Create a new destination instead. |
| [ERR_NGROK_5118](/error_details/5118) | The partition (`<VALUE>`) of the provided `<FIELD>` (`<ARN>`) is invalid. |
| [ERR_NGROK_5119](/error_details/5119) | The service (`<VALUE>`) of the provided `<FIELD>` (`<ARN>`) is invalid. |
| [ERR_NGROK_5120](/error_details/5120) | The provided `<FIELD>` (`<ARN>`) is invalid. Please make sure it matches the ARN you obtained from Amazon exactly. |
| [ERR_NGROK_5122](/error_details/5122) | `<ERR>` |
| [ERR_NGROK_5123](/error_details/5123) | Event Subscription `<ID>` not found. |
| [ERR_NGROK_5124](/error_details/5124) | Your account can't use the event subscriptions feature. |
| [ERR_NGROK_5125](/error_details/5125) | Source `<TYP>` not found on Event Subscription `<ID>`. |
| [ERR_NGROK_5126](/error_details/5126) | You have reached the maximum of `<MAX>` destinations on a subscription. |
| [ERR_NGROK_5127](/error_details/5127) | The event type for each source must be unique within a subscription. |
| [ERR_NGROK_5128](/error_details/5128) | Your account can't create event destinations. |
| [ERR_NGROK_5129](/error_details/5129) | The ARN (`<ARN>`) is not valid for the `<SERVICE>` service. |
| [ERR_NGROK_5130](/error_details/5130) | The ARN (`<ARN>`) is not valid for the `<RESOURCE>` resource type. |
| [ERR_NGROK_5131](/error_details/5131) | You have reached the maximum of `<MAX>` event subscriptions for your account. |
| [ERR_NGROK_5200](/error_details/5200) | URL "state" parameter is invalid. |
| [ERR_NGROK_5201](/error_details/5201) | URL "state" parameter is invalid. |
| [ERR_NGROK_5202](/error_details/5202) | Encountered an error while communicating with the OIDC provider:"`<ERROR>`". |
| [ERR_NGROK_5203](/error_details/5203) | The OIDC provider failed to return a OIDC ID Token. |
| [ERR_NGROK_5204](/error_details/5204) | Failed to verify the OIDC ID Token:"`<ERROR>`". |
| [ERR_NGROK_5205](/error_details/5205) | Failed to extract claims from the OIDC ID Token:"`<ERROR>`". |
| [ERR_NGROK_5206](/error_details/5206) | The endpoint configuration "`<ECID>`" does not exist. |
| [ERR_NGROK_5207](/error_details/5207) | OIDC is not enabled on the endpoint configuration "`<ECID>`". |
| [ERR_NGROK_5208](/error_details/5208) | Encountered an error while attempting to fetch OIDC provider metadata:"`<ERROR>`". |
| [ERR_NGROK_5209](/error_details/5209) | The authentication flow was not completed in time. Please try authenticating again. |
| [ERR_NGROK_5210](/error_details/5210) | The authentication flow was not completed in time. Please try authenticating again. |
| [ERR_NGROK_5211](/error_details/5211) | The OIDC provider returned the error code "`<ERROR>`" with the additional details: "`<DETAILS>`". Please try authenticating again. |
| [ERR_NGROK_5212](/error_details/5212) | OIDC is not enabled on the domain "`<HOSTNAME>`". |
| [ERR_NGROK_5300](/error_details/5300) | SAML RelayState parameter is invalid. |
| [ERR_NGROK_5301](/error_details/5301) | The SAML IdP sent an invalid SAML assertion:"`<ERROR>`" |
| [ERR_NGROK_5302](/error_details/5302) | The SAML module for the endpoint configuration "`<ECID>`" disallows IdP-initiated logins. |
| [ERR_NGROK_5303](/error_details/5303) | The endpoint configuration "`<ECID>`" is not attached to any domains. |
| [ERR_NGROK_5304](/error_details/5304) | Could not find the domain "`<DOMAIN>`" specified in the IdP-initiated RelayState. |
| [ERR_NGROK_5305](/error_details/5305) | The SAML IdP sent an invalid SAML assertion:"`<ERROR>`" |
| [ERR_NGROK_5306](/error_details/5306) | SAML RelayState parameter is invalid. |
| [ERR_NGROK_5307](/error_details/5307) | The domain "`<DOMAIN>`" specified in the IdP-initiated RelayState is not attached to the endpoint configuration "`<ECID>`". |
| [ERR_NGROK_5308](/error_details/5308) | The SAML IdP sent an invalid SAML logout response:"`<ERROR>`" |
| [ERR_NGROK_5309](/error_details/5309) | URL "state" parameter is invalid. |
| [ERR_NGROK_5310](/error_details/5310) | URL "state" parameter is invalid. |
| [ERR_NGROK_5311](/error_details/5311) | The SAML IdP sent an invalid SAML assertion with `<N>` Authn statements. |
| [ERR_NGROK_5312](/error_details/5312) | Your are not a member of the configured authorized groups on the ngrok endpoint configuration. |
| [ERR_NGROK_5313](/error_details/5313) | The authentication flow was not completed in time. Please try authenticating again. |
| [ERR_NGROK_5314](/error_details/5314) | The logout flow was not completed in time. Please try authenticating again. |
| [ERR_NGROK_5315](/error_details/5315) | The authentication flow was not completed in time. Please try authenticating again. |
| [ERR_NGROK_5316](/error_details/5316) | The logout flow was not completed in time. Please try authenticating again. |
| [ERR_NGROK_5317](/error_details/5317) | The SAML module for the edge route "`<RTEID>`" disallows IdP-initiated logins. |
| [ERR_NGROK_5318](/error_details/5318) | The edge "`<EDGID>`" is not attached to any domains. |
| [ERR_NGROK_5319](/error_details/5319) | Failed to complete IdP-initiated SAML login. The RelayState specified an invalid domain "`<DOMAIN>`" to redirect to. Ensure that the domain "`<DOMAIN>`" is configured as a hostport for "`<EDGID>`". |
| [ERR_NGROK_5320](/error_details/5320) | The edge route "`<RTEID>`" does not exist. |
| [ERR_NGROK_5321](/error_details/5321) | The RelayState must be configured with the redirect URL for IdP-initiated logins. |
| [ERR_NGROK_5322](/error_details/5322) | The domain "`<DOMAIN>`" specified in the IdP-initiated RelayState is not attached to the edge "`<EDGID>`". |
| [ERR_NGROK_5323](/error_details/5323) | The SAML module is not enabled for the configuration "`<ID>`". |
| [ERR_NGROK_5324](/error_details/5324) | The ID "`<ID>`" that was specified is invalid. This usually indicates a malformed URL. |
| [ERR_NGROK_5325](/error_details/5325) | Failed to complete IdP-initiated SAML login. Edge does not have any attached domains. Please ensure that at least one domain is configured as a hostport for "`<EDGID>`". |
| [ERR_NGROK_5326](/error_details/5326) | Failed to complete IdP-initiated SAML login. The RelayState must be configured with the redirect URL for IdP-initiated logins when using a route selector match type of "`<MATCHTYP>`". |
| [ERR_NGROK_5400](/error_details/5400) | Event Sources for the "`<TYP>`" event type must specify fields to capture. |
| [ERR_NGROK_5401](/error_details/5401) | Event Sources for the "`<TYP>`" event may not specify fields. |
| [ERR_NGROK_5402](/error_details/5402) | Event Sources for the "`<TYP>`" event may not specify a filter. |
| [ERR_NGROK_5403](/error_details/5403) | Event Sources must be configured with fields that match its event type. "`<FIELD>`" is not a "`<TYP>`" field |
| [ERR_NGROK_5404](/error_details/5404) | Event Source filter is invalid: "`<ERR>`" |
| [ERR_NGROK_5405](/error_details/5405) | Invalid Event Field: "`<FIELD>`" |
| [ERR_NGROK_5406](/error_details/5406) | Field is not yet supported in event filters: "`<FIELD>`" |
| [ERR_NGROK_5500](/error_details/5500) | URL "state" parameter is invalid. |
| [ERR_NGROK_5501](/error_details/5501) | The authentication flow was not completed in time. Please try authenticating again. |
| [ERR_NGROK_5502](/error_details/5502) | Authorization with `<PROVIDER>` succeeded, but these required scopes not were granted: `<SCOPES>`.Please reauthorize and grant all requested scopes to the application. |
| [ERR_NGROK_5503](/error_details/5503) | URL "state" parameter is invalid. |
| [ERR_NGROK_5504](/error_details/5504) | The authentication flow was not completed in time. Please try authenticating again. |
| [ERR_NGROK_5507](/error_details/5507) | `<ERROR_NAME>` `<DETAILS>` |
| [ERR_NGROK_5508](/error_details/5508) | Authorization with `<PROVIDER>` succeeded, but these required scopes not were granted: `<SCOPES>`.Please reauthorize and grant all requested scopes to the application. |
| [ERR_NGROK_5510](/error_details/5510) | `<PROVIDER>` did not provide an email for your account.Check that you have a primary email and that it's confirmed before trying again. |
| [ERR_NGROK_5511](/error_details/5511) | Email "`<EMAIL>`" is not authorized for use by this account. |
| [ERR_NGROK_5512](/error_details/5512) | Email is malformed. Email "`<EMAIL>`" is missing an @ sign. |
| [ERR_NGROK_5513](/error_details/5513) | Email domain failed to normalize to a FQDN "`<DOMAIN>`":"`<ERROR>`" |
| [ERR_NGROK_5517](/error_details/5517) | `<PROVIDER>` denied access to your data during the final step of authorization: `<DESCRIPTION>`.Please contact the owner of this application to ensure it is properly installed for your organization. |
| [ERR_NGROK_5518](/error_details/5518) | `<PROVIDER>` rejected authorization with access denied: `<DESCRIPTION>`.You must authorize this application before continuing. |
| [ERR_NGROK_5520](/error_details/5520) | `<PROVIDER>` rejected authorization due to a invalid or unknown scope requested by this application: `<DESCRIPTION>`.The owner of this application must correct the application configuration before you can continue. |
| [ERR_NGROK_5521](/error_details/5521) | `<PROVIDER>` rejected authorization due to an internal server error: `<DESCRIPTION>`. |
| [ERR_NGROK_5522](/error_details/5522) | `<PROVIDER>` is too busy to handle requests and authorization cannot be completed at this time: `<DESCRIPTION>`. |
| [ERR_NGROK_5523](/error_details/5523) | `<PROVIDER>` rejected authorization as the redirect URL for this application is improperly configured: `<DESCRIPTION>`.Please contact the owner of this application in order to fix this error. |
| [ERR_NGROK_5524](/error_details/5524) | `<PROVIDER>` rejected authorization: `<DESCRIPTION>`.The owner of this application should verify the OAuth application client ID and secret are valid before you can continue. |
| [ERR_NGROK_5525](/error_details/5525) | `<PROVIDER>` has throttled this application and cannot be reached right now.Please try again in a few minutes. |
| [ERR_NGROK_5526](/error_details/5526) | `<PROVIDER>` rejected access to your information. This is likely caused by expiration or revocation of your authorization. |
| [ERR_NGROK_5527](/error_details/5527) | `<PROVIDER>` rejected the final step of authorization due to invalid credentials.The owner of this application should verify the OAuth application client ID and secret are valid before you can continue. |
| [ERR_NGROK_5528](/error_details/5528) | The access code from `<PROVIDER>` has expired and cannot be used.Please authorize again more quickly. |
| [ERR_NGROK_5529](/error_details/5529) | `<PROVIDER>` denied access to your data during the final step of authorization.Please contact the owner of this application to ensure it is properly installed for your organization. |
| [ERR_NGROK_5530](/error_details/5530) | OAuth is not enabled on the domain "`<HOSTNAME>`". |
| [ERR_NGROK_5531](/error_details/5531) | `<PROVIDER>` denied access to your account as the correct account could not be chosen automatically.Please try authorizing again or contacting the owner of this application if the issue persists. |
| [ERR_NGROK_5532](/error_details/5532) | `<PROVIDER>` denied access to your account as reauthentication is required.Please try logging in again or contact the owner of this application if the issue persists. |
| [ERR_NGROK_5533](/error_details/5533) | `<PROVIDER>` had an internal server error when refreshing your information.Please try again or contact the owner of this application if the issue persists. |
| [ERR_NGROK_5534](/error_details/5534) | Encountered an error while attempting to fetch OIDC provider metadata:"`<ERROR>`". |
| [ERR_NGROK_5535](/error_details/5535) | The OAuth provider "`<PROVIDER>`" cannot be used without a user-defined client ID and client secret. |
| [ERR_NGROK_6000](/error_details/6000) | This tunnel was unable to update; this may be temporary, please try again shortly. |
| [ERR_NGROK_6001](/error_details/6001) | This tunnel is no longer available as its account was not found. |
| [ERR_NGROK_6002](/error_details/6002) | This tunnel is no longer available as its account does not own resources required to run. |
| [ERR_NGROK_6003](/error_details/6003) | Endpoint configurations cannot be used with agent-specified basic auth. Either remove the endpoint configuration from this endpoint or restart the agent without basic auth. |
| [ERR_NGROK_6006](/error_details/6006) | The Event Destination `<EDID>` required by `<ECID>` was not found. If these were recently created or removed, this should be temporary and resolve itself. |
| [ERR_NGROK_6008](/error_details/6008) | This endpoint is unavailable as its account is suspended due to lack of payment. |
| [ERR_NGROK_6009](/error_details/6009) | This endpoint is unavailable as its account is suspended. |
| [ERR_NGROK_6010](/error_details/6010) | Endpoint configuration is incompatible with tunnel; module `<MODULE>` required by Endpoint Configuration `<ECID>` is incompatible with `<PROTO>` tunnels. |
| [ERR_NGROK_6011](/error_details/6011) | You may not specify `<MIDDLEWARE>` options from the ngrok agent because this domain has a configured endpoint configuration: `<ECID>`. Remove the endpoint configuration from this domain or remove the conflicting options when starting the ngrok agent. |
| [ERR_NGROK_6013](/error_details/6013) | Failed to compile filter for Event Subscription `<ESID>`. |
| [ERR_NGROK_6014](/error_details/6014) | Failed to run filter for Event Subscription `<ESID>`. |
| [ERR_NGROK_6018](/error_details/6018) | The Endpoint `<HOSTPORT>` has both an Endpoint Configuration (`<EPCID>`) and a Tunnel with incompatible configuration (`<TUNNELID>`) online. |
| [ERR_NGROK_6019](/error_details/6019) | The Endpoint `<HOSTPORT>` has both an Edge (`<EDGID>`) and Endpoint Configuration (`<EPCID>`) configured. |
| [ERR_NGROK_6020](/error_details/6020) | The Endpoint `<HOSTPORT>` has both an Edge (`<EDGID>`) and Tunnel (`<TUNID>`) online. |
| [ERR_NGROK_6021](/error_details/6021) | HTML content may only be served after you upgrade to a paid account. |
| [ERR_NGROK_6022](/error_details/6022) | Before you can serve HTML content, you must sign up for an ngrok account and install your authtoken. |
| [ERR_NGROK_6023](/error_details/6023) | HTML content may only be served in this region after you upgrade to a paid account. |
| [ERR_NGROK_6024](/error_details/6024) | You are about to visit `<HOSTPORT>`, served by `<SERVINGIP>`. This website is served for free through ngrok.com. You should only visit this website if you trust whoever sent the link to you. |
| [ERR_NGROK_6500](/error_details/6500) | Your account is not authorized to use the backends feature. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_6501](/error_details/6501) | Cannot save backend reference `<ID>` because it does not exists. |
| [ERR_NGROK_6502](/error_details/6502) | The backend could not be deleted because it is still referenced by at least one backend. |
| [ERR_NGROK_6503](/error_details/6503) | Description is limited to `<MAX>` characters; you have entered `<VAL>` characters. |
| [ERR_NGROK_6504](/error_details/6504) | Metadata is limited to `<MAX>` characters; you have entered `<VAL>` characters. |
| [ERR_NGROK_6505](/error_details/6505) | Static backend requires address in the host:port form. |
| [ERR_NGROK_6506](/error_details/6506) | Static backend address `<ADDR>` is invalid (`<REASON>`). Use host:port as address. |
| [ERR_NGROK_6507](/error_details/6507) | Static backend address `<ADDR>` is missing host. Use host:port as address. |
| [ERR_NGROK_6508](/error_details/6508) | Tunnel group labels count is limited to `<MAX>`; you have `<VAL>` labels. |
| [ERR_NGROK_6509](/error_details/6509) | Tunnel group label key length is limited to `<MAX>`; key `<NAME>` has `<VAL>` characters. |
| [ERR_NGROK_6510](/error_details/6510) | Tunnel group label value length is limited to `<MAX>`; value `<NAME>` has `<VAL>` characters. |
| [ERR_NGROK_6511](/error_details/6511) | Weighted backends count is limited to `<MAX>`; you have `<VAL>` backends. |
| [ERR_NGROK_6512](/error_details/6512) | Weighted backend `<ID>` weight `<VAL>` is out of range; it must be between `<MIN>` and `<MAX>`. |
| [ERR_NGROK_6513](/error_details/6513) | Failover backends may only contain up to `<MAX>` failover backends; you have `<VAL>` failover backends. |
| [ERR_NGROK_6514](/error_details/6514) | Backend not found. |
| [ERR_NGROK_6515](/error_details/6515) | Tunnel Group Backend `<ID>` did not match any tunnels.Please start tunnels matching its labels in order to serve traffic. |
| [ERR_NGROK_6516](/error_details/6516) | HTTP Reseponse Backend `<ID>` had too large of a body.The maximum is length `<MAX>` bytes, but the supplied body was `<VAL>` bytes long. |
| [ERR_NGROK_6517](/error_details/6517) | HTTP Response Backend `<ID>` had an invalid status code.The status code `<STATUS>` is an invalid HTTP Status Code. |
| [ERR_NGROK_6522](/error_details/6522) | The header beginning with `<PREFIX>`...' exceeds the maximum header name length of 128 bytes. |
| [ERR_NGROK_6523](/error_details/6523) | The header value for `<HEADERKEY>` beginning with `<PREFIX>`...' exceeds the maximum header value length of 1024 bytes. |
| [ERR_NGROK_6524](/error_details/6524) | A Weighted Backend may not reference the backend `<ID>` because it is a `<BACKENDTYPE>` backend. |
| [ERR_NGROK_6525](/error_details/6525) | A Failover Backend may not reference the backend `<ID>` because it is a `<BACKENDTYPE>` backend. |
| [ERR_NGROK_6526](/error_details/6526) | The id `<ID>` is not a valid backend ID. |
| [ERR_NGROK_6527](/error_details/6527) | The id `<ID>` is invalid; expected an id of type `<BACKENDTYPE>` backend. |
| [ERR_NGROK_6528](/error_details/6528) | Traffic made it to the ngrok edge, but there are no tunnels online serving an app. |
| [ERR_NGROK_6529](/error_details/6529) | Your account is not authorized to use the weighted backends feature. Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_6530](/error_details/6530) | The `<ID>` header cannot be removed without specifying a replacement. |
| [ERR_NGROK_6600](/error_details/6600) | The account `<NAME>` has reached its team size limit and may not add additional users.Please ask the account owner to upgrade your plan: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_6601](/error_details/6601) | Failed to add `<USER_NAME>` as a member of account `<ACCOUNT_NAME>` because they are already a member. |
| [ERR_NGROK_6602](/error_details/6602) | You may not remove the last administrator of the account. Grant administrator privileges to another member first. |
| [ERR_NGROK_6603](/error_details/6603) | Your account is not allowed to set membership permissions. |
| [ERR_NGROK_6604](/error_details/6604) | You may not remove an administrator from the account. Only administrators may remove other administrators. |
| [ERR_NGROK_6605](/error_details/6605) | You may not grant administrator privileges to an account member. Only administrators may grant administrative privileges. |
| [ERR_NGROK_6606](/error_details/6606) | You may not change an administrator's permissions. Only other administrators may make that change. |
| [ERR_NGROK_6607](/error_details/6607) | You may not change the account administrator. Only the current accont administrator may make this change. |
| [ERR_NGROK_6608](/error_details/6608) | Could not transfer administrative control to membership `<ID>` because it could not be found on this account. |
| [ERR_NGROK_6609](/error_details/6609) | Swapping administrators is not supported on accounts with RBAC enabled. |
| [ERR_NGROK_6612](/error_details/6612) | You are not allowed to remove members. |
| [ERR_NGROK_6613](/error_details/6613) | You are not allowed to create members. |
| [ERR_NGROK_6614](/error_details/6614) | You are not allowed to set the permissions of members. |
| [ERR_NGROK_6615](/error_details/6615) | You may not create users with higher permissions than your own. |
| [ERR_NGROK_6616](/error_details/6616) | You may not set user permissions higher than your own. |
| [ERR_NGROK_6700](/error_details/6700) | The description is limited to `<MAX>` characters, but the provided value had `<VAL>` characters. |
| [ERR_NGROK_6701](/error_details/6701) | Metadata is limited to `<MAX>` characters, but the provided value had `<VAL>` characters. |
| [ERR_NGROK_6702](/error_details/6702) | No DNS records were returned when querying for an NS record for the domain `<DOMAIN>`. |
| [ERR_NGROK_6703](/error_details/6703) | The NS records for the domain `<DOMAIN>` "`<GOT>`" do not match the expected targets "`<EXPECTED>`". |
| [ERR_NGROK_6704](/error_details/6704) | The specified domain "`<DOMAIN>`" is not a valid domain name. Enter a valid DNS name. |
| [ERR_NGROK_6705](/error_details/6705) | The agent ingress domain "`<DOMAIN>`" must be a third party domain, you may not enter a domain controlled by ngrok. |
| [ERR_NGROK_6706](/error_details/6706) | The agent ingress domain "`<DOMAIN>`" already exists, choose another domain. |
| [ERR_NGROK_7000](/error_details/7000) | Edge not found |
| [ERR_NGROK_7001](/error_details/7001) | Invalid edge ID |
| [ERR_NGROK_7002](/error_details/7002) | Invalid edge request |
| [ERR_NGROK_7007](/error_details/7007) | The IP Policy ID `<ID>` specified for the IP Restriction module does not exist. |
| [ERR_NGROK_7008](/error_details/7008) | Only Pro and Enterprise plans are allowed to use edges.Your account is not authorized to use edges.Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7009](/error_details/7009) | Your account is limited to a maximum of `<MAX>` edges. |
| [ERR_NGROK_7011](/error_details/7011) | Invalid edge, circuit breaker error threshold percentage must be between 0.0 and 1.0 inclusive, was `<VAL>`. |
| [ERR_NGROK_7012](/error_details/7012) | The auth provider `<VAL>` does not exist. Specify an auth provider ID or the special value 'agent'. |
| [ERR_NGROK_7013](/error_details/7013) | The edge module exceeds the max number of IP Policies. You specified `<VAL>`, the maximum is `<MAX>`. |
| [ERR_NGROK_7014](/error_details/7014) | The edge module TLS CA certificate size exceeds the max. You specified `<VAL>`, the maximum is `<MAX>`. |
| [ERR_NGROK_7015](/error_details/7015) | The edge module exceeds the max number of headers. You specified `<VAL>`, the maximum is `<MAX>`. |
| [ERR_NGROK_7016](/error_details/7016) | Invalid edge module, circuit breaker tripped duration must be greater than 0, was `<VAL>`. |
| [ERR_NGROK_7017](/error_details/7017) | Invalid edge module, circuit breaker rolling window must be greater than 0, was `<VAL>`. |
| [ERR_NGROK_7018](/error_details/7018) | Invalid edge module, circuit breaker num buckets must be greater than 0 and less than `<MAX>`, was `<VAL>`. |
| [ERR_NGROK_7019](/error_details/7019) | The edge could not be deleted because it is still referenced by at least one reserved domain or reserved address. |
| [ERR_NGROK_7020](/error_details/7020) | The edge must specify a type. |
| [ERR_NGROK_7021](/error_details/7021) | The module `<NAME>` is not supported on an edge of type `<TYPE>`. |
| [ERR_NGROK_7022](/error_details/7022) | `<NAME>` is not a valid edge type. Must be one of 'http', 'https', 'tcp'. |
| [ERR_NGROK_7023](/error_details/7023) | `<KEY>` is not a valid HTTP header name because it contains at least one invalid character. |
| [ERR_NGROK_7024](/error_details/7024) | `<VAL>` is not a valid HTTP header value: `<REASON>`. |
| [ERR_NGROK_7025](/error_details/7025) | You must specify at least one IP Policy in the IP Restriction module. |
| [ERR_NGROK_7026](/error_details/7026) | SNS webhook verification does not accept a secret. |
| [ERR_NGROK_7027](/error_details/7027) | Webhook verification for `<T>` requires a secret. |
| [ERR_NGROK_7028](/error_details/7028) | There were validation errors while saving the edge:`<ERRS>` |
| [ERR_NGROK_7029](/error_details/7029) | You must specify a supported provider name.  Supported providers: [`<T>`] |
| [ERR_NGROK_7030](/error_details/7030) | Webhook provider `<T>` is not supported.  Supported providers: [`<TYPE>`] |
| [ERR_NGROK_7031](/error_details/7031) | Only Pro and Enterprise accounts can use edges webhook verification.Your account is not authorized to use webhook verification.  Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7032](/error_details/7032) | You may not configure the TLS termination parameter `<PARAMETER>` when the HTTPS module disables TLS termination. |
| [ERR_NGROK_7033](/error_details/7033) | Invalid edge module, unmanaged provider configurations must specify a client ID and a client secret. |
| [ERR_NGROK_7034](/error_details/7034) | Invalid edge module, custom OAuth scopes on a managed OAuth application are not allowed.  Define a custom OAuth application to use custom scopes. |
| [ERR_NGROK_7035](/error_details/7035) | Invalid edge module, OAuth auth check interval must be at least `<MIN>`, was `<ACTUAL>`. |
| [ERR_NGROK_7036](/error_details/7036) | Invalid edge module, OAuth may only have one provider configuration but multiple are defined: [`<PROVIDER_NAMES>`]. |
| [ERR_NGROK_7037](/error_details/7037) | Invalid edge module, OAuth does not define any provider configurations but one is required. |
| [ERR_NGROK_7038](/error_details/7038) | Invalid edge module, OAuth provider `<PROVIDER>` requires at least the `<SCOPE>` scope to authenticate by `<AUTH_FEATURE>`.' |
| [ERR_NGROK_7039](/error_details/7039) | Invalid edge module, OAuth provider `<PROVIDER>` contains an invalid email domain: `<NAME>`. |
| [ERR_NGROK_7040](/error_details/7040) | Invalid edge module, OAuth GitHub Teams must be listed as either numerical ids or in the format 'org_slug/team_slug', `<TEAM>` does not match either format. |
| [ERR_NGROK_7041](/error_details/7041) | Only Pro and Enterprise accounts can use edges OAuth.Your account is not authorized to use OAuth.  Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7042](/error_details/7042) | Invalid edge module, OAuth cookie prefix `<PREFIX>` must consist of only alphanumeric characters with periods. |
| [ERR_NGROK_7043](/error_details/7043) | Invalid edge module, OAuth provider `<PROVIDER>` contains an invalid email address, `<NAME>`. |
| [ERR_NGROK_7044](/error_details/7044) | Invalid edge module, OAuth provider `<PROVIDER>` contains an email domain with invalid punycode: `<NAME>`. |
| [ERR_NGROK_7045](/error_details/7045) | Invalid edge module, OAuth provider `<PROVIDER>` contains an email address with invalid punycode: `<NAME>`. |
| [ERR_NGROK_7046](/error_details/7046) | Invalid edge module, OAuth provider `<PROVIDER>` email addresses must be unique, but a duplicate is present: `<DUPLICATE>`. |
| [ERR_NGROK_7047](/error_details/7047) | Invalid edge module, OAuth provider `<PROVIDER>` email domains must be unique, but a duplicate is present: `<DUPLICATE>`. |
| [ERR_NGROK_7048](/error_details/7048) | Invalid edge module, OAuth provider `<PROVIDER>` teams must be unique, but a duplicate is present: `<DUPLICATE>`. |
| [ERR_NGROK_7049](/error_details/7049) | Invalid edge module, OAuth provider `<PROVIDER>` organizations must be unique, but a duplicate is present: `<DUPLICATE>`. |
| [ERR_NGROK_7050](/error_details/7050) | Invalid edge module, OAuth provider `<PROVIDER>` groups must be unique, but a duplicate is present: `<DUPLICATE>`. |
| [ERR_NGROK_7051](/error_details/7051) | Invalid edge module, OAuth provider `<PROVIDER>` email addresses must not contain empty values |
| [ERR_NGROK_7052](/error_details/7052) | Invalid edge module, OAuth provider `<PROVIDER>` email domains must not contain empty values |
| [ERR_NGROK_7053](/error_details/7053) | Invalid edge module, OAuth provider `<PROVIDER>` teams must not contain empty values |
| [ERR_NGROK_7054](/error_details/7054) | Invalid edge module, OAuth provider `<PROVIDER>` organizations must not contain empty values |
| [ERR_NGROK_7055](/error_details/7055) | Invalid edge module, OAuth provider `<PROVIDER>` groups must not contain empty values |
| [ERR_NGROK_7056](/error_details/7056) | The edge module exceeds the maximum number of OAuth scopes. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_7057](/error_details/7057) | The edge module exceeds the maximum number of OAuth GitHub teams. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_7058](/error_details/7058) | The edge module exceeds the maximum number of OAuth GitHub orgs. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_7059](/error_details/7059) | The edge module exceeds the maximum number of OAuth Google groups. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_7060](/error_details/7060) | The edge module exceeds the maximum number of OAuth emails. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_7061](/error_details/7061) | The edge module exceeds the maximum number of OAuth domains. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_7062](/error_details/7062) | The edge specifies the following modules which may not be enabled when TLS is not terminated: `<MODULE_NAMES>`. |
| [ERR_NGROK_7067](/error_details/7067) | Invalid edge module, email addresses must be lowercase but `<EMAIL>` is not. |
| [ERR_NGROK_7068](/error_details/7068) | Invalid edge module, email domains must be lowercase but `<DOMAIN>` is not. |
| [ERR_NGROK_7069](/error_details/7069) | Duplicate 'add' header, `<HEADER>` was provided twice with different casings: `<CASE_ONE>` and `<CASE_TWO>`. |
| [ERR_NGROK_7070](/error_details/7070) | Your account is limited to `<MAX>` edges. |
| [ERR_NGROK_7071](/error_details/7071) | Your account is rate limited for adding `<MAX>` edges per `<INTERVAL>`. |
| [ERR_NGROK_7072](/error_details/7072) | The CA ID `<ID>` specified for the Mutual TLS module does not exist. |
| [ERR_NGROK_7073](/error_details/7073) | Description is limited to `<MAX>` characters; you have entered `<VAL>` characters. |
| [ERR_NGROK_7074](/error_details/7074) | Metadata is limited to `<MAX>` characters; you have entered `<VAL>` characters. |
| [ERR_NGROK_7075](/error_details/7075) | The Mutual TLS configurations exceeds the limit of `<LIMIT>` attached certificate authorities. |
| [ERR_NGROK_7079](/error_details/7079) | The edge specifies conflicting authentication modules. Only one of SAML, OIDC, or OAuth may be enabled. |
| [ERR_NGROK_7080](/error_details/7080) | The SAML metadata exceeds the maximum length of `<MAX>` bytes, got `<NBYTES>`. |
| [ERR_NGROK_7081](/error_details/7081) | You must specify only the SAML IdP metadata or the SAML IdP metadata URL, but not both. |
| [ERR_NGROK_7082](/error_details/7082) | Failed to connect to IdP metadata URL `<MDURL>`: `<ERR>`. |
| [ERR_NGROK_7083](/error_details/7083) | Failed to parse the SAML IdP metadata: `<ERR>`. |
| [ERR_NGROK_7084](/error_details/7084) | Received unexpected status code `<STATUSCODE>` while fetching metadata URL `<MDURL>` |
| [ERR_NGROK_7085](/error_details/7085) | Failed to parse the SAML IdP metadata fetched from URL `<MDURL>`: `<ERR>`. |
| [ERR_NGROK_7086](/error_details/7086) | Encountered an error while reading the response body from the IdP metadata URL `<MDURL>`: `<ERR>`. |
| [ERR_NGROK_7087](/error_details/7087) | The specified OIDC issuer has a maximum length of `<MAX>` bytes. The specified value is `<N>` bytes. |
| [ERR_NGROK_7088](/error_details/7088) | The OIDC issuer property is required. |
| [ERR_NGROK_7089](/error_details/7089) | The OIDC Client ID property is required. |
| [ERR_NGROK_7090](/error_details/7090) | The OIDC Client Secret property is required. |
| [ERR_NGROK_7091](/error_details/7091) | One of the SAML IdP Metadata or IdP Metadata URL properties must be specified. |
| [ERR_NGROK_7092](/error_details/7092) | Invalid edge module, session inactivity timeout cannot be more than one year, was `<ACTUAL>`. |
| [ERR_NGROK_7093](/error_details/7093) | Your account is not authorized to use basic auth. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7094](/error_details/7094) | Your account is not authorized to use compression. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7095](/error_details/7095) | Your account is not authorized to use circuit breaker. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7096](/error_details/7096) | Your account is not authorized to use request headers. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7097](/error_details/7097) | Your account is not authorized to use response headers. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7098](/error_details/7098) | Your account is not authorized to use OIDC. Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7099](/error_details/7099) | Your account is not authorized to use SAML. Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7100](/error_details/7100) | Your account is not authorized to use TLS termination. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7101](/error_details/7101) | Your account is not authorized to use IP Restrictions. Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7102](/error_details/7102) | Your account is not authorized to use TCP address backends. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7103](/error_details/7103) | Your account is not authorized to use mutual TLS. Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7104](/error_details/7104) | Edge has invalid hostports, must be specified in the format 'hostname:portnumber': `<INVALID>` |
| [ERR_NGROK_7105](/error_details/7105) | The header beginning with `<PREFIX>`...' exceeds the maximum header name length of 128 bytes. |
| [ERR_NGROK_7106](/error_details/7106) | The header value for `<HEADERKEY>` beginning with `<PREFIX>`...' exceeds the maximum header value length of 1024 bytes. |
| [ERR_NGROK_7107](/error_details/7107) | The sendgrid verification key is not a base64 encoded ecdsa public key. The following error was encountered while trying to parse it: "`<ERROR>`" |
| [ERR_NGROK_7108](/error_details/7108) | Your account is not authorized to use the websocket to TCP converter. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7109](/error_details/7109) | You may not configure the TLS termination parameter 'terminate_at' for an HTTPS edge. |
| [ERR_NGROK_7110](/error_details/7110) | The request edge ID `<EID>` does not match the route edge ID `<REID>`. |
| [ERR_NGROK_7111](/error_details/7111) | The edge hostport `<HOST>`:`<PORT>` does not exist. |
| [ERR_NGROK_7112](/error_details/7112) | The hostport `<HOSTPORT>` has port out of range: `<PORT>` is not in range 1-65535. |
| [ERR_NGROK_7113](/error_details/7113) | The address `<HOSTPORT>` is not reserved. |
| [ERR_NGROK_7114](/error_details/7114) | The address `<HOSTPORT>` is not reserved by your account. |
| [ERR_NGROK_7115](/error_details/7115) | The address `<HOSTPORT>` has an endpoint configuration which must be removed before it can be used by an edge. |
| [ERR_NGROK_7116](/error_details/7116) | The domain `<HOSTPORT>` is unsupported because it does not use port 443. |
| [ERR_NGROK_7117](/error_details/7117) | The domain `<HOSTPORT>` is not reserved. |
| [ERR_NGROK_7118](/error_details/7118) | The domain `<HOSTPORT>` is not reserved by your account. |
| [ERR_NGROK_7119](/error_details/7119) | The domain `<HOSTPORT>` has an endpoint configuration which must be removed before it can be used by an edge. |
| [ERR_NGROK_7120](/error_details/7120) | TCP edges can only be associated with TCP addresses: `<HOSTPORT>` is a domain. |
| [ERR_NGROK_7121](/error_details/7121) | HTTPS edges can only be associated with reserved domains: `<HOSTPORT>` is a TCP address. |
| [ERR_NGROK_7122](/error_details/7122) | Hostport `<HOSTPORT>` already exists for another edge. |
| [ERR_NGROK_7123](/error_details/7123) | Edge routes require a match expression. |
| [ERR_NGROK_7124](/error_details/7124) | The edge route `<ID>` could not be found. |
| [ERR_NGROK_7125](/error_details/7125) | There is a duplicate route `<ID>` for HTTPS edge. |
| [ERR_NGROK_7126](/error_details/7126) | Route match expression `<MATCH>` must be unique across all routes for HTTPS edge. |
| [ERR_NGROK_7127](/error_details/7127) | OAuth may not currently be configured for any route except '/', could not configure for route `<MATCH>`. |
| [ERR_NGROK_7128](/error_details/7128) | Your account is limited to a maximum of `<MAX>` routes for a single edge. |
| [ERR_NGROK_7129](/error_details/7129) | Your account is limited to a maximum of `<MAX>` hostports for a single edge. |
| [ERR_NGROK_7130](/error_details/7130) | Invalid match type, valid values are "exact_path" and "path_prefix". |
| [ERR_NGROK_7131](/error_details/7131) | The route selector expression ``<MATCH>`` is invalid. Valid route selector match expressions are of the form /path (e.g. "/foo", or "/foo/bar"). |
| [ERR_NGROK_7132](/error_details/7132) | The hostport ``<HOSTPORT>`` is already in use by an agent directly. |
| [ERR_NGROK_7133](/error_details/7133) | TLS edges can only be associated with reserved domains: `<HOSTPORT>` is a TCP address. |
| [ERR_NGROK_7134](/error_details/7134) | OAuth, OIDC and SAML may only be configured for routes with path selectors (i.e. 'exact_path', 'path_prefix'). |
| [ERR_NGROK_7135](/error_details/7135) | The route selector expression exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7136](/error_details/7136) | The OAuth Cookie Prefix exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7137](/error_details/7137) | The OAuth Client ID exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7138](/error_details/7138) | The OAuth Client Secret exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7139](/error_details/7139) | The OAuth Email Address exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7140](/error_details/7140) | The OAuth Email Domain exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7141](/error_details/7141) | The OAuth Scope exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7142](/error_details/7142) | The edge module exceeds the maximum number of GitHub teams. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_7143](/error_details/7143) | The edge module exceeds the maximum number of GitHub orgs. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_7144](/error_details/7144) | The OAuth GitHub team exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7145](/error_details/7145) | The OAuth GitHub org exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7146](/error_details/7146) | The edge module exceeds the maximum number of Google groups. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_7147](/error_details/7147) | The OAuth Google group exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7148](/error_details/7148) | The OIDC Client ID exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7149](/error_details/7149) | The OIDC Client Secret exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7150](/error_details/7150) | The edge module exceeds the maximum number of OIDC scopes. You specified `<COUNT>`, the max is `<MAX>`. |
| [ERR_NGROK_7151](/error_details/7151) | The OIDC Scope exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7152](/error_details/7152) | The OIDC Authn URL exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7153](/error_details/7153) | The OIDC cookie prefix exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7154](/error_details/7154) | The Webhook Verification secret exceeds the maximum length of `<MAX>`, got `<SIZE>`. |
| [ERR_NGROK_7155](/error_details/7155) | Enabling OAuth, OIDC, or SAML on more than one route is not supported. |
| [ERR_NGROK_7156](/error_details/7156) | Failed to attach hostport. The domain `<HOSTPORT>` is allocated for region `<NEW_REGION>` but the previous hostport is allocated in `<OLD_REGION>`. |
| [ERR_NGROK_7157](/error_details/7157) | Failed to attach hostport. The address `<HOSTPORT>` is allocated for region `<NEW_REGION>` but the previous hostport is allocated in `<OLD_REGION>` |
| [ERR_NGROK_7158](/error_details/7158) | Invalid edge module, OAuth auth check interval must be no greater than `<MAX>`, was `<ACTUAL>`. |
| [ERR_NGROK_7159](/error_details/7159) | Invalid edge module, OIDC auth check interval must be at least `<MIN>`, was `<ACTUAL>`. |
| [ERR_NGROK_7160](/error_details/7160) | Invalid edge module, OIDC auth check interval must be no greater than `<MAX>`, was `<ACTUAL>`. |
| [ERR_NGROK_7161](/error_details/7161) | Invalid edge module, OAuth max session duration must be no greater than `<MAX>`, was `<ACTUAL>`. |
| [ERR_NGROK_7162](/error_details/7162) | Invalid edge module, OIDC max session duration must be no greater than `<MAX>`, was `<ACTUAL>`. |
| [ERR_NGROK_7163](/error_details/7163) | Your account is not authorized to use the TLS edges. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_7164](/error_details/7164) | The `<ID>` header cannot be removed without specifying a replacement. |
| [ERR_NGROK_8000](/error_details/8000) | Failed to resolve host `<HOST>`: `<ERR>` |
| [ERR_NGROK_8001](/error_details/8001) | Failed to establish internet connectivity: `<ERR>` |
| [ERR_NGROK_8002](/error_details/8002) | Failed to establish TCP connection to `<HOST>` with error: `<ERR>` |
| [ERR_NGROK_8003](/error_details/8003) | Failed to establish TLS connection to `<HOST>` with error: `<ERR>`. Possible Man-in-the Middle. |
| [ERR_NGROK_8004](/error_details/8004) | Failed to establish tunnel protocol connection to `<HOST>` with error: `<ERR>` |
| [ERR_NGROK_8005](/error_details/8005) | Failed to resolve proxy IP with error: `<ERR>` |
| [ERR_NGROK_8006](/error_details/8006) | Failed to connect to proxy `<URL>` with error: `<ERR>` |
| [ERR_NGROK_8007](/error_details/8007) | No tunnel servers were reachable via TCP. |
| [ERR_NGROK_8008](/error_details/8008) | No tunnel servers could establish a TLS connection. |
| [ERR_NGROK_8009](/error_details/8009) | No tunnel servers could establish a tunnel connection. |
| [ERR_NGROK_8010](/error_details/8010) | `<RESOLVER>` was the only resolver to return `<IP>` for the hostname `<HOSTNAME>`. This, or the other resolvers, may be returning incorrect results. |
| [ERR_NGROK_8011](/error_details/8011) | IPV6 errors encountered - it may be disabled. |
| [ERR_NGROK_8012](/error_details/8012) | Traffic was successfully tunneled to the ngrok agent, but the agent failed to establish a connection to the upstream web service at `<ADDR>`. |
| [ERR_NGROK_9000](/error_details/9000) | An account is required to use basic authentication.Please register for an ngrok account at: https://dashboard.ngrok.com/signup and install your authtoken. |
| [ERR_NGROK_9001](/error_details/9001) | Your account is not authorized to use compression.Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9002](/error_details/9002) | Your account is not authorized to use circuit breaker.Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9003](/error_details/9003) | Your account is not authorized to use request headers.Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9004](/error_details/9004) | Your account is not authorized to use response headers.Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9005](/error_details/9005) | Your account is not authorized to use OIDC.Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9006](/error_details/9006) | Your account is not authorized to use SAML. Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9007](/error_details/9007) | Your account is not authorized to use TLS Termination.Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9008](/error_details/9008) | Your account is not authorized to run the agent as a service.Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9009](/error_details/9009) | Your account is not authorized to run the agent with http/s proxy.Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9010](/error_details/9010) | Your account is not authorized to run the agent with socks5 proxy.Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9011](/error_details/9011) | Your account is not authorized to run the agent on a custom network interface.Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9012](/error_details/9012) | Your account is not authorized to run the agent with custom CAs.Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9013](/error_details/9013) | Your account is not authorized to run the agent with mutual TLS.Please contact us at: sales@ngrok.com |
| [ERR_NGROK_9014](/error_details/9014) | Your account is not authorized to run the agent with proxy proto.Upgrade to an Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9015](/error_details/9015) | Your account is not authorized to use OAuth.Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9016](/error_details/9016) | Your account is not authorized to use webhook verification.Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9017](/error_details/9017) | Your account is not authorized to use ip restrictions.Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_9018](/error_details/9018) | An account is required to use host header rewrite.Please register for an ngrok account at: https://dashboard.ngrok.com/signup and install your authtoken. |
| [ERR_NGROK_9019](/error_details/9019) | Your account is not authorized to use mutual TLS. Please contact us at: sales@ngrok.com |
| [ERR_NGROK_9020](/error_details/9020) | Your account is not authorized to use the websocket to TCP converter.Upgrade to a Pro or Enterprise plan at: https://dashboard.ngrok.com/billing/subscription |
| [ERR_NGROK_10000](/error_details/10000) | Internal Server Error. Please check our status page https://status.ngrok.com/ or contact support: support@ngrok.com |
| [ERR_NGROK_10001](/error_details/10001) | Something went wrong with our code. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_10002](/error_details/10002) | Could not read server rendered application data. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_10003](/error_details/10003) | Something went wrong when communicating with Stripe. Please try again later. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_10004](/error_details/10004) | Could not find the credit card form. Do you have a script blocker installed? |
| [ERR_NGROK_10005](/error_details/10005) | Could not find the Stripe token. Do you have a script blocker installed? |
| [ERR_NGROK_10006](/error_details/10006) | Failed to load the required reCAPTCHA script! Are you blocking it? It is required to continue. |
| [ERR_NGROK_10007](/error_details/10007) | All rules must be prefixed with "bind:" |
| [ERR_NGROK_10008](/error_details/10008) | If the "HTTPS" module is enabled and "Terminate TLS" is unchecked, then your configuration may not include any other modules except the IP Policy module. |
| [ERR_NGROK_10009](/error_details/10009) | The request header name must be at least one character. |
| [ERR_NGROK_10010](/error_details/10010) | The request header value must be at least one character. |
| [ERR_NGROK_10011](/error_details/10011) | You have already added the request header name "`<NAME>`". |
| [ERR_NGROK_10012](/error_details/10012) | The response header name must be at least one character. |
| [ERR_NGROK_10013](/error_details/10013) | The response header value must be at least one character. |
| [ERR_NGROK_10014](/error_details/10014) | You have already added the response header name "`<NAME>`". |
| [ERR_NGROK_10019](/error_details/10019) | You haven't added any Event Destinations |
| [ERR_NGROK_10020](/error_details/10020) | You haven't added any Event Sources |
| [ERR_NGROK_10021](/error_details/10021) | Received partition "`<PARTITION>`" that does not include the word "aws". |
| [ERR_NGROK_10022](/error_details/10022) | Received service "`<SERVICE>`" but expected "`<TARGETSERVICENAME>`". |
| [ERR_NGROK_10023](/error_details/10023) | There were no changes to submit. |
| [ERR_NGROK_10024](/error_details/10024) | Cannot update non-existent IP Policy. |
| [ERR_NGROK_10025](/error_details/10025) | A TLS Certificate must be selected. |
| [ERR_NGROK_10026](/error_details/10026) | Failed to upload Certificate Authority. Invalid file format "`<FORMAT>`" given. Upload a Certificate Authority in PEM format. |
| [ERR_NGROK_10027](/error_details/10027) | Failed to upload SAML IdP Metadata. Invalid file format "`<FORMAT>`" given. Upload SAML IdP Metadata in XML format. |
| [ERR_NGROK_10028](/error_details/10028) | Failed to upload TLS Certificate. Invalid file format "`<FORMAT>`" given. Upload a TLS Certificate in PEM format. |
| [ERR_NGROK_10029](/error_details/10029) | Failed to upload TLS Certificate Private Key. Invalid file format "`<FORMAT>`" given. Upload a TLS Certificate Private Key in PEM format. |
| [ERR_NGROK_10030](/error_details/10030) | Failed to upload Certificate Authority. Please limit your file uploads to less than 16 KB. |
| [ERR_NGROK_10031](/error_details/10031) | Failed to upload SAML IdP Metadata. Please limit your file uploads to less than 16 KB. |
| [ERR_NGROK_10032](/error_details/10032) | Failed to upload TLS Certificate. Please limit your file uploads to less than 16 KB. |
| [ERR_NGROK_10033](/error_details/10033) | Failed to upload TLS Certificate Private Key. Please limit your file uploads to less than 16 KB. |
| [ERR_NGROK_10034](/error_details/10034) | Could not copy the AuthToken to your clipboard. Please ensure that you have granted the browser permission "clipboard-write". |
| [ERR_NGROK_10062](/error_details/10062) | ARN must begin with "arn:" |
| [ERR_NGROK_10063](/error_details/10063) | ARN is invalid |
| [ERR_NGROK_10064](/error_details/10064) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_10065](/error_details/10065) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_10066](/error_details/10066) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_10067](/error_details/10067) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_10068](/error_details/10068) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_10069](/error_details/10069) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_10072](/error_details/10072) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_10073](/error_details/10073) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_10074](/error_details/10074) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_10075](/error_details/10075) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_10076](/error_details/10076) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_10077](/error_details/10077) | This account does not support JIT provisioning for SSO users. |
| [ERR_NGROK_11000](/error_details/11000) | Internal Server Error. Please refresh the page and try again. If the problem persists, please check our status page https://status.ngrok.com/ or contact the frontend team. |
| [ERR_NGROK_11001](/error_details/11001) | Something went wrong with our code. Please refresh the page and try again. If the problem persists, please contact the frontend team. |
| [ERR_NGROK_11002](/error_details/11002) | Could not read server rendered application data. Please refresh the page and try again. If the problem persists, please contact the frontend team. |
| [ERR_NGROK_11003](/error_details/11003) | Something went wrong with our code. Please refresh the page and try again. If the problem persists, please contact the frontend team. |
| [ERR_NGROK_11004](/error_details/11004) | ARN must begin with "arn:" |
| [ERR_NGROK_11005](/error_details/11005) | ARN is invalid |
| [ERR_NGROK_11006](/error_details/11006) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact the frontend team. |
| [ERR_NGROK_12000](/error_details/12000) | A new version of ngrok corp is required to continue. Please refresh the page to update. |
| [ERR_NGROK_13001](/error_details/13001) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_13002](/error_details/13002) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_13003](/error_details/13003) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_13004](/error_details/13004) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_13005](/error_details/13005) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_13006](/error_details/13006) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_13007](/error_details/13007) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_13008](/error_details/13008) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_13009](/error_details/13009) | Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com |
| [ERR_NGROK_14000](/error_details/14000) | The `<ID>` header cannot be removed without specifying a replacement. |
| [ERR_NGROK_14001](/error_details/14001) | Got an invalid TLS key/cert pair for TLS termination: `<ERR>` |
