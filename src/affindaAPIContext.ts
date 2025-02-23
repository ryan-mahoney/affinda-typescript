import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { Region, AffindaAPIOptionalParams } from "./models";

export class AffindaAPIContext extends coreClient.ServiceClient {
  region: Region;

  /**
   * Initializes a new instance of the AffindaAPIContext class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: AffindaAPIOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AffindaAPIOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-affinda/6.19.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://{region}.affinda.com"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.region = options.region || "api";
  }
}
