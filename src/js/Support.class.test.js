import Support from './Support.class';

describe('Support class', () => {
  it('Support is Object', () => {
    const support = new Support();
    expect(typeof support).toBe('object');
  });

  it('support.check is function', () => {
    const support = new Support();
    expect(typeof support.check).toBe('function');
  });

  it('support.check() is boolean', () => {
    const support = new Support();
    expect(typeof support.check()).toBe('boolean');
  });

  it('support.check() is true or false', () => {
    const support = new Support();
    expect(support.check() === false || support.check() === true).toBe(true);
  });

  it('support.check() is true', () => {
    const type = 'preload';
    const list = {
        supports: function(value) {
            return (value === 'preload');
        },
    };

    const support = new Support(type, list);
    expect(support.check()).toBe(true);
  });

  it('support.check() is true supports', () => {
    const type = 'preload';
    const list = {
        supports: function(value) {
            return (value === 'preload');
        },
    };

    const support = new Support(type, list);
    expect(support.check()).toBe(true);
  });


  it('support.check() is false supports', () => {
    const type = 'preload';
    const list = {
        supports: function(value) {
            return (value === 'stylesheet');
        },
    };

    const support = new Support(type, list);
    expect(support.check()).toBe(false);
  });


  it('support.check() is false no supports', () => {
    const type = 'preload';
    const list = {};

    const support = new Support(type, list);
    expect(support.check()).toBe(false);
  });

  it('support.check() is false throw error supports', () => {
    const type = 'preload';
    const list = {
        supports: function() {
            // eslint-disable-next-line no-throw-literal
            throw 'list.supports() throw error';
        },
    };

    const support = new Support(type, list);
    expect(support.check()).toBe(false);
  });

  it('support.check() is false no list', () => {
    const type = 'preload';

    const support = new Support(type);
    expect(support.check()).toBe(false);
  });
});
