import axios from "axios";

const instance_registry = axios.create({
  baseURL: `${import.meta.env.VITE_REGISTRY_URL}`,
});

const instance_api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

export { instance_registry as npmRegistry, instance_api as npmAPI };
