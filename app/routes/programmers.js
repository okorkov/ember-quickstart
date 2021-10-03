import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Alex Okarkau', 'Yakuza Haz', 'Dan Abramov'];
  }
}
