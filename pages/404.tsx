import { NextSeo } from 'next-seo'
import { attachMainLayout } from '~/layouts/Main.layout'
import { text, container } from '~/styles/primitives'

import { Page } from '~/types/page.type'
import Link from 'next/link'

const styles = {
    title: text({
        weight: 'bold',
        size: {
            '@initial': '10xl',
        },
        css: {
            xColor: '$fg1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }),
    cont: container({
        size: 'small'
    }),
    summary: text({
        size: 'lg',
        leading: 'relaxed',
        css: {
            xColor: '$fg2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }),
}

const x404: Page = () => {
    return (
        <div className={styles.cont}>
            <NextSeo title="404" />
            <h1 className={styles.title}>404</h1>
            <h5 className={styles.summary}>Not Found</h5>
            <Link href="/">&larr; Go Back Home</Link>
        </div>
    )
}

x404.layout = attachMainLayout()

export default x404
