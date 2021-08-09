import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const limit: OperationQueryParameter = {
  parameterPath: "limit",
  mapper: {
    defaultValue: 300,
    constraints: {
      InclusiveMinimum: 1
    },
    serializedName: "limit",
    type: {
      name: "Number"
    }
  }
};

export const offset: OperationQueryParameter = {
  parameterPath: "offset",
  mapper: {
    constraints: {
      InclusiveMinimum: 0
    },
    serializedName: "offset",
    type: {
      name: "Number"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "multipart/form-data",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const file: OperationParameter = {
  parameterPath: ["options", "file"],
  mapper: {
    serializedName: "file",
    type: {
      name: "Stream"
    }
  }
};

export const identifier: OperationParameter = {
  parameterPath: ["options", "identifier"],
  mapper: {
    serializedName: "identifier",
    type: {
      name: "String"
    }
  }
};

export const fileName: OperationParameter = {
  parameterPath: ["options", "fileName"],
  mapper: {
    serializedName: "fileName",
    type: {
      name: "String"
    }
  }
};

export const url: OperationParameter = {
  parameterPath: ["options", "url"],
  mapper: {
    serializedName: "url",
    type: {
      name: "String"
    }
  }
};

export const wait: OperationParameter = {
  parameterPath: ["options", "wait"],
  mapper: {
    serializedName: "wait",
    type: {
      name: "Boolean"
    }
  }
};

export const resumeLanguage: OperationParameter = {
  parameterPath: ["options", "resumeLanguage"],
  mapper: {
    serializedName: "resumeLanguage",
    type: {
      name: "String"
    }
  }
};

export const expiryTime: OperationParameter = {
  parameterPath: ["options", "expiryTime"],
  mapper: {
    serializedName: "expiryTime",
    type: {
      name: "String"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const identifier1: OperationURLParameter = {
  parameterPath: "identifier",
  mapper: {
    serializedName: "identifier",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const redactHeadshot: OperationParameter = {
  parameterPath: ["options", "redactHeadshot"],
  mapper: {
    defaultValue: true,
    serializedName: "redactHeadshot",
    type: {
      name: "Boolean"
    }
  }
};

export const redactPersonalDetails: OperationParameter = {
  parameterPath: ["options", "redactPersonalDetails"],
  mapper: {
    defaultValue: true,
    serializedName: "redactPersonalDetails",
    type: {
      name: "Boolean"
    }
  }
};

export const redactWorkDetails: OperationParameter = {
  parameterPath: ["options", "redactWorkDetails"],
  mapper: {
    defaultValue: true,
    serializedName: "redactWorkDetails",
    type: {
      name: "Boolean"
    }
  }
};

export const redactEducationDetails: OperationParameter = {
  parameterPath: ["options", "redactEducationDetails"],
  mapper: {
    defaultValue: true,
    serializedName: "redactEducationDetails",
    type: {
      name: "Boolean"
    }
  }
};

export const redactReferees: OperationParameter = {
  parameterPath: ["options", "redactReferees"],
  mapper: {
    defaultValue: true,
    serializedName: "redactReferees",
    type: {
      name: "Boolean"
    }
  }
};

export const redactLocations: OperationParameter = {
  parameterPath: ["options", "redactLocations"],
  mapper: {
    defaultValue: true,
    serializedName: "redactLocations",
    type: {
      name: "Boolean"
    }
  }
};

export const redactDates: OperationParameter = {
  parameterPath: ["options", "redactDates"],
  mapper: {
    defaultValue: true,
    serializedName: "redactDates",
    type: {
      name: "Boolean"
    }
  }
};

export const resumeFormat: OperationParameter = {
  parameterPath: "resumeFormat",
  mapper: {
    serializedName: "resumeFormat",
    required: true,
    type: {
      name: "String"
    }
  }
};
