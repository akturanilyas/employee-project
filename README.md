### Kurulumlar
- Development ortamında ayağa kaldırmak için.

```bash
yarn dev
```

- Production ortamında ayağa kaldırmak için.

```bash
yarn build && yarn start
```

- API olarak GraphQl Faker yüklenmesi ile ilgili [sorun](https://github.com/graphql-kit/graphql-faker/issues/196) olduğundan [msw](https://mswjs.io/) kullandım. Hem de test yazmamız gerektiğinde direkt olarak mocklardığımız datayı kullanabiliriz.
- Loglama için her istek atıldığında `app.log` dosyasına log atılıyor. Kullanıcı aktiviteleri için Google Tag Manager de kullanılabilir.
- Stillendirme için TailwindCSS kullandım.
- State management olarak Redux kullandım. RTKQuery ile birlikte çok kullanışlı olduğundan dolayı kullandım.
- GraphQL tarafında Shemalar oluşturulduktan sonra otomatik TypeScript type'ları oluşturulması için Codegen kullandım. Development ortamında aşağıdaki komut çalıştırılarak çalışılabilir.
```bash
yarn run codegen:watch
```
- Uygulama Vercel üzerinden deploy edilmiştir. Link'e GitHub üzerinden ulaşabilirsiniz. 
