import withStyles, { WithStyles } from 'react-jss'
// import Skeleton from 'react-loading-skeleton'
import { Remark } from 'react-remark'
import { HeroTitle, SmartLink } from '../../../components'
import { HeroPanel } from '../../../components/HeroPanel'

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  containerRowReverse: {
    flexDirection: 'row-reverse',
  },
  column: {
    flex: 1,
  },
  columnSideBySide: {
    margin: 10,
  },
}

interface Props extends WithStyles<typeof styles> {
  body: string
  // color: 'orange' | 'purple' | 'yellow' | 'magenta' | 'cyan'
  color: 'red' | 'purple' | 'green' | 'cyan'
  title: string
}

export const _StorefrontBannerPanel = ({ body, color, title}: Props) => {
  return (
    <HeroPanel
      color={color}
    >
      <div>
        <HeroTitle>{title}</HeroTitle>
        <Remark
          rehypeReactOptions={{
            components: {
              a: (props: any) => {
                return <SmartLink to={props.href}>{props.children[0]}</SmartLink>
              },
            },
          }}
        >
          {body}
        </Remark>
        {/* {a ? (<Remark
          rehypeReactOptions={{
            components: {
              a: (props: any) => {
                return <SmartLink to={props.href}>{props.children[0]}</SmartLink>
              },
            },
          }}
        >
          {body}
        </Remark>
        ) : (
        <Remark></Remark>
        // <Skeleton height={'100%'} />
        )} */}
      </div>
    </HeroPanel>
  )
}

export const StorefrontBannerPanel = withStyles(styles)(_StorefrontBannerPanel)
