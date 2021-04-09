import { select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { StorefrontBannerPanel } from './StorefrontBannerPanel'

const ColorOptions = {
  // Orange: 'orange',
  // Purple: 'purple',
  // Yellow: 'yellow',
  // Magenta: 'magenta',
  // Cyan: 'cyan',
  Cyan: 'cyan',
  Green: 'green',
  Purple: 'purple',
  Red: 'red',
}

storiesOf('Modules/Storefront/Components', module)
  .addDecorator((storyFn) => (
    <div style={{ position: 'absolute', top: 50, bottom: 0, left: 0, right: 0 }}>{storyFn()}</div>
  ))
  .add('Banner Panel - without Image', () => {
    return (
      <StorefrontBannerPanel
        body={text(
          'Body',
          "Earn Salad balance by completing tasks such as downloading and playing mobile games. Whether you just want to top off your balance, boost your regular earnings, or can't mine with Salad, offerwalls allow you to make more money.\n\n[Take Me There](/earn/offerwall)",
        )}
        title={text('Heading', 'Offerwalls')}
        // @ts-ignore
        color={select('Color', ColorOptions, ColorOptions.Cyan)}
      />
    )
  })
  .add('Banner Panel - Image Left', () => {
    return (
      <StorefrontBannerPanel
        body={text(
          'Body',
          "Earn Salad balance by completing tasks such as downloading and playing mobile games. Whether you just want to top off your balance, boost your regular earnings, or can't mine with Salad, offerwalls allow you to make more money.\n\n[Take Me There](/earn/offerwall)",
        )}
        title={text('Heading', 'Offerwalls')}
        // @ts-ignore
        color={select('Color', ColorOptions, ColorOptions.Cyan)}
        image="https://app-api.salad.io/api/v1/reward-images/f04c1b2a-40cf-4160-b215-99885760ca81.jpg"
        imagePosition="left"
      />
    )
  })
  .add('Banner Panel - Image Right', () => {
    return (
      <StorefrontBannerPanel
        body={text(
          'Body',
          "Earn Salad balance by completing tasks such as downloading and playing mobile games. Whether you just want to top off your balance, boost your regular earnings, or can't mine with Salad, offerwalls allow you to make more money.\n\n[Take Me There](/earn/offerwall)",
        )}
        title={text('Heading', 'Offerwalls')}
        // @ts-ignore
        color={select('Color', ColorOptions, ColorOptions.Cyan)}
        image="https://app-api.salad.io/api/v1/reward-images/f04c1b2a-40cf-4160-b215-99885760ca81.jpg"
        imagePosition="right"
      />
    )
  })
  .add('Banner Panel - Image Top', () => {
    return (
      <StorefrontBannerPanel
        body={text(
          'Body',
          "Earn Salad balance by completing tasks such as downloading and playing mobile games. Whether you just want to top off your balance, boost your regular earnings, or can't mine with Salad, offerwalls allow you to make more money.\n\n[Take Me There](/earn/offerwall)",
        )}
        title={text('Heading', 'Offerwalls')}
        // @ts-ignore
        color={select('Color', ColorOptions, ColorOptions.Cyan)}
        image="https://app-api.salad.io/api/v1/reward-images/f04c1b2a-40cf-4160-b215-99885760ca81.jpg"
        imagePosition="top"
      />
    )
  })
  .add('Banner Panel - Image Bottom', () => {
    return (
      <StorefrontBannerPanel
        body={text(
          'Body',
          "Earn Salad balance by completing tasks such as downloading and playing mobile games. Whether you just want to top off your balance, boost your regular earnings, or can't mine with Salad, offerwalls allow you to make more money.\n\n[Take Me There](/earn/offerwall)",
        )}
        title={text('Heading', 'Offerwalls')}
        // @ts-ignore
        color={select('Color', ColorOptions, ColorOptions.Cyan)}
        image="https://app-api.salad.io/api/v1/reward-images/f04c1b2a-40cf-4160-b215-99885760ca81.jpg"
        imagePosition="bottom"
      />
    )
  })
