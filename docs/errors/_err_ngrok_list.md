
<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Message</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a id="ERR_NGROK_100" href="/docs/errors/err_ngrok_100">ERR_NGROK_100</a>
      </td>
      <td class="pre-wrapped">
        Invalid metadata length: <code>&lt;VAL&gt;</code> bytes. Max: <code>&lt;MAX&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_102" href="/docs/errors/err_ngrok_102">ERR_NGROK_102</a>
      </td>
      <td class="pre-wrapped">
        The last payment for the <code>&lt;ACCOUNT&gt;</code> account failed.
        The account has been suspended. Update the payment information here:
        <a href="https://dashboard.ngrok.com/billing/payment-method">https://dashboard.ngrok.com/billing/payment-method</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_103" href="/docs/errors/err_ngrok_103">ERR_NGROK_103</a>
      </td>
      <td class="pre-wrapped">
        The account <code>&lt;ACCOUNT&gt;</code> has been suspended.
        This is usually the result of violating the ngrok Terms of Service.
        Email support@ngrok.com if you think your suspension is an error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_105" href="/docs/errors/err_ngrok_105">ERR_NGROK_105</a>
      </td>
      <td class="pre-wrapped">
        The authtoken you specified does not look like a proper ngrok tunnel authtoken.
        Your authtoken: <code>&lt;TOKEN&gt;</code>
        Instructions to install your authtoken are on your ngrok dashboard:
        <a href="https://dashboard.ngrok.com/get-started/your-authtoken">https://dashboard.ngrok.com/get-started/your-authtoken</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_106" href="/docs/errors/err_ngrok_106">ERR_NGROK_106</a>
      </td>
      <td class="pre-wrapped">
        The authtoken you specified is an ngrok v1 authtoken, but you're using ngrok v2.
        Your authtoken: <code>&lt;TOKEN&gt;</code>
        Instructions to install your authtoken are on your ngrok dashboard:
        <a href="https://dashboard.ngrok.com/get-started/your-authtoken">https://dashboard.ngrok.com/get-started/your-authtoken</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_107" href="/docs/errors/err_ngrok_107">ERR_NGROK_107</a>
      </td>
      <td class="pre-wrapped">
        The authtoken you specified is properly formed, but it is invalid.
        Your authtoken: <code>&lt;TOKEN&gt;</code>
        This usually happens when:
            - You reset your authtoken
            - Your authtoken was for a team account that you were removed from
            - You are using ngrok link and this credential was explicitly revoked
        Go to your ngrok dashboard and double check that your authtoken is correct:
        <a href="https://dashboard.ngrok.com/get-started/your-authtoken">https://dashboard.ngrok.com/get-started/your-authtoken</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_108" href="/docs/errors/err_ngrok_108">ERR_NGROK_108</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> simultaneous ngrok agent sessions.
        You can run multiple simultaneous tunnels from a single agent session by defining the tunnels in your agent configuration file and starting them with the command `ngrok start --all`.
        Read more about the agent configuration file: <a href="https://ngrok.com/docs/secure-tunnels/ngrok-agent/reference/config">https://ngrok.com/docs/secure-tunnels/ngrok-agent/reference/config</a>
        You can view your current agent sessions in the dashboard:
        <a href="https://dashboard.ngrok.com/agents">https://dashboard.ngrok.com/agents</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_109" href="/docs/errors/err_ngrok_109">ERR_NGROK_109</a>
      </td>
      <td class="pre-wrapped">
        The authentication payload you specified is not valid.
        This usually indiciates a bug in the client's protocol implementation.
        The parsing error encountered was:
        <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_110" href="/docs/errors/err_ngrok_110">ERR_NGROK_110</a>
      </td>
      <td class="pre-wrapped">
        The session cookie you specified is not valid.
        This usually indiciates a bug in the client's protocol implementation.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_111" href="/docs/errors/err_ngrok_111">ERR_NGROK_111</a>
      </td>
      <td class="pre-wrapped">
        The heartbeat interval you specified is not valid.
        It must be at least <code>&lt;MIN&gt;</code>, you specified <code>&lt;VAL&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_112" href="/docs/errors/err_ngrok_112">ERR_NGROK_112</a>
      </td>
      <td class="pre-wrapped">
        The heartbeat tolerance you specified is not valid.
        It must be at least <code>&lt;MIN&gt;</code>, you specified <code>&lt;VAL&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_115" href="/docs/errors/err_ngrok_115">ERR_NGROK_115</a>
      </td>
      <td class="pre-wrapped">
        Your IP <code>&lt;IP&gt;</code> does not match the IP Policies specified by the Agent IP Restriction for this account. Please authenticate from an IP in the correct range or update your Agent IP Restrictions from the ngrok dashboard. <a href="https://dashboard.ngrok.com/ip-restrictions">https://dashboard.ngrok.com/ip-restrictions</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_116" href="/docs/errors/err_ngrok_116">ERR_NGROK_116</a>
      </td>
      <td class="pre-wrapped">
        Your IP <code>&lt;IP&gt;</code> does not match the IP ACL policy specified for your credentials. Please authenticate from an IP in the correct range or make sure you are using the correct credentials
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_118" href="/docs/errors/err_ngrok_118">ERR_NGROK_118</a>
      </td>
      <td class="pre-wrapped">
        Only Enterprise accounts can use the enterprise tunnel ingress feature.
        Your account <code>&lt;ACCOUNTNAME&gt;</code> is not permitted to use the ngrok enterprise tunnel ingress. 
        Upgrade to an Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_119" href="/docs/errors/err_ngrok_119">ERR_NGROK_119</a>
      </td>
      <td class="pre-wrapped">
        The agent specified an invalid semantic version string: <code>&lt;VERSION&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_120" href="/docs/errors/err_ngrok_120">ERR_NGROK_120</a>
      </td>
      <td class="pre-wrapped">
        Your <code>&lt;PRODUCT&gt;</code> version "<code>&lt;VERSION&gt;</code>" is no longer supported. Only the most recent version of the ngrok agent is supported without an account.
        Update to a newer version with `ngrok update`, by downloading from <a href="https://ngrok.com/download">https://ngrok.com/download</a>, or by updating your SDK version.
        Sign up for an account to avoid forced version upgrades: <a href="https://ngrok.com/signup">https://ngrok.com/signup</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_121" href="/docs/errors/err_ngrok_121">ERR_NGROK_121</a>
      </td>
      <td class="pre-wrapped">
        Your <code>&lt;PRODUCT&gt;</code> version "<code>&lt;VERSION&gt;</code>" is too old. The minimum supported agent version for your account is "<code>&lt;MINVERSION&gt;</code>". Please update to a newer version with `ngrok update`, by downloading from <a href="https://ngrok.com/download">https://ngrok.com/download</a>, or by updating your SDK version. Paid accounts are currently excluded from minimum agent version requirements. To begin handling traffic immediately without updating your agent, upgrade to a paid plan: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_122" href="/docs/errors/err_ngrok_122">ERR_NGROK_122</a>
      </td>
      <td class="pre-wrapped">
        Your account is not permitted to use the agent ingress "<code>&lt;DOMAIN&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_123" href="/docs/errors/err_ngrok_123">ERR_NGROK_123</a>
      </td>
      <td class="pre-wrapped">
        The account "<code>&lt;NAME&gt;</code>" may not start an ngrok agent session until the admin's email address is verified. Verify your email at <a href="https://dashboard.ngrok.com/user/settings">https://dashboard.ngrok.com/user/settings</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_124" href="/docs/errors/err_ngrok_124">ERR_NGROK_124</a>
      </td>
      <td class="pre-wrapped">
        Your agent provided an invalid UserAgent: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_125" href="/docs/errors/err_ngrok_125">ERR_NGROK_125</a>
      </td>
      <td class="pre-wrapped">
        The analytics payload you specified is not valid.
        This usually indiciates a bug in the client's protocol implementation.
        The parsing error encountered was:
        <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_126" href="/docs/errors/err_ngrok_126">ERR_NGROK_126</a>
      </td>
      <td class="pre-wrapped">
        The agent ingress "<code>&lt;DOMAIN&gt;</code>" is not available via "<code>&lt;IP&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_127" href="/docs/errors/err_ngrok_127">ERR_NGROK_127</a>
      </td>
      <td class="pre-wrapped">
        Your account is not permitted to use the agent ingress via "<code>&lt;IP&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_200" href="/docs/errors/err_ngrok_200">ERR_NGROK_200</a>
      </td>
      <td class="pre-wrapped">
        The ngrok API requires that you set the Authorization header for authentication. Your API keys and instructions are available on your dashboard: <a href="https://dashboard.ngrok.com/api-keys">https://dashboard.ngrok.com/api-keys</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_201" href="/docs/errors/err_ngrok_201">ERR_NGROK_201</a>
      </td>
      <td class="pre-wrapped">
        The ngrok API requires that you use Basic or Bearer authentication via the Authorization header. It could not parse the header in this request. Authorization Header: <code>&lt;VAL&gt;</code>. API keys and instructions are available on your dashboard: <a href="https://dashboard.ngrok.com/api-keys">https://dashboard.ngrok.com/api-keys</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_202" href="/docs/errors/err_ngrok_202">ERR_NGROK_202</a>
      </td>
      <td class="pre-wrapped">
        The API authentication you specified does not look like a valid credential. Your credential: <code>&lt;TOKEN&gt;</code>. API keys and instructions are available on your dashboard: <a href="https://dashboard.ngrok.com/api-keys">https://dashboard.ngrok.com/api-keys</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_203" href="/docs/errors/err_ngrok_203">ERR_NGROK_203</a>
      </td>
      <td class="pre-wrapped">
        The API authentication you specified is properly formed, but it is invalid. Your authentication: <code>&lt;TOKEN&gt;</code>. API keys and instructions are available on your dashboard: <a href="https://dashboard.ngrok.com/api-keys">https://dashboard.ngrok.com/api-keys</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_204" href="/docs/errors/err_ngrok_204">ERR_NGROK_204</a>
      </td>
      <td class="pre-wrapped">
        This is a valid API token, but the account <code>&lt;ACCOUNT&gt;</code> is not allowed to use the ngrok API.
        Email support@ngrok.com to gain access.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_205" href="/docs/errors/err_ngrok_205">ERR_NGROK_205</a>
      </td>
      <td class="pre-wrapped">
        The account <code>&lt;ACCOUNT&gt;</code> has been suspended. This is usually the result of violating the ngrok Terms of Service. Email support@ngrok.com if you think your suspension is an error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_206" href="/docs/errors/err_ngrok_206">ERR_NGROK_206</a>
      </td>
      <td class="pre-wrapped">
        The authentication you specified is actually a tunnel credential. Your credential: <code>&lt;TOKEN&gt;</code>. Please check your records for an API key. API keys and instructions are available on your dashboard: <a href="https://dashboard.ngrok.com/api-keys">https://dashboard.ngrok.com/api-keys</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_207" href="/docs/errors/err_ngrok_207">ERR_NGROK_207</a>
      </td>
      <td class="pre-wrapped">
        The authentication you specified is actually a tunnel credential, not an API key token. Your key: <code>&lt;TOKEN&gt;</code>. Please check your records for an API key with the form FIRSTPART_SECONDPART. API keys and instructions are available on your dashboard: <a href="https://dashboard.ngrok.com/api-keys">https://dashboard.ngrok.com/api-keys</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_208" href="/docs/errors/err_ngrok_208">ERR_NGROK_208</a>
      </td>
      <td class="pre-wrapped">
        The authentication you specified is actually an API key ID, not an API key token. Your credential: <code>&lt;TOKEN&gt;</code>. Please check your records for an API key with the form FIRSTPART_SECONDPART. API keys and instructions are available on your dashboard: <a href="https://dashboard.ngrok.com/api-keys">https://dashboard.ngrok.com/api-keys</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_210" href="/docs/errors/err_ngrok_210">ERR_NGROK_210</a>
      </td>
      <td class="pre-wrapped">
        The content type you specified <code>&lt;CTYPE&gt;</code> is not supported by the API. Please check your API client implementation and see the list of supported content types: <a href="https://ngrok.com/docs/api">https://ngrok.com/docs/api</a>#content-types
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_211" href="/docs/errors/err_ngrok_211">ERR_NGROK_211</a>
      </td>
      <td class="pre-wrapped">
        The <code>&lt;METHOD&gt;</code> request you made does not expect a body, but you provided one. Please check your API client implementation and review the API documentation: <a href="https://ngrok.com/docs/api">https://ngrok.com/docs/api</a>#service-api.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_212" href="/docs/errors/err_ngrok_212">ERR_NGROK_212</a>
      </td>
      <td class="pre-wrapped">
        The server was unable to read the complete request body. Please check your API client implementation and review the API documentation: <a href="https://ngrok.com/docs/api">https://ngrok.com/docs/api</a>#service-api.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_213" href="/docs/errors/err_ngrok_213">ERR_NGROK_213</a>
      </td>
      <td class="pre-wrapped">
        The <code>&lt;CTYPE&gt;</code> request body could not be parsed. Please check your API client implementation and review the API documentation: <a href="https://ngrok.com/docs/api">https://ngrok.com/docs/api</a>#service-api.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_214" href="/docs/errors/err_ngrok_214">ERR_NGROK_214</a>
      </td>
      <td class="pre-wrapped">
        The request parameter <code>&lt;NAME&gt;</code> is unknown and not expected. The supported fields are: <code>&lt;SUPPORTED&gt;</code>. Please check your API client implementation and review the API documentation: <a href="https://ngrok.com/docs/api">https://ngrok.com/docs/api</a>#service-api.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_215" href="/docs/errors/err_ngrok_215">ERR_NGROK_215</a>
      </td>
      <td class="pre-wrapped">
        The value provided for the request parameter <code>&lt;NAME&gt;</code> is invalid. Please check your request and review the API documentation: <a href="https://ngrok.com/docs/api">https://ngrok.com/docs/api</a>#service-api.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_216" href="/docs/errors/err_ngrok_216">ERR_NGROK_216</a>
      </td>
      <td class="pre-wrapped">
        You did not provide a Content-Type with your request. Please check your API client implementation and use one of the supported content types: <a href="https://ngrok.com/docs/api">https://ngrok.com/docs/api</a>#content-types
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_217" href="/docs/errors/err_ngrok_217">ERR_NGROK_217</a>
      </td>
      <td class="pre-wrapped">
        The provided API version <code>&lt;VERSION&gt;</code> is invalid or unsupported. Supported versions: <code>&lt;SUPPORTED&gt;</code>. Please check your API client implementation.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_218" href="/docs/errors/err_ngrok_218">ERR_NGROK_218</a>
      </td>
      <td class="pre-wrapped">
        Your request has not specified an API version. Please include the version you wish to use in the Ngrok-Version header. Supported versions: <code>&lt;SUPPORTED&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_219" href="/docs/errors/err_ngrok_219">ERR_NGROK_219</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;TLSVERSION&gt;</code> is not a supported TLS version. Supported versions: <code>&lt;SUPPORTED&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_220" href="/docs/errors/err_ngrok_220">ERR_NGROK_220</a>
      </td>
      <td class="pre-wrapped">
        Your IP does not match the IP Policy for this Account.  Please authenticate from an IP in the correct range or update your IP Restrictions from the ngrok dashboard. <a href="https://dashboard.ngrok.com/ip-restrictions">https://dashboard.ngrok.com/ip-restrictions</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_221" href="/docs/errors/err_ngrok_221">ERR_NGROK_221</a>
      </td>
      <td class="pre-wrapped">
        This is a valid API token, but the account <code>&lt;ACCOUNT&gt;</code> is not authorized to submit or view abuse reports. Email support@ngrok.com if you believe this is an error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_223" href="/docs/errors/err_ngrok_223">ERR_NGROK_223</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;ID&gt;</code> is not a valid resource reference identifier.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_224" href="/docs/errors/err_ngrok_224">ERR_NGROK_224</a>
      </td>
      <td class="pre-wrapped">
        The value <code>&lt;VAL&gt;</code> is not valid for the terminate_at property of the TLS Termination endpoint configuration module. Must be either 'edge', 'agent' or 'upstream'.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_225" href="/docs/errors/err_ngrok_225">ERR_NGROK_225</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> simultaneous API requests.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_226" href="/docs/errors/err_ngrok_226">ERR_NGROK_226</a>
      </td>
      <td class="pre-wrapped">
        Your account is rate limited to <code>&lt;MAX&gt;</code> API requests per <code>&lt;INTERVAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_227" href="/docs/errors/err_ngrok_227">ERR_NGROK_227</a>
      </td>
      <td class="pre-wrapped">
        The ID <code>&lt;VAL&gt;</code> is invalid. Expected an ID with a prefix of <code>&lt;PREFIX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_228" href="/docs/errors/err_ngrok_228">ERR_NGROK_228</a>
      </td>
      <td class="pre-wrapped">
        The ID <code>&lt;VAL&gt;</code> is not a valid Certificate Authority ID.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_229" href="/docs/errors/err_ngrok_229">ERR_NGROK_229</a>
      </td>
      <td class="pre-wrapped">
        The ID <code>&lt;VAL&gt;</code> is not a valid IP Policy ID.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_230" href="/docs/errors/err_ngrok_230">ERR_NGROK_230</a>
      </td>
      <td class="pre-wrapped">
        The query part of the requested URI is invalid: <code>&lt;ERR&gt;</code>. Please check your API client implementation and review the API documentation: <a href="https://ngrok.com/docs/api">https://ngrok.com/docs/api</a>#service-api.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_231" href="/docs/errors/err_ngrok_231">ERR_NGROK_231</a>
      </td>
      <td class="pre-wrapped">
        The query part of the requested URI includes unknown parameters: <code>&lt;UNKNOWN&gt;</code>. The supported parameters are: <code>&lt;SUPPORTED&gt;</code>. Please check your API client implementation and review the API documentation: <a href="https://ngrok.com/docs/api">https://ngrok.com/docs/api</a>#service-api.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_232" href="/docs/errors/err_ngrok_232">ERR_NGROK_232</a>
      </td>
      <td class="pre-wrapped">
        The request must specify only a single value for the <code>&lt;NAME&gt;</code> parameter but got <code>&lt;COUNT&gt;</code>: <code>&lt;VALUES&gt;</code>. Please check your API client implementation and review the API documentation: <a href="https://ngrok.com/docs/api">https://ngrok.com/docs/api</a>#service-api.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_233" href="/docs/errors/err_ngrok_233">ERR_NGROK_233</a>
      </td>
      <td class="pre-wrapped">
        The page size limit must be between 1 and <code>&lt;MAX&gt;</code> but <code>&lt;VAL&gt;</code> was provided.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_235" href="/docs/errors/err_ngrok_235">ERR_NGROK_235</a>
      </td>
      <td class="pre-wrapped">
        The Format <code>&lt;VAL&gt;</code> is missing or is not a valid Event Destination Format. Supported formats are: <code>&lt;SUPPORTED&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_236" href="/docs/errors/err_ngrok_236">ERR_NGROK_236</a>
      </td>
      <td class="pre-wrapped">
        The destination target is invalid. Expected fields include one of the following: <code>&lt;TARGETS&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_238" href="/docs/errors/err_ngrok_238">ERR_NGROK_238</a>
      </td>
      <td class="pre-wrapped">
        The provided event type: <code>&lt;TYP&gt;</code> is not valid. Valid event types are <code>&lt;ID&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_239" href="/docs/errors/err_ngrok_239">ERR_NGROK_239</a>
      </td>
      <td class="pre-wrapped">
        The provided field: <code>&lt;TYP&gt;</code> is not valid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_240" href="/docs/errors/err_ngrok_240">ERR_NGROK_240</a>
      </td>
      <td class="pre-wrapped">
        The provided event destination auth is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_241" href="/docs/errors/err_ngrok_241">ERR_NGROK_241</a>
      </td>
      <td class="pre-wrapped">
        The value "<code>&lt;TS&gt;</code>" is not a valid RFC3339 timestamp. Error while parsing: "<code>&lt;ERR&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_242" href="/docs/errors/err_ngrok_242">ERR_NGROK_242</a>
      </td>
      <td class="pre-wrapped">
        The ID <code>&lt;VAL&gt;</code> is not a valid Backend ID.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_243" href="/docs/errors/err_ngrok_243">ERR_NGROK_243</a>
      </td>
      <td class="pre-wrapped">
        The ID <code>&lt;VAL&gt;</code> is invalid. Expected an ID with prefix one of <code>&lt;PREFIXES&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_244" href="/docs/errors/err_ngrok_244">ERR_NGROK_244</a>
      </td>
      <td class="pre-wrapped">
        The page size limit must be a number between 1 and <code>&lt;MAX&gt;</code> but <code>&lt;VAL&gt;</code> was provided.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_247" href="/docs/errors/err_ngrok_247">ERR_NGROK_247</a>
      </td>
      <td class="pre-wrapped">
        The account <code>&lt;ACCOUNT&gt;</code> has been suspended for non-payment. Update your payment method to pay your oustanding bill and resume service: <a href="https://dashboard.ngrok.com/billing/payment-method">https://dashboard.ngrok.com/billing/payment-method</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_248" href="/docs/errors/err_ngrok_248">ERR_NGROK_248</a>
      </td>
      <td class="pre-wrapped">
        The endpoint create request passed an invalid type of <code>&lt;TYPE&gt;</code>. Currently we only support creation of cloud endpoints on this route.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_300" href="/docs/errors/err_ngrok_300">ERR_NGROK_300</a>
      </td>
      <td class="pre-wrapped">
        The authtoken credential <code>&lt;ID&gt;</code> has been revoked
        and is no longer valid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_301" href="/docs/errors/err_ngrok_301">ERR_NGROK_301</a>
      </td>
      <td class="pre-wrapped">
        The bind payload you specified is not valid.
        This usually indiciates a bug in the client's protocol implementation.
        The parsing error encountered was:
        <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_302" href="/docs/errors/err_ngrok_302">ERR_NGROK_302</a>
      </td>
      <td class="pre-wrapped">
        TCP tunnels are only available to registered users.
        Sign up for free at: <a href="https://dashboard.ngrok.com/signup">https://dashboard.ngrok.com/signup</a>
        If you have already signed up, make sure your authtoken is installed.
        Your authtoken is available on your dashboard: <a href="https://dashboard.ngrok.com/get-started/your-authtoken">https://dashboard.ngrok.com/get-started/your-authtoken</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_303" href="/docs/errors/err_ngrok_303">ERR_NGROK_303</a>
      </td>
      <td class="pre-wrapped">
        TLS tunnels are only available for Enterprise or Pay-as-you-go plans.
        Sign up at: <a href="https://dashboard.ngrok.com/signup">https://dashboard.ngrok.com/signup</a>
        If you have already signed up, make sure your authtoken is installed.
        Your authtoken is available on your dashboard: <a href="https://dashboard.ngrok.com/get-started/your-authtoken">https://dashboard.ngrok.com/get-started/your-authtoken</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_304" href="/docs/errors/err_ngrok_304">ERR_NGROK_304</a>
      </td>
      <td class="pre-wrapped">
        HTTP auth is only available to registered users.
        Failed to bind a tunnel with HTTP authentication for an unauthenticated client.
        Sign up at: <a href="https://dashboard.ngrok.com/signup">https://dashboard.ngrok.com/signup</a>
        If you have already signed up, make sure your authtoken is installed.
        Your authtoken is available on your dashboard: <a href="https://dashboard.ngrok.com/get-started/your-authtoken">https://dashboard.ngrok.com/get-started/your-authtoken</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_305" href="/docs/errors/err_ngrok_305">ERR_NGROK_305</a>
      </td>
      <td class="pre-wrapped">
        Binding custom subdomains is a feature for paid accounts.
        Failed to bind the custom subdomain <code>&lt;SUBDOMAIN&gt;</code> for an unauthenticated client.
        Sign up at: <a href="https://dashboard.ngrok.com/signup">https://dashboard.ngrok.com/signup</a>
        If you have already signed up, make sure your authtoken is installed.
        Your authtoken is available on your dashboard: <a href="https://dashboard.ngrok.com/get-started/your-authtoken">https://dashboard.ngrok.com/get-started/your-authtoken</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_306" href="/docs/errors/err_ngrok_306">ERR_NGROK_306</a>
      </td>
      <td class="pre-wrapped">
        Only Personal, Pro, Enterprise, and Pay-as-you-go plans may use custom hostnames.
        Failed to bind the custom hostname <code>&lt;HOSTNAME&gt;</code> for an unauthenticated client.
        Sign up at: <a href="https://dashboard.ngrok.com/signup">https://dashboard.ngrok.com/signup</a>
        If you have already signed up, make sure your authtoken is installed.
        Your authtoken is available on your dashboard: <a href="https://dashboard.ngrok.com/get-started/your-authtoken">https://dashboard.ngrok.com/get-started/your-authtoken</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_307" href="/docs/errors/err_ngrok_307">ERR_NGROK_307</a>
      </td>
      <td class="pre-wrapped">
        You must reserve an address for your account before it can be bound.
        Failed to bind the address <code>&lt;ADDR&gt;</code> for the account <code>&lt;ACCOUNT&gt;</code> in region <code>&lt;REGION&gt;</code>.
        (Hint: Did you reserve the address in this region?)
        Reserve an address on your dashboard: <a href="https://dashboard.ngrok.com/tcp-addresses">https://dashboard.ngrok.com/tcp-addresses</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_308" href="/docs/errors/err_ngrok_308">ERR_NGROK_308</a>
      </td>
      <td class="pre-wrapped">
        The credential ACL policy does not permit binding this address.
        Credential ID: <code>&lt;ID&gt;</code>
        Address: <code>&lt;ADDR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_309" href="/docs/errors/err_ngrok_309">ERR_NGROK_309</a>
      </td>
      <td class="pre-wrapped">
        This address is reserved for another account.
        Failed to bind the address <code>&lt;ADDR&gt;</code> for the account <code>&lt;ACCOUNT&gt;</code>.
        Reserve an address on your dashboard: <a href="https://dashboard.ngrok.com/tcp-addresses/new">https://dashboard.ngrok.com/tcp-addresses/new</a>
        If you have reserved this address, make sure that you are using an
        authtoken credential for the appropriate account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_310" href="/docs/errors/err_ngrok_310">ERR_NGROK_310</a>
      </td>
      <td class="pre-wrapped">
        Only Personal, Pro, Enterprise, and Pay-as-you-go plans may bind reserved addresses.
        Failed to bind the address <code>&lt;ADDR&gt;</code> for the account <code>&lt;ACCOUNT&gt;</code>.
        This account is on the <code>&lt;PLAN&gt;</code> plan.
        This usually only happens if you downgraded your ngrok account and it no
        longer has permission to use reserved addresses.
        Upgrade your account at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_311" href="/docs/errors/err_ngrok_311">ERR_NGROK_311</a>
      </td>
      <td class="pre-wrapped">
        This address is allocated for a different region.
        Failed to bind the address <code>&lt;ADDR&gt;</code> in region <code>&lt;WANT&gt;</code> because it is reserved
        in the <code>&lt;HAVE&gt;</code> region.
        Try connecting to a different region: <a href="https://ngrok.com/docs/platform/pops">https://ngrok.com/docs/platform/pops</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_312" href="/docs/errors/err_ngrok_312">ERR_NGROK_312</a>
      </td>
      <td class="pre-wrapped">
        Failed to bind a TLS tunnel for the account <code>&lt;ACCOUNT&gt;</code>.
        Only Enterprise and Pay-as-you-go plans may bind TLS tunnels.
        This account is on the <code>&lt;PLAN&gt;</code> plan.
        Upgrade to an Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_313" href="/docs/errors/err_ngrok_313">ERR_NGROK_313</a>
      </td>
      <td class="pre-wrapped">
        Custom subdomains are a feature on ngrok's paid plans.
        Failed to bind the custom subdomain <code>&lt;SUBDOMAIN&gt;</code> for the account <code>&lt;ACCOUNT&gt;</code>.
        This account is on the <code>&lt;PLAN&gt;</code> plan.
        Upgrade to a paid plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_314" href="/docs/errors/err_ngrok_314">ERR_NGROK_314</a>
      </td>
      <td class="pre-wrapped">
        Only Personal, Pro, Enterprise, and Pay-as-you-go plans may bind custom hostnames.
        Failed to bind the custom hostname <code>&lt;HOSTNAME&gt;</code> for the account <code>&lt;ACCOUNT&gt;</code>.
        This account is on the <code>&lt;PLAN&gt;</code> plan.
        Upgrade to a paid plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_315" href="/docs/errors/err_ngrok_315">ERR_NGROK_315</a>
      </td>
      <td class="pre-wrapped">
        Wildcard domains are a feature reserved for ngrok's Enterprise plan.
        Failed to bind the wildcard name <code>&lt;DOMAIN&gt;</code> for the account <code>&lt;ACCOUNT&gt;</code>.
        This account is on the <code>&lt;PLAN&gt;</code> plan.
        Upgrade to an Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_316" href="/docs/errors/err_ngrok_316">ERR_NGROK_316</a>
      </td>
      <td class="pre-wrapped">
        The credential ACL policy does not permit binding this name.
        Credential ID: <code>&lt;ID&gt;</code>
        Name: <code>&lt;DOMAIN&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_317" href="/docs/errors/err_ngrok_317">ERR_NGROK_317</a>
      </td>
      <td class="pre-wrapped">
        You cannot bind the domain <code>&lt;DOMAIN&gt;</code> in region
        <code>&lt;WANT&gt;</code> because it is only available in the <code>&lt;HAVE&gt;</code> region.
        Try connecting to a different region: <a href="https://ngrok.com/docs/platform/pops">https://ngrok.com/docs/platform/pops</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_318" href="/docs/errors/err_ngrok_318">ERR_NGROK_318</a>
      </td>
      <td class="pre-wrapped">
        You must reserve a wildcard domain for your account before it can be bound.
        Failed to bind the wildcard domain <code>&lt;DOMAIN&gt;</code> for the account <code>&lt;ACCOUNT&gt;</code>.
        Reserve a domain on your dashboard: <a href="https://dashboard.ngrok.com/domains/new">https://dashboard.ngrok.com/domains/new</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_319" href="/docs/errors/err_ngrok_319">ERR_NGROK_319</a>
      </td>
      <td class="pre-wrapped">
        You must reserve a custom hostname for your account before it can be bound.
        Failed to bind the domain <code>&lt;DOMAIN&gt;</code> for the account <code>&lt;ACCOUNT&gt;</code>'.
        Reserve this name on your dashboard: <a href="https://dashboard.ngrok.com/domains/new">https://dashboard.ngrok.com/domains/new</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_320" href="/docs/errors/err_ngrok_320">ERR_NGROK_320</a>
      </td>
      <td class="pre-wrapped">
        This domain is reserved for another account.
        Failed to bind the domain <code>&lt;DOMAIN&gt;</code> for the account <code>&lt;ACCOUNT&gt;</code>.
        If you have reserved this name, make sure that you are using an
        authtoken credential for the appropriate account.
        Reserve a name on your dashboard: <a href="https://dashboard.ngrok.com/domains/new">https://dashboard.ngrok.com/domains/new</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_321" href="/docs/errors/err_ngrok_321">ERR_NGROK_321</a>
      </td>
      <td class="pre-wrapped">
        Wildcard names must be reserved exactly.
        Failed to bind the wildcard domain <code>&lt;DOMAIN&gt;</code> for the account <code>&lt;ACCOUNT&gt;</code>.
        This name matches <code>&lt;MATCH&gt;</code> which is reserved for your account, but
        wildcard domains must be reserved with an exact match.
        Reserve this name on your dashboard: <a href="https://dashboard.ngrok.com/domains/new">https://dashboard.ngrok.com/domains/new</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_322" href="/docs/errors/err_ngrok_322">ERR_NGROK_322</a>
      </td>
      <td class="pre-wrapped">
        This name is reserved in a different region.
        Failed to bind the domain <code>&lt;DOMAIN&gt;</code> in the region <code>&lt;WANT&gt;</code> because it is reserved
        in the <code>&lt;HAVE&gt;</code> region.
        Try connecting to a different region: <a href="https://ngrok.com/docs/platform/pops">https://ngrok.com/docs/platform/pops</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_323" href="/docs/errors/err_ngrok_323">ERR_NGROK_323</a>
      </td>
      <td class="pre-wrapped">
        You may not run more than <code>&lt;MAX&gt;</code> tunnels over a single ngrok session without an account.
        You may increase this limit by signing up and upgrading.
        The tunnels already running on this session are:
        <code>&lt;URLS&gt;</code>
        Sign up at: <a href="https://dashboard.ngrok.com/signup">https://dashboard.ngrok.com/signup</a>
        If you have already signed up, make sure your authtoken is installed.
        Your authtoken is available on your dashboard: <a href="https://dashboard.ngrok.com/get-started/your-authtoken">https://dashboard.ngrok.com/get-started/your-authtoken</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_324" href="/docs/errors/err_ngrok_324">ERR_NGROK_324</a>
      </td>
      <td class="pre-wrapped">
        Your account may not run more than <code>&lt;MAX&gt;</code> tunnels over a single ngrok agent session.
        The tunnels already running on this session are:
        <code>&lt;URLS&gt;</code>
        
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_326" href="/docs/errors/err_ngrok_326">ERR_NGROK_326</a>
      </td>
      <td class="pre-wrapped">
        Invalid character <code>&lt;CHAR&gt;</code> in domain name. Valid domains may contain only a-z, A-Z, 0-9, . * and - characters. Failed to bind the domain <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_327" href="/docs/errors/err_ngrok_327">ERR_NGROK_327</a>
      </td>
      <td class="pre-wrapped">
        Domain has an invalid character sequence. Valid domains may not contain repeated periods '..'. Failed to bind the domain <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_328" href="/docs/errors/err_ngrok_328">ERR_NGROK_328</a>
      </td>
      <td class="pre-wrapped">
        Domain part <code>&lt;PART&gt;</code> has an invalid first character. Valid domain parts must begin with a-z, A-Z, 0-9 or *. Failed to bind the domain <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_329" href="/docs/errors/err_ngrok_329">ERR_NGROK_329</a>
      </td>
      <td class="pre-wrapped">
        Domain part <code>&lt;PART&gt;</code> has an invalid last character. Valid domains must end with a-z A-Z or 0-9. Failed to bind the domain <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_330" href="/docs/errors/err_ngrok_330">ERR_NGROK_330</a>
      </td>
      <td class="pre-wrapped">
        Domain has an invalid character sequence. Valid domains may not contain '--' in positions 3 and 4 unless the domain has a punycode prefix of 'xn--'. Failed to bind the domain <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_331" href="/docs/errors/err_ngrok_331">ERR_NGROK_331</a>
      </td>
      <td class="pre-wrapped">
        You may not bind a domain with the TLD <code>&lt;SUFFIX&gt;</code>. This TLD is not reachable over the public internet. Failed to bind the domain <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_332" href="/docs/errors/err_ngrok_332">ERR_NGROK_332</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROTO&gt;</code> is not a supported tunnel protocol
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_333" href="/docs/errors/err_ngrok_333">ERR_NGROK_333</a>
      </td>
      <td class="pre-wrapped">
        No tunnel found with the ID <code>&lt;ID&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_334" href="/docs/errors/err_ngrok_334">ERR_NGROK_334</a>
      </td>
      <td class="pre-wrapped">
        The endpoint <code>&lt;URL&gt;</code> is already online. Either
        1. stop your existing endpoint first, or
        2. start both endpoints with `--pooling-enabled` to load balance between them.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_335" href="/docs/errors/err_ngrok_335">ERR_NGROK_335</a>
      </td>
      <td class="pre-wrapped">
        The bind cookie you specified is malformed. This usually indicates a bug in the client's protocol implementation.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_336" href="/docs/errors/err_ngrok_336">ERR_NGROK_336</a>
      </td>
      <td class="pre-wrapped">
        Could not find an account while creating this endpoint. This is either an internal server error or you deleted your account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_337" href="/docs/errors/err_ngrok_337">ERR_NGROK_337</a>
      </td>
      <td class="pre-wrapped">
        The last payment for the <code>&lt;ACCOUNT&gt;</code> account failed.
        The account has been suspended. Update the payment information here:
        <a href="https://dashboard.ngrok.com/billing/payment-method">https://dashboard.ngrok.com/billing/payment-method</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_338" href="/docs/errors/err_ngrok_338">ERR_NGROK_338</a>
      </td>
      <td class="pre-wrapped">
        The account <code>&lt;ACCOUNT&gt;</code> has been suspended.
        This is usually the result of violating the ngrok Terms of Service.
        Email support@ngrok.com if you think your suspension is an error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_339" href="/docs/errors/err_ngrok_339">ERR_NGROK_339</a>
      </td>
      <td class="pre-wrapped">
        Forwarding to a local file:/// URL is only available after you sign up.
        Sign up at: <a href="https://dashboard.ngrok.com/signup">https://dashboard.ngrok.com/signup</a>
        If you have already signed up, make sure your authtoken is installed.
        Your authtoken is available on your dashboard: <a href="https://dashboard.ngrok.com/get-started/your-authtoken">https://dashboard.ngrok.com/get-started/your-authtoken</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_340" href="/docs/errors/err_ngrok_340">ERR_NGROK_340</a>
      </td>
      <td class="pre-wrapped">
        Forwarding to local port 443 or a local https:// URL is only available after you sign up.
        Sign up at: <a href="https://dashboard.ngrok.com/signup">https://dashboard.ngrok.com/signup</a>
        If you have already signed up, make sure your authtoken is installed.
        Your authtoken is available on your dashboard: <a href="https://dashboard.ngrok.com/get-started/your-authtoken">https://dashboard.ngrok.com/get-started/your-authtoken</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_341" href="/docs/errors/err_ngrok_341">ERR_NGROK_341</a>
      </td>
      <td class="pre-wrapped">
        IP Policy with ID <code>&lt;ID&gt;</code> not found
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_343" href="/docs/errors/err_ngrok_343">ERR_NGROK_343</a>
      </td>
      <td class="pre-wrapped">
        Endpoint configuration <code>&lt;ID&gt;</code> does not allow the agent to set basic authentication.
        Update the endpoint configuration to specify 'agent' as the auth provider or remove the basic authentication settings from the agent's tunnel creation definition.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_344" href="/docs/errors/err_ngrok_344">ERR_NGROK_344</a>
      </td>
      <td class="pre-wrapped">
        Endpoint configuration <code>&lt;ID&gt;</code> does not allow clients to set an IP policy.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_345" href="/docs/errors/err_ngrok_345">ERR_NGROK_345</a>
      </td>
      <td class="pre-wrapped">
        Endpoint configuration <code>&lt;ID&gt;</code>s HTTPS module terminates TLS which is incompatible with a 'tls' tunnel. You may either:
          - Modify the endpoint configuration to include the HTTPS module with 'terminate_tls' disabled.
          - OR start an 'http' tunnel with -bind-tls=true or -bind-tls=both instead
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_346" href="/docs/errors/err_ngrok_346">ERR_NGROK_346</a>
      </td>
      <td class="pre-wrapped">
        Endpoint configuration <code>&lt;ID&gt;</code>s HTTPS module does not terminate TLS which is incompatible with a 'https' tunnel. You may either:
          - Modify the endpoint configuration to enable the 'terminate_tls' option
          - OR start a 'tls' tunnel instead
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_347" href="/docs/errors/err_ngrok_347">ERR_NGROK_347</a>
      </td>
      <td class="pre-wrapped">
        Domain has invalid punycode: <code>&lt;IDNA_ERROR&gt;</code>. Failed to bind the domain <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_348" href="/docs/errors/err_ngrok_348">ERR_NGROK_348</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> sessions.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_349" href="/docs/errors/err_ngrok_349">ERR_NGROK_349</a>
      </td>
      <td class="pre-wrapped">
        Your account is rate limited for adding <code>&lt;MAX&gt;</code> sessions per <code>&lt;INTERVAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_350" href="/docs/errors/err_ngrok_350">ERR_NGROK_350</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> tunnels in a session.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_351" href="/docs/errors/err_ngrok_351">ERR_NGROK_351</a>
      </td>
      <td class="pre-wrapped">
        Your account is rate limited for adding <code>&lt;MAX&gt;</code> tunnels per <code>&lt;INTERVAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_352" href="/docs/errors/err_ngrok_352">ERR_NGROK_352</a>
      </td>
      <td class="pre-wrapped">
        Unauthenticated sessions are limited to <code>&lt;MAX&gt;</code> tunnels.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_353" href="/docs/errors/err_ngrok_353">ERR_NGROK_353</a>
      </td>
      <td class="pre-wrapped">
        Unauthenticated sessions are rate limited for adding <code>&lt;MAX&gt;</code> tunnels per <code>&lt;INTERVAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_354" href="/docs/errors/err_ngrok_354">ERR_NGROK_354</a>
      </td>
      <td class="pre-wrapped">
        Failed to bind <code>&lt;DOMAIN&gt;</code>. Nested subdomains of the ngrok base endpoint domain <code>&lt;ENDPOINT_DOMAIN&gt;</code> must be reserved first. Alternatively, try <code>&lt;SUGGESTION&gt;</code> instead.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_355" href="/docs/errors/err_ngrok_355">ERR_NGROK_355</a>
      </td>
      <td class="pre-wrapped">
        Invalid '_' in domain name. Valid domains may not contain underscores. Failed to bind the domain <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_356" href="/docs/errors/err_ngrok_356">ERR_NGROK_356</a>
      </td>
      <td class="pre-wrapped">
        The credential ACL policy does not permit binding random TCP addresses.
        Credential ID: <code>&lt;ID&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_357" href="/docs/errors/err_ngrok_357">ERR_NGROK_357</a>
      </td>
      <td class="pre-wrapped">
        Labeled tunnels are only available after you sign up.
        Sign up at: <a href="https://dashboard.ngrok.com/signup">https://dashboard.ngrok.com/signup</a>
        If you have already signed up, make sure your authtoken is configured.
        Your authtoken is available on your dashboard: <a href="https://dashboard.ngrok.com/get-started/your-authtoken">https://dashboard.ngrok.com/get-started/your-authtoken</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_358" href="/docs/errors/err_ngrok_358">ERR_NGROK_358</a>
      </td>
      <td class="pre-wrapped">
        Your account doesn't have permission to create labeled tunnels.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_359" href="/docs/errors/err_ngrok_359">ERR_NGROK_359</a>
      </td>
      <td class="pre-wrapped">
        Invalid basic auth credential. Username must not be zero length.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_360" href="/docs/errors/err_ngrok_360">ERR_NGROK_360</a>
      </td>
      <td class="pre-wrapped">
        Invalid basic auth credential. Password must be between <code>&lt;MINLENGTH&gt;</code> and <code>&lt;MAXLENGTH&gt;</code> characters, got <code>&lt;GOTLENGTH&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_361" href="/docs/errors/err_ngrok_361">ERR_NGROK_361</a>
      </td>
      <td class="pre-wrapped">
        Invalid circuit breaker configuration, error threshold percentage must be between 0.0 and 1.0 inclusive, was <code>&lt;VAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_362" href="/docs/errors/err_ngrok_362">ERR_NGROK_362</a>
      </td>
      <td class="pre-wrapped">
        Invalid IP restriction configuration, invalid CIDR: <code>&lt;CIDR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_363" href="/docs/errors/err_ngrok_363">ERR_NGROK_363</a>
      </td>
      <td class="pre-wrapped">
        You must specify a supported provider name. Supported providers: [<code>&lt;SUPPORTED&gt;</code>]
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_364" href="/docs/errors/err_ngrok_364">ERR_NGROK_364</a>
      </td>
      <td class="pre-wrapped">
        Webhook provider <code>&lt;PROVIDER&gt;</code> is not supported. Supported providers: [<code>&lt;SUPPORTED&gt;</code>]
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_365" href="/docs/errors/err_ngrok_365">ERR_NGROK_365</a>
      </td>
      <td class="pre-wrapped">
        OAuth provider <code>&lt;PROVIDER&gt;</code> is not supported. Supported providers: [<code>&lt;SUPPORTED&gt;</code>]
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_366" href="/docs/errors/err_ngrok_366">ERR_NGROK_366</a>
      </td>
      <td class="pre-wrapped">
        You may not authorize more than <code>&lt;MAX&gt;</code> emails. Got <code>&lt;GOT&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_367" href="/docs/errors/err_ngrok_367">ERR_NGROK_367</a>
      </td>
      <td class="pre-wrapped">
        You may not authorize more than <code>&lt;MAX&gt;</code> email domains. Got <code>&lt;GOT&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_368" href="/docs/errors/err_ngrok_368">ERR_NGROK_368</a>
      </td>
      <td class="pre-wrapped">
        You may not request more than <code>&lt;MAX&gt;</code> oauth scopes. Got <code>&lt;GOT&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_370" href="/docs/errors/err_ngrok_370">ERR_NGROK_370</a>
      </td>
      <td class="pre-wrapped">
        Added request header should be in key:value format, got <code>&lt;VAL&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_371" href="/docs/errors/err_ngrok_371">ERR_NGROK_371</a>
      </td>
      <td class="pre-wrapped">
        Added response header should be in key:value format, got <code>&lt;VAL&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_372" href="/docs/errors/err_ngrok_372">ERR_NGROK_372</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;KEY&gt;</code> is not a valid HTTP header name because it contains at least one invalid character.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_373" href="/docs/errors/err_ngrok_373">ERR_NGROK_373</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;KEY&gt;</code> is not a valid HTTP header name because it contains at least one invalid character.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_374" href="/docs/errors/err_ngrok_374">ERR_NGROK_374</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;VAL&gt;</code> is not a valid HTTP header value: <code>&lt;REASON&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_375" href="/docs/errors/err_ngrok_375">ERR_NGROK_375</a>
      </td>
      <td class="pre-wrapped">
        Duplicate 'add' header, <code>&lt;HEADER&gt;</code> was provided twice with different casings: <code>&lt;CASE_ONE&gt;</code> and <code>&lt;CASE_TWO&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_376" href="/docs/errors/err_ngrok_376">ERR_NGROK_376</a>
      </td>
      <td class="pre-wrapped">
        Exceeded the maximum number of added headers. You specified <code>&lt;VAL&gt;</code>, the maximum is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_377" href="/docs/errors/err_ngrok_377">ERR_NGROK_377</a>
      </td>
      <td class="pre-wrapped">
        The header beginning with <code>&lt;PREFIX&gt;</code>...' exceeds the maximum header name length of <code>&lt;BYTES&gt;</code> bytes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_378" href="/docs/errors/err_ngrok_378">ERR_NGROK_378</a>
      </td>
      <td class="pre-wrapped">
        The header value for <code>&lt;HEADERKEY&gt;</code> beginning with <code>&lt;PREFIX&gt;</code>...' exceeds the maximum header value length of <code>&lt;BYTES&gt;</code> bytes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_379" href="/docs/errors/err_ngrok_379">ERR_NGROK_379</a>
      </td>
      <td class="pre-wrapped">
        The sendgrid verification key is not a base64 encoded ecdsa public key. The following error was encountered while trying to parse it: "<code>&lt;ERROR&gt;</code>"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_380" href="/docs/errors/err_ngrok_380">ERR_NGROK_380</a>
      </td>
      <td class="pre-wrapped">
        The resource <code>&lt;ID&gt;</code> was referenced, but not found. Please retry, and contact support if this error persists.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_381" href="/docs/errors/err_ngrok_381">ERR_NGROK_381</a>
      </td>
      <td class="pre-wrapped">
        The host <code>&lt;HOST&gt;</code> and port <code>&lt;PORT&gt;</code> you requested is already reserved by an edge.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_382" href="/docs/errors/err_ngrok_382">ERR_NGROK_382</a>
      </td>
      <td class="pre-wrapped">
        The account "<code>&lt;NAME&gt;</code>" may not start an endpoint until the admin's email address is verified. Verify your email at <a href="https://dashboard.ngrok.com/user/settings">https://dashboard.ngrok.com/user/settings</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_383" href="/docs/errors/err_ngrok_383">ERR_NGROK_383</a>
      </td>
      <td class="pre-wrapped">
        You may not specify an OAuth Client ID without also specifying a Client Secret. Specify both or neither.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_384" href="/docs/errors/err_ngrok_384">ERR_NGROK_384</a>
      </td>
      <td class="pre-wrapped">
        You may not specify an OAuth Client Secret without also specifying a Client ID. Specify both or neither.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_385" href="/docs/errors/err_ngrok_385">ERR_NGROK_385</a>
      </td>
      <td class="pre-wrapped">
        You must specify an OIDC Client ID.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_386" href="/docs/errors/err_ngrok_386">ERR_NGROK_386</a>
      </td>
      <td class="pre-wrapped">
        You must specify an OIDC Client Secret.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_387" href="/docs/errors/err_ngrok_387">ERR_NGROK_387</a>
      </td>
      <td class="pre-wrapped">
        You must specify the OIDC Issuer URL.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_388" href="/docs/errors/err_ngrok_388">ERR_NGROK_388</a>
      </td>
      <td class="pre-wrapped">
        You may not request more than <code>&lt;MAX&gt;</code> OIDC scopes. Got <code>&lt;GOT&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_389" href="/docs/errors/err_ngrok_389">ERR_NGROK_389</a>
      </td>
      <td class="pre-wrapped">
        You must specify an OAuth client ID and secret for a custom application or neither client ID nor a secret for the ngrok-managed OAuth application.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_390" href="/docs/errors/err_ngrok_390">ERR_NGROK_390</a>
      </td>
      <td class="pre-wrapped">
        You must use your own OAuth application, specifying its client ID and secret, in order to specify scopes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_391" href="/docs/errors/err_ngrok_391">ERR_NGROK_391</a>
      </td>
      <td class="pre-wrapped">
        You may not request an individual OAuth scope with length greater than <code>&lt;MAX&gt;</code>. Got scope <code>&lt;SCOPE&gt;</code> with length <code>&lt;GOT&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_392" href="/docs/errors/err_ngrok_392">ERR_NGROK_392</a>
      </td>
      <td class="pre-wrapped">
        You may not request an individual OIDC scope with length greater than <code>&lt;MAX&gt;</code>. Got scope <code>&lt;SCOPE&gt;</code> with length <code>&lt;GOT&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_393" href="/docs/errors/err_ngrok_393">ERR_NGROK_393</a>
      </td>
      <td class="pre-wrapped">
        When specifying CIDRs to deny, you must specify at least one CIDR to allow. Otherwise all traffic will be denied. Use 0.0.0.0/0 and ::0/0 to accept all traffic not explicitly blocked by your deny rules.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_394" href="/docs/errors/err_ngrok_394">ERR_NGROK_394</a>
      </td>
      <td class="pre-wrapped">
        Each tunnel must specify either a protocol or labels, but neither was set.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_395" href="/docs/errors/err_ngrok_395">ERR_NGROK_395</a>
      </td>
      <td class="pre-wrapped">
        Bind rules in authtoken ACLs are not supported with labeled tunnels at this time.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_396" href="/docs/errors/err_ngrok_396">ERR_NGROK_396</a>
      </td>
      <td class="pre-wrapped">
        Domain <code>&lt;DOMAIN&gt;</code> is not a valid DNS name. No domain part may be more than 63 characters long.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_397" href="/docs/errors/err_ngrok_397">ERR_NGROK_397</a>
      </td>
      <td class="pre-wrapped">
        Domain <code>&lt;DOMAIN&gt;</code> is not a valid DNS name. Domains may not be more than 253 characters long.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_398" href="/docs/errors/err_ngrok_398">ERR_NGROK_398</a>
      </td>
      <td class="pre-wrapped">
        The <code>&lt;ID&gt;</code> header cannot be removed without specifying a replacement.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_399" href="/docs/errors/err_ngrok_399">ERR_NGROK_399</a>
      </td>
      <td class="pre-wrapped">
        The credential ACL policy does not permit binding this label.
        Credential ID: <code>&lt;ID&gt;</code>
        Label: <code>&lt;LABEL&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_400" href="/docs/errors/err_ngrok_400">ERR_NGROK_400</a>
      </td>
      <td class="pre-wrapped">
        The region you specified, <code>&lt;REGION&gt;</code> is invalid. Please use one of the following acceptable values: <code>&lt;VALID&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_401" href="/docs/errors/err_ngrok_401">ERR_NGROK_401</a>
      </td>
      <td class="pre-wrapped">
        Only Personal, Pro, Enterprise, or Pay-as-you-go accounts can reserve domains.
        Your account can't reserve domains. 
        Upgrade to a paid plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_402" href="/docs/errors/err_ngrok_402">ERR_NGROK_402</a>
      </td>
      <td class="pre-wrapped">
        Only the first part of a reserved domain may be a '*' wildcard. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_403" href="/docs/errors/err_ngrok_403">ERR_NGROK_403</a>
      </td>
      <td class="pre-wrapped">
        The first subdomain of a wildcard domain must be a single '*' character. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_404" href="/docs/errors/err_ngrok_404">ERR_NGROK_404</a>
      </td>
      <td class="pre-wrapped">
        You may not reserve names on ngrok.com. Please use an ngrok.io suffix. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_405" href="/docs/errors/err_ngrok_405">ERR_NGROK_405</a>
      </td>
      <td class="pre-wrapped">
        You may not reserve a domain with the suffix <code>&lt;SUFFIX&gt;</code> in the <code>&lt;WANT&gt;</code> region because names with this suffix must be reserved for the <code>&lt;HAVE&gt;</code> region. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_406" href="/docs/errors/err_ngrok_406">ERR_NGROK_406</a>
      </td>
      <td class="pre-wrapped">
        Invalid character <code>&lt;CHAR&gt;</code> in domain name. Valid domains may contain only a-z, A-Z, 0-9, . * and - characters. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_407" href="/docs/errors/err_ngrok_407">ERR_NGROK_407</a>
      </td>
      <td class="pre-wrapped">
        Domain part <code>&lt;PART&gt;</code> has an invalid first character. Valid domain parts must begin with a-z, A-Z, 0-9 or *. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_408" href="/docs/errors/err_ngrok_408">ERR_NGROK_408</a>
      </td>
      <td class="pre-wrapped">
        Domain part <code>&lt;PART&gt;</code> has an invalid last character. Valid domains must end with a-z A-Z or 0-9. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_409" href="/docs/errors/err_ngrok_409">ERR_NGROK_409</a>
      </td>
      <td class="pre-wrapped">
        Domain has an invalid character sequence. Valid domains may not contain repeated periods '..'. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_410" href="/docs/errors/err_ngrok_410">ERR_NGROK_410</a>
      </td>
      <td class="pre-wrapped">
        Domain has an invalid character sequence. Valid domains may not contain '--' in positions 3 and 4 unless the domain has a punycode prefix of 'xn--'. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_411" href="/docs/errors/err_ngrok_411">ERR_NGROK_411</a>
      </td>
      <td class="pre-wrapped">
        You may not reserve a name on the TLD <code>&lt;SUFFIX&gt;</code>. This TLD is not reachable over the public internet. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_412" href="/docs/errors/err_ngrok_412">ERR_NGROK_412</a>
      </td>
      <td class="pre-wrapped">
        Only Personal, Pro, Enterprise, or Pay-as-you-go accounts can reserve tunnels on custom domains.
        Your account cannot reserve tunnels on custom domains (<code>&lt;DOMAIN&gt;</code> is not a subdomain of <code>&lt;BASE&gt;</code>).
        Upgrade to a paid plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_413" href="/docs/errors/err_ngrok_413">ERR_NGROK_413</a>
      </td>
      <td class="pre-wrapped">
        This domain is already reserved for your account. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_414" href="/docs/errors/err_ngrok_414">ERR_NGROK_414</a>
      </td>
      <td class="pre-wrapped">
        This domain is already reserved for another account. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_415" href="/docs/errors/err_ngrok_415">ERR_NGROK_415</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> reserved domains. If you need more domains, you can turn overages on for your existing account or subscribe to a usage-based billing plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_416" href="/docs/errors/err_ngrok_416">ERR_NGROK_416</a>
      </td>
      <td class="pre-wrapped">
        You may not register a wildcard for all <code>&lt;SUFFIX&gt;</code> domains. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_417" href="/docs/errors/err_ngrok_417">ERR_NGROK_417</a>
      </td>
      <td class="pre-wrapped">
        This wildcard domain would conflict with a domain reserved for another account. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_418" href="/docs/errors/err_ngrok_418">ERR_NGROK_418</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> wildcard domains. Email sales@ngrok.com to purchase additional wildcard domains.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_419" href="/docs/errors/err_ngrok_419">ERR_NGROK_419</a>
      </td>
      <td class="pre-wrapped">
        Only Enterprise accounts can reserve wildcard domains.
        Upgrade to an Enterprise plan at <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_420" href="/docs/errors/err_ngrok_420">ERR_NGROK_420</a>
      </td>
      <td class="pre-wrapped">
        A description is limited to <code>&lt;MAX&gt;</code> characters; you have entered <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_421" href="/docs/errors/err_ngrok_421">ERR_NGROK_421</a>
      </td>
      <td class="pre-wrapped">
        Metadata is limited to <code>&lt;MAX&gt;</code> characters; you have entered <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_422" href="/docs/errors/err_ngrok_422">ERR_NGROK_422</a>
      </td>
      <td class="pre-wrapped">
        The reserved domain name update failed because no values were provided. Specify at least one value.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_423" href="/docs/errors/err_ngrok_423">ERR_NGROK_423</a>
      </td>
      <td class="pre-wrapped">
        The reserved domain name is limited to <code>&lt;MAX&gt;</code> characters; you are using <code>&lt;VAL&gt;</code> characters.
        The name you've requested is: <code>&lt;DOMAIN&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_424" href="/docs/errors/err_ngrok_424">ERR_NGROK_424</a>
      </td>
      <td class="pre-wrapped">
        Domain <code>&lt;DOMAIN&gt;</code> does not require a CNAME record
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_425" href="/docs/errors/err_ngrok_425">ERR_NGROK_425</a>
      </td>
      <td class="pre-wrapped">
        Domain <code>&lt;DOMAIN&gt;</code> CNAME record not found
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_426" href="/docs/errors/err_ngrok_426">ERR_NGROK_426</a>
      </td>
      <td class="pre-wrapped">
        Domain <code>&lt;DOMAIN&gt;</code> CNAME record not found, A record <code>&lt;IPS&gt;</code> found
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_427" href="/docs/errors/err_ngrok_427">ERR_NGROK_427</a>
      </td>
      <td class="pre-wrapped">
        Domain <code>&lt;DOMAIN&gt;</code> CNAME record resolved to <code>&lt;HAVE&gt;</code>, should have been <code>&lt;WANT&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_428" href="/docs/errors/err_ngrok_428">ERR_NGROK_428</a>
      </td>
      <td class="pre-wrapped">
        You may not assign endpoint configuration <code>&lt;ID&gt;</code> because it is type <code>&lt;TYPE&gt;</code>. You must assign a configuration with type <code>&lt;EXPECTEDTYPE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_429" href="/docs/errors/err_ngrok_429">ERR_NGROK_429</a>
      </td>
      <td class="pre-wrapped">
        Domain has invalid punycode: <code>&lt;IDNA_ERROR&gt;</code>. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_430" href="/docs/errors/err_ngrok_430">ERR_NGROK_430</a>
      </td>
      <td class="pre-wrapped">
        Another account is running an active tunnel on the domain <code>&lt;DOMAIN&gt;</code>. You may not reserve domains that are actively in use.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_431" href="/docs/errors/err_ngrok_431">ERR_NGROK_431</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> reserved domains. If you need more domains, you can turn overages on for your existing account or subscribe to a usage-based billing plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_432" href="/docs/errors/err_ngrok_432">ERR_NGROK_432</a>
      </td>
      <td class="pre-wrapped">
        Your account is rate limited for adding <code>&lt;MAX&gt;</code> reserved domains per <code>&lt;INTERVAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_433" href="/docs/errors/err_ngrok_433">ERR_NGROK_433</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> reserved wildcard domains. If you need more domains, you can turn overages on for your existing account or subscribe to a usage-based billing plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_434" href="/docs/errors/err_ngrok_434">ERR_NGROK_434</a>
      </td>
      <td class="pre-wrapped">
        Either a certificate or a certificate management policy may be specified, not both
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_435" href="/docs/errors/err_ngrok_435">ERR_NGROK_435</a>
      </td>
      <td class="pre-wrapped">
        Invalid authority specified in managed certificate policy.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_436" href="/docs/errors/err_ngrok_436">ERR_NGROK_436</a>
      </td>
      <td class="pre-wrapped">
        The certificate of a reserved domain with a managed certificate policy can not be detached directly, instead the managed certificate policy itself should be detached.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_438" href="/docs/errors/err_ngrok_438">ERR_NGROK_438</a>
      </td>
      <td class="pre-wrapped">
        Invalid '_' in domain name. Valid domains may not contain underscores. Failed to reserve <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_439" href="/docs/errors/err_ngrok_439">ERR_NGROK_439</a>
      </td>
      <td class="pre-wrapped">
        The certificate_management_policy field must be null for domains owned by ngrok.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_440" href="/docs/errors/err_ngrok_440">ERR_NGROK_440</a>
      </td>
      <td class="pre-wrapped">
        Uploaded certificates are not allowed for domains owned by ngrok.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_441" href="/docs/errors/err_ngrok_441">ERR_NGROK_441</a>
      </td>
      <td class="pre-wrapped">
        Domain <code>&lt;DOMAIN&gt;</code> does not require an ACME Challenge CNAME record
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_442" href="/docs/errors/err_ngrok_442">ERR_NGROK_442</a>
      </td>
      <td class="pre-wrapped">
        Domain <code>&lt;RECORD&gt;</code> ACME Challenge CNAME record not found
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_443" href="/docs/errors/err_ngrok_443">ERR_NGROK_443</a>
      </td>
      <td class="pre-wrapped">
        ACME Challenge <code>&lt;RECORD&gt;</code> CNAME record not found, A record <code>&lt;IPS&gt;</code> found
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_444" href="/docs/errors/err_ngrok_444">ERR_NGROK_444</a>
      </td>
      <td class="pre-wrapped">
        ACME Challenge <code>&lt;RECORD&gt;</code> CNAME record resolved to <code>&lt;HAVE&gt;</code>, should have been <code>&lt;WANT&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_445" href="/docs/errors/err_ngrok_445">ERR_NGROK_445</a>
      </td>
      <td class="pre-wrapped">
        There was an error looking up the DNS <code>&lt;RTYPE&gt;</code> record for domain <code>&lt;DOMAIN&gt;</code> (status: <code>&lt;STATUS&gt;</code>): <code>&lt;MSG&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_446" href="/docs/errors/err_ngrok_446">ERR_NGROK_446</a>
      </td>
      <td class="pre-wrapped">
        The domain <code>&lt;DOMAIN&gt;</code> could not be deleted because it is still referenced by an edge or cloud endpoint.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_447" href="/docs/errors/err_ngrok_447">ERR_NGROK_447</a>
      </td>
      <td class="pre-wrapped">
        Managed certificates are not allowed on direct subdomains of <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_448" href="/docs/errors/err_ngrok_448">ERR_NGROK_448</a>
      </td>
      <td class="pre-wrapped">
        The domain <code>&lt;DOMAIN&gt;</code> is not a fully qualified domain name.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_449" href="/docs/errors/err_ngrok_449">ERR_NGROK_449</a>
      </td>
      <td class="pre-wrapped">
        You may only specify one of 'name' or 'domain'.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_450" href="/docs/errors/err_ngrok_450">ERR_NGROK_450</a>
      </td>
      <td class="pre-wrapped">
        You are not allowed to reserve subdomains of <code>&lt;DOMAIN&gt;</code>. Failed to reserve domain <code>&lt;SUBDOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_451" href="/docs/errors/err_ngrok_451">ERR_NGROK_451</a>
      </td>
      <td class="pre-wrapped">
        You are not allowed to change the region of <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_455" href="/docs/errors/err_ngrok_455">ERR_NGROK_455</a>
      </td>
      <td class="pre-wrapped">
        This subdomain is covered by <code>&lt;WILDCARD_DOMAIN&gt;</code> however the wildcard's CNAME record resolved to <code>&lt;HAVE&gt;</code>, should have been <code>&lt;WANT&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_456" href="/docs/errors/err_ngrok_456">ERR_NGROK_456</a>
      </td>
      <td class="pre-wrapped">
        You are not allowed to specify duplicate regions. Region <code>&lt;DUPLICATE&gt;</code> was specified multiple times.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_457" href="/docs/errors/err_ngrok_457">ERR_NGROK_457</a>
      </td>
      <td class="pre-wrapped">
        Custom error template URLs are limited to <code>&lt;MAX&gt;</code> characters; you have entered <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_500" href="/docs/errors/err_ngrok_500">ERR_NGROK_500</a>
      </td>
      <td class="pre-wrapped">
        The region you specified, <code>&lt;REGION&gt;</code> is invalid. Please use one of the following acceptable values: <code>&lt;VALID&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_501" href="/docs/errors/err_ngrok_501">ERR_NGROK_501</a>
      </td>
      <td class="pre-wrapped">
        Only Personal, Pro, Enterprise, or Pay-as-you-go accounts can reserve addresses.
        Your account can't reserve addresses. 
        Upgrade to a paid plan at <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_502" href="/docs/errors/err_ngrok_502">ERR_NGROK_502</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> reserved addresses. If you need more addresses, you can turn overages on for your existing account or subscribe to a usage-based billing plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_503" href="/docs/errors/err_ngrok_503">ERR_NGROK_503</a>
      </td>
      <td class="pre-wrapped">
        No available reserved addresses in region <code>&lt;REGION&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_504" href="/docs/errors/err_ngrok_504">ERR_NGROK_504</a>
      </td>
      <td class="pre-wrapped">
        A description is limited to <code>&lt;MAX&gt;</code> characters; you have entered <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_505" href="/docs/errors/err_ngrok_505">ERR_NGROK_505</a>
      </td>
      <td class="pre-wrapped">
        Metadata is limited to <code>&lt;MAX&gt;</code> characters; you have entered <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_506" href="/docs/errors/err_ngrok_506">ERR_NGROK_506</a>
      </td>
      <td class="pre-wrapped">
        The reserved address update failed because no values were provided. Specify at least one value.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_507" href="/docs/errors/err_ngrok_507">ERR_NGROK_507</a>
      </td>
      <td class="pre-wrapped">
        You may not assign endpoint configuration <code>&lt;ID&gt;</code> because it is type <code>&lt;TYPE&gt;</code>. You must assign a configuration with type 'tcp'.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_508" href="/docs/errors/err_ngrok_508">ERR_NGROK_508</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> reserved addresses. If you need more addresses, you can turn overages on for your existing account or subscribe to a usage-based billing plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_509" href="/docs/errors/err_ngrok_509">ERR_NGROK_509</a>
      </td>
      <td class="pre-wrapped">
        Your account is rate limited for adding <code>&lt;MAX&gt;</code> reserved addresses per <code>&lt;INTERVAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_511" href="/docs/errors/err_ngrok_511">ERR_NGROK_511</a>
      </td>
      <td class="pre-wrapped">
        The domain <code>&lt;DOMAIN&gt;</code> has a dangling CNAME record. The CNAME must be deleted before this domain can be reserved.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_512" href="/docs/errors/err_ngrok_512">ERR_NGROK_512</a>
      </td>
      <td class="pre-wrapped">
        The domain <code>&lt;DOMAIN&gt;</code> has a dangling A, AAAA, ALIAS or other record pointing to ngrok. The record must be deleted before this domain can be reserved.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_513" href="/docs/errors/err_ngrok_513">ERR_NGROK_513</a>
      </td>
      <td class="pre-wrapped">
        The domain <code>&lt;DOMAIN&gt;</code> is not a valid DNS name. No domain part may be more than 63 characters long.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_514" href="/docs/errors/err_ngrok_514">ERR_NGROK_514</a>
      </td>
      <td class="pre-wrapped">
        The domain <code>&lt;DOMAIN&gt;</code> is not a valid DNS name. Domains may not be more than 253 characters long.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_600" href="/docs/errors/err_ngrok_600">ERR_NGROK_600</a>
      </td>
      <td class="pre-wrapped">
        Invalid ACL rule. An ACL rule must be '*' or start with 'bind:'. The bind value must match the format of a domain, address, or label. You specified: <code>&lt;RULE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_601" href="/docs/errors/err_ngrok_601">ERR_NGROK_601</a>
      </td>
      <td class="pre-wrapped">
        This credential is your tunnel token and cannot be deleted, only rotated.
        Credential ID: <code>&lt;ID&gt;</code>
        Description: <code>&lt;DESCRIPTION&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_602" href="/docs/errors/err_ngrok_602">ERR_NGROK_602</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> tunnel credentials. Please upgrade your account or contact support@ngrok.com to increase the limit.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_603" href="/docs/errors/err_ngrok_603">ERR_NGROK_603</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> API keys. Please upgrade your account or contact support@ngrok.com to increase the limit.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_604" href="/docs/errors/err_ngrok_604">ERR_NGROK_604</a>
      </td>
      <td class="pre-wrapped">
        A description is limited to <code>&lt;MAX&gt;</code> characters; you have entered <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_605" href="/docs/errors/err_ngrok_605">ERR_NGROK_605</a>
      </td>
      <td class="pre-wrapped">
        Metadata is limited to <code>&lt;MAX&gt;</code> characters; you have entered <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_606" href="/docs/errors/err_ngrok_606">ERR_NGROK_606</a>
      </td>
      <td class="pre-wrapped">
        The credentials update failed because no values were provided. Specify at least one value.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_607" href="/docs/errors/err_ngrok_607">ERR_NGROK_607</a>
      </td>
      <td class="pre-wrapped">
        SSH tunnel feature is not enabled on your account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_608" href="/docs/errors/err_ngrok_608">ERR_NGROK_608</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> SSH keys. Please upgrade your account or contact support@ngrok.com to increase the limit.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_609" href="/docs/errors/err_ngrok_609">ERR_NGROK_609</a>
      </td>
      <td class="pre-wrapped">
        The public key <code>&lt;PUBKEY&gt;</code> already exists on your account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_610" href="/docs/errors/err_ngrok_610">ERR_NGROK_610</a>
      </td>
      <td class="pre-wrapped">
        The public key <code>&lt;PUBKEY&gt;</code> is already used in a different account. Remove it from the other ngrok account or generate a new SSH key pair (hint: use ssh-keygen).
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_611" href="/docs/errors/err_ngrok_611">ERR_NGROK_611</a>
      </td>
      <td class="pre-wrapped">
        Public key is missing or empty.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_612" href="/docs/errors/err_ngrok_612">ERR_NGROK_612</a>
      </td>
      <td class="pre-wrapped">
        Invalid public key <code>&lt;PUBKEY&gt;</code>: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_613" href="/docs/errors/err_ngrok_613">ERR_NGROK_613</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> API keys.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_614" href="/docs/errors/err_ngrok_614">ERR_NGROK_614</a>
      </td>
      <td class="pre-wrapped">
        Your account is rate limited for adding <code>&lt;MAX&gt;</code> API keys per <code>&lt;INTERVAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_615" href="/docs/errors/err_ngrok_615">ERR_NGROK_615</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> tunnel credentials.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_617" href="/docs/errors/err_ngrok_617">ERR_NGROK_617</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> SSH keys.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_619" href="/docs/errors/err_ngrok_619">ERR_NGROK_619</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use this ACL rule type. You specified: <code>&lt;RULE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_620" href="/docs/errors/err_ngrok_620">ERR_NGROK_620</a>
      </td>
      <td class="pre-wrapped">
        Only Enterprise or Pay-as-you-go plans can use tunnel ACL rules.
        Your account is not authorized to use tunnel ACL rules.
        Upgrade to an Enterprise or Pay-as-you-go plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_622" href="/docs/errors/err_ngrok_622">ERR_NGROK_622</a>
      </td>
      <td class="pre-wrapped">
        Only Enterprise or Pay-as-you-go plans can use SSH ACL rules.
        Your account is not authorized to use SSH ACL rules.
        Upgrade to an Enterprise or Pay-as-you-go plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_627" href="/docs/errors/err_ngrok_627">ERR_NGROK_627</a>
      </td>
      <td class="pre-wrapped">
        The auth token is already owned by a user and cannot be re-assigned ownership.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_628" href="/docs/errors/err_ngrok_628">ERR_NGROK_628</a>
      </td>
      <td class="pre-wrapped">
        The API key is already owned by a user and cannot be re-assigned ownership.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_629" href="/docs/errors/err_ngrok_629">ERR_NGROK_629</a>
      </td>
      <td class="pre-wrapped">
        The SSH public key is already owned by a user and cannot be re-assigned ownership.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_630" href="/docs/errors/err_ngrok_630">ERR_NGROK_630</a>
      </td>
      <td class="pre-wrapped">
        You must be an admin to set credential ownership.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_631" href="/docs/errors/err_ngrok_631">ERR_NGROK_631</a>
      </td>
      <td class="pre-wrapped">
        You may specify owner_id or owner_email, but not both.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_632" href="/docs/errors/err_ngrok_632">ERR_NGROK_632</a>
      </td>
      <td class="pre-wrapped">
        You may specify owner or membership, but not both.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_633" href="/docs/errors/err_ngrok_633">ERR_NGROK_633</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to specify credential ownership.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_634" href="/docs/errors/err_ngrok_634">ERR_NGROK_634</a>
      </td>
      <td class="pre-wrapped">
        No credential owner could be determined.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_635" href="/docs/errors/err_ngrok_635">ERR_NGROK_635</a>
      </td>
      <td class="pre-wrapped">
        API access requires that the owner of the API key has write privileges.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_636" href="/docs/errors/err_ngrok_636">ERR_NGROK_636</a>
      </td>
      <td class="pre-wrapped">
        The credential owner is marked as inactive on the account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_637" href="/docs/errors/err_ngrok_637">ERR_NGROK_637</a>
      </td>
      <td class="pre-wrapped">
        This credential cannot be deleted because it is the default authtoken tied to <code>&lt;EMAIL&gt;</code>. Removing the user from this account will also delete any associated tokens.
        Credential ID: <code>&lt;ID&gt;</code>
        Description: <code>&lt;DESCRIPTION&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_638" href="/docs/errors/err_ngrok_638">ERR_NGROK_638</a>
      </td>
      <td class="pre-wrapped">
        Your account is not allowed to create credentials with pre-computed tokens. To create a new credential, omit pre-computed token field and let ngrok generate one for you. Its value will be available as part of the response.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_702" href="/docs/errors/err_ngrok_702">ERR_NGROK_702</a>
      </td>
      <td class="pre-wrapped">
        Too many connections! The tunnel session <code>&lt;SESSION&gt;</code> has violated the rate-limit policy of <code>&lt;THRESHOLD&gt;</code> connections per minute by initiating <code>&lt;COUNT&gt;</code> connections in the last <code>&lt;SECONDS&gt;</code> seconds. Please decrease your inbound connection volume or upgrade to a paid plan for additional capacity.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_703" href="/docs/errors/err_ngrok_703">ERR_NGROK_703</a>
      </td>
      <td class="pre-wrapped">
        Too many connections! The account hosting this endpoint has violated the rate-limit policy of <code>&lt;THRESHOLD&gt;</code> connections per minute by initiating <code>&lt;COUNT&gt;</code> connections in the last <code>&lt;SECONDS&gt;</code> seconds. Please decrease your inbound connection volume or upgrade your account plan for additional capacity.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_708" href="/docs/errors/err_ngrok_708">ERR_NGROK_708</a>
      </td>
      <td class="pre-wrapped">
        This URL has expired. Please sign up for a free ngrok account to create URLs that do not expire. You can also restart the ngrok agent which will create a new URL that will expire after the same amount of time.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_714" href="/docs/errors/err_ngrok_714">ERR_NGROK_714</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its simultaneous connections limit. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_715" href="/docs/errors/err_ngrok_715">ERR_NGROK_715</a>
      </td>
      <td class="pre-wrapped">
        You have exceeded your limit on connections per minute. This limit will reset within 1 minute. If you expect to continually exceed these limits, please reach out to support (support@ngrok.com)
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_716" href="/docs/errors/err_ngrok_716">ERR_NGROK_716</a>
      </td>
      <td class="pre-wrapped">
        This unauthenticated ngrok session has reached its simultaneous connections limit. Please sign up for a free account at https://ngrok.com for a higher limit. 
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_717" href="/docs/errors/err_ngrok_717">ERR_NGROK_717</a>
      </td>
      <td class="pre-wrapped">
        This unauthenticated ngrok session has reached its connection rate limit. Please sign up for a free account at https://ngrok.com for a higher limit.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_718" href="/docs/errors/err_ngrok_718">ERR_NGROK_718</a>
      </td>
      <td class="pre-wrapped">
        Your account is rate limited to <code>&lt;MAX&gt;</code> bytes incoming traffic per <code>&lt;INTERVAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_719" href="/docs/errors/err_ngrok_719">ERR_NGROK_719</a>
      </td>
      <td class="pre-wrapped">
        Unauthenticated sessions are rate limited to <code>&lt;MAX&gt;</code> bytes incoming traffic per <code>&lt;INTERVAL&gt;</code>. Please sign up for a free account at https://ngrok.com for a higher limit.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_720" href="/docs/errors/err_ngrok_720">ERR_NGROK_720</a>
      </td>
      <td class="pre-wrapped">
        Your account is rate limited to <code>&lt;MAX&gt;</code> bytes outgoing traffic per <code>&lt;INTERVAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_721" href="/docs/errors/err_ngrok_721">ERR_NGROK_721</a>
      </td>
      <td class="pre-wrapped">
        Unauthenticated sessions are rate limited to <code>&lt;MAX&gt;</code> bytes outgoing traffic per <code>&lt;INTERVAL&gt;</code>.Please sign up for a free account at https://ngrok.com for a higher limit.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_722" href="/docs/errors/err_ngrok_722">ERR_NGROK_722</a>
      </td>
      <td class="pre-wrapped">
        internal server error
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_724" href="/docs/errors/err_ngrok_724">ERR_NGROK_724</a>
      </td>
      <td class="pre-wrapped">
        No backend is available to serve requests for endpoint <code>&lt;URL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_725" href="/docs/errors/err_ngrok_725">ERR_NGROK_725</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its network bandwidth limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_726" href="/docs/errors/err_ngrok_726">ERR_NGROK_726</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its connections limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_727" href="/docs/errors/err_ngrok_727">ERR_NGROK_727</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its HTTP requests limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_728" href="/docs/errors/err_ngrok_728">ERR_NGROK_728</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its HTTP connections limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_729" href="/docs/errors/err_ngrok_729">ERR_NGROK_729</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its TCP connections limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_730" href="/docs/errors/err_ngrok_730">ERR_NGROK_730</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its TLS connections limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_731" href="/docs/errors/err_ngrok_731">ERR_NGROK_731</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its HTTPS connections limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_732" href="/docs/errors/err_ngrok_732">ERR_NGROK_732</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its traffic policy request limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_733" href="/docs/errors/err_ngrok_733">ERR_NGROK_733</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its traffic policy connection limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_734" href="/docs/errors/err_ngrok_734">ERR_NGROK_734</a>
      </td>
      <td class="pre-wrapped">
        You have exceeded your limit of <code>&lt;MAX&gt;</code> requests per <code>&lt;INTERVAL&gt;</code>. This limit will reset within 1 minute. If you expect to continually exceed these limits, please reach out to support (support@ngrok.com)
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_735" href="/docs/errors/err_ngrok_735">ERR_NGROK_735</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its Advanced traffic policy request limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_736" href="/docs/errors/err_ngrok_736">ERR_NGROK_736</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its Basic traffic policy request limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_737" href="/docs/errors/err_ngrok_737">ERR_NGROK_737</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its Enterprise traffic policy request limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_738" href="/docs/errors/err_ngrok_738">ERR_NGROK_738</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its Advanced traffic policy request limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_739" href="/docs/errors/err_ngrok_739">ERR_NGROK_739</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its Basic traffic policy connection limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_740" href="/docs/errors/err_ngrok_740">ERR_NGROK_740</a>
      </td>
      <td class="pre-wrapped">
        This ngrok account has reached its Enterprise traffic policy connection limit for the month. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_741" href="/docs/errors/err_ngrok_741">ERR_NGROK_741</a>
      </td>
      <td class="pre-wrapped">
        Internal server error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_800" href="/docs/errors/err_ngrok_800">ERR_NGROK_800</a>
      </td>
      <td class="pre-wrapped">
        Unknown stream type: <code>&lt;TYPE&gt;</code>.
        This usually indiciates a bug in the client's protocol implementation.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_801" href="/docs/errors/err_ngrok_801">ERR_NGROK_801</a>
      </td>
      <td class="pre-wrapped">
        The request payload you specified is not valid.
        This usually indiciates a bug in the client's protocol implementation.
        The parsing error encountered was:
        <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_802" href="/docs/errors/err_ngrok_802">ERR_NGROK_802</a>
      </td>
      <td class="pre-wrapped">
        internal server error
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_803" href="/docs/errors/err_ngrok_803">ERR_NGROK_803</a>
      </td>
      <td class="pre-wrapped">
        The server process is shutting down and refusing new requests.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_804" href="/docs/errors/err_ngrok_804">ERR_NGROK_804</a>
      </td>
      <td class="pre-wrapped">
        This ngrok agent does not support remote restarting: <code>&lt;REASON&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_805" href="/docs/errors/err_ngrok_805">ERR_NGROK_805</a>
      </td>
      <td class="pre-wrapped">
        This ngrok agent does not support remote stopping: <code>&lt;REASON&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_806" href="/docs/errors/err_ngrok_806">ERR_NGROK_806</a>
      </td>
      <td class="pre-wrapped">
        This ngrok agent does not support remote updating: <code>&lt;REASON&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_807" href="/docs/errors/err_ngrok_807">ERR_NGROK_807</a>
      </td>
      <td class="pre-wrapped">
        The remote ngrok agent failed to stop because of an error: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_808" href="/docs/errors/err_ngrok_808">ERR_NGROK_808</a>
      </td>
      <td class="pre-wrapped">
        The remote ngrok agent failed to restart because of an error: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_809" href="/docs/errors/err_ngrok_809">ERR_NGROK_809</a>
      </td>
      <td class="pre-wrapped">
        The remote ngrok agent failed to update because of an error: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_810" href="/docs/errors/err_ngrok_810">ERR_NGROK_810</a>
      </td>
      <td class="pre-wrapped">
        There was a networking error while trying to send this operation to the ngrok agent or trying to read the response. This usually indicates that the ngrok agent was in the process of shutting down or reconnecting, but it could also result from a networking timeout or failure. It is possible, but unlikely, that the operation succeeded.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_811" href="/docs/errors/err_ngrok_811">ERR_NGROK_811</a>
      </td>
      <td class="pre-wrapped">
        Could not negotiate a protocol version. Requested: "<code>&lt;REQUESTED&gt;</code>", Supported: <code>&lt;SUPPORTED&gt;</code>"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_812" href="/docs/errors/err_ngrok_812">ERR_NGROK_812</a>
      </td>
      <td class="pre-wrapped">
        Your request exceeded the maximum size of <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_813" href="/docs/errors/err_ngrok_813">ERR_NGROK_813</a>
      </td>
      <td class="pre-wrapped">
        Your message "<code>&lt;MESSAGE&gt;</code>"" is not supported by this version of the protocol: <code>&lt;PROTOVERSION&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1000" href="/docs/errors/err_ngrok_1000">ERR_NGROK_1000</a>
      </td>
      <td class="pre-wrapped">
        Your billing address is too long: <code>&lt;VAL&gt;</code> bytes. Max: <code>&lt;MAX&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1001" href="/docs/errors/err_ngrok_1001">ERR_NGROK_1001</a>
      </td>
      <td class="pre-wrapped">
        Your tax ID is too long: <code>&lt;VAL&gt;</code> bytes. Max: <code>&lt;MAX&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1002" href="/docs/errors/err_ngrok_1002">ERR_NGROK_1002</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> billing email addresses. Email support@ngrok.com to increase the limit
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1003" href="/docs/errors/err_ngrok_1003">ERR_NGROK_1003</a>
      </td>
      <td class="pre-wrapped">
        The billing email <code>&lt;ID&gt;</code> (<code>&lt;EMAIL&gt;</code>) may not be deleted
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1004" href="/docs/errors/err_ngrok_1004">ERR_NGROK_1004</a>
      </td>
      <td class="pre-wrapped">
        The billing email is too long: <code>&lt;VAL&gt;</code> bytes. Max: <code>&lt;MAX&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1005" href="/docs/errors/err_ngrok_1005">ERR_NGROK_1005</a>
      </td>
      <td class="pre-wrapped">
        The billing email address <code>&lt;EMAIL&gt;</code> is invalid: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1006" href="/docs/errors/err_ngrok_1006">ERR_NGROK_1006</a>
      </td>
      <td class="pre-wrapped">
        There was a problem with your credit card: <code>&lt;MSG&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1007" href="/docs/errors/err_ngrok_1007">ERR_NGROK_1007</a>
      </td>
      <td class="pre-wrapped">
        Your subscription was updated, but we failed to charge your card: <code>&lt;MSG&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1008" href="/docs/errors/err_ngrok_1008">ERR_NGROK_1008</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> billing email addresses.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1010" href="/docs/errors/err_ngrok_1010">ERR_NGROK_1010</a>
      </td>
      <td class="pre-wrapped">
        The email address "<code>&lt;EMAIL&gt;</code>" is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1011" href="/docs/errors/err_ngrok_1011">ERR_NGROK_1011</a>
      </td>
      <td class="pre-wrapped">
        Your account is currently past due. You may only enter a payment method to pay your overdue invoice or switch to the free plan.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1012" href="/docs/errors/err_ngrok_1012">ERR_NGROK_1012</a>
      </td>
      <td class="pre-wrapped">
        You may not purchase fewer licenses than users. Your account currently has <code>&lt;USERS&gt;</code> users.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1013" href="/docs/errors/err_ngrok_1013">ERR_NGROK_1013</a>
      </td>
      <td class="pre-wrapped">
        Yearly plans can only be downgraded or canceled in their final month. Try again after <code>&lt;TIMESTAMP&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1014" href="/docs/errors/err_ngrok_1014">ERR_NGROK_1014</a>
      </td>
      <td class="pre-wrapped">
        You may only purchase one license product at a time.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1015" href="/docs/errors/err_ngrok_1015">ERR_NGROK_1015</a>
      </td>
      <td class="pre-wrapped">
        You are on an old custom subscription. Please contact support@ngrok.com for help with changing your subscription.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1016" href="/docs/errors/err_ngrok_1016">ERR_NGROK_1016</a>
      </td>
      <td class="pre-wrapped">
        Cannot charge customer that has no active payment source.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1017" href="/docs/errors/err_ngrok_1017">ERR_NGROK_1017</a>
      </td>
      <td class="pre-wrapped">
        Accounts in bad standing may only switch to a free plan or update their payment method.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1018" href="/docs/errors/err_ngrok_1018">ERR_NGROK_1018</a>
      </td>
      <td class="pre-wrapped">
        You may only purchase <code>&lt;COUNT&gt;</code> licenses at the <code>&lt;TIER&gt;</code> tier.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1019" href="/docs/errors/err_ngrok_1019">ERR_NGROK_1019</a>
      </td>
      <td class="pre-wrapped">
        The <code>&lt;ADDON&gt;</code> addon is not allowed for this plan.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1020" href="/docs/errors/err_ngrok_1020">ERR_NGROK_1020</a>
      </td>
      <td class="pre-wrapped">
        Addon selections for <code>&lt;LICENSE&gt;</code> are not valid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1021" href="/docs/errors/err_ngrok_1021">ERR_NGROK_1021</a>
      </td>
      <td class="pre-wrapped">
        The billing email address <code>&lt;EMAIL&gt;</code> is already added
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1022" href="/docs/errors/err_ngrok_1022">ERR_NGROK_1022</a>
      </td>
      <td class="pre-wrapped">
        Your invoice tax ID type <code>&lt;INPUT&gt;</code> is not a valid option.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1023" href="/docs/errors/err_ngrok_1023">ERR_NGROK_1023</a>
      </td>
      <td class="pre-wrapped">
        Your invoice tax ID country <code>&lt;INPUT&gt;</code> is not a valid option.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1024" href="/docs/errors/err_ngrok_1024">ERR_NGROK_1024</a>
      </td>
      <td class="pre-wrapped">
        Your invoice billing address country is too long: <code>&lt;VAL&gt;</code> bytes. Max: <code>&lt;MAX&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1025" href="/docs/errors/err_ngrok_1025">ERR_NGROK_1025</a>
      </td>
      <td class="pre-wrapped">
        Your invoice billing address state is too long: <code>&lt;VAL&gt;</code> bytes. Max: <code>&lt;MAX&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1026" href="/docs/errors/err_ngrok_1026">ERR_NGROK_1026</a>
      </td>
      <td class="pre-wrapped">
        Your invoice billing address city is too long: <code>&lt;VAL&gt;</code> bytes. Max: <code>&lt;MAX&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1027" href="/docs/errors/err_ngrok_1027">ERR_NGROK_1027</a>
      </td>
      <td class="pre-wrapped">
        Your invoice billing address line1 is too long: <code>&lt;VAL&gt;</code> bytes. Max: <code>&lt;MAX&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1028" href="/docs/errors/err_ngrok_1028">ERR_NGROK_1028</a>
      </td>
      <td class="pre-wrapped">
        Your invoice billing address line2 is too long: <code>&lt;VAL&gt;</code> bytes. Max: <code>&lt;MAX&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1029" href="/docs/errors/err_ngrok_1029">ERR_NGROK_1029</a>
      </td>
      <td class="pre-wrapped">
        Your invoice billing address postal code is too long: <code>&lt;VAL&gt;</code> bytes. Max: <code>&lt;MAX&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1030" href="/docs/errors/err_ngrok_1030">ERR_NGROK_1030</a>
      </td>
      <td class="pre-wrapped">
        Your invoice billing address name is too long: <code>&lt;VAL&gt;</code> bytes. Max: <code>&lt;MAX&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1031" href="/docs/errors/err_ngrok_1031">ERR_NGROK_1031</a>
      </td>
      <td class="pre-wrapped">
        Tax information is incomplete: Missing Type for Tax ID. Please update or remove your tax information before making any changes to your account's subscription.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1032" href="/docs/errors/err_ngrok_1032">ERR_NGROK_1032</a>
      </td>
      <td class="pre-wrapped">
        Missing Tax ID for Type. You must supply both the Tax ID and its Type or remove both
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1100" href="/docs/errors/err_ngrok_1100">ERR_NGROK_1100</a>
      </td>
      <td class="pre-wrapped">
        No public keys were sent for this SSH tunnel.
        Configure SSH with public key authentication and register your keys at <a href="https://dashboard.ngrok.com/ssh-keys">https://dashboard.ngrok.com/ssh-keys</a> 
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a> to enable SSH tunnels.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1101" href="/docs/errors/err_ngrok_1101">ERR_NGROK_1101</a>
      </td>
      <td class="pre-wrapped">
        Too many public keys sent for this SSH tunnel (sent <code>&lt;VAL&gt;</code>, max <code>&lt;MAX&gt;</code>).
        Rerun ssh with '-v' to check what keys get sent
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1102" href="/docs/errors/err_ngrok_1102">ERR_NGROK_1102</a>
      </td>
      <td class="pre-wrapped">
        Could not find your account based on the public keys sent for this SSH tunnel. Anonymous SSH tunneling is not supported.
        Check your SSH configuration and register your keys at <a href="https://dashboard.ngrok.com/ssh-keys">https://dashboard.ngrok.com/ssh-keys</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1103" href="/docs/errors/err_ngrok_1103">ERR_NGROK_1103</a>
      </td>
      <td class="pre-wrapped">
        The account <code>&lt;ACCOUNT&gt;</code> doesn't have the SSH tunneling feature enabled.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1104" href="/docs/errors/err_ngrok_1104">ERR_NGROK_1104</a>
      </td>
      <td class="pre-wrapped">
        Multiplexing is not supported with SSH tunneling
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1105" href="/docs/errors/err_ngrok_1105">ERR_NGROK_1105</a>
      </td>
      <td class="pre-wrapped">
        Only one port forward per tunneling session is supported.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1106" href="/docs/errors/err_ngrok_1106">ERR_NGROK_1106</a>
      </td>
      <td class="pre-wrapped">
        Could not find <code>&lt;USER&gt;</code> API version. Use <code>&lt;VERSION&gt;</code> as user when connecting with SSH to get the latest version.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1107" href="/docs/errors/err_ngrok_1107">ERR_NGROK_1107</a>
      </td>
      <td class="pre-wrapped">
        No tunnel type specified. The SSH command specifies the type of tunnel to create, one of 'http', 'tls', or 'tcp'.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1108" href="/docs/errors/err_ngrok_1108">ERR_NGROK_1108</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;CMD&gt;</code> is not a valid tunnel type. The SSH command must be one of 'http', 'tls', or 'tcp'.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1109" href="/docs/errors/err_ngrok_1109">ERR_NGROK_1109</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;FLAG&gt;</code> flag is not supported when using SSH tunneling
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1110" href="/docs/errors/err_ngrok_1110">ERR_NGROK_1110</a>
      </td>
      <td class="pre-wrapped">
        Error while parsing the <code>&lt;CMD&gt;</code> command:
        <code>&lt;OUT&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1111" href="/docs/errors/err_ngrok_1111">ERR_NGROK_1111</a>
      </td>
      <td class="pre-wrapped">
        Timeout while waiting for SSH session
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1112" href="/docs/errors/err_ngrok_1112">ERR_NGROK_1112</a>
      </td>
      <td class="pre-wrapped">
        Timeout while waiting for port forward request.
        Use 'ssh -R ...' option to specify your port forwarding.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1113" href="/docs/errors/err_ngrok_1113">ERR_NGROK_1113</a>
      </td>
      <td class="pre-wrapped">
        Cannot use bind port <code>&lt;PORT&gt;</code> when using <code>&lt;CMD&gt;</code> command.
        Use 'ssh -R 0:host:hostport ...' to let the server choose the remote port based on the command.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1114" href="/docs/errors/err_ngrok_1114">ERR_NGROK_1114</a>
      </td>
      <td class="pre-wrapped">
        Cannot use bind address '-R <code>&lt;HOST&gt;</code>:<code>&lt;PORT&gt;</code>:' with '-remote-addr=<code>&lt;ADDR&gt;</code> parameter.
        You may either specify -R <code>&lt;HOST&gt;</code>:<code>&lt;PORT&gt;</code>:' or -remote-addr=<code>&lt;ADDR&gt;</code> but not both.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1115" href="/docs/errors/err_ngrok_1115">ERR_NGROK_1115</a>
      </td>
      <td class="pre-wrapped">
        Cannot request a custom TCP port '-R <code>&lt;PORT&gt;</code>:' with '-remote-addr=<code>&lt;ADDR&gt;</code> parameter.
        Remove -remote-addr and specify 'ssh -R address:port:host:port' to bind on your reserved address.
        Example: ssh -R 0:localhost:22 ...
        Example: ssh -R 1.tcp.eu.ngrok.io:21412:localhost:22 ...
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1116" href="/docs/errors/err_ngrok_1116">ERR_NGROK_1116</a>
      </td>
      <td class="pre-wrapped">
        Cannot request a custom bind port '-R <code>&lt;PORT&gt;</code>:'.
        You may either specify a reserved TCP address with '-R address:port:' or you may let the server choose a random remote port for you with '-R 0:'.
        Example: ssh -R 0:localhost:22 ...
        Example: ssh -R 1.tcp.eu.ngrok.io:21412:localhost:22 ...
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1117" href="/docs/errors/err_ngrok_1117">ERR_NGROK_1117</a>
      </td>
      <td class="pre-wrapped">
        Cannot request a random port with a custom bind address <code>&lt;ADDR&gt;</code> in '-R <code>&lt;ADDR&gt;</code>:0:'.
        You may either specify a reserved TCP address with '-R address:port:' or you may let the server choose a random remote port for you with '-R 0:'.
        Example: ssh -R 0:localhost:22 ...
        Example: ssh -R 1.tcp.eu.ngrok.io:21412:localhost:22 ...
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1118" href="/docs/errors/err_ngrok_1118">ERR_NGROK_1118</a>
      </td>
      <td class="pre-wrapped">
        Cannot use binding address '-R <code>&lt;ADDR&gt;</code>:' with '-hostname=<code>&lt;HOSTNAME&gt;</code> parameter.
        You may either specify '-R <code>&lt;ADDR&gt;</code>:' or '-hostname=<code>&lt;HOSTNAME&gt;</code> but not both.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1119" href="/docs/errors/err_ngrok_1119">ERR_NGROK_1119</a>
      </td>
      <td class="pre-wrapped">
        Cannot use binding address '-R <code>&lt;ADDR&gt;</code>:' with '-subdomain=<code>&lt;SUBDOMAIN&gt;</code> parameter.
        You may either specify binding address '-R <code>&lt;ADDR&gt;</code>:' or '-subdomain=<code>&lt;SUBDOMAIN&gt;</code> but not both.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1120" href="/docs/errors/err_ngrok_1120">ERR_NGROK_1120</a>
      </td>
      <td class="pre-wrapped">
        Cannot use '-hostname=<code>&lt;HOSTNAME&gt;</code> with '-subdomain=<code>&lt;SUBDOMAIN&gt;</code> parameter.
        You may either specify '-hostname=<code>&lt;HOSTNAME&gt;</code> or '-subdomain=<code>&lt;SUBDOMAIN&gt;</code> but not both.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1121" href="/docs/errors/err_ngrok_1121">ERR_NGROK_1121</a>
      </td>
      <td class="pre-wrapped">
        SSH sessions do not support update.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1122" href="/docs/errors/err_ngrok_1122">ERR_NGROK_1122</a>
      </td>
      <td class="pre-wrapped">
        SSH sessions do not support restart.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1123" href="/docs/errors/err_ngrok_1123">ERR_NGROK_1123</a>
      </td>
      <td class="pre-wrapped">
        Tunnel '-proxy-proto=<code>&lt;PROXYPROTO&gt;</code> specifies invalid protocol version.
        Use one of version '1' or '2' to enable proxy proto.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1200" href="/docs/errors/err_ngrok_1200">ERR_NGROK_1200</a>
      </td>
      <td class="pre-wrapped">
        Authorized account's primary email <code>&lt;EMAIL&gt;</code> is not verified.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1202" href="/docs/errors/err_ngrok_1202">ERR_NGROK_1202</a>
      </td>
      <td class="pre-wrapped">
        You can't enable Google OAuth without first connecting a Google Apps login.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1203" href="/docs/errors/err_ngrok_1203">ERR_NGROK_1203</a>
      </td>
      <td class="pre-wrapped">
        You can't enable Google OAuth because your connected Google login does not have a Google Apps domain.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1204" href="/docs/errors/err_ngrok_1204">ERR_NGROK_1204</a>
      </td>
      <td class="pre-wrapped">
        You can't delete your payment method while you have an active subscription.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1205" href="/docs/errors/err_ngrok_1205">ERR_NGROK_1205</a>
      </td>
      <td class="pre-wrapped">
        You failed to solve the CAPTCHA, please try again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1207" href="/docs/errors/err_ngrok_1207">ERR_NGROK_1207</a>
      </td>
      <td class="pre-wrapped">
        Cannot switch to an account you are not a member of.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1208" href="/docs/errors/err_ngrok_1208">ERR_NGROK_1208</a>
      </td>
      <td class="pre-wrapped">
        You failed to solve the CAPTCHA, please try again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1210" href="/docs/errors/err_ngrok_1210">ERR_NGROK_1210</a>
      </td>
      <td class="pre-wrapped">
        Invalid subscription interval <code>&lt;INTERVAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1211" href="/docs/errors/err_ngrok_1211">ERR_NGROK_1211</a>
      </td>
      <td class="pre-wrapped">
        Warning: Your IP does not match the IP Policy for this Account. When IP Restrictions are enforced you will not be able to access the dashboard.  Please authenticate from an IP in the correct range or update your IP Restrictions.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1212" href="/docs/errors/err_ngrok_1212">ERR_NGROK_1212</a>
      </td>
      <td class="pre-wrapped">
        Your IP does not match the IP Policy for this Account.  Please authenticate from an IP in the correct range or update your IP Restrictions from the ngrok dashboard. <a href="https://dashboard.ngrok.com/ip-restrictions">https://dashboard.ngrok.com/ip-restrictions</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1213" href="/docs/errors/err_ngrok_1213">ERR_NGROK_1213</a>
      </td>
      <td class="pre-wrapped">
        A new version of the ngrok dashboard is required to continue. Please refresh the page to update.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1214" href="/docs/errors/err_ngrok_1214">ERR_NGROK_1214</a>
      </td>
      <td class="pre-wrapped">
        Your account is rate limited to <code>&lt;MAX&gt;</code> requests per <code>&lt;INTERVAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1215" href="/docs/errors/err_ngrok_1215">ERR_NGROK_1215</a>
      </td>
      <td class="pre-wrapped">
        The user <code>&lt;EMAIL&gt;</code> does not have permissions to invite other team members.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1216" href="/docs/errors/err_ngrok_1216">ERR_NGROK_1216</a>
      </td>
      <td class="pre-wrapped">
        The user <code>&lt;EMAIL&gt;</code> does not have permissions to manage team members.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1217" href="/docs/errors/err_ngrok_1217">ERR_NGROK_1217</a>
      </td>
      <td class="pre-wrapped">
        The user <code>&lt;EMAIL&gt;</code> does not have permissions to view billing information.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1218" href="/docs/errors/err_ngrok_1218">ERR_NGROK_1218</a>
      </td>
      <td class="pre-wrapped">
        The user <code>&lt;EMAIL&gt;</code> does not have permissions to change billing information.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1219" href="/docs/errors/err_ngrok_1219">ERR_NGROK_1219</a>
      </td>
      <td class="pre-wrapped">
        The user <code>&lt;EMAIL&gt;</code> does not have permissions to change developer resources.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1220" href="/docs/errors/err_ngrok_1220">ERR_NGROK_1220</a>
      </td>
      <td class="pre-wrapped">
        The user <code>&lt;EMAIL&gt;</code> does not have administrative privileges which are required to perform this operation.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1221" href="/docs/errors/err_ngrok_1221">ERR_NGROK_1221</a>
      </td>
      <td class="pre-wrapped">
        Refusing to perform an account delete operation because you are using the dashboard with a different active account than the one you requested deletion for.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1222" href="/docs/errors/err_ngrok_1222">ERR_NGROK_1222</a>
      </td>
      <td class="pre-wrapped">
        You are not a member of any account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1223" href="/docs/errors/err_ngrok_1223">ERR_NGROK_1223</a>
      </td>
      <td class="pre-wrapped">
        You are logged out, please log back in.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1224" href="/docs/errors/err_ngrok_1224">ERR_NGROK_1224</a>
      </td>
      <td class="pre-wrapped">
        You are no longer a member of the current account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1225" href="/docs/errors/err_ngrok_1225">ERR_NGROK_1225</a>
      </td>
      <td class="pre-wrapped">
        You must accept the terms of service and privacy policy to sign up for ngrok.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1226" href="/docs/errors/err_ngrok_1226">ERR_NGROK_1226</a>
      </td>
      <td class="pre-wrapped">
        You are disallowed from creating an ngrok account due to violation of the terms of service.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1227" href="/docs/errors/err_ngrok_1227">ERR_NGROK_1227</a>
      </td>
      <td class="pre-wrapped">
        The number of login attempts with this email has been exceeded, please try again later.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1228" href="/docs/errors/err_ngrok_1228">ERR_NGROK_1228</a>
      </td>
      <td class="pre-wrapped">
        You are no longer an active member of the current account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1229" href="/docs/errors/err_ngrok_1229">ERR_NGROK_1229</a>
      </td>
      <td class="pre-wrapped">
        The resource you are attempting to access requires MFA, please authenticate via a second factor.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1230" href="/docs/errors/err_ngrok_1230">ERR_NGROK_1230</a>
      </td>
      <td class="pre-wrapped">
        We do not allow sign ups from your location. Your location was determined using your IP address.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1231" href="/docs/errors/err_ngrok_1231">ERR_NGROK_1231</a>
      </td>
      <td class="pre-wrapped">
        The email address <code>&lt;EMAIL&gt;</code> already has an active, unredeemed invitation to this account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1232" href="/docs/errors/err_ngrok_1232">ERR_NGROK_1232</a>
      </td>
      <td class="pre-wrapped">
        We do not allow sign ups from anonymous proxies such as Tor.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1400" href="/docs/errors/err_ngrok_1400">ERR_NGROK_1400</a>
      </td>
      <td class="pre-wrapped">
        The IP Policy update failed because no values were provided. Specify at least one value
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1401" href="/docs/errors/err_ngrok_1401">ERR_NGROK_1401</a>
      </td>
      <td class="pre-wrapped">
        The IP Policy Rule update failed because no values were provided. Specify at least one value
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1402" href="/docs/errors/err_ngrok_1402">ERR_NGROK_1402</a>
      </td>
      <td class="pre-wrapped">
        IP Policy not found
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1404" href="/docs/errors/err_ngrok_1404">ERR_NGROK_1404</a>
      </td>
      <td class="pre-wrapped">
        IP Policy Rule not found
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1405" href="/docs/errors/err_ngrok_1405">ERR_NGROK_1405</a>
      </td>
      <td class="pre-wrapped">
        Required parameter is missing. Please specify <code>&lt;PARAM&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1406" href="/docs/errors/err_ngrok_1406">ERR_NGROK_1406</a>
      </td>
      <td class="pre-wrapped">
        Invalid CIDR: <code>&lt;CIDR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1407" href="/docs/errors/err_ngrok_1407">ERR_NGROK_1407</a>
      </td>
      <td class="pre-wrapped">
        IP Policy with name <code>&lt;NAME&gt;</code> already exists
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1408" href="/docs/errors/err_ngrok_1408">ERR_NGROK_1408</a>
      </td>
      <td class="pre-wrapped">
        IP Policy Rule with CIDR <code>&lt;CIDR&gt;</code> already exists
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1409" href="/docs/errors/err_ngrok_1409">ERR_NGROK_1409</a>
      </td>
      <td class="pre-wrapped">
        IP Policy Rule CIDR <code>&lt;CIDR&gt;</code> must be specified using the lowest IP address in the range. Did you mean <code>&lt;SUGGESTION&gt;</code>?
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1410" href="/docs/errors/err_ngrok_1410">ERR_NGROK_1410</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to a maximum of <code>&lt;MAX&gt;</code> IP Policies
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1411" href="/docs/errors/err_ngrok_1411">ERR_NGROK_1411</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to a maximum of <code>&lt;MAX&gt;</code> IP Policy rules for each IP Policy
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1412" href="/docs/errors/err_ngrok_1412">ERR_NGROK_1412</a>
      </td>
      <td class="pre-wrapped">
        Only Pro, Enterprise, or Pay-as-you-go accounts can use per-tunnel IP policies.
        Your account is not authorized to use per-tunnel IP policies. 
        Upgrade to a Pro, Enterprise, or Pay-as-you-go plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1413" href="/docs/errors/err_ngrok_1413">ERR_NGROK_1413</a>
      </td>
      <td class="pre-wrapped">
        IP Policy Rule is missing a network mask. Consider using <code>&lt;IP&gt;</code>/<code>&lt;BITS&gt;</code> if you want to target a single host IP.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1414" href="/docs/errors/err_ngrok_1414">ERR_NGROK_1414</a>
      </td>
      <td class="pre-wrapped">
        The provided ip_policy_id is invalid. Please check the value given with your request.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1415" href="/docs/errors/err_ngrok_1415">ERR_NGROK_1415</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> IP Policies.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1417" href="/docs/errors/err_ngrok_1417">ERR_NGROK_1417</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> rules per IP Policy.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1419" href="/docs/errors/err_ngrok_1419">ERR_NGROK_1419</a>
      </td>
      <td class="pre-wrapped">
        Cannot delete only rule (<code>&lt;RULEID&gt;</code>) in use by dashboard IP Restriction (<code>&lt;RESTRICTIONID&gt;</code>). Please detach this IP Policy from IP Restriction before deleting this rule.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1420" href="/docs/errors/err_ngrok_1420">ERR_NGROK_1420</a>
      </td>
      <td class="pre-wrapped">
        Cannot delete IP Policy (<code>&lt;POLICYID&gt;</code>) because it is referenced by one or more IP Restrictions: (<code>&lt;RESTRICTIONIDS&gt;</code>). Please detach this IP Policy from all IP Restrictions before deleting it.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1421" href="/docs/errors/err_ngrok_1421">ERR_NGROK_1421</a>
      </td>
      <td class="pre-wrapped">
        The IP Policy Rule description exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1422" href="/docs/errors/err_ngrok_1422">ERR_NGROK_1422</a>
      </td>
      <td class="pre-wrapped">
        An IP Policy Rule must have an 'action' of either 'allow' or 'deny'.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1423" href="/docs/errors/err_ngrok_1423">ERR_NGROK_1423</a>
      </td>
      <td class="pre-wrapped">
        An action should now be specified on the IP Policy Rule, not IP Policy. Please contact ngrok support if you need additional time to migrate.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1500" href="/docs/errors/err_ngrok_1500">ERR_NGROK_1500</a>
      </td>
      <td class="pre-wrapped">
        Maintenance in progress, operations for some resources are read-only
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1501" href="/docs/errors/err_ngrok_1501">ERR_NGROK_1501</a>
      </td>
      <td class="pre-wrapped">
        Maintenance in progress, some operations are unavailable
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1600" href="/docs/errors/err_ngrok_1600">ERR_NGROK_1600</a>
      </td>
      <td class="pre-wrapped">
        Endpoint configuration not found
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1601" href="/docs/errors/err_ngrok_1601">ERR_NGROK_1601</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration ID
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1602" href="/docs/errors/err_ngrok_1602">ERR_NGROK_1602</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration request
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1607" href="/docs/errors/err_ngrok_1607">ERR_NGROK_1607</a>
      </td>
      <td class="pre-wrapped">
        The IP Policy ID <code>&lt;ID&gt;</code> specified for the IP Policy module does not exist.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1608" href="/docs/errors/err_ngrok_1608">ERR_NGROK_1608</a>
      </td>
      <td class="pre-wrapped">
        Endpoint Configurations are deprecated. Please use Cloud Edges instead.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1609" href="/docs/errors/err_ngrok_1609">ERR_NGROK_1609</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to a maximum of <code>&lt;MAX&gt;</code> endpoint configurations.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1611" href="/docs/errors/err_ngrok_1611">ERR_NGROK_1611</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, circuit breaker error threshold percentage must be between 0.0 and 1.0 inclusive, was <code>&lt;VAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1612" href="/docs/errors/err_ngrok_1612">ERR_NGROK_1612</a>
      </td>
      <td class="pre-wrapped">
        The auth provider <code>&lt;VAL&gt;</code> does not exist. Specify an auth provider ID or the special value 'agent'.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1613" href="/docs/errors/err_ngrok_1613">ERR_NGROK_1613</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration exceeds the max number of ip policies. You specified <code>&lt;VAL&gt;</code>, the maximum is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1614" href="/docs/errors/err_ngrok_1614">ERR_NGROK_1614</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration TLS CA certificate size exceeds the max. You specified <code>&lt;VAL&gt;</code>, the maximum is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1615" href="/docs/errors/err_ngrok_1615">ERR_NGROK_1615</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration exceeds the max number of headers. You specified <code>&lt;VAL&gt;</code>, the maximum is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1616" href="/docs/errors/err_ngrok_1616">ERR_NGROK_1616</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, circuit breaker tripped duration must be greater than 0, was <code>&lt;VAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1617" href="/docs/errors/err_ngrok_1617">ERR_NGROK_1617</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, circuit breaker rolling window must be greater than 0, was <code>&lt;VAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1618" href="/docs/errors/err_ngrok_1618">ERR_NGROK_1618</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, circuit breaker num buckets must be greater than 0 and less than <code>&lt;MAX&gt;</code>, was <code>&lt;VAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1619" href="/docs/errors/err_ngrok_1619">ERR_NGROK_1619</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration could not be deleted because it is still referenced by at least one reserved domain or reserved address.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1620" href="/docs/errors/err_ngrok_1620">ERR_NGROK_1620</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration must specify a type.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1621" href="/docs/errors/err_ngrok_1621">ERR_NGROK_1621</a>
      </td>
      <td class="pre-wrapped">
        The module <code>&lt;NAME&gt;</code> is not supported on an endpoint configuration of type <code>&lt;TYPE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1622" href="/docs/errors/err_ngrok_1622">ERR_NGROK_1622</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;NAME&gt;</code> is not a valid endpoint configuration type. Must be one of 'http', 'https', 'tcp'.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1623" href="/docs/errors/err_ngrok_1623">ERR_NGROK_1623</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;KEY&gt;</code> is not a valid HTTP header name because it contains at least one invalid character.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1624" href="/docs/errors/err_ngrok_1624">ERR_NGROK_1624</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;VAL&gt;</code> is not a valid HTTP header value: <code>&lt;REASON&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1625" href="/docs/errors/err_ngrok_1625">ERR_NGROK_1625</a>
      </td>
      <td class="pre-wrapped">
        You must specify at least one IP policy in the IP Policy module.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1626" href="/docs/errors/err_ngrok_1626">ERR_NGROK_1626</a>
      </td>
      <td class="pre-wrapped">
        SNS webhook validation does not accept a secret.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1627" href="/docs/errors/err_ngrok_1627">ERR_NGROK_1627</a>
      </td>
      <td class="pre-wrapped">
        Webhook validation for <code>&lt;T&gt;</code> requires a secret.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1628" href="/docs/errors/err_ngrok_1628">ERR_NGROK_1628</a>
      </td>
      <td class="pre-wrapped">
        There were validation errors while saving the endpoint configuration:<code>&lt;ERRS&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1629" href="/docs/errors/err_ngrok_1629">ERR_NGROK_1629</a>
      </td>
      <td class="pre-wrapped">
        You must specify a supported provider name.  Supported providers: [<code>&lt;T&gt;</code>]
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1630" href="/docs/errors/err_ngrok_1630">ERR_NGROK_1630</a>
      </td>
      <td class="pre-wrapped">
        Webhook provider <code>&lt;T&gt;</code> is not supported.  Supported providers: [<code>&lt;TYPE&gt;</code>]
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1631" href="/docs/errors/err_ngrok_1631">ERR_NGROK_1631</a>
      </td>
      <td class="pre-wrapped">
        Endpoint Configurations are deprecated. Please use Cloud Edges instead.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1632" href="/docs/errors/err_ngrok_1632">ERR_NGROK_1632</a>
      </td>
      <td class="pre-wrapped">
        You may not configure the TLS termination parameter <code>&lt;PARAMETER&gt;</code> when the HTTPS module disables TLS termination.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1633" href="/docs/errors/err_ngrok_1633">ERR_NGROK_1633</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, unmanaged provider configurations must specify a client ID and a client secret.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1634" href="/docs/errors/err_ngrok_1634">ERR_NGROK_1634</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, custom OAuth scopes on a managed OAuth application are not allowed.  Define a custom OAuth application to use custom scopes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1635" href="/docs/errors/err_ngrok_1635">ERR_NGROK_1635</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth auth check interval must be at least <code>&lt;MIN&gt;</code>, was <code>&lt;ACTUAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1636" href="/docs/errors/err_ngrok_1636">ERR_NGROK_1636</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth may only have one provider configuration but multiple are defined: [<code>&lt;PROVIDER_NAMES&gt;</code>].
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1637" href="/docs/errors/err_ngrok_1637">ERR_NGROK_1637</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth does not define any provider configurations but one is required.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1638" href="/docs/errors/err_ngrok_1638">ERR_NGROK_1638</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> requires at least the <code>&lt;SCOPE&gt;</code> scope to authenticate by <code>&lt;AUTH_FEATURE&gt;</code>.'
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1639" href="/docs/errors/err_ngrok_1639">ERR_NGROK_1639</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> contains an invalid email domain: <code>&lt;NAME&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1640" href="/docs/errors/err_ngrok_1640">ERR_NGROK_1640</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth GitHub Teams must be listed as either numerical ids or in the format 'org_slug/team_slug', <code>&lt;TEAM&gt;</code> does not match either format.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1641" href="/docs/errors/err_ngrok_1641">ERR_NGROK_1641</a>
      </td>
      <td class="pre-wrapped">
        Endpoint Configurations are deprecated. Please use Cloud Edges instead.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1642" href="/docs/errors/err_ngrok_1642">ERR_NGROK_1642</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth cookie prefix <code>&lt;PREFIX&gt;</code> must consist of only alphanumeric characters with periods.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1643" href="/docs/errors/err_ngrok_1643">ERR_NGROK_1643</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> contains an invalid email address, <code>&lt;NAME&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1644" href="/docs/errors/err_ngrok_1644">ERR_NGROK_1644</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> contains an email domain with invalid punycode: <code>&lt;NAME&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1645" href="/docs/errors/err_ngrok_1645">ERR_NGROK_1645</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> contains an email address with invalid punycode: <code>&lt;NAME&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1646" href="/docs/errors/err_ngrok_1646">ERR_NGROK_1646</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> email addresses must be unique, but a duplicate is present: <code>&lt;DUPLICATE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1647" href="/docs/errors/err_ngrok_1647">ERR_NGROK_1647</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> email domains must be unique, but a duplicate is present: <code>&lt;DUPLICATE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1648" href="/docs/errors/err_ngrok_1648">ERR_NGROK_1648</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> teams must be unique, but a duplicate is present: <code>&lt;DUPLICATE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1649" href="/docs/errors/err_ngrok_1649">ERR_NGROK_1649</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> organizations must be unique, but a duplicate is present: <code>&lt;DUPLICATE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1650" href="/docs/errors/err_ngrok_1650">ERR_NGROK_1650</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> groups must be unique, but a duplicate is present: <code>&lt;DUPLICATE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1651" href="/docs/errors/err_ngrok_1651">ERR_NGROK_1651</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> email addresses must not contain empty values
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1652" href="/docs/errors/err_ngrok_1652">ERR_NGROK_1652</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> email domains must not contain empty values
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1653" href="/docs/errors/err_ngrok_1653">ERR_NGROK_1653</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> teams must not contain empty values
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1654" href="/docs/errors/err_ngrok_1654">ERR_NGROK_1654</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> organizations must not contain empty values
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1655" href="/docs/errors/err_ngrok_1655">ERR_NGROK_1655</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, OAuth provider <code>&lt;PROVIDER&gt;</code> groups must not contain empty values
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1656" href="/docs/errors/err_ngrok_1656">ERR_NGROK_1656</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration exceeds the maximum number of OAuth scopes. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1657" href="/docs/errors/err_ngrok_1657">ERR_NGROK_1657</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration exceeds the maximum number of OAuth Github teams. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1658" href="/docs/errors/err_ngrok_1658">ERR_NGROK_1658</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration exceeds the maximum number of OAuth Github orgs. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1659" href="/docs/errors/err_ngrok_1659">ERR_NGROK_1659</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration exceeds the maximum number of OAuth Google groups. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1660" href="/docs/errors/err_ngrok_1660">ERR_NGROK_1660</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration exceeds the maximum number of OAuth emails. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1661" href="/docs/errors/err_ngrok_1661">ERR_NGROK_1661</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration exceeds the maximum number of OAuth domains. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1662" href="/docs/errors/err_ngrok_1662">ERR_NGROK_1662</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration specifies the following modules which may not be enabled when TLS is not terminated: <code>&lt;MODULE_NAMES&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1667" href="/docs/errors/err_ngrok_1667">ERR_NGROK_1667</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, email addresses must be lowercase but <code>&lt;EMAIL&gt;</code> is not.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1668" href="/docs/errors/err_ngrok_1668">ERR_NGROK_1668</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, email domains must be lowercase but <code>&lt;DOMAIN&gt;</code> is not.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1669" href="/docs/errors/err_ngrok_1669">ERR_NGROK_1669</a>
      </td>
      <td class="pre-wrapped">
        Duplicate 'add' header, <code>&lt;HEADER&gt;</code> was provided twice with different casings: <code>&lt;CASE_ONE&gt;</code> and <code>&lt;CASE_TWO&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1670" href="/docs/errors/err_ngrok_1670">ERR_NGROK_1670</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> endpoint configurations.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1672" href="/docs/errors/err_ngrok_1672">ERR_NGROK_1672</a>
      </td>
      <td class="pre-wrapped">
        The CA ID <code>&lt;ID&gt;</code> specified for the Mutual TLS module does not exist.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1673" href="/docs/errors/err_ngrok_1673">ERR_NGROK_1673</a>
      </td>
      <td class="pre-wrapped">
        Description is limited to <code>&lt;MAX&gt;</code> characters; you have entered <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1674" href="/docs/errors/err_ngrok_1674">ERR_NGROK_1674</a>
      </td>
      <td class="pre-wrapped">
        Metadata is limited to <code>&lt;MAX&gt;</code> characters; you have entered <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1675" href="/docs/errors/err_ngrok_1675">ERR_NGROK_1675</a>
      </td>
      <td class="pre-wrapped">
        The Mutual TLS configurations exceeds the limit of <code>&lt;LIMIT&gt;</code> attached certificate authorities.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1679" href="/docs/errors/err_ngrok_1679">ERR_NGROK_1679</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration specifies conflicting authentication modules. Only one of SAML, OIDC, OAuth or Basic Auth may be enabled.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1680" href="/docs/errors/err_ngrok_1680">ERR_NGROK_1680</a>
      </td>
      <td class="pre-wrapped">
        The SAML metadata exceeds the maximum length of <code>&lt;MAX&gt;</code> bytes, got <code>&lt;NBYTES&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1681" href="/docs/errors/err_ngrok_1681">ERR_NGROK_1681</a>
      </td>
      <td class="pre-wrapped">
        You must specify only the SAML IdP metadata or the SAML IdP metadata URL, but not both.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1682" href="/docs/errors/err_ngrok_1682">ERR_NGROK_1682</a>
      </td>
      <td class="pre-wrapped">
        Failed to connect to IdP metadata URL <code>&lt;MDURL&gt;</code>: <code>&lt;ERR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1683" href="/docs/errors/err_ngrok_1683">ERR_NGROK_1683</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse the SAML IdP metadata: <code>&lt;ERR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1684" href="/docs/errors/err_ngrok_1684">ERR_NGROK_1684</a>
      </td>
      <td class="pre-wrapped">
        Received unexpected status code <code>&lt;STATUSCODE&gt;</code> while fetching metadata URL <code>&lt;MDURL&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1685" href="/docs/errors/err_ngrok_1685">ERR_NGROK_1685</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse the SAML IdP metadata fetched from URL <code>&lt;MDURL&gt;</code>: <code>&lt;ERR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1686" href="/docs/errors/err_ngrok_1686">ERR_NGROK_1686</a>
      </td>
      <td class="pre-wrapped">
        Encountered an error while reading the response body from the IdP metadata URL <code>&lt;MDURL&gt;</code>: <code>&lt;ERR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1687" href="/docs/errors/err_ngrok_1687">ERR_NGROK_1687</a>
      </td>
      <td class="pre-wrapped">
        The specified OIDC issuer has a maximum length of 255 bytes. The specified value is <code>&lt;N&gt;</code> bytes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1688" href="/docs/errors/err_ngrok_1688">ERR_NGROK_1688</a>
      </td>
      <td class="pre-wrapped">
        The OIDC issuer property is required.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1689" href="/docs/errors/err_ngrok_1689">ERR_NGROK_1689</a>
      </td>
      <td class="pre-wrapped">
        The OIDC Client ID property is required.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1690" href="/docs/errors/err_ngrok_1690">ERR_NGROK_1690</a>
      </td>
      <td class="pre-wrapped">
        The OIDC Client Secret property is required.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1691" href="/docs/errors/err_ngrok_1691">ERR_NGROK_1691</a>
      </td>
      <td class="pre-wrapped">
        One of the SAML IdP Metadata or IdP Metadata URL properties must be specified.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1692" href="/docs/errors/err_ngrok_1692">ERR_NGROK_1692</a>
      </td>
      <td class="pre-wrapped">
        Invalid endpoint configuration, session inactivity timeout cannot be more than one year, was <code>&lt;ACTUAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1693" href="/docs/errors/err_ngrok_1693">ERR_NGROK_1693</a>
      </td>
      <td class="pre-wrapped">
        "<code>&lt;FORMAT&gt;</code>" is not a supported SAML nameid format.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1694" href="/docs/errors/err_ngrok_1694">ERR_NGROK_1694</a>
      </td>
      <td class="pre-wrapped">
        Mutual TLS at edge requires TLS termination at edge.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1695" href="/docs/errors/err_ngrok_1695">ERR_NGROK_1695</a>
      </td>
      <td class="pre-wrapped">
        No PEM data found in provided mutual TLS CA.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1696" href="/docs/errors/err_ngrok_1696">ERR_NGROK_1696</a>
      </td>
      <td class="pre-wrapped">
        Certificate provided for mutual TLS is not a valid CA.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1697" href="/docs/errors/err_ngrok_1697">ERR_NGROK_1697</a>
      </td>
      <td class="pre-wrapped">
        The header beginning with <code>&lt;PREFIX&gt;</code>...' exceeds the maximum header name length of <code>&lt;BYTES&gt;</code> bytes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1698" href="/docs/errors/err_ngrok_1698">ERR_NGROK_1698</a>
      </td>
      <td class="pre-wrapped">
        The header value for <code>&lt;HEADERKEY&gt;</code> beginning with <code>&lt;PREFIX&gt;</code>...' exceeds the maximum header value length of <code>&lt;BYTES&gt;</code> bytes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1699" href="/docs/errors/err_ngrok_1699">ERR_NGROK_1699</a>
      </td>
      <td class="pre-wrapped">
        The sendgrid verification key is not a base64 encoded ecdsa public key. The following error was encountered while trying to parse it: "<code>&lt;ERROR&gt;</code>"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1700" href="/docs/errors/err_ngrok_1700">ERR_NGROK_1700</a>
      </td>
      <td class="pre-wrapped">
        Only Enterprise accounts can use session operations.
        Your account is not authorized to use session operations. 
        Upgrade to an Enterprise or Pay-as-you-go plan at <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1701" href="/docs/errors/err_ngrok_1701">ERR_NGROK_1701</a>
      </td>
      <td class="pre-wrapped">
        Only Enterprise accounts can stop or restart the agent.
        Your account is not authorized to stop or restart the agent. 
        Upgrade to an Enterprise or Pay-as-you-go plan at <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1702" href="/docs/errors/err_ngrok_1702">ERR_NGROK_1702</a>
      </td>
      <td class="pre-wrapped">
        Only Enterprise or Pay-as-you-go accounts can update the agent.
        Your account is not authorized to update the agent. 
        Upgrade to an Enterprise or Pay-as-you-go plan at <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1800" href="/docs/errors/err_ngrok_1800">ERR_NGROK_1800</a>
      </td>
      <td class="pre-wrapped">
        You have reached the maximum of <code>&lt;MAX&gt;</code> IP Policies on a restriction.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1801" href="/docs/errors/err_ngrok_1801">ERR_NGROK_1801</a>
      </td>
      <td class="pre-wrapped">
        Invalid IP Restriction. The policy <code>&lt;POLICY_ID&gt;</code> does not exist on your account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1802" href="/docs/errors/err_ngrok_1802">ERR_NGROK_1802</a>
      </td>
      <td class="pre-wrapped">
        Only one IP Restriction is allowed per type. Consider either deleting the existing <code>&lt;TYPE&gt;</code> restriction first, or updating it instead.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1803" href="/docs/errors/err_ngrok_1803">ERR_NGROK_1803</a>
      </td>
      <td class="pre-wrapped">
        The provided IP Restriction type "<code>&lt;TYPE&gt;</code>" is invalid. Valid types: <code>&lt;SUPPORTED&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1804" href="/docs/errors/err_ngrok_1804">ERR_NGROK_1804</a>
      </td>
      <td class="pre-wrapped">
        An IP Restriction must specify at least one IP Policy.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1805" href="/docs/errors/err_ngrok_1805">ERR_NGROK_1805</a>
      </td>
      <td class="pre-wrapped">
        Only Pro or Enterprise accounts can use dashboard IP restrictions.
        Your account is not authorized to use dashboard IP restrictions.  
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1806" href="/docs/errors/err_ngrok_1806">ERR_NGROK_1806</a>
      </td>
      <td class="pre-wrapped">
        Only Pro or Enterprise accounts can use API IP restrictions.
        Your account is not authorized to use API IP restrictions.  
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1807" href="/docs/errors/err_ngrok_1807">ERR_NGROK_1807</a>
      </td>
      <td class="pre-wrapped">
        Only Pro or Enterprise accounts can use agent IP restrictions.
        Your account is not authorized to use agent IP restrictions.  
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1808" href="/docs/errors/err_ngrok_1808">ERR_NGROK_1808</a>
      </td>
      <td class="pre-wrapped">
        Only Pro, Enterprise, or Pay-as-you-go accounts can use endpoints IP restrictions.
        Your account is not authorized to use endpoints IP restrictions.  
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1900" href="/docs/errors/err_ngrok_1900">ERR_NGROK_1900</a>
      </td>
      <td class="pre-wrapped">
        The provided certificate is in an unknown or unsupported format. The error encountered while parsing was: "<code>&lt;ERROR&gt;</code>"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1901" href="/docs/errors/err_ngrok_1901">ERR_NGROK_1901</a>
      </td>
      <td class="pre-wrapped">
        No PEM-encoded private key was found in the creation request.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1902" href="/docs/errors/err_ngrok_1902">ERR_NGROK_1902</a>
      </td>
      <td class="pre-wrapped">
        The provided private key is encrypted.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1903" href="/docs/errors/err_ngrok_1903">ERR_NGROK_1903</a>
      </td>
      <td class="pre-wrapped">
        The provided private key is in an unknown or unsupported format.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1904" href="/docs/errors/err_ngrok_1904">ERR_NGROK_1904</a>
      </td>
      <td class="pre-wrapped">
        Your account can't upload custom TLS certificates.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1905" href="/docs/errors/err_ngrok_1905">ERR_NGROK_1905</a>
      </td>
      <td class="pre-wrapped">
        Your account can't use managed TLS certificates.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1906" href="/docs/errors/err_ngrok_1906">ERR_NGROK_1906</a>
      </td>
      <td class="pre-wrapped">
        The domain <code>&lt;DOMAIN&gt;</code> is not a valid domain name.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1907" href="/docs/errors/err_ngrok_1907">ERR_NGROK_1907</a>
      </td>
      <td class="pre-wrapped">
        The ip <code>&lt;IP&gt;</code> is not a valid IP address.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1908" href="/docs/errors/err_ngrok_1908">ERR_NGROK_1908</a>
      </td>
      <td class="pre-wrapped">
        Invalid authority <code>&lt;AUTHORITY&gt;</code>. Valid authorities: <code>&lt;SUPPORTED&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1909" href="/docs/errors/err_ngrok_1909">ERR_NGROK_1909</a>
      </td>
      <td class="pre-wrapped">
        Invalid private key type <code>&lt;TYPE&gt;</code>. Valid types: <code>&lt;SUPPORTED&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1910" href="/docs/errors/err_ngrok_1910">ERR_NGROK_1910</a>
      </td>
      <td class="pre-wrapped">
        The provided PEM data contains a non-zero number of headers, which are not allowed.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1911" href="/docs/errors/err_ngrok_1911">ERR_NGROK_1911</a>
      </td>
      <td class="pre-wrapped">
        The provided data is a valid PEM, but it has an unexpected type: <code>&lt;TYPE&gt;</code>. It must be "CERTIFICATE".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1912" href="/docs/errors/err_ngrok_1912">ERR_NGROK_1912</a>
      </td>
      <td class="pre-wrapped">
        The upload contained <code>&lt;COUNT&gt;</code> certificates: <code>&lt;CNS&gt;</code>. Only a single certificate may be uploaded at a time.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1913" href="/docs/errors/err_ngrok_1913">ERR_NGROK_1913</a>
      </td>
      <td class="pre-wrapped">
        The uploaded certificate's x509 Basic Constraints did not mark it as a certificate authority (see RFC 5280, 4.2.1.9).
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1914" href="/docs/errors/err_ngrok_1914">ERR_NGROK_1914</a>
      </td>
      <td class="pre-wrapped">
        The description is limited to <code>&lt;MAX&gt;</code> characters, but the provided value had <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1915" href="/docs/errors/err_ngrok_1915">ERR_NGROK_1915</a>
      </td>
      <td class="pre-wrapped">
        Metadata is limited to <code>&lt;MAX&gt;</code> characters, but the provided value had <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1916" href="/docs/errors/err_ngrok_1916">ERR_NGROK_1916</a>
      </td>
      <td class="pre-wrapped">
        The description is limited to <code>&lt;MAX&gt;</code> characters, but the provided value had <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1917" href="/docs/errors/err_ngrok_1917">ERR_NGROK_1917</a>
      </td>
      <td class="pre-wrapped">
        Metadata is limited to <code>&lt;MAX&gt;</code> characters, but the provided value had <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1918" href="/docs/errors/err_ngrok_1918">ERR_NGROK_1918</a>
      </td>
      <td class="pre-wrapped">
        Your account is not allowed to upload certificate authorities.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1919" href="/docs/errors/err_ngrok_1919">ERR_NGROK_1919</a>
      </td>
      <td class="pre-wrapped">
        No certificate PEM data was sent.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1920" href="/docs/errors/err_ngrok_1920">ERR_NGROK_1920</a>
      </td>
      <td class="pre-wrapped">
        The certificate data could not be parsed as PEM. Certificate data: "<code>&lt;PREFIX&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1921" href="/docs/errors/err_ngrok_1921">ERR_NGROK_1921</a>
      </td>
      <td class="pre-wrapped">
        The uploaded certificate PEM data exceeds the maximum length limit of <code>&lt;MAX_SIZE&gt;</code> bytes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1922" href="/docs/errors/err_ngrok_1922">ERR_NGROK_1922</a>
      </td>
      <td class="pre-wrapped">
        No PEM-encoded certificate was found in the creation request.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1923" href="/docs/errors/err_ngrok_1923">ERR_NGROK_1923</a>
      </td>
      <td class="pre-wrapped">
        The provided certificate and private key do not match each other.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1924" href="/docs/errors/err_ngrok_1924">ERR_NGROK_1924</a>
      </td>
      <td class="pre-wrapped">
        The provided private key is actually a certificate.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1925" href="/docs/errors/err_ngrok_1925">ERR_NGROK_1925</a>
      </td>
      <td class="pre-wrapped">
        The provided certificate is actually a private key.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1926" href="/docs/errors/err_ngrok_1926">ERR_NGROK_1926</a>
      </td>
      <td class="pre-wrapped">
        The uploaded certificate bundle contained the following certificates in this order: [<code>&lt;ORDER&gt;</code>], however <code>&lt;INVALID&gt;</code> has not been signed by <code>&lt;INTERMEDIATE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1927" href="/docs/errors/err_ngrok_1927">ERR_NGROK_1927</a>
      </td>
      <td class="pre-wrapped">
        The domain <code>&lt;DOMAIN&gt;</code> is not available for certificate management.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1929" href="/docs/errors/err_ngrok_1929">ERR_NGROK_1929</a>
      </td>
      <td class="pre-wrapped">
        Invalid nameserver count. There should be <code>&lt;WANT&gt;</code> but only found <code>&lt;GOT&gt;</code> for <code>&lt;ZONE&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1930" href="/docs/errors/err_ngrok_1930">ERR_NGROK_1930</a>
      </td>
      <td class="pre-wrapped">
        Nameservers are not set up correctly for <code>&lt;DOMAIN&gt;</code>, expected <code>&lt;WANT&gt;</code> but got <code>&lt;GOT&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1934" href="/docs/errors/err_ngrok_1934">ERR_NGROK_1934</a>
      </td>
      <td class="pre-wrapped">
        Got error <code>&lt;ERROR&gt;</code> where parsing public key <code>&lt;PUBLICKEY&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1935" href="/docs/errors/err_ngrok_1935">ERR_NGROK_1935</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;CERTTYPE&gt;</code> is not a valid SSH certificate type. Valid certificate types: <code>&lt;SUPPORTED&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1936" href="/docs/errors/err_ngrok_1936">ERR_NGROK_1936</a>
      </td>
      <td class="pre-wrapped">
        "<code>&lt;KEYTYPE&gt;</code>" is not a valid SSH key type. Valid key types: <code>&lt;SUPPORTED&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1937" href="/docs/errors/err_ngrok_1937">ERR_NGROK_1937</a>
      </td>
      <td class="pre-wrapped">
        The description is limited to <code>&lt;MAX&gt;</code> characters, but the provided value had <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1938" href="/docs/errors/err_ngrok_1938">ERR_NGROK_1938</a>
      </td>
      <td class="pre-wrapped">
        Metadata is limited to <code>&lt;MAX&gt;</code> characters, but the provided value had <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1939" href="/docs/errors/err_ngrok_1939">ERR_NGROK_1939</a>
      </td>
      <td class="pre-wrapped">
        Invalid key size <code>&lt;KEYSIZE&gt;</code>. Valid key sizes: <code>&lt;SUPPORTED&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1940" href="/docs/errors/err_ngrok_1940">ERR_NGROK_1940</a>
      </td>
      <td class="pre-wrapped">
        Key size is supported only with a key type of "rsa", but the specified key type was "<code>&lt;KEYTYPE&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1941" href="/docs/errors/err_ngrok_1941">ERR_NGROK_1941</a>
      </td>
      <td class="pre-wrapped">
        Invalid elliptic curve "<code>&lt;CURVE&gt;</code>". Valid elliptic curves: <code>&lt;SUPPORTED&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1942" href="/docs/errors/err_ngrok_1942">ERR_NGROK_1942</a>
      </td>
      <td class="pre-wrapped">
        Elliptic curve is supported only with a key type of "ecdsa", but the specified key type was "<code>&lt;KEYTYPE&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1943" href="/docs/errors/err_ngrok_1943">ERR_NGROK_1943</a>
      </td>
      <td class="pre-wrapped">
        The SSH CA Certificate duration must be greater than zero; got duration of <code>&lt;DURATION&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1945" href="/docs/errors/err_ngrok_1945">ERR_NGROK_1945</a>
      </td>
      <td class="pre-wrapped">
        The description is limited to <code>&lt;MAX&gt;</code> characters, but the provided value had <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1946" href="/docs/errors/err_ngrok_1946">ERR_NGROK_1946</a>
      </td>
      <td class="pre-wrapped">
        Metadata is limited to <code>&lt;MAX&gt;</code> characters, but the provided value had <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1947" href="/docs/errors/err_ngrok_1947">ERR_NGROK_1947</a>
      </td>
      <td class="pre-wrapped">
        The description is limited to <code>&lt;MAX&gt;</code> characters, but the provided value had <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1948" href="/docs/errors/err_ngrok_1948">ERR_NGROK_1948</a>
      </td>
      <td class="pre-wrapped">
        Metadata is limited to <code>&lt;MAX&gt;</code> characters, but the provided value had <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1949" href="/docs/errors/err_ngrok_1949">ERR_NGROK_1949</a>
      </td>
      <td class="pre-wrapped">
        The SSH CA <code>&lt;CA&gt;</code> does not exist.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1950" href="/docs/errors/err_ngrok_1950">ERR_NGROK_1950</a>
      </td>
      <td class="pre-wrapped">
        Certificates are not supported for public keys of type <code>&lt;KEYTYPE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1951" href="/docs/errors/err_ngrok_1951">ERR_NGROK_1951</a>
      </td>
      <td class="pre-wrapped">
        The SSH CA <code>&lt;CA&gt;</code> does not exist.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1952" href="/docs/errors/err_ngrok_1952">ERR_NGROK_1952</a>
      </td>
      <td class="pre-wrapped">
        The public key to sign in the certificate is required, but no public key was specified.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1953" href="/docs/errors/err_ngrok_1953">ERR_NGROK_1953</a>
      </td>
      <td class="pre-wrapped">
        Your account is not allowed to use SSH certificates.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1954" href="/docs/errors/err_ngrok_1954">ERR_NGROK_1954</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> Certificate Authorities.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1956" href="/docs/errors/err_ngrok_1956">ERR_NGROK_1956</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> SSH Certificate Authorities.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1958" href="/docs/errors/err_ngrok_1958">ERR_NGROK_1958</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> SSH Host Certificates.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1960" href="/docs/errors/err_ngrok_1960">ERR_NGROK_1960</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> SSH User Certificates.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1962" href="/docs/errors/err_ngrok_1962">ERR_NGROK_1962</a>
      </td>
      <td class="pre-wrapped">
        SSH User Certificate duration must be greater than zero; got duration of <code>&lt;DURATION&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1963" href="/docs/errors/err_ngrok_1963">ERR_NGROK_1963</a>
      </td>
      <td class="pre-wrapped">
        SSH Host Certificate duration must be greater than zero; got duration of <code>&lt;DURATION&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1964" href="/docs/errors/err_ngrok_1964">ERR_NGROK_1964</a>
      </td>
      <td class="pre-wrapped">
        Can't delete SSH CA <code>&lt;ID&gt;</code> because an SSH certificate signed by it exists. Delete all host and user SSH certificates signed by this CA before deleting it.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1965" href="/docs/errors/err_ngrok_1965">ERR_NGROK_1965</a>
      </td>
      <td class="pre-wrapped">
        The certificate <code>&lt;ID&gt;</code> does not exist.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_1966" href="/docs/errors/err_ngrok_1966">ERR_NGROK_1966</a>
      </td>
      <td class="pre-wrapped">
        The certificate <code>&lt;ID&gt;</code> could not be deleted because it has an attached Managed Certificate Policy. If this certificate is automatically generated, delete the domain reservation or use a different certificate type.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2032" href="/docs/errors/err_ngrok_2032">ERR_NGROK_2032</a>
      </td>
      <td class="pre-wrapped">
        Webhook Validation middleware requires a secret for <code>&lt;PROVIDER&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2062" href="/docs/errors/err_ngrok_2062">ERR_NGROK_2062</a>
      </td>
      <td class="pre-wrapped">
        Paths given in HTTPMux rules must be either empty or absolute. Perhaps you meant to specify '/<code>&lt;PATH&gt;</code>?
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2063" href="/docs/errors/err_ngrok_2063">ERR_NGROK_2063</a>
      </td>
      <td class="pre-wrapped">
        The method <code>&lt;METHOD&gt;</code> was specified multiple times for the path <code>&lt;PATH&gt;</code>. Each method must be unique among all rules with the same path.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2065" href="/docs/errors/err_ngrok_2065">ERR_NGROK_2065</a>
      </td>
      <td class="pre-wrapped">
        HTTPMux must have at least one rule.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2067" href="/docs/errors/err_ngrok_2067">ERR_NGROK_2067</a>
      </td>
      <td class="pre-wrapped">
        Too many rules given to HTTPMux. You provided <code>&lt;VAL&gt;</code> rules, but the limit is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2069" href="/docs/errors/err_ngrok_2069">ERR_NGROK_2069</a>
      </td>
      <td class="pre-wrapped">
        The method (<code>&lt;METHOD&gt;</code>) specified in an HTTPMux rule is invalid or otherwise not currently supported.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2070" href="/docs/errors/err_ngrok_2070">ERR_NGROK_2070</a>
      </td>
      <td class="pre-wrapped">
        The path specified in an HTTPMux rule is too long. The path provided has <code>&lt;VAL&gt;</code> bytes, but the limit is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2071" href="/docs/errors/err_ngrok_2071">ERR_NGROK_2071</a>
      </td>
      <td class="pre-wrapped">
        The path specified in an HTTPMux rule is unsupported or otherwise invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2087" href="/docs/errors/err_ngrok_2087">ERR_NGROK_2087</a>
      </td>
      <td class="pre-wrapped">
        The sendgrid verification key is not a base64 encoded ecdsa public key. The following error was encountered while trying to parse it: "<code>&lt;ERROR&gt;</code>"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2089" href="/docs/errors/err_ngrok_2089">ERR_NGROK_2089</a>
      </td>
      <td class="pre-wrapped">
        Found duplicate routing rule. Each rule must be unique.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2090" href="/docs/errors/err_ngrok_2090">ERR_NGROK_2090</a>
      </td>
      <td class="pre-wrapped">
        The user agent filter regular expression <code>&lt;REGEX&gt;</code> is an invalid regular expression: <code>&lt;ERR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2200" href="/docs/errors/err_ngrok_2200">ERR_NGROK_2200</a>
      </td>
      <td class="pre-wrapped">
        Invalid policy expression.
        <code>&lt;ERR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2201" href="/docs/errors/err_ngrok_2201">ERR_NGROK_2201</a>
      </td>
      <td class="pre-wrapped">
        Invalid policy action type <code>&lt;TYP&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2202" href="/docs/errors/err_ngrok_2202">ERR_NGROK_2202</a>
      </td>
      <td class="pre-wrapped">
        Action type <code>&lt;TYP&gt;</code> is not supported for <code>&lt;PHASE&gt;</code> traffic policy rule.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2203" href="/docs/errors/err_ngrok_2203">ERR_NGROK_2203</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse the configuration for policy action type <code>&lt;TYP&gt;</code>.
        <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2204" href="/docs/errors/err_ngrok_2204">ERR_NGROK_2204</a>
      </td>
      <td class="pre-wrapped">
        Configuration for policy action type <code>&lt;TYP&gt;</code> has invalid value: <code>&lt;FIELD&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2205" href="/docs/errors/err_ngrok_2205">ERR_NGROK_2205</a>
      </td>
      <td class="pre-wrapped">
        Policy action type <code>&lt;TYP&gt;</code> does not support the <code>&lt;PROTO&gt;</code> protocol.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2206" href="/docs/errors/err_ngrok_2206">ERR_NGROK_2206</a>
      </td>
      <td class="pre-wrapped">
        A policy must define at least one action.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2207" href="/docs/errors/err_ngrok_2207">ERR_NGROK_2207</a>
      </td>
      <td class="pre-wrapped">
        Policy action type <code>&lt;TYP&gt;</code> is unreachable due to a prior terminating action.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2208" href="/docs/errors/err_ngrok_2208">ERR_NGROK_2208</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse configuration for <code>&lt;PHASE&gt;</code> <code>&lt;TYPE&gt;</code>: exceeds maximum allowed name length of <code>&lt;MAX&gt;</code>, was <code>&lt;VAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2209" href="/docs/errors/err_ngrok_2209">ERR_NGROK_2209</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse configuration for <code>&lt;PHASE&gt;</code> <code>&lt;TYPE&gt;</code>: exceeds maximum allowed value length of <code>&lt;MAX&gt;</code>, was <code>&lt;VAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2210" href="/docs/errors/err_ngrok_2210">ERR_NGROK_2210</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse configuration for <code>&lt;PHASE&gt;</code> <code>&lt;TYPE&gt;</code>: name is invalid <code>&lt;NAME&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2211" href="/docs/errors/err_ngrok_2211">ERR_NGROK_2211</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse configuration for <code>&lt;PHASE&gt;</code> <code>&lt;TYPE&gt;</code>: value is invalid <code>&lt;NAME&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2212" href="/docs/errors/err_ngrok_2212">ERR_NGROK_2212</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse configuration for <code>&lt;PHASE&gt;</code> <code>&lt;TYPE&gt;</code>: can have at most <code>&lt;MAX&gt;</code> header values, but <code>&lt;VAL&gt;</code> were provided.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2213" href="/docs/errors/err_ngrok_2213">ERR_NGROK_2213</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse configuration for <code>&lt;PHASE&gt;</code> add-headers: contained an invalid template: <code>&lt;TEMPLATE&gt;</code>: <code>&lt;ERR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2214" href="/docs/errors/err_ngrok_2214">ERR_NGROK_2214</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse configuration for compress: contained an invalid algorithm: <code>&lt;ALGORITHM&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2215" href="/docs/errors/err_ngrok_2215">ERR_NGROK_2215</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse configuration for <code>&lt;ACTION&gt;</code>: <code>&lt;CONFIG&gt;</code> must be between <code>&lt;MIN&gt;</code> and <code>&lt;MAX&gt;</code> inclusive, was <code>&lt;ACTUAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2216" href="/docs/errors/err_ngrok_2216">ERR_NGROK_2216</a>
      </td>
      <td class="pre-wrapped">
        Invalid IP Policy Reference(s): <code>&lt;REFERENCE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2217" href="/docs/errors/err_ngrok_2217">ERR_NGROK_2217</a>
      </td>
      <td class="pre-wrapped">
        Invalid CIDR(s): <code>&lt;CIDR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2218" href="/docs/errors/err_ngrok_2218">ERR_NGROK_2218</a>
      </td>
      <td class="pre-wrapped">
        Too many entries for <code>&lt;FIELD&gt;</code>. You provided <code>&lt;ENTRIES&gt;</code> entries, but the limit is <code>&lt;LIMIT&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2219" href="/docs/errors/err_ngrok_2219">ERR_NGROK_2219</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;FIELD&gt;</code> cannot be user-configured.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2221" href="/docs/errors/err_ngrok_2221">ERR_NGROK_2221</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: <code>&lt;CONFIG&gt;</code> length of <code>&lt;ACTUAL&gt;</code> exceeded limit of <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2222" href="/docs/errors/err_ngrok_2222">ERR_NGROK_2222</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: <code>&lt;CONFIG&gt;</code> must be <code>&lt;VALID&gt;</code>, was <code>&lt;ACTUAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2223" href="/docs/errors/err_ngrok_2223">ERR_NGROK_2223</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: <code>&lt;CONFIG&gt;</code> cannot be empty.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2224" href="/docs/errors/err_ngrok_2224">ERR_NGROK_2224</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for action <code>&lt;ACTION&gt;</code>: failed to compile CEL template expressions in <code>&lt;FIELD&gt;</code>.
        <code>&lt;ERR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2225" href="/docs/errors/err_ngrok_2225">ERR_NGROK_2225</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: <code>&lt;CONFIG&gt;</code> duration of <code>&lt;ACTUAL&gt;</code> exceeded limit of <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2226" href="/docs/errors/err_ngrok_2226">ERR_NGROK_2226</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: <code>&lt;CONFIG&gt;</code> must be a URL, but was <code>&lt;ACTUAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2227" href="/docs/errors/err_ngrok_2227">ERR_NGROK_2227</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: The issuer URL at <code>&lt;CONFIG&gt;</code> with a value of <code>&lt;ISSUERURL&gt;</code> did not return a valid OpenID Connect Discovery document.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2228" href="/docs/errors/err_ngrok_2228">ERR_NGROK_2228</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: Failed to parse <code>&lt;CONFIG&gt;</code>: <code>&lt;REASON&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2229" href="/docs/errors/err_ngrok_2229">ERR_NGROK_2229</a>
      </td>
      <td class="pre-wrapped">
        Failed to validate Traffic Policy for unknown protocol <code>&lt;PROTO&gt;</code>.'
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2230" href="/docs/errors/err_ngrok_2230">ERR_NGROK_2230</a>
      </td>
      <td class="pre-wrapped">
        Invalid Traffic Policy phase <code>&lt;PHASE&gt;</code> for protocol <code>&lt;PROTO&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2231" href="/docs/errors/err_ngrok_2231">ERR_NGROK_2231</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: <code>&lt;CONFIG&gt;</code> contains duplicate values: <code>&lt;DUPLICATES&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2232" href="/docs/errors/err_ngrok_2232">ERR_NGROK_2232</a>
      </td>
      <td class="pre-wrapped">
        Failed to resolve validated configuration for policy action type <code>&lt;TYP&gt;</code>.
        <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2233" href="/docs/errors/err_ngrok_2233">ERR_NGROK_2233</a>
      </td>
      <td class="pre-wrapped">
        Failed to compile resolved configuration for policy action type <code>&lt;TYP&gt;</code>.
        <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2234" href="/docs/errors/err_ngrok_2234">ERR_NGROK_2234</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: <code>&lt;CONFIG&gt;</code> is missing required element <code>&lt;ELEMENT&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2235" href="/docs/errors/err_ngrok_2235">ERR_NGROK_2235</a>
      </td>
      <td class="pre-wrapped">
        The traffic policy provided is not guaranteed to handle traffic. Ensure traffic always results in an action, e.g. custom response or forward action.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2236" href="/docs/errors/err_ngrok_2236">ERR_NGROK_2236</a>
      </td>
      <td class="pre-wrapped">
        The traffic policy was not able to be parsed:
        <code>&lt;ERROR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2237" href="/docs/errors/err_ngrok_2237">ERR_NGROK_2237</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: <code>&lt;CONFIG&gt;</code> length of <code>&lt;ACTUAL&gt;</code> does not satisfy minimum length of <code>&lt;MIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2238" href="/docs/errors/err_ngrok_2238">ERR_NGROK_2238</a>
      </td>
      <td class="pre-wrapped">
        Failed to resolve interpolated CEL expression. The expression was: <code>&lt;CEL&gt;</code>
        ERROR: <code>&lt;ERROR&gt;</code>}
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2239" href="/docs/errors/err_ngrok_2239">ERR_NGROK_2239</a>
      </td>
      <td class="pre-wrapped">
        Invalid policy: Only one auth action allowed per endpoint.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2240" href="/docs/errors/err_ngrok_2240">ERR_NGROK_2240</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: <code>&lt;MISSING&gt;</code> is required when <code>&lt;SPECIFIED&gt;</code> is specified
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2241" href="/docs/errors/err_ngrok_2241">ERR_NGROK_2241</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: The domain <code>&lt;DOMAIN&gt;</code> cannot be used as it doesn't belong to the endpoint.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2242" href="/docs/errors/err_ngrok_2242">ERR_NGROK_2242</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: <code>&lt;CONFIG&gt;</code> <code>&lt;DOMAIN&gt;</code> contains invalid puny code.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2243" href="/docs/errors/err_ngrok_2243">ERR_NGROK_2243</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: <code>&lt;CONFIG&gt;</code> <code>&lt;DOMAIN&gt;</code> is not a valid domain.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2244" href="/docs/errors/err_ngrok_2244">ERR_NGROK_2244</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;PHASE&gt;</code> <code>&lt;ACTION&gt;</code>: <code>&lt;CONFIG&gt;</code> can have at most <code>&lt;MAX&gt;</code> query key/value pairs, but <code>&lt;VAL&gt;</code> were provided.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2245" href="/docs/errors/err_ngrok_2245">ERR_NGROK_2245</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;PHASE&gt;</code> <code>&lt;ACTION&gt;</code>: <code>&lt;CONFIG&gt;</code>: exceeds maximum allowed key length of <code>&lt;MAX&gt;</code>, was <code>&lt;VAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2246" href="/docs/errors/err_ngrok_2246">ERR_NGROK_2246</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;PHASE&gt;</code> <code>&lt;ACTION&gt;</code>: <code>&lt;CONFIG&gt;</code>: exceeds maximum allowed key length of <code>&lt;MAX&gt;</code>, was <code>&lt;VAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2247" href="/docs/errors/err_ngrok_2247">ERR_NGROK_2247</a>
      </td>
      <td class="pre-wrapped">
        Already validated url didn't parse during <code>&lt;STEP&gt;</code> step: <code>&lt;URL&gt;</code> <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2248" href="/docs/errors/err_ngrok_2248">ERR_NGROK_2248</a>
      </td>
      <td class="pre-wrapped">
        HTTPS Edges do not support the on_tcp_connect Traffic Policy phase. Use a Cloud Endpoint instead.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2249" href="/docs/errors/err_ngrok_2249">ERR_NGROK_2249</a>
      </td>
      <td class="pre-wrapped">
        Memory limit exceeded by <code>&lt;ACTION&gt;</code> action: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2250" href="/docs/errors/err_ngrok_2250">ERR_NGROK_2250</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: Nested variables are too deep. Maximum nesting allowed is <code>&lt;MAX&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2252" href="/docs/errors/err_ngrok_2252">ERR_NGROK_2252</a>
      </td>
      <td class="pre-wrapped">
        Invalid format for set-vars: vars must be a list of maps of exactly size 1
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2253" href="/docs/errors/err_ngrok_2253">ERR_NGROK_2253</a>
      </td>
      <td class="pre-wrapped">
        Failed to evaluate CEL expression: <code>&lt;EXPRESSION&gt;</code> for <code>&lt;ACTION&gt;</code> at runtime: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2254" href="/docs/errors/err_ngrok_2254">ERR_NGROK_2254</a>
      </td>
      <td class="pre-wrapped">
        Failed to resolve CEL expression. The expression was: <code>&lt;CEL&gt;</code>
        ERROR: <code>&lt;ERROR&gt;</code>}
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_2255" href="/docs/errors/err_ngrok_2255">ERR_NGROK_2255</a>
      </td>
      <td class="pre-wrapped">
        Invalid configuration for <code>&lt;ACTION&gt;</code>: Maximum <code>&lt;ELEMENT&gt;</code> allowed per action is <code>&lt;MAX&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3002" href="/docs/errors/err_ngrok_3002">ERR_NGROK_3002</a>
      </td>
      <td class="pre-wrapped">
        Error performing TLS handshake: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3003" href="/docs/errors/err_ngrok_3003">ERR_NGROK_3003</a>
      </td>
      <td class="pre-wrapped">
        This client does not support TLS SNI, but the endpoint's TLS configuration requires SNI. See <a href="https://ngrok.com/docs/cloud-edge/edges/tls">https://ngrok.com/docs/cloud-edge/edges/tls</a>#compatible-clients
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3004" href="/docs/errors/err_ngrok_3004">ERR_NGROK_3004</a>
      </td>
      <td class="pre-wrapped">
        ngrok gateway error
        The server returned an invalid or incomplete HTTP response.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3005" href="/docs/errors/err_ngrok_3005">ERR_NGROK_3005</a>
      </td>
      <td class="pre-wrapped">
        ngrok gateway timeout
        A connection to the server not be established.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3006" href="/docs/errors/err_ngrok_3006">ERR_NGROK_3006</a>
      </td>
      <td class="pre-wrapped">
        ngrok gateway error
        The server refused our connection
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3007" href="/docs/errors/err_ngrok_3007">ERR_NGROK_3007</a>
      </td>
      <td class="pre-wrapped">
        ngrok gateway error
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3008" href="/docs/errors/err_ngrok_3008">ERR_NGROK_3008</a>
      </td>
      <td class="pre-wrapped">
        ngrok gateway error
        None of the configured backends responded in time
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3009" href="/docs/errors/err_ngrok_3009">ERR_NGROK_3009</a>
      </td>
      <td class="pre-wrapped">
        ngrok gateway error
        Received an HTTP network error (status code 0) from a backend
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3010" href="/docs/errors/err_ngrok_3010">ERR_NGROK_3010</a>
      </td>
      <td class="pre-wrapped">
        ngrok gateway error
        Received an HTTP response with unknown status code <code>&lt;CODE&gt;</code> from a backend
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3100" href="/docs/errors/err_ngrok_3100">ERR_NGROK_3100</a>
      </td>
      <td class="pre-wrapped">
        Your session has expired due to age.
        Refresh this page or use the link below to log back in with <code>&lt;PROVIDER&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3101" href="/docs/errors/err_ngrok_3101">ERR_NGROK_3101</a>
      </td>
      <td class="pre-wrapped">
        We lack permission to retrieve your data from <code>&lt;PROVIDER&gt;</code> and cannot continue.
        Make sure to allow all requested permissions for this application.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3102" href="/docs/errors/err_ngrok_3102">ERR_NGROK_3102</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> requires that you correct an issue with your account prior to using this website.
        Please log in to <code>&lt;PROVIDER&gt;</code>, correct the issue, and then refresh this page.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3103" href="/docs/errors/err_ngrok_3103">ERR_NGROK_3103</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> requires that you correct an issue with your account prior to using this website:
        <code>&lt;ERROR_TITLE&gt;</code>: <code>&lt;ERROR_MESSAGE&gt;</code>
        After correcting the issue with <code>&lt;PROVIDER&gt;</code>, refresh this page.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3104" href="/docs/errors/err_ngrok_3104">ERR_NGROK_3104</a>
      </td>
      <td class="pre-wrapped">
        The email "<code>&lt;EMAIL&gt;</code>" associated with your <code>&lt;PROVIDER&gt;</code> account is not valid.
        Please correct your email with <code>&lt;PROVIDER&gt;</code> and then refresh this page.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3105" href="/docs/errors/err_ngrok_3105">ERR_NGROK_3105</a>
      </td>
      <td class="pre-wrapped">
        You lack the required permission to use this site.
        Contact the owner to obtain permission and then refresh this page.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3106" href="/docs/errors/err_ngrok_3106">ERR_NGROK_3106</a>
      </td>
      <td class="pre-wrapped">
        The initial information required to authenticate with <code>&lt;PROVIDER&gt;</code> is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3107" href="/docs/errors/err_ngrok_3107">ERR_NGROK_3107</a>
      </td>
      <td class="pre-wrapped">
        The state parameter used to validate your request is missing.
        Please close this page and try again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3108" href="/docs/errors/err_ngrok_3108">ERR_NGROK_3108</a>
      </td>
      <td class="pre-wrapped">
        The state parameter used to validate your request cannot be read.
        Please close this page and try again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3109" href="/docs/errors/err_ngrok_3109">ERR_NGROK_3109</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> did not provide an email for your account.
        Check that you have a primary email and that it's confirmed before trying again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3110" href="/docs/errors/err_ngrok_3110">ERR_NGROK_3110</a>
      </td>
      <td class="pre-wrapped">
        The email permission from <code>&lt;PROVIDER&gt;</code> was not granted but is required. Please ensure that the email permission is granted.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3111" href="/docs/errors/err_ngrok_3111">ERR_NGROK_3111</a>
      </td>
      <td class="pre-wrapped">
        All requested permissions with <code>&lt;PROVIDER&gt;</code> must be granted in order to use this site, but the following were not: <code>&lt;PERMISSIONS&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3112" href="/docs/errors/err_ngrok_3112">ERR_NGROK_3112</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> has returned an error when attempting to authorize you to use this site:
        <code>&lt;ERROR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3113" href="/docs/errors/err_ngrok_3113">ERR_NGROK_3113</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> denied access to this application when retrieving your information. This is likely caused by expiration or revocation of your authorization.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3114" href="/docs/errors/err_ngrok_3114">ERR_NGROK_3114</a>
      </td>
      <td class="pre-wrapped">
        In order to continue, you must authorize this application's access to <code>&lt;PROVIDER&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3115" href="/docs/errors/err_ngrok_3115">ERR_NGROK_3115</a>
      </td>
      <td class="pre-wrapped">
        The redirect_uri configured for this application is not properly configured or whitelisted with <code>&lt;PROVIDER&gt;</code>.
        Please contact the owner of this application in order to fix this error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3116" href="/docs/errors/err_ngrok_3116">ERR_NGROK_3116</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> denied access to your data when attempting to authorize you.
        Please contact the owner of this application to ensure it is properly installed for your organization.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3117" href="/docs/errors/err_ngrok_3117">ERR_NGROK_3117</a>
      </td>
      <td class="pre-wrapped">
        The initial link used to authorize with <code>&lt;PROVIDER&gt;</code> had unsupported parameters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3118" href="/docs/errors/err_ngrok_3118">ERR_NGROK_3118</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> denied access to your data.
        Please contact the owner of this application to ensure it is properly installed for your organization.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3119" href="/docs/errors/err_ngrok_3119">ERR_NGROK_3119</a>
      </td>
      <td class="pre-wrapped">
        Logging in with <code>&lt;PROVIDER&gt;</code> took more than 15 minutes and was rejected for security.
        Please try again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3120" href="/docs/errors/err_ngrok_3120">ERR_NGROK_3120</a>
      </td>
      <td class="pre-wrapped">
        The state parameter required to finish authorization with <code>&lt;PROVIDER&gt;</code> is missing.
        Please start over to try again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3121" href="/docs/errors/err_ngrok_3121">ERR_NGROK_3121</a>
      </td>
      <td class="pre-wrapped">
        The nonce cookie required to finish authorization with <code>&lt;PROVIDER&gt;</code> is missing.
        Please start over to try again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3122" href="/docs/errors/err_ngrok_3122">ERR_NGROK_3122</a>
      </td>
      <td class="pre-wrapped">
        The access code from <code>&lt;PROVIDER&gt;</code> has expired and cannot be used.
        Please try again and finish authorization more quickly.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3123" href="/docs/errors/err_ngrok_3123">ERR_NGROK_3123</a>
      </td>
      <td class="pre-wrapped">
        The access code from <code>&lt;PROVIDER&gt;</code> has already been used.
        Please remove any bookmarks to this page and start reauthorization again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3124" href="/docs/errors/err_ngrok_3124">ERR_NGROK_3124</a>
      </td>
      <td class="pre-wrapped">
        The state parameter required to finish authorization with <code>&lt;PROVIDER&gt;</code> does not match this host.
        Please try again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3125" href="/docs/errors/err_ngrok_3125">ERR_NGROK_3125</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> denied access to your data.
        The owner of this application should verify the OAuth application client ID and secret are valid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3126" href="/docs/errors/err_ngrok_3126">ERR_NGROK_3126</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> rejected authorization due to a invalid or unknown scope requested by this application.
        The owner of this application must correct the application configuration before you can continue.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3127" href="/docs/errors/err_ngrok_3127">ERR_NGROK_3127</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> rejected authorization due to invalid or expired credentials.
        If this error persists after reauthorizing, contact the owner of the application to ensure you have permission.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3150" href="/docs/errors/err_ngrok_3150">ERR_NGROK_3150</a>
      </td>
      <td class="pre-wrapped">
        An error occurred when retrieving your session.
        Please refresh the page to log in and try again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3151" href="/docs/errors/err_ngrok_3151">ERR_NGROK_3151</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> rejected use of your session's OAuth token: "<code>&lt;ERROR&gt;</code>". Your session is invalid and cannot continue.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3152" href="/docs/errors/err_ngrok_3152">ERR_NGROK_3152</a>
      </td>
      <td class="pre-wrapped">
        An invalid request was sent to <code>&lt;PROVIDER&gt;</code> but its response is required in order to continue. This is a bug and it has been reported; please try again in a couple of hours to see if it has been resolved.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3160" href="/docs/errors/err_ngrok_3160">ERR_NGROK_3160</a>
      </td>
      <td class="pre-wrapped">
        An unexpected error occurred when communicating with <code>&lt;PROVIDER&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3161" href="/docs/errors/err_ngrok_3161">ERR_NGROK_3161</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> has throttled this application and cannot be reached right now.
        Please try again in a few minutes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3162" href="/docs/errors/err_ngrok_3162">ERR_NGROK_3162</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> has throttled this application and cannot be reached right now.
        Please try again in about an hour.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3163" href="/docs/errors/err_ngrok_3163">ERR_NGROK_3163</a>
      </td>
      <td class="pre-wrapped">
        An error occurred when finishing authorization with <code>&lt;PROVIDER&gt;</code>. This is likely caused by authorization taking too long.
        Please try again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3164" href="/docs/errors/err_ngrok_3164">ERR_NGROK_3164</a>
      </td>
      <td class="pre-wrapped">
        An error occurred when authorizing with <code>&lt;PROVIDER&gt;</code>:
        <code>&lt;ERROR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3165" href="/docs/errors/err_ngrok_3165">ERR_NGROK_3165</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> is too busy to handle requests and authorization cannot be completed at this time.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3166" href="/docs/errors/err_ngrok_3166">ERR_NGROK_3166</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> enountered an error and authorization cannot be completed at this time.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3167" href="/docs/errors/err_ngrok_3167">ERR_NGROK_3167</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> is too busy to handle requests and required data cannot be retrieved right now. Wait a few minutes before trying again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3200" href="/docs/errors/err_ngrok_3200">ERR_NGROK_3200</a>
      </td>
      <td class="pre-wrapped">
        The endpoint <code>&lt;ENDPOINTURL&gt;</code> is offline.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3202" href="/docs/errors/err_ngrok_3202">ERR_NGROK_3202</a>
      </td>
      <td class="pre-wrapped">
        Circuit breaker tripped
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3203" href="/docs/errors/err_ngrok_3203">ERR_NGROK_3203</a>
      </td>
      <td class="pre-wrapped">
        Request blocked by IP Policy
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3204" href="/docs/errors/err_ngrok_3204">ERR_NGROK_3204</a>
      </td>
      <td class="pre-wrapped">
        Request failed webhook verification
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3205" href="/docs/errors/err_ngrok_3205">ERR_NGROK_3205</a>
      </td>
      <td class="pre-wrapped">
        Request blocked by Endpoints IP Restriction
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3206" href="/docs/errors/err_ngrok_3206">ERR_NGROK_3206</a>
      </td>
      <td class="pre-wrapped">
        Expected a websocket request with a "Connection: upgrade" header but did not receive one.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3208" href="/docs/errors/err_ngrok_3208">ERR_NGROK_3208</a>
      </td>
      <td class="pre-wrapped">
        The ngrok account that was hosting this webpage has been banned for violation of ngrok's Terms of Service.
        If you're seeing this page instead of the one you were expecting, ngrok has most likely blocked a phishing attack targeting you.
        If you did enter any sensitive information before seeing this notice, please contact the real site by directly entering their URL in your browser.
        Learn more about how to protect yourself from phishing scams:
        <a href="https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams">https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3209" href="/docs/errors/err_ngrok_3209">ERR_NGROK_3209</a>
      </td>
      <td class="pre-wrapped">
        Tunnel not found
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3210" href="/docs/errors/err_ngrok_3210">ERR_NGROK_3210</a>
      </td>
      <td class="pre-wrapped">
        Error forwarding the connection to the ngrok agent
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3211" href="/docs/errors/err_ngrok_3211">ERR_NGROK_3211</a>
      </td>
      <td class="pre-wrapped">
        The server does not authorize requests from your user-agent
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3212" href="/docs/errors/err_ngrok_3212">ERR_NGROK_3212</a>
      </td>
      <td class="pre-wrapped">
        Tunnel <code>&lt;HOSTNAME&gt;</code> has multiple bindings but no binding was specified
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3213" href="/docs/errors/err_ngrok_3213">ERR_NGROK_3213</a>
      </td>
      <td class="pre-wrapped">
        Upgrade request origin forbidden
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3300" href="/docs/errors/err_ngrok_3300">ERR_NGROK_3300</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3301" href="/docs/errors/err_ngrok_3301">ERR_NGROK_3301</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is expired.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3302" href="/docs/errors/err_ngrok_3302">ERR_NGROK_3302</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3303" href="/docs/errors/err_ngrok_3303">ERR_NGROK_3303</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3304" href="/docs/errors/err_ngrok_3304">ERR_NGROK_3304</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3305" href="/docs/errors/err_ngrok_3305">ERR_NGROK_3305</a>
      </td>
      <td class="pre-wrapped">
        This request has expired. Please try again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3306" href="/docs/errors/err_ngrok_3306">ERR_NGROK_3306</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3307" href="/docs/errors/err_ngrok_3307">ERR_NGROK_3307</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3308" href="/docs/errors/err_ngrok_3308">ERR_NGROK_3308</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3309" href="/docs/errors/err_ngrok_3309">ERR_NGROK_3309</a>
      </td>
      <td class="pre-wrapped">
        The route match type `<code>&lt;TYP&gt;</code>` is incompatible with OAuth, OIDC, or SAML. Compatible selector match types are "EXACT_PATH" or "PATH_PREFIX".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3310" href="/docs/errors/err_ngrok_3310">ERR_NGROK_3310</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3311" href="/docs/errors/err_ngrok_3311">ERR_NGROK_3311</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3312" href="/docs/errors/err_ngrok_3312">ERR_NGROK_3312</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3313" href="/docs/errors/err_ngrok_3313">ERR_NGROK_3313</a>
      </td>
      <td class="pre-wrapped">
        Invalid Auth Cookie Domain: <code>&lt;DOMAIN&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3401" href="/docs/errors/err_ngrok_3401">ERR_NGROK_3401</a>
      </td>
      <td class="pre-wrapped">
        Your request lacks valid credentials.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3403" href="/docs/errors/err_ngrok_3403">ERR_NGROK_3403</a>
      </td>
      <td class="pre-wrapped">
        You are forbidden from making this request.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3406" href="/docs/errors/err_ngrok_3406">ERR_NGROK_3406</a>
      </td>
      <td class="pre-wrapped">
        Token could not be found in request.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3408" href="/docs/errors/err_ngrok_3408">ERR_NGROK_3408</a>
      </td>
      <td class="pre-wrapped">
        Configured HTTP Header `<code>&lt;TYP&gt;</code>` was not found in request.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3411" href="/docs/errors/err_ngrok_3411">ERR_NGROK_3411</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse JSON body.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3412" href="/docs/errors/err_ngrok_3412">ERR_NGROK_3412</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse form.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3413" href="/docs/errors/err_ngrok_3413">ERR_NGROK_3413</a>
      </td>
      <td class="pre-wrapped">
        Configured prefix `<code>&lt;TYP&gt;</code>` not found.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3414" href="/docs/errors/err_ngrok_3414">ERR_NGROK_3414</a>
      </td>
      <td class="pre-wrapped">
        Failed to read content-type header.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3415" href="/docs/errors/err_ngrok_3415">ERR_NGROK_3415</a>
      </td>
      <td class="pre-wrapped">
        Tokens in body not supported for HTTP method `<code>&lt;TYP&gt;</code>`.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3416" href="/docs/errors/err_ngrok_3416">ERR_NGROK_3416</a>
      </td>
      <td class="pre-wrapped">
        Token could not be parsed, possibly malformed.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3422" href="/docs/errors/err_ngrok_3422">ERR_NGROK_3422</a>
      </td>
      <td class="pre-wrapped">
        Failed to fetch JWKS.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3501" href="/docs/errors/err_ngrok_3501">ERR_NGROK_3501</a>
      </td>
      <td class="pre-wrapped">
        ForwardInternal may only forward through <code>&lt;MAX&gt;</code> endpoints.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3601" href="/docs/errors/err_ngrok_3601">ERR_NGROK_3601</a>
      </td>
      <td class="pre-wrapped">
        The response received from the http-request target had a size exceeding the maximum allowed.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3602" href="/docs/errors/err_ngrok_3602">ERR_NGROK_3602</a>
      </td>
      <td class="pre-wrapped">
        The configured http-request timeout was reached before a successful request could be made.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3603" href="/docs/errors/err_ngrok_3603">ERR_NGROK_3603</a>
      </td>
      <td class="pre-wrapped">
        Request rejected, A loop was detected.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3700" href="/docs/errors/err_ngrok_3700">ERR_NGROK_3700</a>
      </td>
      <td class="pre-wrapped">
        The request was blocked by the WAF.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_3701" href="/docs/errors/err_ngrok_3701">ERR_NGROK_3701</a>
      </td>
      <td class="pre-wrapped">
        Something went wrong with the WAF.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4001" href="/docs/errors/err_ngrok_4001">ERR_NGROK_4001</a>
      </td>
      <td class="pre-wrapped">
        Plan <code>&lt;PLAN_ID&gt;</code> does not exist.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4003" href="/docs/errors/err_ngrok_4003">ERR_NGROK_4003</a>
      </td>
      <td class="pre-wrapped">
        Account name must not be empty.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4004" href="/docs/errors/err_ngrok_4004">ERR_NGROK_4004</a>
      </td>
      <td class="pre-wrapped">
        Account name exceeds max length, <code>&lt;LENGTH&gt;</code> bytes, max: <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4005" href="/docs/errors/err_ngrok_4005">ERR_NGROK_4005</a>
      </td>
      <td class="pre-wrapped">
        Another account is already configured with the GSuite domain <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4011" href="/docs/errors/err_ngrok_4011">ERR_NGROK_4011</a>
      </td>
      <td class="pre-wrapped">
        Your password must be at least <code>&lt;LENGTH&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4012" href="/docs/errors/err_ngrok_4012">ERR_NGROK_4012</a>
      </td>
      <td class="pre-wrapped">
        Your account does not have access to <code>&lt;FEATURE&gt;</code>.
        Upgrade to get access: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4013" href="/docs/errors/err_ngrok_4013">ERR_NGROK_4013</a>
      </td>
      <td class="pre-wrapped">
        You may not create a new account because you are already a member of the free account "<code>&lt;ACCOUNT_NAME&gt;</code>". Upgrade or delete that account first before creating a new account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4014" href="/docs/errors/err_ngrok_4014">ERR_NGROK_4014</a>
      </td>
      <td class="pre-wrapped">
        The account <code>&lt;NAME&gt;</code> was suspended. It may not be deleted. Contact support@ngrok.com if you believe this is an error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4015" href="/docs/errors/err_ngrok_4015">ERR_NGROK_4015</a>
      </td>
      <td class="pre-wrapped">
        The account <code>&lt;NAME&gt;</code> was banned for violation of the terms of service. It may not be deleted. Contact support@ngrok.com if you believe this is an error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4016" href="/docs/errors/err_ngrok_4016">ERR_NGROK_4016</a>
      </td>
      <td class="pre-wrapped">
        You may not create a new account because another account you were the administrator of was suspended. Contact support@ngrok.com if you believe this is an error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4017" href="/docs/errors/err_ngrok_4017">ERR_NGROK_4017</a>
      </td>
      <td class="pre-wrapped">
        You may not create a new account because another account you were the administrator of was banned for violation of the terms of service. Contact support@ngrok.com if you believe this is an error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4018" href="/docs/errors/err_ngrok_4018">ERR_NGROK_4018</a>
      </td>
      <td class="pre-wrapped">
        Usage of ngrok requires a verified account and authtoken.
        Sign up for an account: <a href="https://dashboard.ngrok.com/signup">https://dashboard.ngrok.com/signup</a>
        Install your authtoken: <a href="https://dashboard.ngrok.com/get-started/your-authtoken">https://dashboard.ngrok.com/get-started/your-authtoken</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4019" href="/docs/errors/err_ngrok_4019">ERR_NGROK_4019</a>
      </td>
      <td class="pre-wrapped">
        This account cannot be deleted because it has an active billing subscription. Please contact support@ngrok.com for help deleting this account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4020" href="/docs/errors/err_ngrok_4020">ERR_NGROK_4020</a>
      </td>
      <td class="pre-wrapped">
        Your password must be less then <code>&lt;LENGTH&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4021" href="/docs/errors/err_ngrok_4021">ERR_NGROK_4021</a>
      </td>
      <td class="pre-wrapped">
        This account cannot be deleted because it has an unpaid invoice. Please contact support@ngrok.com for help deleting this account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4022" href="/docs/errors/err_ngrok_4022">ERR_NGROK_4022</a>
      </td>
      <td class="pre-wrapped">
        You do not have permission to change the observability capture settings for this account. Please contact an admin for this account to change these settings.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4023" href="/docs/errors/err_ngrok_4023">ERR_NGROK_4023</a>
      </td>
      <td class="pre-wrapped">
        Your account does not have access to <code>&lt;FEATURE&gt;</code>.
        Contact us to get access to this feature: <a href="https://ngrok.com/enterprise/contact">https://ngrok.com/enterprise/contact</a>?ref=pricing-prod-custom
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4100" href="/docs/errors/err_ngrok_4100">ERR_NGROK_4100</a>
      </td>
      <td class="pre-wrapped">
        The email or password you entered is not valid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4101" href="/docs/errors/err_ngrok_4101">ERR_NGROK_4101</a>
      </td>
      <td class="pre-wrapped">
        A user with the email address <code>&lt;EMAIL&gt;</code> already exists.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4103" href="/docs/errors/err_ngrok_4103">ERR_NGROK_4103</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;EMAIL&gt;</code> is not a valid email address.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4104" href="/docs/errors/err_ngrok_4104">ERR_NGROK_4104</a>
      </td>
      <td class="pre-wrapped">
        User name must not be empty.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4105" href="/docs/errors/err_ngrok_4105">ERR_NGROK_4105</a>
      </td>
      <td class="pre-wrapped">
        User name exceeds max length, <code>&lt;LENGTH&gt;</code> bytes, max: <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4106" href="/docs/errors/err_ngrok_4106">ERR_NGROK_4106</a>
      </td>
      <td class="pre-wrapped">
        Your user <code>&lt;EMAIL&gt;</code> was suspended for violation of the terms of service. It may not be deleted. Contact support@ngrok.com if you believe this is an error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4107" href="/docs/errors/err_ngrok_4107">ERR_NGROK_4107</a>
      </td>
      <td class="pre-wrapped">
        Your user <code>&lt;EMAIL&gt;</code> was banned for violation of the terms of service. It may not be deleted. Contact support@ngrok.com if you believe this is an error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4108" href="/docs/errors/err_ngrok_4108">ERR_NGROK_4108</a>
      </td>
      <td class="pre-wrapped">
        Sign ups are disallowed for the email provider "<code>&lt;DOMAIN&gt;</code>". Please sign up with a different email provider.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4109" href="/docs/errors/err_ngrok_4109">ERR_NGROK_4109</a>
      </td>
      <td class="pre-wrapped">
        Bot name must not be empty.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4110" href="/docs/errors/err_ngrok_4110">ERR_NGROK_4110</a>
      </td>
      <td class="pre-wrapped">
        Bot name exceeds max length, <code>&lt;LENGTH&gt;</code> bytes, max: <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4111" href="/docs/errors/err_ngrok_4111">ERR_NGROK_4111</a>
      </td>
      <td class="pre-wrapped">
        You must be an admin to create, update, or delete Bots.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4112" href="/docs/errors/err_ngrok_4112">ERR_NGROK_4112</a>
      </td>
      <td class="pre-wrapped">
        Bot names must be unique within an account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4114" href="/docs/errors/err_ngrok_4114">ERR_NGROK_4114</a>
      </td>
      <td class="pre-wrapped">
        The email domain "<code>&lt;DOMAIN&gt;</code>" does not allow self-serve user registrations. Please contact your ngrok administrator or support@ngrok.com for access.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4115" href="/docs/errors/err_ngrok_4115">ERR_NGROK_4115</a>
      </td>
      <td class="pre-wrapped">
        The email domain "<code>&lt;DOMAIN&gt;</code>" does not allow account creation. Please contact your ngrok administrator or support@ngrok.com for access.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4116" href="/docs/errors/err_ngrok_4116">ERR_NGROK_4116</a>
      </td>
      <td class="pre-wrapped">
        The domain of the email entered is registered under a domain control and must signup via SSO
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4117" href="/docs/errors/err_ngrok_4117">ERR_NGROK_4117</a>
      </td>
      <td class="pre-wrapped">
        The email address <code>&lt;EMAIL&gt;</code> already exists under a similar alias. Please use that email address to login.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4118" href="/docs/errors/err_ngrok_4118">ERR_NGROK_4118</a>
      </td>
      <td class="pre-wrapped">
        Sign ups are disallowed for the email provided "<code>&lt;EMAIL&gt;</code>". Please sign up with a different email address.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4200" href="/docs/errors/err_ngrok_4200">ERR_NGROK_4200</a>
      </td>
      <td class="pre-wrapped">
        You may not delete all or your logins, you must have at least one.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4201" href="/docs/errors/err_ngrok_4201">ERR_NGROK_4201</a>
      </td>
      <td class="pre-wrapped">
        This <code>&lt;LOGIN&gt;</code> login is already connected to another ngrok user.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4300" href="/docs/errors/err_ngrok_4300">ERR_NGROK_4300</a>
      </td>
      <td class="pre-wrapped">
        No user with the email address <code>&lt;EMAIL&gt;</code> exists.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4301" href="/docs/errors/err_ngrok_4301">ERR_NGROK_4301</a>
      </td>
      <td class="pre-wrapped">
        You have not set a password for this account. Please login using Google or GitHub instead.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4302" href="/docs/errors/err_ngrok_4302">ERR_NGROK_4302</a>
      </td>
      <td class="pre-wrapped">
        Unable to redeem password: <code>&lt;REASON&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4400" href="/docs/errors/err_ngrok_4400">ERR_NGROK_4400</a>
      </td>
      <td class="pre-wrapped">
        An email address is required to invite a new user
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4401" href="/docs/errors/err_ngrok_4401">ERR_NGROK_4401</a>
      </td>
      <td class="pre-wrapped">
        The invited email address is too long: <code>&lt;LENGTH&gt;</code> bytes. Max <code>&lt;MAX&gt;</code> bytes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4402" href="/docs/errors/err_ngrok_4402">ERR_NGROK_4402</a>
      </td>
      <td class="pre-wrapped">
        The invited user would exceed your current team size limit of <code>&lt;TEAM_SIZE&gt;</code>. Add another seat at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>. Then you'll be able to invite your team.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4403" href="/docs/errors/err_ngrok_4403">ERR_NGROK_4403</a>
      </td>
      <td class="pre-wrapped">
        You cannot invite any more users. Please email support@ngrok.com if you believe this is an error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4404" href="/docs/errors/err_ngrok_4404">ERR_NGROK_4404</a>
      </td>
      <td class="pre-wrapped">
        Unabled to redeem invitation: <code>&lt;REASON&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4405" href="/docs/errors/err_ngrok_4405">ERR_NGROK_4405</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;EMAIL&gt;</code> is not a valid email address.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4407" href="/docs/errors/err_ngrok_4407">ERR_NGROK_4407</a>
      </td>
      <td class="pre-wrapped">
        You are not currently permitted to enroll in the beta.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4408" href="/docs/errors/err_ngrok_4408">ERR_NGROK_4408</a>
      </td>
      <td class="pre-wrapped">
        Feature request suggestions must be between 1 and <code>&lt;MAXLEN&gt;</code> characters, got <code>&lt;LENGTH&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4409" href="/docs/errors/err_ngrok_4409">ERR_NGROK_4409</a>
      </td>
      <td class="pre-wrapped">
        Your account is not allowed to set invitation permissions.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4410" href="/docs/errors/err_ngrok_4410">ERR_NGROK_4410</a>
      </td>
      <td class="pre-wrapped">
        You do not have permissions to invite an administrator to the account. Only administrators may invite other administrators.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4411" href="/docs/errors/err_ngrok_4411">ERR_NGROK_4411</a>
      </td>
      <td class="pre-wrapped">
        You do not have permissions to invite users to the account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4412" href="/docs/errors/err_ngrok_4412">ERR_NGROK_4412</a>
      </td>
      <td class="pre-wrapped">
        You may not invite users to the account with higher permissions than your own.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4413" href="/docs/errors/err_ngrok_4413">ERR_NGROK_4413</a>
      </td>
      <td class="pre-wrapped">
        Developer Read Write must set on a user if thier permissions include Invite.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4414" href="/docs/errors/err_ngrok_4414">ERR_NGROK_4414</a>
      </td>
      <td class="pre-wrapped">
        You are not allowed to create invitations, this account uses SCIM 2.0 to manage members.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4415" href="/docs/errors/err_ngrok_4415">ERR_NGROK_4415</a>
      </td>
      <td class="pre-wrapped">
        You are not allowed to redeem this invitation, this account uses SCIM 2.0 to manage members.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4416" href="/docs/errors/err_ngrok_4416">ERR_NGROK_4416</a>
      </td>
      <td class="pre-wrapped">
        Your email does not match the email intended for this invitation, <code>&lt;EMAIL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4451" href="/docs/errors/err_ngrok_4451">ERR_NGROK_4451</a>
      </td>
      <td class="pre-wrapped">
        A user with the email address <code>&lt;EMAIL&gt;</code> already exists.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4452" href="/docs/errors/err_ngrok_4452">ERR_NGROK_4452</a>
      </td>
      <td class="pre-wrapped">
        The email address being verified, <code>&lt;EMAIL&gt;</code>, belongs to another user.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4453" href="/docs/errors/err_ngrok_4453">ERR_NGROK_4453</a>
      </td>
      <td class="pre-wrapped">
        A similar email address to the one being verified, <code>&lt;EMAIL&gt;</code>, belongs to another user.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4500" href="/docs/errors/err_ngrok_4500">ERR_NGROK_4500</a>
      </td>
      <td class="pre-wrapped">
        The URL <code>&lt;URL&gt;</code> is not a valid tcp address or URL.  Please use either hostname:port or a full URL including protocol for HTTP or TLS endpoints.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4501" href="/docs/errors/err_ngrok_4501">ERR_NGROK_4501</a>
      </td>
      <td class="pre-wrapped">
        The TCP port <code>&lt;PORT&gt;</code> in <code>&lt;HOST&gt;</code> is not a valid numerical TCP port.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4502" href="/docs/errors/err_ngrok_4502">ERR_NGROK_4502</a>
      </td>
      <td class="pre-wrapped">
        The TCP port <code>&lt;PORT&gt;</code> for <code>&lt;HOST&gt;</code> is not within the range of possible ngrok ports.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4503" href="/docs/errors/err_ngrok_4503">ERR_NGROK_4503</a>
      </td>
      <td class="pre-wrapped">
        The IP <code>&lt;IP&gt;</code> is not a known ngrok TCP IP.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4504" href="/docs/errors/err_ngrok_4504">ERR_NGROK_4504</a>
      </td>
      <td class="pre-wrapped">
        The host <code>&lt;HOST&gt;</code> is not a known ngrok TCP hostname.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4701" href="/docs/errors/err_ngrok_4701">ERR_NGROK_4701</a>
      </td>
      <td class="pre-wrapped">
        You must only specify a single SSO configuration but you specified both SAML and OpenID Connect.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_4702" href="/docs/errors/err_ngrok_4702">ERR_NGROK_4702</a>
      </td>
      <td class="pre-wrapped">
        You cannot delete your last IdP provider when SSO enforced is enabled
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5000" href="/docs/errors/err_ngrok_5000">ERR_NGROK_5000</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> <code>&lt;RESOURCE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5001" href="/docs/errors/err_ngrok_5001">ERR_NGROK_5001</a>
      </td>
      <td class="pre-wrapped">
        Your account is rate limited to <code>&lt;MAX&gt;</code> <code>&lt;RESOURCE&gt;</code> per <code>&lt;INTERVAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5100" href="/docs/errors/err_ngrok_5100">ERR_NGROK_5100</a>
      </td>
      <td class="pre-wrapped">
        An event destination must specify a destination target. Valid targets include: <code>&lt;TYPE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5102" href="/docs/errors/err_ngrok_5102">ERR_NGROK_5102</a>
      </td>
      <td class="pre-wrapped">
        You have reached the maximum of <code>&lt;MAX&gt;</code> destinations for your account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5103" href="/docs/errors/err_ngrok_5103">ERR_NGROK_5103</a>
      </td>
      <td class="pre-wrapped">
        No event destinations with ID: <code>&lt;ID&gt;</code> associated with this account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5104" href="/docs/errors/err_ngrok_5104">ERR_NGROK_5104</a>
      </td>
      <td class="pre-wrapped">
        Event Destination role ARN "<code>&lt;ARN&gt;</code>" is not a valid ARN for an aws IAM role. Error: <code>&lt;MSG&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5105" href="/docs/errors/err_ngrok_5105">ERR_NGROK_5105</a>
      </td>
      <td class="pre-wrapped">
        Event Destination role is missing an external ID.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5106" href="/docs/errors/err_ngrok_5106">ERR_NGROK_5106</a>
      </td>
      <td class="pre-wrapped">
        Event Destination target is missing the auth field.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5107" href="/docs/errors/err_ngrok_5107">ERR_NGROK_5107</a>
      </td>
      <td class="pre-wrapped">
        Event Destination auth is missing a role or credentials to send events to the destination target.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5108" href="/docs/errors/err_ngrok_5108">ERR_NGROK_5108</a>
      </td>
      <td class="pre-wrapped">
        Update to target type not allowed. Create a new destination if you would like to send to a new target.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5112" href="/docs/errors/err_ngrok_5112">ERR_NGROK_5112</a>
      </td>
      <td class="pre-wrapped">
        Event Destination "<code>&lt;ID&gt;</code>" cannot be deleted because it is still in use by at least one Event Stream
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5115" href="/docs/errors/err_ngrok_5115">ERR_NGROK_5115</a>
      </td>
      <td class="pre-wrapped">
        An event destination may not specify more than one destination target.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5116" href="/docs/errors/err_ngrok_5116">ERR_NGROK_5116</a>
      </td>
      <td class="pre-wrapped">
        An event destination may not specify more than one type of authentication.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5117" href="/docs/errors/err_ngrok_5117">ERR_NGROK_5117</a>
      </td>
      <td class="pre-wrapped">
        The property <code>&lt;NAME&gt;</code> is an immutable property and may not be updated. Create a new destination instead.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5118" href="/docs/errors/err_ngrok_5118">ERR_NGROK_5118</a>
      </td>
      <td class="pre-wrapped">
        The partition (<code>&lt;VALUE&gt;</code>) of the provided <code>&lt;FIELD&gt;</code> (<code>&lt;ARN&gt;</code>) is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5119" href="/docs/errors/err_ngrok_5119">ERR_NGROK_5119</a>
      </td>
      <td class="pre-wrapped">
        The service (<code>&lt;VALUE&gt;</code>) of the provided <code>&lt;FIELD&gt;</code> (<code>&lt;ARN&gt;</code>) is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5120" href="/docs/errors/err_ngrok_5120">ERR_NGROK_5120</a>
      </td>
      <td class="pre-wrapped">
        The provided <code>&lt;FIELD&gt;</code> (<code>&lt;ARN&gt;</code>) is invalid. Please make sure it matches the ARN you obtained from Amazon exactly.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5122" href="/docs/errors/err_ngrok_5122">ERR_NGROK_5122</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5123" href="/docs/errors/err_ngrok_5123">ERR_NGROK_5123</a>
      </td>
      <td class="pre-wrapped">
        Event Subscription <code>&lt;ID&gt;</code> not found.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5124" href="/docs/errors/err_ngrok_5124">ERR_NGROK_5124</a>
      </td>
      <td class="pre-wrapped">
        Your account can't use the event subscriptions feature.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5125" href="/docs/errors/err_ngrok_5125">ERR_NGROK_5125</a>
      </td>
      <td class="pre-wrapped">
        Source <code>&lt;TYP&gt;</code> not found on Event Subscription <code>&lt;ID&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5126" href="/docs/errors/err_ngrok_5126">ERR_NGROK_5126</a>
      </td>
      <td class="pre-wrapped">
        You have reached the maximum of <code>&lt;MAX&gt;</code> destinations on a subscription.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5127" href="/docs/errors/err_ngrok_5127">ERR_NGROK_5127</a>
      </td>
      <td class="pre-wrapped">
        The event type for each source must be unique within a subscription.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5128" href="/docs/errors/err_ngrok_5128">ERR_NGROK_5128</a>
      </td>
      <td class="pre-wrapped">
        Your account can't create event destinations.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5129" href="/docs/errors/err_ngrok_5129">ERR_NGROK_5129</a>
      </td>
      <td class="pre-wrapped">
        The ARN (<code>&lt;ARN&gt;</code>) is not valid for the <code>&lt;SERVICE&gt;</code> service.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5130" href="/docs/errors/err_ngrok_5130">ERR_NGROK_5130</a>
      </td>
      <td class="pre-wrapped">
        The ARN (<code>&lt;ARN&gt;</code>) is not valid for the <code>&lt;RESOURCE&gt;</code> resource type.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5131" href="/docs/errors/err_ngrok_5131">ERR_NGROK_5131</a>
      </td>
      <td class="pre-wrapped">
        You have reached the maximum of <code>&lt;MAX&gt;</code> event subscriptions for your account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5132" href="/docs/errors/err_ngrok_5132">ERR_NGROK_5132</a>
      </td>
      <td class="pre-wrapped">
        The Datadog API key provided is not authorized to send events into Datadog: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5133" href="/docs/errors/err_ngrok_5133">ERR_NGROK_5133</a>
      </td>
      <td class="pre-wrapped">
        Event Destination target is missing API Key.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5134" href="/docs/errors/err_ngrok_5134">ERR_NGROK_5134</a>
      </td>
      <td class="pre-wrapped">
        The Datadog site provided (<code>&lt;DDSITE&gt;</code>) is not valid, please see the "SITE" column from <a href="https://docs.datadoghq.com/getting_started/site">https://docs.datadoghq.com/getting_started/site</a>/#access-the-datadog-site
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5135" href="/docs/errors/err_ngrok_5135">ERR_NGROK_5135</a>
      </td>
      <td class="pre-wrapped">
        Your account can't use the event source filter feature.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5136" href="/docs/errors/err_ngrok_5136">ERR_NGROK_5136</a>
      </td>
      <td class="pre-wrapped">
        The provided azure logs ingestion data collection rule ID is missing or invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5137" href="/docs/errors/err_ngrok_5137">ERR_NGROK_5137</a>
      </td>
      <td class="pre-wrapped">
        The provided azure logs ingestion data collection stream name is missing or invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5138" href="/docs/errors/err_ngrok_5138">ERR_NGROK_5138</a>
      </td>
      <td class="pre-wrapped">
        The provided azure logs ingestion URI is missing or invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5139" href="/docs/errors/err_ngrok_5139">ERR_NGROK_5139</a>
      </td>
      <td class="pre-wrapped">
        The provided azure configuration is invalid: $<code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5140" href="/docs/errors/err_ngrok_5140">ERR_NGROK_5140</a>
      </td>
      <td class="pre-wrapped">
        One or more provided fields are invalid: $<code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5200" href="/docs/errors/err_ngrok_5200">ERR_NGROK_5200</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5201" href="/docs/errors/err_ngrok_5201">ERR_NGROK_5201</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5202" href="/docs/errors/err_ngrok_5202">ERR_NGROK_5202</a>
      </td>
      <td class="pre-wrapped">
        Encountered an error while communicating with the OIDC provider:
        "<code>&lt;ERROR&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5203" href="/docs/errors/err_ngrok_5203">ERR_NGROK_5203</a>
      </td>
      <td class="pre-wrapped">
        The OIDC provider failed to return a OIDC ID Token.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5204" href="/docs/errors/err_ngrok_5204">ERR_NGROK_5204</a>
      </td>
      <td class="pre-wrapped">
        Failed to verify the OIDC ID Token:
        "<code>&lt;ERROR&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5205" href="/docs/errors/err_ngrok_5205">ERR_NGROK_5205</a>
      </td>
      <td class="pre-wrapped">
        Failed to extract claims from the OIDC ID Token:
        "<code>&lt;ERROR&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5206" href="/docs/errors/err_ngrok_5206">ERR_NGROK_5206</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration "<code>&lt;ECID&gt;</code>" does not exist.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5207" href="/docs/errors/err_ngrok_5207">ERR_NGROK_5207</a>
      </td>
      <td class="pre-wrapped">
        OIDC is not enabled on the endpoint configuration "<code>&lt;ECID&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5208" href="/docs/errors/err_ngrok_5208">ERR_NGROK_5208</a>
      </td>
      <td class="pre-wrapped">
        Encountered an error while attempting to fetch OIDC provider metadata:
        "<code>&lt;ERROR&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5209" href="/docs/errors/err_ngrok_5209">ERR_NGROK_5209</a>
      </td>
      <td class="pre-wrapped">
        The authentication flow was not completed in time. Please try authenticating again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5210" href="/docs/errors/err_ngrok_5210">ERR_NGROK_5210</a>
      </td>
      <td class="pre-wrapped">
        The authentication flow was not completed in time. Please try authenticating again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5211" href="/docs/errors/err_ngrok_5211">ERR_NGROK_5211</a>
      </td>
      <td class="pre-wrapped">
        The OIDC provider returned the error code "<code>&lt;ERROR&gt;</code>" with the additional details: "<code>&lt;DETAILS&gt;</code>". Please try authenticating again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5212" href="/docs/errors/err_ngrok_5212">ERR_NGROK_5212</a>
      </td>
      <td class="pre-wrapped">
        OIDC is not enabled on the domain "<code>&lt;HOSTNAME&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5300" href="/docs/errors/err_ngrok_5300">ERR_NGROK_5300</a>
      </td>
      <td class="pre-wrapped">
        SAML RelayState parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5301" href="/docs/errors/err_ngrok_5301">ERR_NGROK_5301</a>
      </td>
      <td class="pre-wrapped">
        The SAML IdP sent an invalid SAML assertion:
        "<code>&lt;ERROR&gt;</code>"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5302" href="/docs/errors/err_ngrok_5302">ERR_NGROK_5302</a>
      </td>
      <td class="pre-wrapped">
        The SAML module for the endpoint configuration "<code>&lt;ECID&gt;</code>" disallows IdP-initiated logins.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5303" href="/docs/errors/err_ngrok_5303">ERR_NGROK_5303</a>
      </td>
      <td class="pre-wrapped">
        The endpoint configuration "<code>&lt;ECID&gt;</code>" is not attached to any domains.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5304" href="/docs/errors/err_ngrok_5304">ERR_NGROK_5304</a>
      </td>
      <td class="pre-wrapped">
        Could not find the domain "<code>&lt;DOMAIN&gt;</code>" specified in the IdP-initiated RelayState.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5305" href="/docs/errors/err_ngrok_5305">ERR_NGROK_5305</a>
      </td>
      <td class="pre-wrapped">
        The SAML IdP sent an invalid SAML assertion:
        "<code>&lt;ERROR&gt;</code>"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5306" href="/docs/errors/err_ngrok_5306">ERR_NGROK_5306</a>
      </td>
      <td class="pre-wrapped">
        SAML RelayState parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5307" href="/docs/errors/err_ngrok_5307">ERR_NGROK_5307</a>
      </td>
      <td class="pre-wrapped">
        The domain "<code>&lt;DOMAIN&gt;</code>" specified in the IdP-initiated RelayState is not attached to the endpoint configuration "<code>&lt;ECID&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5308" href="/docs/errors/err_ngrok_5308">ERR_NGROK_5308</a>
      </td>
      <td class="pre-wrapped">
        The SAML IdP sent an invalid SAML logout response:
        "<code>&lt;ERROR&gt;</code>"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5309" href="/docs/errors/err_ngrok_5309">ERR_NGROK_5309</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5310" href="/docs/errors/err_ngrok_5310">ERR_NGROK_5310</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5311" href="/docs/errors/err_ngrok_5311">ERR_NGROK_5311</a>
      </td>
      <td class="pre-wrapped">
        The SAML IdP sent an invalid SAML assertion with <code>&lt;N&gt;</code> Authn statements.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5312" href="/docs/errors/err_ngrok_5312">ERR_NGROK_5312</a>
      </td>
      <td class="pre-wrapped">
        You are not a member of the configured authorized groups on the ngrok edge.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5313" href="/docs/errors/err_ngrok_5313">ERR_NGROK_5313</a>
      </td>
      <td class="pre-wrapped">
        The authentication flow was not completed in time. Please try authenticating again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5314" href="/docs/errors/err_ngrok_5314">ERR_NGROK_5314</a>
      </td>
      <td class="pre-wrapped">
        The logout flow was not completed in time. Please try authenticating again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5315" href="/docs/errors/err_ngrok_5315">ERR_NGROK_5315</a>
      </td>
      <td class="pre-wrapped">
        The authentication flow was not completed in time. Please try authenticating again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5316" href="/docs/errors/err_ngrok_5316">ERR_NGROK_5316</a>
      </td>
      <td class="pre-wrapped">
        The logout flow was not completed in time. Please try authenticating again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5317" href="/docs/errors/err_ngrok_5317">ERR_NGROK_5317</a>
      </td>
      <td class="pre-wrapped">
        The SAML module for the edge route "<code>&lt;RTEID&gt;</code>" disallows IdP-initiated logins.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5318" href="/docs/errors/err_ngrok_5318">ERR_NGROK_5318</a>
      </td>
      <td class="pre-wrapped">
        The edge "<code>&lt;EDGID&gt;</code>" is not attached to any domains.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5319" href="/docs/errors/err_ngrok_5319">ERR_NGROK_5319</a>
      </td>
      <td class="pre-wrapped">
        Failed to complete IdP-initiated SAML login. The RelayState specified an invalid domain "<code>&lt;DOMAIN&gt;</code>" to redirect to. Ensure that the domain "<code>&lt;DOMAIN&gt;</code>" is configured as a hostport for "<code>&lt;EDGID&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5320" href="/docs/errors/err_ngrok_5320">ERR_NGROK_5320</a>
      </td>
      <td class="pre-wrapped">
        The edge route "<code>&lt;RTEID&gt;</code>" does not exist.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5321" href="/docs/errors/err_ngrok_5321">ERR_NGROK_5321</a>
      </td>
      <td class="pre-wrapped">
        The RelayState must be configured with the redirect URL for IdP-initiated logins.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5322" href="/docs/errors/err_ngrok_5322">ERR_NGROK_5322</a>
      </td>
      <td class="pre-wrapped">
        The domain "<code>&lt;DOMAIN&gt;</code>" specified in the IdP-initiated RelayState is not attached to the edge "<code>&lt;EDGID&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5323" href="/docs/errors/err_ngrok_5323">ERR_NGROK_5323</a>
      </td>
      <td class="pre-wrapped">
        The SAML module is not enabled for the configuration "<code>&lt;ID&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5324" href="/docs/errors/err_ngrok_5324">ERR_NGROK_5324</a>
      </td>
      <td class="pre-wrapped">
        The ID "<code>&lt;ID&gt;</code>" that was specified is invalid. This usually indicates a malformed URL.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5325" href="/docs/errors/err_ngrok_5325">ERR_NGROK_5325</a>
      </td>
      <td class="pre-wrapped">
        Failed to complete IdP-initiated SAML login. Edge does not have any attached domains. Please ensure that at least one domain is configured as a hostport for "<code>&lt;EDGID&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5326" href="/docs/errors/err_ngrok_5326">ERR_NGROK_5326</a>
      </td>
      <td class="pre-wrapped">
        Failed to complete IdP-initiated SAML login. The RelayState must be configured with the redirect URL for IdP-initiated logins when using a route selector match type of "<code>&lt;MATCHTYP&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5400" href="/docs/errors/err_ngrok_5400">ERR_NGROK_5400</a>
      </td>
      <td class="pre-wrapped">
        Event Sources for the "<code>&lt;TYP&gt;</code>" event type must specify fields to capture.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5401" href="/docs/errors/err_ngrok_5401">ERR_NGROK_5401</a>
      </td>
      <td class="pre-wrapped">
        Event Sources for the "<code>&lt;TYP&gt;</code>" event may not specify fields.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5402" href="/docs/errors/err_ngrok_5402">ERR_NGROK_5402</a>
      </td>
      <td class="pre-wrapped">
        Event Sources for the "<code>&lt;TYP&gt;</code>" event may not specify a filter.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5403" href="/docs/errors/err_ngrok_5403">ERR_NGROK_5403</a>
      </td>
      <td class="pre-wrapped">
        Event Sources must be configured with fields that match its event type. "<code>&lt;FIELD&gt;</code>" is not a "<code>&lt;TYP&gt;</code>" field
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5404" href="/docs/errors/err_ngrok_5404">ERR_NGROK_5404</a>
      </td>
      <td class="pre-wrapped">
        Event Source filter is invalid: "<code>&lt;ERR&gt;</code>"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5405" href="/docs/errors/err_ngrok_5405">ERR_NGROK_5405</a>
      </td>
      <td class="pre-wrapped">
        Invalid Event Field: "<code>&lt;FIELD&gt;</code>"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5406" href="/docs/errors/err_ngrok_5406">ERR_NGROK_5406</a>
      </td>
      <td class="pre-wrapped">
        Field is not yet supported in event filters: "<code>&lt;FIELD&gt;</code>"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5500" href="/docs/errors/err_ngrok_5500">ERR_NGROK_5500</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5501" href="/docs/errors/err_ngrok_5501">ERR_NGROK_5501</a>
      </td>
      <td class="pre-wrapped">
        The authentication flow was not completed in time. Please try authenticating again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5502" href="/docs/errors/err_ngrok_5502">ERR_NGROK_5502</a>
      </td>
      <td class="pre-wrapped">
        Authorization with <code>&lt;PROVIDER&gt;</code> succeeded, but these required scopes not were granted: <code>&lt;SCOPES&gt;</code>.
        Please reauthorize and grant all requested scopes to the application.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5503" href="/docs/errors/err_ngrok_5503">ERR_NGROK_5503</a>
      </td>
      <td class="pre-wrapped">
        URL "state" parameter is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5504" href="/docs/errors/err_ngrok_5504">ERR_NGROK_5504</a>
      </td>
      <td class="pre-wrapped">
        The authentication flow was not completed in time. Please try authenticating again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5507" href="/docs/errors/err_ngrok_5507">ERR_NGROK_5507</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;ERROR_NAME&gt;</code> <code>&lt;DETAILS&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5508" href="/docs/errors/err_ngrok_5508">ERR_NGROK_5508</a>
      </td>
      <td class="pre-wrapped">
        Authorization with <code>&lt;PROVIDER&gt;</code> succeeded, but these required scopes not were granted: <code>&lt;SCOPES&gt;</code>.
        Please reauthorize and grant all requested scopes to the application.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5510" href="/docs/errors/err_ngrok_5510">ERR_NGROK_5510</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> did not provide an email for your account.
        Check that you have a primary email and that it's confirmed before trying again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5511" href="/docs/errors/err_ngrok_5511">ERR_NGROK_5511</a>
      </td>
      <td class="pre-wrapped">
        Email "<code>&lt;EMAIL&gt;</code>" is not authorized for use by this account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5512" href="/docs/errors/err_ngrok_5512">ERR_NGROK_5512</a>
      </td>
      <td class="pre-wrapped">
        Email is malformed. Email "<code>&lt;EMAIL&gt;</code>" is missing an @ sign.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5513" href="/docs/errors/err_ngrok_5513">ERR_NGROK_5513</a>
      </td>
      <td class="pre-wrapped">
        Email domain failed to normalize to a FQDN "<code>&lt;DOMAIN&gt;</code>":
        "<code>&lt;ERROR&gt;</code>"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5517" href="/docs/errors/err_ngrok_5517">ERR_NGROK_5517</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> denied access to your data during the final step of authorization: <code>&lt;DESCRIPTION&gt;</code>.
        Please contact the owner of this application to ensure it is properly installed for your organization.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5518" href="/docs/errors/err_ngrok_5518">ERR_NGROK_5518</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> rejected authorization with access denied: <code>&lt;DESCRIPTION&gt;</code>.
        You must authorize this application before continuing.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5520" href="/docs/errors/err_ngrok_5520">ERR_NGROK_5520</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> rejected authorization due to a invalid or unknown scope requested by this application: <code>&lt;DESCRIPTION&gt;</code>.
        The owner of this application must correct the application configuration before you can continue.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5521" href="/docs/errors/err_ngrok_5521">ERR_NGROK_5521</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> rejected authorization due to an internal server error: <code>&lt;DESCRIPTION&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5522" href="/docs/errors/err_ngrok_5522">ERR_NGROK_5522</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> is too busy to handle requests and authorization cannot be completed at this time: <code>&lt;DESCRIPTION&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5523" href="/docs/errors/err_ngrok_5523">ERR_NGROK_5523</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> rejected authorization as the redirect URL for this application is improperly configured: <code>&lt;DESCRIPTION&gt;</code>.
        Please contact the owner of this application in order to fix this error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5524" href="/docs/errors/err_ngrok_5524">ERR_NGROK_5524</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> rejected authorization: <code>&lt;DESCRIPTION&gt;</code>.
        The owner of this application should verify the OAuth application client ID and secret are valid before you can continue.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5525" href="/docs/errors/err_ngrok_5525">ERR_NGROK_5525</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> has throttled this application and cannot be reached right now.
        Please try again in a few minutes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5526" href="/docs/errors/err_ngrok_5526">ERR_NGROK_5526</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> rejected access to your information. This is likely caused by expiration or revocation of your authorization.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5527" href="/docs/errors/err_ngrok_5527">ERR_NGROK_5527</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> rejected the final step of authorization due to invalid credentials.
        The owner of this application should verify the OAuth application client ID and secret are valid before you can continue.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5528" href="/docs/errors/err_ngrok_5528">ERR_NGROK_5528</a>
      </td>
      <td class="pre-wrapped">
        The access code from <code>&lt;PROVIDER&gt;</code> has expired and cannot be used.
        Please authorize again more quickly.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5529" href="/docs/errors/err_ngrok_5529">ERR_NGROK_5529</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> denied access to your data during the final step of authorization.
        Please contact the owner of this application to ensure it is properly installed for your organization.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5530" href="/docs/errors/err_ngrok_5530">ERR_NGROK_5530</a>
      </td>
      <td class="pre-wrapped">
        OAuth is not enabled on the domain "<code>&lt;HOSTNAME&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5531" href="/docs/errors/err_ngrok_5531">ERR_NGROK_5531</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> denied access to your account as the correct account could not be chosen automatically.
        Please try authorizing again or contacting the owner of this application if the issue persists.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5532" href="/docs/errors/err_ngrok_5532">ERR_NGROK_5532</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> denied access to your account as reauthentication is required.
        Please try logging in again or contact the owner of this application if the issue persists.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5533" href="/docs/errors/err_ngrok_5533">ERR_NGROK_5533</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;PROVIDER&gt;</code> had an internal server error when refreshing your information.
        Please try again or contact the owner of this application if the issue persists.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5534" href="/docs/errors/err_ngrok_5534">ERR_NGROK_5534</a>
      </td>
      <td class="pre-wrapped">
        Encountered an error while attempting to fetch OIDC provider metadata:
        "<code>&lt;ERROR&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5535" href="/docs/errors/err_ngrok_5535">ERR_NGROK_5535</a>
      </td>
      <td class="pre-wrapped">
        The OAuth provider "<code>&lt;PROVIDER&gt;</code>" cannot be used without a user-defined client ID and client secret.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_5536" href="/docs/errors/err_ngrok_5536">ERR_NGROK_5536</a>
      </td>
      <td class="pre-wrapped">
        Encountered an error while fetching user data: <code>&lt;PROVIDER&gt;</code> did not provide a user ID for your account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6000" href="/docs/errors/err_ngrok_6000">ERR_NGROK_6000</a>
      </td>
      <td class="pre-wrapped">
        This tunnel was unable to update; this may be temporary, please try again shortly.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6001" href="/docs/errors/err_ngrok_6001">ERR_NGROK_6001</a>
      </td>
      <td class="pre-wrapped">
        This tunnel is no longer available as its account was not found.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6002" href="/docs/errors/err_ngrok_6002">ERR_NGROK_6002</a>
      </td>
      <td class="pre-wrapped">
        This tunnel is no longer available as its account does not own resources required to run.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6003" href="/docs/errors/err_ngrok_6003">ERR_NGROK_6003</a>
      </td>
      <td class="pre-wrapped">
        Endpoint configurations cannot be used with agent-specified basic auth. Either remove the endpoint configuration from this endpoint or restart the agent without basic auth.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6006" href="/docs/errors/err_ngrok_6006">ERR_NGROK_6006</a>
      </td>
      <td class="pre-wrapped">
        The Event Destination <code>&lt;EDID&gt;</code> required by <code>&lt;ECID&gt;</code> was not found. If these were recently created or removed, this should be temporary and resolve itself.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6008" href="/docs/errors/err_ngrok_6008">ERR_NGROK_6008</a>
      </td>
      <td class="pre-wrapped">
        This endpoint is unavailable as its account is suspended due to lack of payment.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6009" href="/docs/errors/err_ngrok_6009">ERR_NGROK_6009</a>
      </td>
      <td class="pre-wrapped">
        The ngrok account that was hosting this webpage has been suspended for violation of ngrok's Terms of Service.
        If you're seeing this page instead of the one you were expecting, ngrok has most likely blocked a phishing attack targeting you.
        If you did enter any sensitive information before seeing this notice, please contact the real site by directly entering their URL in your browser.
        Learn more about how to protect yourself from phishing scams:
        <a href="https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams">https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6010" href="/docs/errors/err_ngrok_6010">ERR_NGROK_6010</a>
      </td>
      <td class="pre-wrapped">
        Endpoint configuration is incompatible with tunnel; module <code>&lt;MODULE&gt;</code> required by Endpoint Configuration <code>&lt;ECID&gt;</code> is incompatible with <code>&lt;PROTO&gt;</code> tunnels.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6011" href="/docs/errors/err_ngrok_6011">ERR_NGROK_6011</a>
      </td>
      <td class="pre-wrapped">
        You may not specify <code>&lt;MIDDLEWARE&gt;</code> options from the ngrok agent because this domain has a configured endpoint configuration: <code>&lt;ECID&gt;</code>. Remove the endpoint configuration from this domain or remove the conflicting options when starting the ngrok agent.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6013" href="/docs/errors/err_ngrok_6013">ERR_NGROK_6013</a>
      </td>
      <td class="pre-wrapped">
        Failed to compile filter for Event Subscription <code>&lt;ESID&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6014" href="/docs/errors/err_ngrok_6014">ERR_NGROK_6014</a>
      </td>
      <td class="pre-wrapped">
        Failed to run filter for Event Subscription <code>&lt;ESID&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6018" href="/docs/errors/err_ngrok_6018">ERR_NGROK_6018</a>
      </td>
      <td class="pre-wrapped">
        The Endpoint <code>&lt;HOSTPORT&gt;</code> has both an Endpoint Configuration (<code>&lt;EPCID&gt;</code>) and a Tunnel with incompatible configuration (<code>&lt;TUNNELID&gt;</code>) online.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6019" href="/docs/errors/err_ngrok_6019">ERR_NGROK_6019</a>
      </td>
      <td class="pre-wrapped">
        The Endpoint <code>&lt;HOSTPORT&gt;</code> has both an Edge (<code>&lt;EDGID&gt;</code>) and Endpoint Configuration (<code>&lt;EPCID&gt;</code>) configured.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6020" href="/docs/errors/err_ngrok_6020">ERR_NGROK_6020</a>
      </td>
      <td class="pre-wrapped">
        The Endpoint <code>&lt;HOSTPORT&gt;</code> has both an Edge (<code>&lt;EDGID&gt;</code>) and Tunnel (<code>&lt;TUNID&gt;</code>) online.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6021" href="/docs/errors/err_ngrok_6021">ERR_NGROK_6021</a>
      </td>
      <td class="pre-wrapped">
        HTML content may only be served after you upgrade to a paid account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6022" href="/docs/errors/err_ngrok_6022">ERR_NGROK_6022</a>
      </td>
      <td class="pre-wrapped">
        Before you can serve HTML content, you must sign up for an ngrok account and install your authtoken.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6023" href="/docs/errors/err_ngrok_6023">ERR_NGROK_6023</a>
      </td>
      <td class="pre-wrapped">
        HTML content may only be served in this region after you upgrade to a paid account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6024" href="/docs/errors/err_ngrok_6024">ERR_NGROK_6024</a>
      </td>
      <td class="pre-wrapped">
        You are about to visit <code>&lt;HOSTPORT&gt;</code><code>&lt;SERVEDBYSTR&gt;</code>. This website is served for free through ngrok.com. You should only visit this website if you trust whoever sent the link to you.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6025" href="/docs/errors/err_ngrok_6025">ERR_NGROK_6025</a>
      </td>
      <td class="pre-wrapped">
        The tunnel <code>&lt;URL&gt;</code> is already bound to another tunnel session. Please start the ngrok agent with a different domain.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6026" href="/docs/errors/err_ngrok_6026">ERR_NGROK_6026</a>
      </td>
      <td class="pre-wrapped">
        The Endpoint <code>&lt;HOSTPORT&gt;</code> has both a Cloud Endpoint (<code>&lt;CLEPID&gt;</code>) and Tunnel (<code>&lt;TUNID&gt;</code>) online.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6027" href="/docs/errors/err_ngrok_6027">ERR_NGROK_6027</a>
      </td>
      <td class="pre-wrapped">
        The Endpoint <code>&lt;HOSTPORT&gt;</code> has both a Cloud Endpoint (<code>&lt;CLEPID&gt;</code>) and Edge (<code>&lt;EDGID&gt;</code>) configured.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6028" href="/docs/errors/err_ngrok_6028">ERR_NGROK_6028</a>
      </td>
      <td class="pre-wrapped">
        The Endpoint <code>&lt;HOSTPORT&gt;</code> has both a Cloud Endpoint (<code>&lt;CLEPID&gt;</code>) and Endpoint Configuration (<code>&lt;TUNID&gt;</code>) configured.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6030" href="/docs/errors/err_ngrok_6030">ERR_NGROK_6030</a>
      </td>
      <td class="pre-wrapped">
        The url <code>&lt;URL&gt;</code> has multiple endpoints, but they do not all have pooling enabled.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6500" href="/docs/errors/err_ngrok_6500">ERR_NGROK_6500</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use the backends feature.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6501" href="/docs/errors/err_ngrok_6501">ERR_NGROK_6501</a>
      </td>
      <td class="pre-wrapped">
        Cannot save backend reference <code>&lt;ID&gt;</code> because it does not exists.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6502" href="/docs/errors/err_ngrok_6502">ERR_NGROK_6502</a>
      </td>
      <td class="pre-wrapped">
        The backend could not be deleted because it is still referenced by at least one backend.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6503" href="/docs/errors/err_ngrok_6503">ERR_NGROK_6503</a>
      </td>
      <td class="pre-wrapped">
        Description is limited to <code>&lt;MAX&gt;</code> characters; you have entered <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6504" href="/docs/errors/err_ngrok_6504">ERR_NGROK_6504</a>
      </td>
      <td class="pre-wrapped">
        Metadata is limited to <code>&lt;MAX&gt;</code> characters; you have entered <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6505" href="/docs/errors/err_ngrok_6505">ERR_NGROK_6505</a>
      </td>
      <td class="pre-wrapped">
        Static backend requires address in the host:port form.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6506" href="/docs/errors/err_ngrok_6506">ERR_NGROK_6506</a>
      </td>
      <td class="pre-wrapped">
        Static backend address <code>&lt;ADDR&gt;</code> is invalid (<code>&lt;REASON&gt;</code>). Use host:port as address.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6507" href="/docs/errors/err_ngrok_6507">ERR_NGROK_6507</a>
      </td>
      <td class="pre-wrapped">
        Static backend address <code>&lt;ADDR&gt;</code> is missing host. Use host:port as address.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6508" href="/docs/errors/err_ngrok_6508">ERR_NGROK_6508</a>
      </td>
      <td class="pre-wrapped">
        Tunnel group labels count is limited to <code>&lt;MAX&gt;</code>; you have <code>&lt;VAL&gt;</code> labels.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6509" href="/docs/errors/err_ngrok_6509">ERR_NGROK_6509</a>
      </td>
      <td class="pre-wrapped">
        Tunnel group label key length is limited to between <code>&lt;MIN&gt;</code> and <code>&lt;MAX&gt;</code>; key <code>&lt;NAME&gt;</code> has <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6510" href="/docs/errors/err_ngrok_6510">ERR_NGROK_6510</a>
      </td>
      <td class="pre-wrapped">
        Tunnel group label value length is limited to between <code>&lt;MIN&gt;</code> and <code>&lt;MAX&gt;</code>; value <code>&lt;NAME&gt;</code> has <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6511" href="/docs/errors/err_ngrok_6511">ERR_NGROK_6511</a>
      </td>
      <td class="pre-wrapped">
        Weighted backends count is limited to <code>&lt;MAX&gt;</code>; you have <code>&lt;VAL&gt;</code> backends.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6512" href="/docs/errors/err_ngrok_6512">ERR_NGROK_6512</a>
      </td>
      <td class="pre-wrapped">
        Weighted backend <code>&lt;ID&gt;</code> weight <code>&lt;VAL&gt;</code> is out of range; it must be between <code>&lt;MIN&gt;</code> and <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6513" href="/docs/errors/err_ngrok_6513">ERR_NGROK_6513</a>
      </td>
      <td class="pre-wrapped">
        Failover backends may only contain up to <code>&lt;MAX&gt;</code> failover backends; you have <code>&lt;VAL&gt;</code> failover backends.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6514" href="/docs/errors/err_ngrok_6514">ERR_NGROK_6514</a>
      </td>
      <td class="pre-wrapped">
        Backend not found.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6515" href="/docs/errors/err_ngrok_6515">ERR_NGROK_6515</a>
      </td>
      <td class="pre-wrapped">
        Tunnel Group Backend <code>&lt;ID&gt;</code> did not match any tunnels.
        Please start tunnels matching its labels in order to serve traffic.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6516" href="/docs/errors/err_ngrok_6516">ERR_NGROK_6516</a>
      </td>
      <td class="pre-wrapped">
        HTTP Response Backend <code>&lt;ID&gt;</code> had too large of a body.
        The maximum is length <code>&lt;MAX&gt;</code> bytes, but the supplied body was <code>&lt;VAL&gt;</code> bytes long.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6517" href="/docs/errors/err_ngrok_6517">ERR_NGROK_6517</a>
      </td>
      <td class="pre-wrapped">
        HTTP Response Backend <code>&lt;ID&gt;</code> had an invalid status code.
        The status code <code>&lt;STATUS&gt;</code> is an invalid HTTP Status Code.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6522" href="/docs/errors/err_ngrok_6522">ERR_NGROK_6522</a>
      </td>
      <td class="pre-wrapped">
        The header beginning with <code>&lt;PREFIX&gt;</code>...' exceeds the maximum header name length of <code>&lt;BYTES&gt;</code> bytes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6523" href="/docs/errors/err_ngrok_6523">ERR_NGROK_6523</a>
      </td>
      <td class="pre-wrapped">
        The header value for <code>&lt;HEADERKEY&gt;</code> beginning with <code>&lt;PREFIX&gt;</code>...' exceeds the maximum header value length of <code>&lt;BYTES&gt;</code> bytes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6524" href="/docs/errors/err_ngrok_6524">ERR_NGROK_6524</a>
      </td>
      <td class="pre-wrapped">
        A Weighted Backend may not reference the backend <code>&lt;ID&gt;</code> because it is a <code>&lt;BACKENDTYPE&gt;</code> backend.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6525" href="/docs/errors/err_ngrok_6525">ERR_NGROK_6525</a>
      </td>
      <td class="pre-wrapped">
        A Failover Backend may not reference the backend <code>&lt;ID&gt;</code> because it is a <code>&lt;BACKENDTYPE&gt;</code> backend.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6526" href="/docs/errors/err_ngrok_6526">ERR_NGROK_6526</a>
      </td>
      <td class="pre-wrapped">
        The id <code>&lt;ID&gt;</code> is not a valid backend ID.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6527" href="/docs/errors/err_ngrok_6527">ERR_NGROK_6527</a>
      </td>
      <td class="pre-wrapped">
        The id <code>&lt;ID&gt;</code> is invalid; expected an id of type <code>&lt;BACKENDTYPE&gt;</code> backend.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6528" href="/docs/errors/err_ngrok_6528">ERR_NGROK_6528</a>
      </td>
      <td class="pre-wrapped">
        Traffic made it to the ngrok edge, but there are no tunnels online serving an app.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6529" href="/docs/errors/err_ngrok_6529">ERR_NGROK_6529</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use the weighted backends feature. 
        Upgrade to an Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6530" href="/docs/errors/err_ngrok_6530">ERR_NGROK_6530</a>
      </td>
      <td class="pre-wrapped">
        The <code>&lt;ID&gt;</code> header cannot be removed without specifying a replacement.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6531" href="/docs/errors/err_ngrok_6531">ERR_NGROK_6531</a>
      </td>
      <td class="pre-wrapped">
        The tunnel group label key/value <code>&lt;ID&gt;</code> may not contain '=' characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6600" href="/docs/errors/err_ngrok_6600">ERR_NGROK_6600</a>
      </td>
      <td class="pre-wrapped">
        The account <code>&lt;NAME&gt;</code> has reached its team size limit and may not add additional users.
        Please ask the account owner to upgrade your plan: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6601" href="/docs/errors/err_ngrok_6601">ERR_NGROK_6601</a>
      </td>
      <td class="pre-wrapped">
        Failed to add <code>&lt;USER_NAME&gt;</code> as a member of account <code>&lt;ACCOUNT_NAME&gt;</code> because they are already a member.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6602" href="/docs/errors/err_ngrok_6602">ERR_NGROK_6602</a>
      </td>
      <td class="pre-wrapped">
        You may not remove the last administrator of the account. Grant administrator privileges to another member first.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6603" href="/docs/errors/err_ngrok_6603">ERR_NGROK_6603</a>
      </td>
      <td class="pre-wrapped">
        Your account is not allowed to set membership permissions.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6604" href="/docs/errors/err_ngrok_6604">ERR_NGROK_6604</a>
      </td>
      <td class="pre-wrapped">
        You may not remove an administrator from the account. Only administrators may remove other administrators.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6605" href="/docs/errors/err_ngrok_6605">ERR_NGROK_6605</a>
      </td>
      <td class="pre-wrapped">
        You may not grant administrator privileges to an account member. Only administrators may grant administrative privileges.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6606" href="/docs/errors/err_ngrok_6606">ERR_NGROK_6606</a>
      </td>
      <td class="pre-wrapped">
        You may not change an administrator's permissions. Only other administrators may make that change.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6607" href="/docs/errors/err_ngrok_6607">ERR_NGROK_6607</a>
      </td>
      <td class="pre-wrapped">
        You may not change the account administrator. Only the current accont administrator may make this change.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6608" href="/docs/errors/err_ngrok_6608">ERR_NGROK_6608</a>
      </td>
      <td class="pre-wrapped">
        Could not transfer administrative control to membership <code>&lt;ID&gt;</code> because it could not be found on this account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6609" href="/docs/errors/err_ngrok_6609">ERR_NGROK_6609</a>
      </td>
      <td class="pre-wrapped">
        Swapping administrators is not supported on accounts with RBAC enabled.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6612" href="/docs/errors/err_ngrok_6612">ERR_NGROK_6612</a>
      </td>
      <td class="pre-wrapped">
        You are not allowed to remove members.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6613" href="/docs/errors/err_ngrok_6613">ERR_NGROK_6613</a>
      </td>
      <td class="pre-wrapped">
        You are not allowed to create members.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6614" href="/docs/errors/err_ngrok_6614">ERR_NGROK_6614</a>
      </td>
      <td class="pre-wrapped">
        You are not allowed to set the permissions of members.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6615" href="/docs/errors/err_ngrok_6615">ERR_NGROK_6615</a>
      </td>
      <td class="pre-wrapped">
        You may not create users with higher permissions than your own.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6616" href="/docs/errors/err_ngrok_6616">ERR_NGROK_6616</a>
      </td>
      <td class="pre-wrapped">
        You may not set user permissions higher than your own.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6617" href="/docs/errors/err_ngrok_6617">ERR_NGROK_6617</a>
      </td>
      <td class="pre-wrapped">
        Users must have a defined billing permission.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6618" href="/docs/errors/err_ngrok_6618">ERR_NGROK_6618</a>
      </td>
      <td class="pre-wrapped">
        You are not allowed to create members, this account uses SCIM 2.0 to manage members.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6619" href="/docs/errors/err_ngrok_6619">ERR_NGROK_6619</a>
      </td>
      <td class="pre-wrapped">
        You are not allowed to remove members, this account uses SCIM 2.0 to manage members.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6620" href="/docs/errors/err_ngrok_6620">ERR_NGROK_6620</a>
      </td>
      <td class="pre-wrapped">
        You are not allowed to activate/deactivate members, this account uses SCIM 2.0 to manage members.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6621" href="/docs/errors/err_ngrok_6621">ERR_NGROK_6621</a>
      </td>
      <td class="pre-wrapped">
        You are not allowed to activate/deactivate admins. Only other administrators may make that change.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6622" href="/docs/errors/err_ngrok_6622">ERR_NGROK_6622</a>
      </td>
      <td class="pre-wrapped">
        You may not deactivate the last administrator of the account. Grant administrator privileges to another member first.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6700" href="/docs/errors/err_ngrok_6700">ERR_NGROK_6700</a>
      </td>
      <td class="pre-wrapped">
        The description is limited to <code>&lt;MAX&gt;</code> characters, but the provided value had <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6701" href="/docs/errors/err_ngrok_6701">ERR_NGROK_6701</a>
      </td>
      <td class="pre-wrapped">
        Metadata is limited to <code>&lt;MAX&gt;</code> characters, but the provided value had <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6702" href="/docs/errors/err_ngrok_6702">ERR_NGROK_6702</a>
      </td>
      <td class="pre-wrapped">
        No DNS records were returned when querying for an NS record for the domain <code>&lt;DOMAIN&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6703" href="/docs/errors/err_ngrok_6703">ERR_NGROK_6703</a>
      </td>
      <td class="pre-wrapped">
        The NS records for the domain <code>&lt;DOMAIN&gt;</code> "<code>&lt;GOT&gt;</code>" do not match the expected targets "<code>&lt;EXPECTED&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6704" href="/docs/errors/err_ngrok_6704">ERR_NGROK_6704</a>
      </td>
      <td class="pre-wrapped">
        The specified domain "<code>&lt;DOMAIN&gt;</code>" is not a valid domain name. Enter a valid DNS name.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6705" href="/docs/errors/err_ngrok_6705">ERR_NGROK_6705</a>
      </td>
      <td class="pre-wrapped">
        The agent ingress domain "<code>&lt;DOMAIN&gt;</code>" must be a third party domain, you may not enter a domain controlled by ngrok.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6706" href="/docs/errors/err_ngrok_6706">ERR_NGROK_6706</a>
      </td>
      <td class="pre-wrapped">
        The agent ingress domain "<code>&lt;DOMAIN&gt;</code>" already exists, choose another domain.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6707" href="/docs/errors/err_ngrok_6707">ERR_NGROK_6707</a>
      </td>
      <td class="pre-wrapped">
        Your account can't reserve custom agent ingresses.
        Contact us for access to the Agent Ingresses feature.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6708" href="/docs/errors/err_ngrok_6708">ERR_NGROK_6708</a>
      </td>
      <td class="pre-wrapped">
        Multiple certificate sources provided.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6709" href="/docs/errors/err_ngrok_6709">ERR_NGROK_6709</a>
      </td>
      <td class="pre-wrapped">
        Some of the dedicated IPs "<code>&lt;IPS&gt;</code>" are already used in a different agent ingress.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6710" href="/docs/errors/err_ngrok_6710">ERR_NGROK_6710</a>
      </td>
      <td class="pre-wrapped">
        Dedicated IP "<code>&lt;IP&gt;</code>" is not a valid IP.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_6711" href="/docs/errors/err_ngrok_6711">ERR_NGROK_6711</a>
      </td>
      <td class="pre-wrapped">
        Dedicated IP "<code>&lt;IP&gt;</code>" is duplicated in the set of IPs.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7000" href="/docs/errors/err_ngrok_7000">ERR_NGROK_7000</a>
      </td>
      <td class="pre-wrapped">
        Edge not found
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7001" href="/docs/errors/err_ngrok_7001">ERR_NGROK_7001</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge ID
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7002" href="/docs/errors/err_ngrok_7002">ERR_NGROK_7002</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge request
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7007" href="/docs/errors/err_ngrok_7007">ERR_NGROK_7007</a>
      </td>
      <td class="pre-wrapped">
        The IP Policy ID <code>&lt;ID&gt;</code> specified for the IP Restriction module does not exist.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7008" href="/docs/errors/err_ngrok_7008">ERR_NGROK_7008</a>
      </td>
      <td class="pre-wrapped">
        Edges are deprecated and no longer available.
        If you’ve used edges before, a migration guide is available: <a href="https://ngrok.com/docs/universal-gateway/edges">https://ngrok.com/docs/universal-gateway/edges</a>/#migration-guide.
        If you have lost access to actively running edges, this is an error, please contact support@ngrok.com for help.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7009" href="/docs/errors/err_ngrok_7009">ERR_NGROK_7009</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to a maximum of <code>&lt;MAX&gt;</code> edges.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7011" href="/docs/errors/err_ngrok_7011">ERR_NGROK_7011</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge, circuit breaker error threshold percentage must be between 0.0 and 1.0 inclusive, was <code>&lt;VAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7012" href="/docs/errors/err_ngrok_7012">ERR_NGROK_7012</a>
      </td>
      <td class="pre-wrapped">
        The auth provider <code>&lt;VAL&gt;</code> does not exist. Specify an auth provider ID or the special value 'agent'.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7013" href="/docs/errors/err_ngrok_7013">ERR_NGROK_7013</a>
      </td>
      <td class="pre-wrapped">
        The edge module exceeds the max number of IP Policies. You specified <code>&lt;VAL&gt;</code>, the maximum is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7014" href="/docs/errors/err_ngrok_7014">ERR_NGROK_7014</a>
      </td>
      <td class="pre-wrapped">
        The edge module TLS CA certificate size exceeds the max. You specified <code>&lt;VAL&gt;</code>, the maximum is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7015" href="/docs/errors/err_ngrok_7015">ERR_NGROK_7015</a>
      </td>
      <td class="pre-wrapped">
        The edge module exceeds the max number of headers. You specified <code>&lt;VAL&gt;</code>, the maximum is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7016" href="/docs/errors/err_ngrok_7016">ERR_NGROK_7016</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, circuit breaker tripped duration must be greater than 0, was <code>&lt;VAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7017" href="/docs/errors/err_ngrok_7017">ERR_NGROK_7017</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, circuit breaker rolling window must be greater than 0, was <code>&lt;VAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7018" href="/docs/errors/err_ngrok_7018">ERR_NGROK_7018</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, circuit breaker num buckets must be greater than 0 and less than <code>&lt;MAX&gt;</code>, was <code>&lt;VAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7019" href="/docs/errors/err_ngrok_7019">ERR_NGROK_7019</a>
      </td>
      <td class="pre-wrapped">
        The edge could not be deleted because it is still referenced by at least one reserved domain or reserved address.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7020" href="/docs/errors/err_ngrok_7020">ERR_NGROK_7020</a>
      </td>
      <td class="pre-wrapped">
        The edge must specify a type.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7021" href="/docs/errors/err_ngrok_7021">ERR_NGROK_7021</a>
      </td>
      <td class="pre-wrapped">
        The module <code>&lt;NAME&gt;</code> is not supported on an edge of type <code>&lt;TYPE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7022" href="/docs/errors/err_ngrok_7022">ERR_NGROK_7022</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;NAME&gt;</code> is not a valid edge type. Must be one of 'http', 'https', 'tcp'.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7023" href="/docs/errors/err_ngrok_7023">ERR_NGROK_7023</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;KEY&gt;</code> is not a valid HTTP header name because it contains at least one invalid character.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7024" href="/docs/errors/err_ngrok_7024">ERR_NGROK_7024</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;VAL&gt;</code> is not a valid HTTP header value: <code>&lt;REASON&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7025" href="/docs/errors/err_ngrok_7025">ERR_NGROK_7025</a>
      </td>
      <td class="pre-wrapped">
        You must specify at least one IP Policy in the IP Restriction module.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7026" href="/docs/errors/err_ngrok_7026">ERR_NGROK_7026</a>
      </td>
      <td class="pre-wrapped">
        SNS webhook verification does not accept a secret.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7027" href="/docs/errors/err_ngrok_7027">ERR_NGROK_7027</a>
      </td>
      <td class="pre-wrapped">
        Webhook verification for <code>&lt;T&gt;</code> requires a secret.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7028" href="/docs/errors/err_ngrok_7028">ERR_NGROK_7028</a>
      </td>
      <td class="pre-wrapped">
        There were validation errors while saving the edge:<code>&lt;ERRS&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7029" href="/docs/errors/err_ngrok_7029">ERR_NGROK_7029</a>
      </td>
      <td class="pre-wrapped">
        You must specify a supported provider name.  Supported providers: [<code>&lt;T&gt;</code>]
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7030" href="/docs/errors/err_ngrok_7030">ERR_NGROK_7030</a>
      </td>
      <td class="pre-wrapped">
        Webhook provider <code>&lt;T&gt;</code> is not supported.  Supported providers: [<code>&lt;TYPE&gt;</code>]
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7031" href="/docs/errors/err_ngrok_7031">ERR_NGROK_7031</a>
      </td>
      <td class="pre-wrapped">
        Only Pro and Enterprise accounts can use edges webhook verification.
        Your account is not authorized to use webhook verification.  
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7032" href="/docs/errors/err_ngrok_7032">ERR_NGROK_7032</a>
      </td>
      <td class="pre-wrapped">
        You may not configure the TLS termination parameter <code>&lt;PARAMETER&gt;</code> when the HTTPS module disables TLS termination.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7033" href="/docs/errors/err_ngrok_7033">ERR_NGROK_7033</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, unmanaged provider configurations must specify a client ID and a client secret.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7034" href="/docs/errors/err_ngrok_7034">ERR_NGROK_7034</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, custom OAuth scopes on a managed OAuth application are not allowed.  Define a custom OAuth application to use custom scopes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7035" href="/docs/errors/err_ngrok_7035">ERR_NGROK_7035</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth auth check interval must be at least <code>&lt;MIN&gt;</code>, was <code>&lt;ACTUAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7036" href="/docs/errors/err_ngrok_7036">ERR_NGROK_7036</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth may only have one provider configuration but multiple are defined: [<code>&lt;PROVIDER_NAMES&gt;</code>].
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7037" href="/docs/errors/err_ngrok_7037">ERR_NGROK_7037</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth does not define any provider configurations but one is required.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7038" href="/docs/errors/err_ngrok_7038">ERR_NGROK_7038</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> requires at least the <code>&lt;SCOPE&gt;</code> scope to authenticate by <code>&lt;AUTH_FEATURE&gt;</code>.'
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7039" href="/docs/errors/err_ngrok_7039">ERR_NGROK_7039</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> contains an invalid email domain: <code>&lt;NAME&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7040" href="/docs/errors/err_ngrok_7040">ERR_NGROK_7040</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth GitHub Teams must be listed as either numerical ids or in the format 'org_slug/team_slug', <code>&lt;TEAM&gt;</code> does not match either format.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7041" href="/docs/errors/err_ngrok_7041">ERR_NGROK_7041</a>
      </td>
      <td class="pre-wrapped">
        Only Pro and Enterprise accounts can use edges OAuth.
        Your account is not authorized to use OAuth.  
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7042" href="/docs/errors/err_ngrok_7042">ERR_NGROK_7042</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth cookie prefix <code>&lt;PREFIX&gt;</code> must consist of only alphanumeric characters with periods.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7043" href="/docs/errors/err_ngrok_7043">ERR_NGROK_7043</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> contains an invalid email address, <code>&lt;NAME&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7044" href="/docs/errors/err_ngrok_7044">ERR_NGROK_7044</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> contains an email domain with invalid punycode: <code>&lt;NAME&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7045" href="/docs/errors/err_ngrok_7045">ERR_NGROK_7045</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> contains an email address with invalid punycode: <code>&lt;NAME&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7046" href="/docs/errors/err_ngrok_7046">ERR_NGROK_7046</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> email addresses must be unique, but a duplicate is present: <code>&lt;DUPLICATE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7047" href="/docs/errors/err_ngrok_7047">ERR_NGROK_7047</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> email domains must be unique, but a duplicate is present: <code>&lt;DUPLICATE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7048" href="/docs/errors/err_ngrok_7048">ERR_NGROK_7048</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> teams must be unique, but a duplicate is present: <code>&lt;DUPLICATE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7049" href="/docs/errors/err_ngrok_7049">ERR_NGROK_7049</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> organizations must be unique, but a duplicate is present: <code>&lt;DUPLICATE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7050" href="/docs/errors/err_ngrok_7050">ERR_NGROK_7050</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> groups must be unique, but a duplicate is present: <code>&lt;DUPLICATE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7051" href="/docs/errors/err_ngrok_7051">ERR_NGROK_7051</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> email addresses must not contain empty values
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7052" href="/docs/errors/err_ngrok_7052">ERR_NGROK_7052</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> email domains must not contain empty values
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7053" href="/docs/errors/err_ngrok_7053">ERR_NGROK_7053</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> teams must not contain empty values
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7054" href="/docs/errors/err_ngrok_7054">ERR_NGROK_7054</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> organizations must not contain empty values
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7055" href="/docs/errors/err_ngrok_7055">ERR_NGROK_7055</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth provider <code>&lt;PROVIDER&gt;</code> groups must not contain empty values
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7056" href="/docs/errors/err_ngrok_7056">ERR_NGROK_7056</a>
      </td>
      <td class="pre-wrapped">
        The edge module exceeds the maximum number of OAuth scopes. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7057" href="/docs/errors/err_ngrok_7057">ERR_NGROK_7057</a>
      </td>
      <td class="pre-wrapped">
        The edge module exceeds the maximum number of OAuth GitHub teams. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7058" href="/docs/errors/err_ngrok_7058">ERR_NGROK_7058</a>
      </td>
      <td class="pre-wrapped">
        The edge module exceeds the maximum number of OAuth GitHub orgs. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7059" href="/docs/errors/err_ngrok_7059">ERR_NGROK_7059</a>
      </td>
      <td class="pre-wrapped">
        The edge module exceeds the maximum number of OAuth Google groups. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7060" href="/docs/errors/err_ngrok_7060">ERR_NGROK_7060</a>
      </td>
      <td class="pre-wrapped">
        The edge module exceeds the maximum number of OAuth emails. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7061" href="/docs/errors/err_ngrok_7061">ERR_NGROK_7061</a>
      </td>
      <td class="pre-wrapped">
        The edge module exceeds the maximum number of OAuth domains. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7062" href="/docs/errors/err_ngrok_7062">ERR_NGROK_7062</a>
      </td>
      <td class="pre-wrapped">
        The edge specifies the following modules which may not be enabled when TLS is not terminated: <code>&lt;MODULE_NAMES&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7067" href="/docs/errors/err_ngrok_7067">ERR_NGROK_7067</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, email addresses must be lowercase but <code>&lt;EMAIL&gt;</code> is not.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7068" href="/docs/errors/err_ngrok_7068">ERR_NGROK_7068</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, email domains must be lowercase but <code>&lt;DOMAIN&gt;</code> is not.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7069" href="/docs/errors/err_ngrok_7069">ERR_NGROK_7069</a>
      </td>
      <td class="pre-wrapped">
        Duplicate 'add' header, <code>&lt;HEADER&gt;</code> was provided twice with different casings: <code>&lt;CASE_ONE&gt;</code> and <code>&lt;CASE_TWO&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7070" href="/docs/errors/err_ngrok_7070">ERR_NGROK_7070</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to <code>&lt;MAX&gt;</code> edges.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7071" href="/docs/errors/err_ngrok_7071">ERR_NGROK_7071</a>
      </td>
      <td class="pre-wrapped">
        Your account is rate limited for adding <code>&lt;MAX&gt;</code> edges per <code>&lt;INTERVAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7072" href="/docs/errors/err_ngrok_7072">ERR_NGROK_7072</a>
      </td>
      <td class="pre-wrapped">
        The CA ID <code>&lt;ID&gt;</code> specified for the Mutual TLS module does not exist.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7073" href="/docs/errors/err_ngrok_7073">ERR_NGROK_7073</a>
      </td>
      <td class="pre-wrapped">
        Description is limited to <code>&lt;MAX&gt;</code> characters; you have entered <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7074" href="/docs/errors/err_ngrok_7074">ERR_NGROK_7074</a>
      </td>
      <td class="pre-wrapped">
        Metadata is limited to <code>&lt;MAX&gt;</code> characters; you have entered <code>&lt;VAL&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7075" href="/docs/errors/err_ngrok_7075">ERR_NGROK_7075</a>
      </td>
      <td class="pre-wrapped">
        The Mutual TLS configurations exceeds the limit of <code>&lt;LIMIT&gt;</code> attached certificate authorities.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7079" href="/docs/errors/err_ngrok_7079">ERR_NGROK_7079</a>
      </td>
      <td class="pre-wrapped">
        The edge specifies conflicting authentication modules. Only one of SAML, OIDC, or OAuth may be enabled.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7080" href="/docs/errors/err_ngrok_7080">ERR_NGROK_7080</a>
      </td>
      <td class="pre-wrapped">
        The SAML metadata exceeds the maximum length of <code>&lt;MAX&gt;</code> bytes, got <code>&lt;NBYTES&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7081" href="/docs/errors/err_ngrok_7081">ERR_NGROK_7081</a>
      </td>
      <td class="pre-wrapped">
        You must specify only the SAML IdP metadata or the SAML IdP metadata URL, but not both.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7082" href="/docs/errors/err_ngrok_7082">ERR_NGROK_7082</a>
      </td>
      <td class="pre-wrapped">
        Failed to connect to IdP metadata URL <code>&lt;MDURL&gt;</code>: <code>&lt;ERR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7083" href="/docs/errors/err_ngrok_7083">ERR_NGROK_7083</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse the SAML IdP metadata: <code>&lt;ERR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7084" href="/docs/errors/err_ngrok_7084">ERR_NGROK_7084</a>
      </td>
      <td class="pre-wrapped">
        Received unexpected status code <code>&lt;STATUSCODE&gt;</code> while fetching metadata URL <code>&lt;MDURL&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7085" href="/docs/errors/err_ngrok_7085">ERR_NGROK_7085</a>
      </td>
      <td class="pre-wrapped">
        Failed to parse the SAML IdP metadata fetched from URL <code>&lt;MDURL&gt;</code>: <code>&lt;ERR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7086" href="/docs/errors/err_ngrok_7086">ERR_NGROK_7086</a>
      </td>
      <td class="pre-wrapped">
        Encountered an error while reading the response body from the IdP metadata URL <code>&lt;MDURL&gt;</code>: <code>&lt;ERR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7087" href="/docs/errors/err_ngrok_7087">ERR_NGROK_7087</a>
      </td>
      <td class="pre-wrapped">
        The specified OIDC issuer has a maximum length of <code>&lt;MAX&gt;</code> bytes. The specified value is <code>&lt;N&gt;</code> bytes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7088" href="/docs/errors/err_ngrok_7088">ERR_NGROK_7088</a>
      </td>
      <td class="pre-wrapped">
        The OIDC issuer property is required.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7089" href="/docs/errors/err_ngrok_7089">ERR_NGROK_7089</a>
      </td>
      <td class="pre-wrapped">
        The OIDC Client ID property is required.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7090" href="/docs/errors/err_ngrok_7090">ERR_NGROK_7090</a>
      </td>
      <td class="pre-wrapped">
        The OIDC Client Secret property is required.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7091" href="/docs/errors/err_ngrok_7091">ERR_NGROK_7091</a>
      </td>
      <td class="pre-wrapped">
        One of the SAML IdP Metadata or IdP Metadata URL properties must be specified.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7092" href="/docs/errors/err_ngrok_7092">ERR_NGROK_7092</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, session inactivity timeout cannot be more than one year, was <code>&lt;ACTUAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7093" href="/docs/errors/err_ngrok_7093">ERR_NGROK_7093</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use basic auth. 
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7094" href="/docs/errors/err_ngrok_7094">ERR_NGROK_7094</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use compression. 
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7095" href="/docs/errors/err_ngrok_7095">ERR_NGROK_7095</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use circuit breaker. 
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7096" href="/docs/errors/err_ngrok_7096">ERR_NGROK_7096</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use request headers. 
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7097" href="/docs/errors/err_ngrok_7097">ERR_NGROK_7097</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use response headers. 
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7098" href="/docs/errors/err_ngrok_7098">ERR_NGROK_7098</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use OIDC. 
        Upgrade to an Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7099" href="/docs/errors/err_ngrok_7099">ERR_NGROK_7099</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use SAML. 
        Upgrade to an Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7100" href="/docs/errors/err_ngrok_7100">ERR_NGROK_7100</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use TLS termination. 
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7101" href="/docs/errors/err_ngrok_7101">ERR_NGROK_7101</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use IP Restrictions. 
        Upgrade to an Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7102" href="/docs/errors/err_ngrok_7102">ERR_NGROK_7102</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use TCP address backends. 
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7103" href="/docs/errors/err_ngrok_7103">ERR_NGROK_7103</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use mutual TLS. 
        Upgrade to an Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7104" href="/docs/errors/err_ngrok_7104">ERR_NGROK_7104</a>
      </td>
      <td class="pre-wrapped">
        Edge has invalid hostports, must be specified in the format 'hostname:portnumber': <code>&lt;INVALID&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7105" href="/docs/errors/err_ngrok_7105">ERR_NGROK_7105</a>
      </td>
      <td class="pre-wrapped">
        The header beginning with <code>&lt;PREFIX&gt;</code>...' exceeds the maximum header name length of <code>&lt;BYTES&gt;</code> bytes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7106" href="/docs/errors/err_ngrok_7106">ERR_NGROK_7106</a>
      </td>
      <td class="pre-wrapped">
        The header value for <code>&lt;HEADERKEY&gt;</code> beginning with <code>&lt;PREFIX&gt;</code>...' exceeds the maximum header value length of <code>&lt;BYTES&gt;</code> bytes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7107" href="/docs/errors/err_ngrok_7107">ERR_NGROK_7107</a>
      </td>
      <td class="pre-wrapped">
        The sendgrid verification key is not a base64 encoded ecdsa public key. The following error was encountered while trying to parse it: "<code>&lt;ERROR&gt;</code>"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7108" href="/docs/errors/err_ngrok_7108">ERR_NGROK_7108</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use the websocket to TCP converter. 
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7109" href="/docs/errors/err_ngrok_7109">ERR_NGROK_7109</a>
      </td>
      <td class="pre-wrapped">
        You may not configure the TLS termination parameter 'terminate_at' for an HTTPS edge.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7110" href="/docs/errors/err_ngrok_7110">ERR_NGROK_7110</a>
      </td>
      <td class="pre-wrapped">
        The request edge ID <code>&lt;EID&gt;</code> does not match the route edge ID <code>&lt;REID&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7111" href="/docs/errors/err_ngrok_7111">ERR_NGROK_7111</a>
      </td>
      <td class="pre-wrapped">
        The edge hostport <code>&lt;HOST&gt;</code>:<code>&lt;PORT&gt;</code> does not exist.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7112" href="/docs/errors/err_ngrok_7112">ERR_NGROK_7112</a>
      </td>
      <td class="pre-wrapped">
        The hostport <code>&lt;HOSTPORT&gt;</code> has port out of range: <code>&lt;PORT&gt;</code> is not in range 1-65535.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7113" href="/docs/errors/err_ngrok_7113">ERR_NGROK_7113</a>
      </td>
      <td class="pre-wrapped">
        The address <code>&lt;HOSTPORT&gt;</code> is not reserved.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7114" href="/docs/errors/err_ngrok_7114">ERR_NGROK_7114</a>
      </td>
      <td class="pre-wrapped">
        The address <code>&lt;HOSTPORT&gt;</code> is not reserved by your account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7115" href="/docs/errors/err_ngrok_7115">ERR_NGROK_7115</a>
      </td>
      <td class="pre-wrapped">
        The address <code>&lt;HOSTPORT&gt;</code> has an endpoint configuration which must be removed before it can be used by an edge.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7116" href="/docs/errors/err_ngrok_7116">ERR_NGROK_7116</a>
      </td>
      <td class="pre-wrapped">
        The domain <code>&lt;HOSTPORT&gt;</code> is unsupported because it does not use port 443.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7117" href="/docs/errors/err_ngrok_7117">ERR_NGROK_7117</a>
      </td>
      <td class="pre-wrapped">
        The domain <code>&lt;HOSTPORT&gt;</code> is not reserved.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7118" href="/docs/errors/err_ngrok_7118">ERR_NGROK_7118</a>
      </td>
      <td class="pre-wrapped">
        The domain <code>&lt;HOSTPORT&gt;</code> is not reserved by your account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7119" href="/docs/errors/err_ngrok_7119">ERR_NGROK_7119</a>
      </td>
      <td class="pre-wrapped">
        The domain <code>&lt;HOSTPORT&gt;</code> has an endpoint configuration which must be removed before it can be used by an edge.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7120" href="/docs/errors/err_ngrok_7120">ERR_NGROK_7120</a>
      </td>
      <td class="pre-wrapped">
        TCP edges can only be associated with TCP addresses: <code>&lt;HOSTPORT&gt;</code> is a domain.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7121" href="/docs/errors/err_ngrok_7121">ERR_NGROK_7121</a>
      </td>
      <td class="pre-wrapped">
        HTTPS edges can only be associated with reserved domains: <code>&lt;HOSTPORT&gt;</code> is a TCP address.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7122" href="/docs/errors/err_ngrok_7122">ERR_NGROK_7122</a>
      </td>
      <td class="pre-wrapped">
        Hostport <code>&lt;HOSTPORT&gt;</code> already exists for another edge.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7123" href="/docs/errors/err_ngrok_7123">ERR_NGROK_7123</a>
      </td>
      <td class="pre-wrapped">
        Edge routes require a match expression.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7124" href="/docs/errors/err_ngrok_7124">ERR_NGROK_7124</a>
      </td>
      <td class="pre-wrapped">
        The edge route <code>&lt;ID&gt;</code> could not be found.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7125" href="/docs/errors/err_ngrok_7125">ERR_NGROK_7125</a>
      </td>
      <td class="pre-wrapped">
        There is a duplicate route <code>&lt;ID&gt;</code> for HTTPS edge.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7126" href="/docs/errors/err_ngrok_7126">ERR_NGROK_7126</a>
      </td>
      <td class="pre-wrapped">
        Route match expression <code>&lt;MATCH&gt;</code> must be unique across all routes for HTTPS edge.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7127" href="/docs/errors/err_ngrok_7127">ERR_NGROK_7127</a>
      </td>
      <td class="pre-wrapped">
        OAuth may not currently be configured for any route except '/', could not configure for route <code>&lt;MATCH&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7128" href="/docs/errors/err_ngrok_7128">ERR_NGROK_7128</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to a maximum of <code>&lt;MAX&gt;</code> routes for a single edge.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7129" href="/docs/errors/err_ngrok_7129">ERR_NGROK_7129</a>
      </td>
      <td class="pre-wrapped">
        Your account is limited to a maximum of <code>&lt;MAX&gt;</code> hostports for a single edge.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7130" href="/docs/errors/err_ngrok_7130">ERR_NGROK_7130</a>
      </td>
      <td class="pre-wrapped">
        Invalid match type, valid values are "exact_path" and "path_prefix".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7131" href="/docs/errors/err_ngrok_7131">ERR_NGROK_7131</a>
      </td>
      <td class="pre-wrapped">
        The route selector expression `<code>&lt;MATCH&gt;</code>` is invalid. Valid route selector match expressions are of the form /path (e.g. "/foo", or "/foo/bar").
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7132" href="/docs/errors/err_ngrok_7132">ERR_NGROK_7132</a>
      </td>
      <td class="pre-wrapped">
        The hostport `<code>&lt;HOSTPORT&gt;</code>` is already in use by an agent directly.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7133" href="/docs/errors/err_ngrok_7133">ERR_NGROK_7133</a>
      </td>
      <td class="pre-wrapped">
        TLS edges can only be associated with reserved domains: <code>&lt;HOSTPORT&gt;</code> is a TCP address.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7134" href="/docs/errors/err_ngrok_7134">ERR_NGROK_7134</a>
      </td>
      <td class="pre-wrapped">
        OAuth, OIDC and SAML may only be configured for routes with path selectors (i.e. 'exact_path', 'path_prefix').
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7135" href="/docs/errors/err_ngrok_7135">ERR_NGROK_7135</a>
      </td>
      <td class="pre-wrapped">
        The route selector expression exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7136" href="/docs/errors/err_ngrok_7136">ERR_NGROK_7136</a>
      </td>
      <td class="pre-wrapped">
        The OAuth Cookie Prefix exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7137" href="/docs/errors/err_ngrok_7137">ERR_NGROK_7137</a>
      </td>
      <td class="pre-wrapped">
        The OAuth Client ID exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7138" href="/docs/errors/err_ngrok_7138">ERR_NGROK_7138</a>
      </td>
      <td class="pre-wrapped">
        The OAuth Client Secret exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7139" href="/docs/errors/err_ngrok_7139">ERR_NGROK_7139</a>
      </td>
      <td class="pre-wrapped">
        The OAuth Email Address exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7140" href="/docs/errors/err_ngrok_7140">ERR_NGROK_7140</a>
      </td>
      <td class="pre-wrapped">
        The OAuth Email Domain exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7141" href="/docs/errors/err_ngrok_7141">ERR_NGROK_7141</a>
      </td>
      <td class="pre-wrapped">
        The OAuth Scope exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7142" href="/docs/errors/err_ngrok_7142">ERR_NGROK_7142</a>
      </td>
      <td class="pre-wrapped">
        The edge module exceeds the maximum number of GitHub teams. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7143" href="/docs/errors/err_ngrok_7143">ERR_NGROK_7143</a>
      </td>
      <td class="pre-wrapped">
        The edge module exceeds the maximum number of GitHub orgs. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7144" href="/docs/errors/err_ngrok_7144">ERR_NGROK_7144</a>
      </td>
      <td class="pre-wrapped">
        The OAuth GitHub team exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7145" href="/docs/errors/err_ngrok_7145">ERR_NGROK_7145</a>
      </td>
      <td class="pre-wrapped">
        The OAuth GitHub org exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7146" href="/docs/errors/err_ngrok_7146">ERR_NGROK_7146</a>
      </td>
      <td class="pre-wrapped">
        The edge module exceeds the maximum number of Google groups. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7147" href="/docs/errors/err_ngrok_7147">ERR_NGROK_7147</a>
      </td>
      <td class="pre-wrapped">
        The OAuth Google group exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7148" href="/docs/errors/err_ngrok_7148">ERR_NGROK_7148</a>
      </td>
      <td class="pre-wrapped">
        The OIDC Client ID exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7149" href="/docs/errors/err_ngrok_7149">ERR_NGROK_7149</a>
      </td>
      <td class="pre-wrapped">
        The OIDC Client Secret exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7150" href="/docs/errors/err_ngrok_7150">ERR_NGROK_7150</a>
      </td>
      <td class="pre-wrapped">
        The edge module exceeds the maximum number of OIDC scopes. You specified <code>&lt;COUNT&gt;</code>, the max is <code>&lt;MAX&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7151" href="/docs/errors/err_ngrok_7151">ERR_NGROK_7151</a>
      </td>
      <td class="pre-wrapped">
        The OIDC Scope exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7152" href="/docs/errors/err_ngrok_7152">ERR_NGROK_7152</a>
      </td>
      <td class="pre-wrapped">
        The OIDC Authn URL exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7153" href="/docs/errors/err_ngrok_7153">ERR_NGROK_7153</a>
      </td>
      <td class="pre-wrapped">
        The OIDC cookie prefix exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7154" href="/docs/errors/err_ngrok_7154">ERR_NGROK_7154</a>
      </td>
      <td class="pre-wrapped">
        The Webhook Verification secret exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7155" href="/docs/errors/err_ngrok_7155">ERR_NGROK_7155</a>
      </td>
      <td class="pre-wrapped">
        Enabling OAuth, OIDC, or SAML on more than one route is not supported.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7158" href="/docs/errors/err_ngrok_7158">ERR_NGROK_7158</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth auth check interval must be no greater than <code>&lt;MAX&gt;</code>, was <code>&lt;ACTUAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7159" href="/docs/errors/err_ngrok_7159">ERR_NGROK_7159</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OIDC auth check interval must be at least <code>&lt;MIN&gt;</code>, was <code>&lt;ACTUAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7160" href="/docs/errors/err_ngrok_7160">ERR_NGROK_7160</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OIDC auth check interval must be no greater than <code>&lt;MAX&gt;</code>, was <code>&lt;ACTUAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7161" href="/docs/errors/err_ngrok_7161">ERR_NGROK_7161</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OAuth max session duration must be no greater than <code>&lt;MAX&gt;</code>, was <code>&lt;ACTUAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7162" href="/docs/errors/err_ngrok_7162">ERR_NGROK_7162</a>
      </td>
      <td class="pre-wrapped">
        Invalid edge module, OIDC max session duration must be no greater than <code>&lt;MAX&gt;</code>, was <code>&lt;ACTUAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7163" href="/docs/errors/err_ngrok_7163">ERR_NGROK_7163</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use the TLS edges. 
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7164" href="/docs/errors/err_ngrok_7164">ERR_NGROK_7164</a>
      </td>
      <td class="pre-wrapped">
        The <code>&lt;ID&gt;</code> header cannot be removed without specifying a replacement.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7165" href="/docs/errors/err_ngrok_7165">ERR_NGROK_7165</a>
      </td>
      <td class="pre-wrapped">
        An unsupported OAuth Provider was configured.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7166" href="/docs/errors/err_ngrok_7166">ERR_NGROK_7166</a>
      </td>
      <td class="pre-wrapped">
        The "<code>&lt;PROVIDER&gt;</code>" OAuth Provider does not currently have a managed app available, specify a client id and client secret.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7167" href="/docs/errors/err_ngrok_7167">ERR_NGROK_7167</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use user agent filter. 
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7168" href="/docs/errors/err_ngrok_7168">ERR_NGROK_7168</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use JWT Validation. 
        Upgrade to a Pay-as-you-go or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7169" href="/docs/errors/err_ngrok_7169">ERR_NGROK_7169</a>
      </td>
      <td class="pre-wrapped">
        The <code>&lt;TYPE&gt;</code> token type is invalid. Valid values are 'jwt', 'at+jwt', and 'it+jwt'.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7170" href="/docs/errors/err_ngrok_7170">ERR_NGROK_7170</a>
      </td>
      <td class="pre-wrapped">
        The <code>&lt;METHOD&gt;</code> token method is invalid. Valid values are 'header' and 'body'.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7171" href="/docs/errors/err_ngrok_7171">ERR_NGROK_7171</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation configuration is invalid: <code>&lt;DETAIL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7172" href="/docs/errors/err_ngrok_7172">ERR_NGROK_7172</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation configuration must have at least one issuer in the allow list.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7173" href="/docs/errors/err_ngrok_7173">ERR_NGROK_7173</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation issuer is invalid: <code>&lt;ISSUER&gt;</code> is not a valid URL.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7174" href="/docs/errors/err_ngrok_7174">ERR_NGROK_7174</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation configuration must have at least one audience in the allow list.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7175" href="/docs/errors/err_ngrok_7175">ERR_NGROK_7175</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation audience is invalid: <code>&lt;MSG&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7176" href="/docs/errors/err_ngrok_7176">ERR_NGROK_7176</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation configuration must have at least one allowed algorithm.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7177" href="/docs/errors/err_ngrok_7177">ERR_NGROK_7177</a>
      </td>
      <td class="pre-wrapped">
        The <code>&lt;TYPE&gt;</code> algorithm is invalid. Please consult the documentation for valid algorithms.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7178" href="/docs/errors/err_ngrok_7178">ERR_NGROK_7178</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation configuration must have at least one token configuration.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7179" href="/docs/errors/err_ngrok_7179">ERR_NGROK_7179</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation http token is invalid: <code>&lt;MSG&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7180" href="/docs/errors/err_ngrok_7180">ERR_NGROK_7180</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation http token name <code>&lt;NAME&gt;</code> is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7181" href="/docs/errors/err_ngrok_7181">ERR_NGROK_7181</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation http token prefix <code>&lt;PREFIX&gt;</code> is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7182" href="/docs/errors/err_ngrok_7182">ERR_NGROK_7182</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation signing key must have a way to be identified such as the 'kid' token claim.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7183" href="/docs/errors/err_ngrok_7183">ERR_NGROK_7183</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation signing key must have a valid identification mechanism such as the 'kid' token claim.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7184" href="/docs/errors/err_ngrok_7184">ERR_NGROK_7184</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation signing key must have at least one source.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7185" href="/docs/errors/err_ngrok_7185">ERR_NGROK_7185</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation signing key source has an invalid additional jku: <code>&lt;JKU&gt;</code> is not a valid URL.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7186" href="/docs/errors/err_ngrok_7186">ERR_NGROK_7186</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation signing key source has an invalid additional jku: <code>&lt;JKU&gt;</code> did not serve a JWKS.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7187" href="/docs/errors/err_ngrok_7187">ERR_NGROK_7187</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation issuer <code>&lt;ISSUER&gt;</code> must be unique. Make sure to include it only once in the allow list.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7188" href="/docs/errors/err_ngrok_7188">ERR_NGROK_7188</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation audience <code>&lt;AUDIENCE&gt;</code> must be unique. Make sure to include it only once in the allow list.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7189" href="/docs/errors/err_ngrok_7189">ERR_NGROK_7189</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation http token identified by the method: <code>&lt;METHOD&gt;</code> and name: <code>&lt;NAME&gt;</code> must be unique. Make sure to include it only once in the token list.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7190" href="/docs/errors/err_ngrok_7190">ERR_NGROK_7190</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation signing key algorithm <code>&lt;ALGORITHM&gt;</code> must be unique. Make sure to include it only once in the allowed algorithms list.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7191" href="/docs/errors/err_ngrok_7191">ERR_NGROK_7191</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation signing key identification token claim <code>&lt;CLAIM&gt;</code> must be unique. Make sure to include it only once in the token claim list.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7192" href="/docs/errors/err_ngrok_7192">ERR_NGROK_7192</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation signing key source additional jku <code>&lt;JKU&gt;</code> must be unique. Make sure to include it only once in the additional jku list.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7193" href="/docs/errors/err_ngrok_7193">ERR_NGROK_7193</a>
      </td>
      <td class="pre-wrapped">
        The JWT Validation signing key sources have too many possible sources. You can supply at most 100.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7194" href="/docs/errors/err_ngrok_7194">ERR_NGROK_7194</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use policies.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7195" href="/docs/errors/err_ngrok_7195">ERR_NGROK_7195</a>
      </td>
      <td class="pre-wrapped">
        This edge module has exceeded its policy rule limit of <code>&lt;LIMIT&gt;</code>. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_7196" href="/docs/errors/err_ngrok_7196">ERR_NGROK_7196</a>
      </td>
      <td class="pre-wrapped">
        Your account has read-only access to Edges.
        Edges are deprecated, and write access (including creating, updating, or deleting) is no longer supported for your account.
        For guidance on alternatives, see our migration guide: <a href="https://ngrok.com/docs/universal-gateway/edges">https://ngrok.com/docs/universal-gateway/edges</a>/#migration-guide
        .If you believe you should still have write access to Edges, please contact support@ngrok.com for help.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8000" href="/docs/errors/err_ngrok_8000">ERR_NGROK_8000</a>
      </td>
      <td class="pre-wrapped">
        Failed to resolve host <code>&lt;HOST&gt;</code>: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8001" href="/docs/errors/err_ngrok_8001">ERR_NGROK_8001</a>
      </td>
      <td class="pre-wrapped">
        Failed to establish internet connectivity: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8002" href="/docs/errors/err_ngrok_8002">ERR_NGROK_8002</a>
      </td>
      <td class="pre-wrapped">
        Failed to establish TCP connection to <code>&lt;HOST&gt;</code> with error: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8003" href="/docs/errors/err_ngrok_8003">ERR_NGROK_8003</a>
      </td>
      <td class="pre-wrapped">
        Failed to establish TLS connection to <code>&lt;HOST&gt;</code> with error: <code>&lt;ERR&gt;</code>. Possible Man-in-the Middle.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8004" href="/docs/errors/err_ngrok_8004">ERR_NGROK_8004</a>
      </td>
      <td class="pre-wrapped">
        Failed to establish tunnel protocol connection to <code>&lt;HOST&gt;</code> with error: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8005" href="/docs/errors/err_ngrok_8005">ERR_NGROK_8005</a>
      </td>
      <td class="pre-wrapped">
        Failed to resolve proxy IP with error: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8006" href="/docs/errors/err_ngrok_8006">ERR_NGROK_8006</a>
      </td>
      <td class="pre-wrapped">
        Failed to connect to proxy <code>&lt;URL&gt;</code> with error: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8007" href="/docs/errors/err_ngrok_8007">ERR_NGROK_8007</a>
      </td>
      <td class="pre-wrapped">
        No tunnel servers were reachable via TCP.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8008" href="/docs/errors/err_ngrok_8008">ERR_NGROK_8008</a>
      </td>
      <td class="pre-wrapped">
        No tunnel servers could establish a TLS connection.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8009" href="/docs/errors/err_ngrok_8009">ERR_NGROK_8009</a>
      </td>
      <td class="pre-wrapped">
        No tunnel servers could establish a tunnel connection.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8010" href="/docs/errors/err_ngrok_8010">ERR_NGROK_8010</a>
      </td>
      <td class="pre-wrapped">
        <code>&lt;RESOLVER&gt;</code> was the only resolver to return <code>&lt;IP&gt;</code> for the hostname <code>&lt;HOSTNAME&gt;</code>. This, or the other resolvers, may be returning incorrect results.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8011" href="/docs/errors/err_ngrok_8011">ERR_NGROK_8011</a>
      </td>
      <td class="pre-wrapped">
        IPV6 errors encountered - it may be disabled.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8012" href="/docs/errors/err_ngrok_8012">ERR_NGROK_8012</a>
      </td>
      <td class="pre-wrapped">
        Traffic was successfully tunneled to the ngrok agent, but the agent failed to establish a connection to the upstream web service at <code>&lt;ADDR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8013" href="/docs/errors/err_ngrok_8013">ERR_NGROK_8013</a>
      </td>
      <td class="pre-wrapped">
        You must add a credit or debit card before you can use TCP endpoints on a free account. We require a valid card as a way to combat abuse and keep the internet a safe place. This card will NOT  be charged.
        Add a card to your account here: <a href="https://dashboard.ngrok.com/settings">https://dashboard.ngrok.com/settings</a>#id-verification
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_8014" href="/docs/errors/err_ngrok_8014">ERR_NGROK_8014</a>
      </td>
      <td class="pre-wrapped">
        Your agent has been blocked from connecting to ngrok because it has been suspected of violating our Acceptable Use policy: <a href="https://ngrok.com/tos">https://ngrok.com/tos</a> Your actions have been reported to our security team.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9000" href="/docs/errors/err_ngrok_9000">ERR_NGROK_9000</a>
      </td>
      <td class="pre-wrapped">
        An account is required to use basic authentication.
        Please register for an ngrok account at: <a href="https://dashboard.ngrok.com/signup">https://dashboard.ngrok.com/signup</a> and install your authtoken.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9001" href="/docs/errors/err_ngrok_9001">ERR_NGROK_9001</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use compression.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9002" href="/docs/errors/err_ngrok_9002">ERR_NGROK_9002</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use circuit breaker.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9003" href="/docs/errors/err_ngrok_9003">ERR_NGROK_9003</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use request headers.
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9004" href="/docs/errors/err_ngrok_9004">ERR_NGROK_9004</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use response headers.
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9005" href="/docs/errors/err_ngrok_9005">ERR_NGROK_9005</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use OIDC.
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9006" href="/docs/errors/err_ngrok_9006">ERR_NGROK_9006</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use SAML. 
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9007" href="/docs/errors/err_ngrok_9007">ERR_NGROK_9007</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use TLS Termination.
        Upgrade to a paid plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9008" href="/docs/errors/err_ngrok_9008">ERR_NGROK_9008</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to run the agent as a service.
        Upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9009" href="/docs/errors/err_ngrok_9009">ERR_NGROK_9009</a>
      </td>
      <td class="pre-wrapped">
        Running the agent with an http/s proxy is an enterprise feature. If this is unexpected, verify that there is no proxy_url value in your ngrok configuration file and that the http_proxy environment variable is not set.
        If you need this capability, upgrade to an Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9010" href="/docs/errors/err_ngrok_9010">ERR_NGROK_9010</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to run the agent with socks5 proxy.
        Upgrade to an Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9011" href="/docs/errors/err_ngrok_9011">ERR_NGROK_9011</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to run the agent on a custom network interface.
        Upgrade to an Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9012" href="/docs/errors/err_ngrok_9012">ERR_NGROK_9012</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to run the agent with custom CAs.
        Upgrade to a Pro, Enterprise, or Pay-as-you-go plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9013" href="/docs/errors/err_ngrok_9013">ERR_NGROK_9013</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to run the agent with mutual TLS.
        Please contact us at: sales@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9014" href="/docs/errors/err_ngrok_9014">ERR_NGROK_9014</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to run the agent with proxy proto.
        Upgrade to an Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9015" href="/docs/errors/err_ngrok_9015">ERR_NGROK_9015</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use OAuth.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9016" href="/docs/errors/err_ngrok_9016">ERR_NGROK_9016</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use webhook verification.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9017" href="/docs/errors/err_ngrok_9017">ERR_NGROK_9017</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use ip restrictions.
        Upgrade to a Pro, Enterprise, or Pay-as-you-go plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9018" href="/docs/errors/err_ngrok_9018">ERR_NGROK_9018</a>
      </td>
      <td class="pre-wrapped">
        An account is required to use host header rewrite.
        Please register for an ngrok account at: <a href="https://dashboard.ngrok.com/signup">https://dashboard.ngrok.com/signup</a> and install your authtoken.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9019" href="/docs/errors/err_ngrok_9019">ERR_NGROK_9019</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use mutual TLS. 
        Please contact us at: sales@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9020" href="/docs/errors/err_ngrok_9020">ERR_NGROK_9020</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use the websocket to TCP converter.
        Upgrade to a Personal, Pro, Enterprise, or Pay-as-you-go plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9021" href="/docs/errors/err_ngrok_9021">ERR_NGROK_9021</a>
      </td>
      <td class="pre-wrapped">
        You may specify at most one of subdomain, hostname, or domain for a tunnel.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9022" href="/docs/errors/err_ngrok_9022">ERR_NGROK_9022</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use user agent filtering.
        Please upgrade to a Pro or Enterprise plan at: <a href="https://dashboard.ngrok.com/billing/subscription">https://dashboard.ngrok.com/billing/subscription</a>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9023" href="/docs/errors/err_ngrok_9023">ERR_NGROK_9023</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use the policy module.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9024" href="/docs/errors/err_ngrok_9024">ERR_NGROK_9024</a>
      </td>
      <td class="pre-wrapped">
        The account <code>&lt;ACCOUNT&gt;</code> is not authorized to use the requested leg number <code>&lt;LEG&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9025" href="/docs/errors/err_ngrok_9025">ERR_NGROK_9025</a>
      </td>
      <td class="pre-wrapped">
        You cannot specify both "Policy" and "TrafficPolicy". Use "TrafficPolicy" as "Policy" is deprecated.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9026" href="/docs/errors/err_ngrok_9026">ERR_NGROK_9026</a>
      </td>
      <td class="pre-wrapped">
        The TrafficPolicy you provided is invalid: <code>&lt;ERROR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9027" href="/docs/errors/err_ngrok_9027">ERR_NGROK_9027</a>
      </td>
      <td class="pre-wrapped">
        Your account is not authorized to use internal bindings.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9028" href="/docs/errors/err_ngrok_9028">ERR_NGROK_9028</a>
      </td>
      <td class="pre-wrapped">
        You must specify a domain name for a internally bound endpoint.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9029" href="/docs/errors/err_ngrok_9029">ERR_NGROK_9029</a>
      </td>
      <td class="pre-wrapped">
        Failed to start endpoint with <code>&lt;URL&gt;</code>. Endpoints with a "internal" binding must have a url that ends in ".internal".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9030" href="/docs/errors/err_ngrok_9030">ERR_NGROK_9030</a>
      </td>
      <td class="pre-wrapped">
        Failed to start endpoint with URL <code>&lt;URL&gt;</code>, invalid port. Port must be in range range 1-65535.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9031" href="/docs/errors/err_ngrok_9031">ERR_NGROK_9031</a>
      </td>
      <td class="pre-wrapped">
        Failed to start endpoint with URL <code>&lt;URL&gt;</code>. Endpoints must have at most 5 parts, but had <code>&lt;DEPTH&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9032" href="/docs/errors/err_ngrok_9032">ERR_NGROK_9032</a>
      </td>
      <td class="pre-wrapped">
        Provided domain <code>&lt;DOMAIN&gt;</code> could not be parsed: <code>&lt;ERROR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9033" href="/docs/errors/err_ngrok_9033">ERR_NGROK_9033</a>
      </td>
      <td class="pre-wrapped">
        Provided domain <code>&lt;DOMAIN&gt;</code> had a non-numeric port component.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9034" href="/docs/errors/err_ngrok_9034">ERR_NGROK_9034</a>
      </td>
      <td class="pre-wrapped">
        Malformed URL: <code>&lt;ERRMSG&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9035" href="/docs/errors/err_ngrok_9035">ERR_NGROK_9035</a>
      </td>
      <td class="pre-wrapped">
        Invalid port for reserve domains with scheme <code>&lt;CURRENTSCHEME&gt;</code>, allowed ports are <code>&lt;WANTPORT&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9036" href="/docs/errors/err_ngrok_9036">ERR_NGROK_9036</a>
      </td>
      <td class="pre-wrapped">
        Invalid scheme <code>&lt;UNSUPPORTEDSCHEME&gt;</code>, allowed schemes: <code>&lt;ALLOWEDSCHEMES&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9037" href="/docs/errors/err_ngrok_9037">ERR_NGROK_9037</a>
      </td>
      <td class="pre-wrapped">
        Invalid URL <code>&lt;URL&gt;</code>, <code>&lt;PARTNAME&gt;</code> <code>&lt;PART&gt;</code> is not allowed.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9038" href="/docs/errors/err_ngrok_9038">ERR_NGROK_9038</a>
      </td>
      <td class="pre-wrapped">
        Invalid URL, trailing '/' is not allowed. Did you mean <code>&lt;URLWITHOUTPATH&gt;</code>?
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9039" href="/docs/errors/err_ngrok_9039">ERR_NGROK_9039</a>
      </td>
      <td class="pre-wrapped">
        You must specify a domain name for a kubernetes operator bound endpoint.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9040" href="/docs/errors/err_ngrok_9040">ERR_NGROK_9040</a>
      </td>
      <td class="pre-wrapped">
        We do not allow agents to connect to ngrok from your IP address (<code>&lt;IP&gt;</code>).
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_9041" href="/docs/errors/err_ngrok_9041">ERR_NGROK_9041</a>
      </td>
      <td class="pre-wrapped">
        Supported protocols for kubernetes-bound endpoints are http, tls, and tcp. You provided <code>&lt;PROTO&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10000" href="/docs/errors/err_ngrok_10000">ERR_NGROK_10000</a>
      </td>
      <td class="pre-wrapped">
        Internal Server Error. Please check our status page https://status.ngrok.com/ or contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10001" href="/docs/errors/err_ngrok_10001">ERR_NGROK_10001</a>
      </td>
      <td class="pre-wrapped">
        Something went wrong with our code. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10002" href="/docs/errors/err_ngrok_10002">ERR_NGROK_10002</a>
      </td>
      <td class="pre-wrapped">
        Could not read server rendered application data. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10003" href="/docs/errors/err_ngrok_10003">ERR_NGROK_10003</a>
      </td>
      <td class="pre-wrapped">
        Something went wrong when communicating with Stripe. Please try again later. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10004" href="/docs/errors/err_ngrok_10004">ERR_NGROK_10004</a>
      </td>
      <td class="pre-wrapped">
        Could not find the credit card form. Do you have a script blocker installed?
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10005" href="/docs/errors/err_ngrok_10005">ERR_NGROK_10005</a>
      </td>
      <td class="pre-wrapped">
        Could not find the Stripe token. Do you have a script blocker installed?
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10006" href="/docs/errors/err_ngrok_10006">ERR_NGROK_10006</a>
      </td>
      <td class="pre-wrapped">
        Failed to load the required reCAPTCHA script! Are you blocking it? It is required to continue.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10007" href="/docs/errors/err_ngrok_10007">ERR_NGROK_10007</a>
      </td>
      <td class="pre-wrapped">
        All rules must be prefixed with "bind:"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10008" href="/docs/errors/err_ngrok_10008">ERR_NGROK_10008</a>
      </td>
      <td class="pre-wrapped">
        If the "HTTPS" module is enabled and "Terminate TLS" is unchecked, then your configuration may not include any other modules except the IP Policy module.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10009" href="/docs/errors/err_ngrok_10009">ERR_NGROK_10009</a>
      </td>
      <td class="pre-wrapped">
        The request header name must be at least one character.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10010" href="/docs/errors/err_ngrok_10010">ERR_NGROK_10010</a>
      </td>
      <td class="pre-wrapped">
        The request header value must be at least one character.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10011" href="/docs/errors/err_ngrok_10011">ERR_NGROK_10011</a>
      </td>
      <td class="pre-wrapped">
        You have already added the request header name "<code>&lt;NAME&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10012" href="/docs/errors/err_ngrok_10012">ERR_NGROK_10012</a>
      </td>
      <td class="pre-wrapped">
        The response header name must be at least one character.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10013" href="/docs/errors/err_ngrok_10013">ERR_NGROK_10013</a>
      </td>
      <td class="pre-wrapped">
        The response header value must be at least one character.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10014" href="/docs/errors/err_ngrok_10014">ERR_NGROK_10014</a>
      </td>
      <td class="pre-wrapped">
        You have already added the response header name "<code>&lt;NAME&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10019" href="/docs/errors/err_ngrok_10019">ERR_NGROK_10019</a>
      </td>
      <td class="pre-wrapped">
        You haven't added any Event Destinations
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10020" href="/docs/errors/err_ngrok_10020">ERR_NGROK_10020</a>
      </td>
      <td class="pre-wrapped">
        You haven't added any Event Sources
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10021" href="/docs/errors/err_ngrok_10021">ERR_NGROK_10021</a>
      </td>
      <td class="pre-wrapped">
        Received partition "<code>&lt;PARTITION&gt;</code>" that does not include the word "aws".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10022" href="/docs/errors/err_ngrok_10022">ERR_NGROK_10022</a>
      </td>
      <td class="pre-wrapped">
        Received service "<code>&lt;SERVICE&gt;</code>" but expected "<code>&lt;TARGETSERVICENAME&gt;</code>".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10023" href="/docs/errors/err_ngrok_10023">ERR_NGROK_10023</a>
      </td>
      <td class="pre-wrapped">
        There were no changes to submit.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10024" href="/docs/errors/err_ngrok_10024">ERR_NGROK_10024</a>
      </td>
      <td class="pre-wrapped">
        Cannot update non-existent IP Policy.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10025" href="/docs/errors/err_ngrok_10025">ERR_NGROK_10025</a>
      </td>
      <td class="pre-wrapped">
        A TLS Certificate must be selected.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10026" href="/docs/errors/err_ngrok_10026">ERR_NGROK_10026</a>
      </td>
      <td class="pre-wrapped">
        Failed to upload Certificate Authority. Invalid file format "<code>&lt;FORMAT&gt;</code>" given. Upload a Certificate Authority in PEM format.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10027" href="/docs/errors/err_ngrok_10027">ERR_NGROK_10027</a>
      </td>
      <td class="pre-wrapped">
        Failed to upload SAML IdP Metadata. Invalid file format "<code>&lt;FORMAT&gt;</code>" given. Upload SAML IdP Metadata in XML format.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10028" href="/docs/errors/err_ngrok_10028">ERR_NGROK_10028</a>
      </td>
      <td class="pre-wrapped">
        Failed to upload TLS Certificate. Invalid file format "<code>&lt;FORMAT&gt;</code>" given. Upload a TLS Certificate in PEM format.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10029" href="/docs/errors/err_ngrok_10029">ERR_NGROK_10029</a>
      </td>
      <td class="pre-wrapped">
        Failed to upload TLS Certificate Private Key. Invalid file format "<code>&lt;FORMAT&gt;</code>" given. Upload a TLS Certificate Private Key in PEM format.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10030" href="/docs/errors/err_ngrok_10030">ERR_NGROK_10030</a>
      </td>
      <td class="pre-wrapped">
        Failed to upload Certificate Authority. Please limit your file uploads to less than 16 KB.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10031" href="/docs/errors/err_ngrok_10031">ERR_NGROK_10031</a>
      </td>
      <td class="pre-wrapped">
        Failed to upload SAML IdP Metadata. Please limit your file uploads to less than 16 KB.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10032" href="/docs/errors/err_ngrok_10032">ERR_NGROK_10032</a>
      </td>
      <td class="pre-wrapped">
        Failed to upload TLS Certificate. Please limit your file uploads to less than 16 KB.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10033" href="/docs/errors/err_ngrok_10033">ERR_NGROK_10033</a>
      </td>
      <td class="pre-wrapped">
        Failed to upload TLS Certificate Private Key. Please limit your file uploads to less than 16 KB.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10034" href="/docs/errors/err_ngrok_10034">ERR_NGROK_10034</a>
      </td>
      <td class="pre-wrapped">
        Could not copy the AuthToken to your clipboard. Please ensure that you have granted the browser permission "clipboard-write".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10062" href="/docs/errors/err_ngrok_10062">ERR_NGROK_10062</a>
      </td>
      <td class="pre-wrapped">
        ARN must begin with "arn:"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10063" href="/docs/errors/err_ngrok_10063">ERR_NGROK_10063</a>
      </td>
      <td class="pre-wrapped">
        ARN is invalid
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10064" href="/docs/errors/err_ngrok_10064">ERR_NGROK_10064</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10065" href="/docs/errors/err_ngrok_10065">ERR_NGROK_10065</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10066" href="/docs/errors/err_ngrok_10066">ERR_NGROK_10066</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10067" href="/docs/errors/err_ngrok_10067">ERR_NGROK_10067</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10068" href="/docs/errors/err_ngrok_10068">ERR_NGROK_10068</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10069" href="/docs/errors/err_ngrok_10069">ERR_NGROK_10069</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10072" href="/docs/errors/err_ngrok_10072">ERR_NGROK_10072</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10073" href="/docs/errors/err_ngrok_10073">ERR_NGROK_10073</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10074" href="/docs/errors/err_ngrok_10074">ERR_NGROK_10074</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10075" href="/docs/errors/err_ngrok_10075">ERR_NGROK_10075</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10076" href="/docs/errors/err_ngrok_10076">ERR_NGROK_10076</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10077" href="/docs/errors/err_ngrok_10077">ERR_NGROK_10077</a>
      </td>
      <td class="pre-wrapped">
        This account does not support JIT provisioning for SSO users.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10078" href="/docs/errors/err_ngrok_10078">ERR_NGROK_10078</a>
      </td>
      <td class="pre-wrapped">
        This account requires users to be authenticated with a valid SSO provider.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10079" href="/docs/errors/err_ngrok_10079">ERR_NGROK_10079</a>
      </td>
      <td class="pre-wrapped">
        The team member queried is of an unknown type. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10080" href="/docs/errors/err_ngrok_10080">ERR_NGROK_10080</a>
      </td>
      <td class="pre-wrapped">
        The invitation <code>&lt;INVITE_ID&gt;</code> was not found
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10081" href="/docs/errors/err_ngrok_10081">ERR_NGROK_10081</a>
      </td>
      <td class="pre-wrapped">
        You must specify only the correct ID for the requested team member entry.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10082" href="/docs/errors/err_ngrok_10082">ERR_NGROK_10082</a>
      </td>
      <td class="pre-wrapped">
        You must specify a user, bot, or membership ID when attempting to update a credentials owner.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10083" href="/docs/errors/err_ngrok_10083">ERR_NGROK_10083</a>
      </td>
      <td class="pre-wrapped">
        You already have a valid MFA configuration of this type enabled.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10084" href="/docs/errors/err_ngrok_10084">ERR_NGROK_10084</a>
      </td>
      <td class="pre-wrapped">
        You cannot delete the SSO Identity Provider you used to logged when SSO Enforcement is enabled on your account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10085" href="/docs/errors/err_ngrok_10085">ERR_NGROK_10085</a>
      </td>
      <td class="pre-wrapped">
        The endpoint of the request you are trying to replay was not found.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10086" href="/docs/errors/err_ngrok_10086">ERR_NGROK_10086</a>
      </td>
      <td class="pre-wrapped">
        You have exceeded the rate limit of <code>&lt;MAX&gt;</code> replay requests per <code>&lt;INTERVAL&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10087" href="/docs/errors/err_ngrok_10087">ERR_NGROK_10087</a>
      </td>
      <td class="pre-wrapped">
        Request header "<code>&lt;HEADER_NAME&gt;</code>" value too large.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10088" href="/docs/errors/err_ngrok_10088">ERR_NGROK_10088</a>
      </td>
      <td class="pre-wrapped">
        Request body size too large.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10089" href="/docs/errors/err_ngrok_10089">ERR_NGROK_10089</a>
      </td>
      <td class="pre-wrapped">
        Failed to replay the request.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10090" href="/docs/errors/err_ngrok_10090">ERR_NGROK_10090</a>
      </td>
      <td class="pre-wrapped">
        The request you are trying to view was not found.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_10091" href="/docs/errors/err_ngrok_10091">ERR_NGROK_10091</a>
      </td>
      <td class="pre-wrapped">
        The usage page has timed out. Please refresh the page and try again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_11000" href="/docs/errors/err_ngrok_11000">ERR_NGROK_11000</a>
      </td>
      <td class="pre-wrapped">
        Internal Server Error. Please refresh the page and try again. If the problem persists, please check our status page https://status.ngrok.com/ or contact the frontend team.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_11001" href="/docs/errors/err_ngrok_11001">ERR_NGROK_11001</a>
      </td>
      <td class="pre-wrapped">
        Something went wrong with our code. Please refresh the page and try again. If the problem persists, please contact the frontend team.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_11002" href="/docs/errors/err_ngrok_11002">ERR_NGROK_11002</a>
      </td>
      <td class="pre-wrapped">
        Could not read server rendered application data. Please refresh the page and try again. If the problem persists, please contact the frontend team.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_11003" href="/docs/errors/err_ngrok_11003">ERR_NGROK_11003</a>
      </td>
      <td class="pre-wrapped">
        Something went wrong with our code. Please refresh the page and try again. If the problem persists, please contact the frontend team.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_11004" href="/docs/errors/err_ngrok_11004">ERR_NGROK_11004</a>
      </td>
      <td class="pre-wrapped">
        ARN must begin with "arn:"
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_11005" href="/docs/errors/err_ngrok_11005">ERR_NGROK_11005</a>
      </td>
      <td class="pre-wrapped">
        ARN is invalid
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_11006" href="/docs/errors/err_ngrok_11006">ERR_NGROK_11006</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact the frontend team.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_12000" href="/docs/errors/err_ngrok_12000">ERR_NGROK_12000</a>
      </td>
      <td class="pre-wrapped">
        A new version of ngrok corp is required to continue. Please refresh the page to update.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_13001" href="/docs/errors/err_ngrok_13001">ERR_NGROK_13001</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_13002" href="/docs/errors/err_ngrok_13002">ERR_NGROK_13002</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_13003" href="/docs/errors/err_ngrok_13003">ERR_NGROK_13003</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_13004" href="/docs/errors/err_ngrok_13004">ERR_NGROK_13004</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_13005" href="/docs/errors/err_ngrok_13005">ERR_NGROK_13005</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_13006" href="/docs/errors/err_ngrok_13006">ERR_NGROK_13006</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_13007" href="/docs/errors/err_ngrok_13007">ERR_NGROK_13007</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_13008" href="/docs/errors/err_ngrok_13008">ERR_NGROK_13008</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_13009" href="/docs/errors/err_ngrok_13009">ERR_NGROK_13009</a>
      </td>
      <td class="pre-wrapped">
        Encountered a type "never" value. Please refresh the page and try again. If the problem persists, please contact support: support@ngrok.com
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_14000" href="/docs/errors/err_ngrok_14000">ERR_NGROK_14000</a>
      </td>
      <td class="pre-wrapped">
        The <code>&lt;ID&gt;</code> header cannot be removed without specifying a replacement.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_14001" href="/docs/errors/err_ngrok_14001">ERR_NGROK_14001</a>
      </td>
      <td class="pre-wrapped">
        Got an invalid TLS key/cert pair for TLS termination: <code>&lt;ERR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_14002" href="/docs/errors/err_ngrok_14002">ERR_NGROK_14002</a>
      </td>
      <td class="pre-wrapped">
        The PEM data provided for mutual TLS could not be parsed as a certificate: <code>&lt;ERROR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_15000" href="/docs/errors/err_ngrok_15000">ERR_NGROK_15000</a>
      </td>
      <td class="pre-wrapped">
        You are not allowed to bind subdomains on <code>&lt;BASE&gt;</code>. Your account is on the <code>&lt;PLAN&gt;</code> plan, which doesn't allow starting tunnels on <code>&lt;BASE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_15001" href="/docs/errors/err_ngrok_15001">ERR_NGROK_15001</a>
      </td>
      <td class="pre-wrapped">
        The Webhook Verification secret exceeds the maximum length of <code>&lt;MAX&gt;</code>, got <code>&lt;SIZE&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_15002" href="/docs/errors/err_ngrok_15002">ERR_NGROK_15002</a>
      </td>
      <td class="pre-wrapped">
        Your account is on the <code>&lt;PLAN&gt;</code> plan, which requires you to register a Domain or TCP Address through the ngrok Dashboard before starting an Endpoint. Visit <a href="https://dashboard.ngrok.com/domains">https://dashboard.ngrok.com/domains</a>, for HTTP and TLS endpoints, or <a href="https://dashboard.ngrok.com/tcp-addresses">https://dashboard.ngrok.com/tcp-addresses</a>, for TCP endpoints, to register a domain or address. Then use the `--domain` flag when starting an HTTP or TLS tunnel with your Agent. For TCP tunnels, use `--remote_addr`.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_15003" href="/docs/errors/err_ngrok_15003">ERR_NGROK_15003</a>
      </td>
      <td class="pre-wrapped">
        Upstream protocol is invalid: <code>&lt;APPPROTOCOL&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_15004" href="/docs/errors/err_ngrok_15004">ERR_NGROK_15004</a>
      </td>
      <td class="pre-wrapped">
        This agent has exceeded its policy rule limit of <code>&lt;LIMIT&gt;</code>. Please log into https://dashboard.ngrok.com to view your options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_15005" href="/docs/errors/err_ngrok_15005">ERR_NGROK_15005</a>
      </td>
      <td class="pre-wrapped">
        The binding <code>&lt;BINDING&gt;</code> is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_15006" href="/docs/errors/err_ngrok_15006">ERR_NGROK_15006</a>
      </td>
      <td class="pre-wrapped">
        The binding <code>&lt;BINDING&gt;</code> was specified multiple times, but duplicate bindings are not allowed.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_15007" href="/docs/errors/err_ngrok_15007">ERR_NGROK_15007</a>
      </td>
      <td class="pre-wrapped">
        The Webhook Verification secret was not specified.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_15008" href="/docs/errors/err_ngrok_15008">ERR_NGROK_15008</a>
      </td>
      <td class="pre-wrapped">
        Invalid basic auth credential. Username must be at most <code>&lt;MAXLENGTH&gt;</code> characters, got <code>&lt;GOTLENGTH&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_15009" href="/docs/errors/err_ngrok_15009">ERR_NGROK_15009</a>
      </td>
      <td class="pre-wrapped">
        Invalid basic auth credentials list. Your plan is limited to <code>&lt;MAXLENGTH&gt;</code> sets of credentials, got <code>&lt;GOTLENGTH&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_15010" href="/docs/errors/err_ngrok_15010">ERR_NGROK_15010</a>
      </td>
      <td class="pre-wrapped">
        The binding <code>&lt;BINDING&gt;</code> refers to a k8s operator that does not exist.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_16000" href="/docs/errors/err_ngrok_16000">ERR_NGROK_16000</a>
      </td>
      <td class="pre-wrapped">
        The email of the user you are trying to add, <code>&lt;EMAIL&gt;</code>, does not use a domain verified for your account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_17000" href="/docs/errors/err_ngrok_17000">ERR_NGROK_17000</a>
      </td>
      <td class="pre-wrapped">
        The MFA device type "<code>&lt;TYPE&gt;</code>" is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_17001" href="/docs/errors/err_ngrok_17001">ERR_NGROK_17001</a>
      </td>
      <td class="pre-wrapped">
        The information supplied for MFA verification was invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_17002" href="/docs/errors/err_ngrok_17002">ERR_NGROK_17002</a>
      </td>
      <td class="pre-wrapped">
        You do not have any recovery codes configured.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_17003" href="/docs/errors/err_ngrok_17003">ERR_NGROK_17003</a>
      </td>
      <td class="pre-wrapped">
        The information supplied for recovery code verification was invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_17004" href="/docs/errors/err_ngrok_17004">ERR_NGROK_17004</a>
      </td>
      <td class="pre-wrapped">
        A matching MFA device was not found.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_17005" href="/docs/errors/err_ngrok_17005">ERR_NGROK_17005</a>
      </td>
      <td class="pre-wrapped">
        MFA Device verification is not supported.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18001" href="/docs/errors/err_ngrok_18001">ERR_NGROK_18001</a>
      </td>
      <td class="pre-wrapped">
        The provided cloud endpoint configuration is invalid: url is invalid.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18002" href="/docs/errors/err_ngrok_18002">ERR_NGROK_18002</a>
      </td>
      <td class="pre-wrapped">
        The provided cloud endpoint traffic policy configuration is invalid: <code>&lt;MESSAGE&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18003" href="/docs/errors/err_ngrok_18003">ERR_NGROK_18003</a>
      </td>
      <td class="pre-wrapped">
        The provided cloud endpoint configuration is invalid: port is invalid or missing and cannot be inferred from scheme
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18004" href="/docs/errors/err_ngrok_18004">ERR_NGROK_18004</a>
      </td>
      <td class="pre-wrapped">
        The cloud endpoint update failed because no values were provided. Specify at least one value.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18005" href="/docs/errors/err_ngrok_18005">ERR_NGROK_18005</a>
      </td>
      <td class="pre-wrapped">
        The cloud endpoint update failed because you are not allowed to change the protocol/URL scheme in-place.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18006" href="/docs/errors/err_ngrok_18006">ERR_NGROK_18006</a>
      </td>
      <td class="pre-wrapped">
        This account does not have any domains or addresses reserved that match the provided URL.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18008" href="/docs/errors/err_ngrok_18008">ERR_NGROK_18008</a>
      </td>
      <td class="pre-wrapped">
        This account does not have access to Cloud Endpoints. Upgrade or switch to a pay-as-you-go plan for access.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18009" href="/docs/errors/err_ngrok_18009">ERR_NGROK_18009</a>
      </td>
      <td class="pre-wrapped">
        This account already has a cloud endpoint on this URL.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18010" href="/docs/errors/err_ngrok_18010">ERR_NGROK_18010</a>
      </td>
      <td class="pre-wrapped">
        You have exceeded the maximum number of cloud endpoints allowed for this account. Please log into <a href="https://dashboard.ngrok.com/usage">https://dashboard.ngrok.com/usage</a> to review your historic usage and <a href="https://dashboard.ngrok.com/billing/subscription/select">https://dashboard.ngrok.com/billing/subscription/select</a> to view your subscription options.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18012" href="/docs/errors/err_ngrok_18012">ERR_NGROK_18012</a>
      </td>
      <td class="pre-wrapped">
        The description field cannot be longer than 255 characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18013" href="/docs/errors/err_ngrok_18013">ERR_NGROK_18013</a>
      </td>
      <td class="pre-wrapped">
        The metadata field cannot be longer than 4096 characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18014" href="/docs/errors/err_ngrok_18014">ERR_NGROK_18014</a>
      </td>
      <td class="pre-wrapped">
        The provided cloud endpoint has invalid value for field `<code>&lt;FIELD&gt;</code>`. Reason:
        <code>&lt;ERROR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18015" href="/docs/errors/err_ngrok_18015">ERR_NGROK_18015</a>
      </td>
      <td class="pre-wrapped">
        The provided cloud endpoint is missing the required field `<code>&lt;FIELD&gt;</code>.`
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18016" href="/docs/errors/err_ngrok_18016">ERR_NGROK_18016</a>
      </td>
      <td class="pre-wrapped">
        The provided cloud endpoint was invalid because pooling was set to enabled when another endpoint exists for this url that has pooling disabled.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_18017" href="/docs/errors/err_ngrok_18017">ERR_NGROK_18017</a>
      </td>
      <td class="pre-wrapped">
        The provided cloud endpoint was invalid because pooling was set to disabled when another endpoint exists for this url.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_19000" href="/docs/errors/err_ngrok_19000">ERR_NGROK_19000</a>
      </td>
      <td class="pre-wrapped">
        Internal Server Error.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_19001" href="/docs/errors/err_ngrok_19001">ERR_NGROK_19001</a>
      </td>
      <td class="pre-wrapped">
        Certificate Signing Requests Failed! Reason: <code>&lt;ERROR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_19002" href="/docs/errors/err_ngrok_19002">ERR_NGROK_19002</a>
      </td>
      <td class="pre-wrapped">
        Failed to validate Kubernetes Operator! Reason: <code>&lt;ERROR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_19003" href="/docs/errors/err_ngrok_19003">ERR_NGROK_19003</a>
      </td>
      <td class="pre-wrapped">
        Failed to validate  endpoint selectors! Reason: <code>&lt;ERROR&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_20000" href="/docs/errors/err_ngrok_20000">ERR_NGROK_20000</a>
      </td>
      <td class="pre-wrapped">
        An internal error occurred.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_20001" href="/docs/errors/err_ngrok_20001">ERR_NGROK_20001</a>
      </td>
      <td class="pre-wrapped">
        Operation failed due to a configuration error: <code>&lt;REASON&gt;</code>
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_20002" href="/docs/errors/err_ngrok_20002">ERR_NGROK_20002</a>
      </td>
      <td class="pre-wrapped">
        Failed to create the Upstream Service for BoundEndpoint.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_20003" href="/docs/errors/err_ngrok_20003">ERR_NGROK_20003</a>
      </td>
      <td class="pre-wrapped">
        Failed to create the Target Service for BoundEndpoint.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_20004" href="/docs/errors/err_ngrok_20004">ERR_NGROK_20004</a>
      </td>
      <td class="pre-wrapped">
        Failed to establish a connection between the Upstream and Target Services.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_20005" href="/docs/errors/err_ngrok_20005">ERR_NGROK_20005</a>
      </td>
      <td class="pre-wrapped">
        BoundEndpoint is Denied due to no matching pattern in AllowedURLs
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_20006" href="/docs/errors/err_ngrok_20006">ERR_NGROK_20006</a>
      </td>
      <td class="pre-wrapped">
        Failed to create CSR.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_21000" href="/docs/errors/err_ngrok_21000">ERR_NGROK_21000</a>
      </td>
      <td class="pre-wrapped">
        Failed to lookup IP <code>&lt;IP&gt;</code>: <code>&lt;ERR&gt;</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_23000" href="/docs/errors/err_ngrok_23000">ERR_NGROK_23000</a>
      </td>
      <td class="pre-wrapped">
        The vault name "<code>&lt;VAULT&gt;</code>" is invalid. Must only contain the characters "a-zA-Z0-9_/.".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_23001" href="/docs/errors/err_ngrok_23001">ERR_NGROK_23001</a>
      </td>
      <td class="pre-wrapped">
        The vault name cannot be empty.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_23002" href="/docs/errors/err_ngrok_23002">ERR_NGROK_23002</a>
      </td>
      <td class="pre-wrapped">
        Your vault name must be less than <code>&lt;LENGTH&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_23003" href="/docs/errors/err_ngrok_23003">ERR_NGROK_23003</a>
      </td>
      <td class="pre-wrapped">
        A Vault must be empty before it can be deleted. Please remove all secrets from the vault and try again.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_23004" href="/docs/errors/err_ngrok_23004">ERR_NGROK_23004</a>
      </td>
      <td class="pre-wrapped">
        Vault names must be unique within an account.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_24000" href="/docs/errors/err_ngrok_24000">ERR_NGROK_24000</a>
      </td>
      <td class="pre-wrapped">
        The secret name "<code>&lt;SECRET&gt;</code>" is invalid. Must only contain the characters "a-zA-Z0-9_/.".
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_24001" href="/docs/errors/err_ngrok_24001">ERR_NGROK_24001</a>
      </td>
      <td class="pre-wrapped">
        The secret name cannot be empty.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_24002" href="/docs/errors/err_ngrok_24002">ERR_NGROK_24002</a>
      </td>
      <td class="pre-wrapped">
        Your secret name must be less than <code>&lt;LENGTH&gt;</code> characters.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_24003" href="/docs/errors/err_ngrok_24003">ERR_NGROK_24003</a>
      </td>
      <td class="pre-wrapped">
        The secret value cannot be empty.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_24004" href="/docs/errors/err_ngrok_24004">ERR_NGROK_24004</a>
      </td>
      <td class="pre-wrapped">
        Your secret value must be less than <code>&lt;LENGTH&gt;</code> bytes.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_24005" href="/docs/errors/err_ngrok_24005">ERR_NGROK_24005</a>
      </td>
      <td class="pre-wrapped">
        Secret names must be unique within a vault.
      </td>
    </tr>
    <tr>
      <td>
        <a id="ERR_NGROK_24006" href="/docs/errors/err_ngrok_24006">ERR_NGROK_24006</a>
      </td>
      <td class="pre-wrapped">
        Vault with ID <code>&lt;ID&gt;</code> not found.
      </td>
    </tr>
  </tbody>
</table>
