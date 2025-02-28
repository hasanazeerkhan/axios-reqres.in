import { resourcesAPI } from "../src/resources.js";

const resources = new resourcesAPI;
resources.resourceList('/api/unknown');
resources.resourceSingle('/api/unknown/2');
// resources.resourceNotFound("/api/unknown/23");