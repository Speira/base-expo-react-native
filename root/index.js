import Contexts from '~contexts'
import HomeContainer from '~containers/HomeContainer'

/**
 * Root
 * @desc ::: Entry point of the app
 *           Here are mapped contexts and  containers
 *           All containers must be called here
 *
 */
export default function Root() {
  return (
    <Contexts>
      <HomeContainer />
    </Contexts>
  )
}
