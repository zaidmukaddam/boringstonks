/* eslint-disable @next/next/no-img-element */
import { NextSeo } from 'next-seo'
import { attachMainLayout } from '~/layouts/Main.layout'
import Logo from '~/components/vectors/Logo'
import { text, container, stack } from '~/styles/primitives'
import { css } from '~/styles'

import { Page } from '~/types/page.type'

const styles = {
  title: text({
    weight: 'bold',
    leading: 'snug',
    size: {
      '@initial': 'xl',
      '@sm': '2xl'
    },
    css: { xColor: '$fg1', my: '$8', textDecoration: 'underline', }
  }),
  summary: text({
    size: 'lg',
    leading: 'relaxed',
    css: { xColor: '$fg2' }
  }),
  cont: container({
    size: 'small'
  }),
  mark: stack({
    size: 'base',
    css: {
      xColor: '$fg2',
      mt: '$2',
      mb: '$2',
    }
  }),
  logo: css({
    xColor: '$brand',
    display: 'inherit',
    '& svg': {
      width: 'auto',
      height: 350,
      '@lg': {
        height: 400
      }
    },
    '&:hover': { xColor: '$accent' }
  })(),
}

const About: Page = () => {
  return (
    <div className={styles.cont}>
      <NextSeo title="About" />

      <h2 className={styles.title}>About</h2>
      <p className={styles.summary}>
        Hi, I am Zaid Mukaddam. Welcome to my blog, BoringStonks. I am a developer, cyber security enthusiast, and a lifelong learner.
      </p>

      <div className={styles.logo}>
        <Logo height={230} />
      </div>

      <h2 className={styles.title}>Inspiration for BoringStonks</h2>
      <p className={styles.summary}>
        BoringStonks is a tech blog that I wrote to explore the world of software development and cybersecurity. <br />
        The goal of this blog is to provide a high-level overview of the world of software development and cybersecurity in my terms.<br />
        I hope you enjoy the content.
      </p>

    </div>
  )
}

About.layout = attachMainLayout()

export default About
