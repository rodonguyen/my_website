import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Hyperlink } from '../utils/utils'
import { INSTAGRAM_HREF, YOUTUBE_HREF } from './SocialIcons'

const LEGACY_MIGRATION_HREF = 'https://lnkd.in/p/ggtihNzi'
const HONOURS_HREF = 'https://lnkd.in/p/guvyPdjH'
const PAPER_HREF = 'https://github.com/icedpanda/awesome-personalized-graph-memory'

const introLinkClass = 'link'

const HomeIntro = () => {
	return (
		<>
			<p>
				<Trans
					i18nKey="homeIntro.intro1"
					components={{
						dreamLink: <Link to="/list-100" className={introLinkClass} />,
						appsLink: <Link to="/apps" className={introLinkClass} />
					}}
				/>
			</p>
			<p>
				<Trans
					i18nKey="homeIntro.intro2"
					components={{
						legacyLink: <Hyperlink href={LEGACY_MIGRATION_HREF} className={introLinkClass} />
					}}
				/>
			</p>
			<p>
				<Trans
					i18nKey="homeIntro.intro3"
					components={{
						honoursLink: <Hyperlink href={HONOURS_HREF} className={introLinkClass} />,
						oneLink: <Hyperlink href={PAPER_HREF} className={introLinkClass} />
					}}
				/>
			</p>
			<p>
				<Trans
					i18nKey="homeIntro.intro4"
					components={{
						instaLink: <Hyperlink href={INSTAGRAM_HREF} className={introLinkClass} />,
						youtubeLink: <Hyperlink href={YOUTUBE_HREF} className={introLinkClass} />
					}}
				/>
			</p>
		</>
	)
}

export default HomeIntro
