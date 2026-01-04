import { changeWindowTitle, Hyperlink } from '../utils/utils'
import { LeetcodeSvg } from '../assets/icons'
import { useTranslation } from 'react-i18next'

const List100 = () => {
	const { t } = useTranslation()
	changeWindowTitle(window.location.pathname)
	const readBookNum = 30

	return (
		<div className="container mt-8 text-left">
			<h1 className="h1 text-center">{t('list100.pageTitle')}</h1>
			<p className="mb-4">{t('list100.intro')}</p>
			<ol>
				{/* Legacy */}
				<li>
					✗ {t('list100.items.readBooks100')} ({readBookNum}/100)
				</li>
				<li>
					✗ {t('list100.items.readBooks1000')} ({readBookNum}/1000)
				</li>
				<li>✅ {t('list100.items.teachUni')}</li>
				<li>✗ {t('list100.items.reach10kSubs')} (470/10000 subs)</li>
				<li>✗ {t('list100.items.foundTechCompany')}</li>
				<li>✗ {t('list100.items.giveTalk100')}</li>
				<li>✗ {t('list100.items.establishMentorship')}</li>
				<li>✗ {t('list100.items.foundFarm')}</li>
				{/* Career */}
				<li>✅ {t('list100.items.income100k')}</li>
				<li>✗ {t('list100.items.getPhD')}</li>
				<li>✗ {t('list100.items.getAussiePR')}</li>
				{/* Travelling */}
				<li>✗ {t('list100.items.seeAuroras')}</li>
				<li>✗ {t('list100.items.conquerFansipan')}</li>
				<li>✗ {t('list100.items.vipassanaRetreat')}</li>
				<li>✗ {t('list100.items.familyHoliday')}</li>
				<li>✗ {t('list100.items.norwayMountains')}</li>
				<li>✅ {t('list100.items.nzMountains')}</li>
				<li>✗ {t('list100.items.travel10Countries')} (3/10)</li>
				<li>✗ {t('list100.items.travel50VNCities')} (5/50)</li> {/* HCM, Danang, Hue, Phu Quoc, Kon Tum,  */}
				<li>✗ {t('list100.items.islandVacation')}</li>
				<li>✗ {t('list100.items.pyramidGiza')}</li>
				<li>✗ {t('list100.items.travelAfrica')}</li>
				<li>✗ {t('list100.items.skyDive')}</li>
				<li>✗ {t('list100.items.campMilkyWay')}</li>
				<li>✗ {t('list100.items.everestBaseCamp')}</li>
				<li>✗ {t('list100.items.chessBoxing')}</li>
				<li>✗ {t('list100.items.cuddleLions')}</li>
				<li>✗ {t('list100.items.rideHorse')}</li>
				<li>✗ {t('list100.items.buyHouseParents')}</li>
				<li>✗ {t('list100.items.islandWedding')}</li>
				<li>✅ {t('list100.items.driverLicense')}</li>
				<li>✗ {t('list100.items.learnFly')}</li>
				<li>✗ {t('list100.items.financialFreedom')}</li>
				<li>✗ {t('list100.items.workBigFinance')}</li>
				<li>✗ {t('list100.items.learnInstrument')}</li>
				<li>✗ {t('list100.items.askStrangerOut')}</li>
				<li>✗ {t('list100.items.fullMarathon')}</li>
				<li>✗ {t('list100.items.muscular70kg')}</li>
				<li>✗ {t('list100.items.masterVim')}</li>
				<li>✗ {t('list100.items.connect10Founders')}</li>
				<li>✗ {t('list100.items.walkMoon')}</li>
				<li>✗ {t('list100.items.swimSpace')}</li>
				<li>✗ {t('list100.items.swimWhales')}</li>
				<li>~ {t('list100.items.liveGreatLife')}</li>
				<li>~ {t('list100.items.doWhatYouLove')}</li>
				{/* <li>✗ Date a model</li> */}
				{/* <li>✓ </li> */}
				{/* <li>✗ Bring a girl home from club</li> */}
			</ol>

			<h1 className="h1 text-center">{t('list100.wishListTitle')}</h1>
			<p>{t('list100.wishListIntro')}</p>
			<ul className="list-disc list-inside">
				<li>{t('list100.wishListItems.greatTime')}</li>
				<li>{t('list100.wishListItems.watch')}</li>
				<li>{t('list100.wishListItems.giftcard')}</li>
				<li>{t('list100.wishListItems.crypto')}</li>
			</ul>

			<h1 className="h1 text-center">{t('list100.hobbiesTitle')}</h1>
			<ul className="list-disc list-inside">
				<li>
					{t('list100.hobbiesItems.main')}{' '}
					<Hyperlink className="link" href="https://www.chess.com/member/rodobolo">
						{t('list100.hobbiesItems.chess')}
					</Hyperlink>
					♟️ {t('list100.hobbiesItems.chessElo')}
				</li>
				<li>{t('list100.hobbiesItems.proud')}</li>
				<li>{t('list100.hobbiesItems.wantToTry')}</li>
				<li>
					<Hyperlink className="link" href="https://leetcode.com/rodonguyen/">
						{t('list100.hobbiesItems.leetcode')}
					</Hyperlink>{' '}
					<LeetcodeSvg /> {t('list100.hobbiesItems.leetcodeRank')}
				</li>
			</ul>
		</div>
	)
}

export default List100
