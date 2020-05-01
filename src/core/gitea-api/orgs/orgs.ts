import path from 'path';
import { apiPath, get } from '../http';
import { APIConfig } from '../http/http.d';
import { Organization } from '../users/orgs/orgs';

export function getOrganization({ config }: { config: APIConfig }, organizationName: string): Promise<Organization> {
  const url = path.join(apiPath, `/orgs/${organizationName}`);
  return get({ url, config });
}