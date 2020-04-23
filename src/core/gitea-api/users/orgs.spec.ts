import { authorizationHeaders } from '../authentication';
import { getCurrentUserOrgs } from './orgs';
jest.unmock('axios');
jest.unmock('axios-cache-adapter');

describe('Organization Lists', () => {
  it('should list organizations with correct config', async () => {
    const username = 'tc-create-test';
    const password = 'password123';
    const expected = [
      {
        'avatar_url': 'https://bg.door43.org/avatars/17918',
        'description': '',
        'full_name': '',
        'id': 17918,
        'location': '',
        'username': 'TC-Create-Test-Org',
        'visibility': 'public',
        'website': '',
      },
    ];

    const authHeaders = authorizationHeaders({ username, password });
    const config = { server: 'https://bg.door43.org/', headers: { ...authHeaders } };
    const organizations = await getCurrentUserOrgs({ config });
    expect(organizations).toMatchObject(expected);
  });
});
