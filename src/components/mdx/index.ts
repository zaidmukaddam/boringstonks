import Image from 'next/image'
import Pre from './Pre'
import Blockquote from './Blockquote'
import Callout from './Callout'
import Text from './Text'
import Tab from './Tab'
import Hr from './Hr'

const customComponents = {
  Image,
  Text,
  Callout,
  Tab
}

const MDXComponents = {
  pre: Pre,
  blockquote: Blockquote,
  hr: Hr,
  ...customComponents
}

export default MDXComponents
