# vue-google-signin

> A simple and lightweight google signin plugin using vue@3

## Geting Start
```shell
npm install vue-google-signin -S
```


## Usage

```vue
<template>
  <div>
    <vue-google-signin :params="params" @success="onSuccess" @error="onError">
      <button>login</button>
    </vue-google-signin>
  </div>
</template>

<script>
export default {
  name: 'awesome-vue-google-signin',
  data() {
    return {
      params: {
        client_id: 'xxxx',
        ux_mode: 'popup',
      },
    };
  },
  methods: {
    onSuccess(googleUser) {
      console.log('googleUser', googleUser);
    },
    onError(error) {
      console.log('googleUser', error);
    },
  },
};
</script>
```
## Options
| Property     | Type     | Required        | Description     |
|--------------|----------|-----------------|-----------------|
| params     | Object   | true       | google sign params. see [google doc](https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams) |


## Methods
| Property     | Type     | Required        | Description     |
|--------------|----------|-----------------|-----------------|
| success | Function | false | google signin success callback | 
| error | Function | false | google error success callback | 


## License
MIT © premillos


