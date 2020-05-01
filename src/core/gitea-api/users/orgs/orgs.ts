import path from 'path';
import { apiPath, get } from '../../http';
import { APIConfig } from '../../http/http.d';

export interface Organization {
  avatar_url: string;
  description: string;
  full_name: string;
  id: number;
  location: string;
  username: string;
  visibility: string;
  website: string;
}

export function getCurrentUserOrgs({ config }: { config: APIConfig }): Promise<Organization[]> {
  const url = path.join(apiPath, 'user/orgs');
  return get({ url, config });
}