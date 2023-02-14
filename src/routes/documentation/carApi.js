exports.addCarSchema = {
  description: "Create a new car",
  tags: ["cars"],
  summary: "Creates new car with given values",
  body: {
    type: "object",
    properties: {
      title: { type: "string" },
      brand: { type: "string" },
      price: { type: "string" },
      age: { type: "number" },
      services: { type: "object" },
    },
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        _id: { type: "string" },
        title: { type: "string" },
        brand: { type: "string" },
        price: { type: "string" },
        age: { type: "number" },
        services: { type: "object" },
        __v: { type: "number" },
      },
    },
  },
};

exports.getCarsSchema = {
  description: "Find all cars",
  tags: ["cars"],
  summary: "Finds all cars",
  response: {
    200: {
      description: "Successful response",
      type: "array",
    },
  },
};

exports.getSingleCarSchema = {
  description: "Find a car",
  tags: ["cars"],
  summary: "Finds a car with its id",
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        _id: { type: "string" },
        title: { type: "string" },
        brand: { type: "string" },
        price: { type: "string" },
        age: { type: "number" },
        services: { type: "object" },
        __v: { type: "number" },
      },
    },
  },
};

exports.updateCarSchema = {
  description: "Update a car",
  tags: ["cars"],
  summary: "Finds a car with its id and updates it",
  body: {
    type: "object",
    properties: {
      title: { type: "string" },
      brand: { type: "string" },
      price: { type: "string" },
      age: { type: "number" },
      services: { type: "object" },
    },
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        _id: { type: "string" },
        title: { type: "string" },
        brand: { type: "string" },
        price: { type: "string" },
        age: { type: "number" },
        services: { type: "object" },
        __v: { type: "number" },
      },
    },
  },
};

exports.deleteCarSchema = {
  description: "Delete a car",
  tags: ["cars"],
  summary: "Finds a car with its id and delete it",
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        _id: { type: "string" },
        title: { type: "string" },
        brand: { type: "string" },
        price: { type: "string" },
        age: { type: "number" },
        services: { type: "object" },
        __v: { type: "number" },
      },
    },
  },
};
