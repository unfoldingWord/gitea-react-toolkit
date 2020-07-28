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
  permission?: string;
}

export async function getCurrentUserOrgs({ config, user }: { config: APIConfig, user: string }): Promise<Organization[]> {
  const url = path.join(apiPath, 'user/orgs');
  const results = await get({ url, config });
  for ( let i=0; i<results.length; i++ ) {
    // https://git.door43.org/api/v1/orgs/translate_test/teams?access_token=PlaygroundTesting
    const username = results[i].username;
    const teamsUrl:string = path.join(apiPath, 'orgs/'+username+'/teams')
    let teamsResults = await get({ url: teamsUrl, config })
    // https://git.door43.org/api/v1/teams/172/members/cecil.new?access_token=PlaygroundTesting
    // test for membership, looking for something other than "read"
    for ( let j=0; j < teamsResults.length; j++ ) {
      let isTeamMemberUrl :string = path.join(apiPath, 'teams/'+teamsResults[j].id+'/members/'+user);
      let teamMemberResult = await get({url: isTeamMemberUrl, config});
      if ( teamMemberResult === null ) {
        // not a team member
        continue;
      }
      let _permission = teamsResults[j].permission;
      if ( _permission !== 'read' ) {
        results[i].permission = 'write';
        break
      }
    }
    if ( ! results[i].permission ) results[i].permission = 'read';
  }
  return results;
}