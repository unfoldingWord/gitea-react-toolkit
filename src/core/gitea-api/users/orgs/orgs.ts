import { apiPath, get } from '../../http';
import { APIConfig } from '../../http/http.d';
const path = require('path');

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

export async function isSelectedOrgWritable({ org, user, config}: { org: Organization, user:string, config:APIConfig }): Promise<boolean> {

  const teamsUrl = path.join(apiPath, 'orgs/'+org.username+'/teams');
  let teamsResults = await get({ url: teamsUrl, config });
  // if there are no teams, then skip other checks
  if ( !teamsResults ) {
    return true;
  }

  // https://git.door43.org/api/v1/teams/172/members/cecil.new?access_token=PlaygroundTesting
  // test for membership, looking for something other than "read"
  let permission = false;
  for ( let j=0; j < teamsResults.length; j++ ) {
    let isTeamMemberUrl = path.join(apiPath, 'teams/'+teamsResults[j].id+'/members/'+user);
    let teamMemberResult = await get({url: isTeamMemberUrl, config});
    if ( teamMemberResult === null ) {
      // not a team member
      continue;
    }
    let _permission = teamsResults[j].permission;
    if ( _permission !== 'read' ) {
      permission = true;
      break;
    }
  }

  return permission;
}