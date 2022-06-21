import { h } from 'vue';

function error(msg) {
  typeof console === 'object' &&
    console.error('[vue-google-signin] error: %s', msg);
}

const install = (app) => {
  // eslint-disable-next-line
  app.component('vue-google-signin', {
    props: {
      params: {
        type: Object,
        required: true,
        default() {
          return {};
        },
      },
    },
    methods: {
      _login() {
        window.gapi.load('auth2', () => {
          const auth2 = window.gapi.auth2.init(this.params);
          auth2
            .signIn()
            .then((googleUser) => {
              this.$emit('success', googleUser);
            })
            .catch((e) => {
              this.$emit('error', e);
            });
        });
      },
      login() {
        const { client_id } = this.params;

        if (!client_id) {
          error('clientId is required; ep: :params="{clientId: "xxxx"}"');
          return;
        }
        if (!window.gapi) {
          const script = document.createElement('script');
          script.setAttribute(
            'src',
            'https://apis.google.com/js/api:client.js'
          );
          document.documentElement.appendChild(script);
          script.onload = this._login;
        } else {
          this._login();
        }
      },
    },
    render() {
      return h(
        'fragment',
        {
          onClick: this.login,
        },
        this.$slots.default()
      );
    },
  });
};

export default install;
