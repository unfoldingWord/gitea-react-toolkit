import { getOrganization } from './orgs';
jest.unmock('axios');
jest.unmock('axios-cache-adapter');

describe('Organization Lists', () => {
  it('should list an organization from a link', async () => {
    const expected = {
      'avatar_url': 'https://bg.door43.org/avatars/17918',
      'description': '',
      'full_name': '',
      'id': 17918,
      'location': '',
      'username': 'TC-Create-Test-Org',
      'visibility': 'public',
      'website': '',
    };
    const organizationName = 'TC-Create-Test-Org';
    const config = { server: 'https://bg.door43.org/' };
    const organization = await getOrganization({ config }, organizationName);
    expect(organization).toMatchObject(expected);
  });
});
