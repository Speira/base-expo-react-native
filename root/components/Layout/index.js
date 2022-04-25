import PropTypes from 'prop-types'
import BaseLayout, {
  LayoutBody,
  LayoutFooter,
  LayoutHeader,
  LayoutStatusBar,
  LayoutTitle,
} from './style'

/**
 * Layout
 * @desc ::: create a layout for the qpp
 *
 */
export default function Layout(props) {
  const { children, title } = props

  return (
    <BaseLayout>
      <LayoutStatusBar />
      <LayoutHeader>
        <LayoutTitle>{title}</LayoutTitle>
      </LayoutHeader>
      <LayoutBody>{children}</LayoutBody>
      <LayoutFooter />
    </BaseLayout>
  )
}

Layout.defaultProps = {
  title: '',
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}
