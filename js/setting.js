/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'ibaraki_tsukuba_2011';
OpenSpending.year = '2011';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* tsukuba cofog */

  // 議会費
  '1': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' },
  '101': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' }, // 議会費
  // 総務費
  '2': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' },
  '201': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#935B3B' }, // 総務管理費
  '202': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#935B3B' }, // 徴税費
  '203': { icon: 'icons/rd-order-safety.svg', color: '#C75746', bcolor: '#935B3B' }, // 戸籍住民基本台帳費
  '204': { icon: 'icons/family2.svg', color: '#C75746', bcolor: '#935B3B' }, // 選挙費
  '205': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#935B3B' }, // 統計調査費
  '206': { icon: 'icons/courts.svg', color: '#C75746', bcolor: '#935B3B' }, // 監査委員費
  // 民生費
  '3': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#935B3B' },
  '301': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#935B3B' }, // 社会福祉費
  '302': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#935B3B' }, // 老人福祉費
  '303': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#935B3B' }, // 児童福祉費
  '304': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#935B3B' }, // 生活保護費
  '305': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#935B3B' }, // 災害救助費
  // 衛生費内訳
  '4': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#935B3B' },
  '401': { icon: 'icons/hospital.svg', color: '#C75746', bcolor: '#935B3B' }, // 保健衛生費
  '402': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#935B3B' }, // 結核対策費
  '403': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#935B3B' }, // 清掃費
  // 労働費
  '5': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#935B3B' },
  '501': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#935B3B' }, // 労働諸費
  // 農林水産業費
  '6': { icon: 'icons/sangyou3.svg', color: '#C75746', bcolor: '#935B3B' },
  '601': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#935B3B' }, // 農業費
  '602': { icon: 'icons/sangyou3.svg', color: '#C75746', bcolor: '#935B3B' }, // 畜産業費
  '603': { icon: 'icons/sangyou3.svg', color: '#C75746', bcolor: '#935B3B' }, // 農地費
  '604': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#935B3B' }, // 林業費
  // 商工費
  '7': { icon: 'icons/traffic-watersup.svg', color: '#C75746', bcolor: '#935B3B' },
  '701': { icon: 'icons/traffic-watersup.svg', color: '#C75746', bcolor: '#935B3B' }, // 商工費
  // 土木費
  '8': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#935B3B' },
  '801': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' }, // 土木管理費
  '802': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#935B3B' }, // 道路橋りょう費
  '803': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#935B3B' }, // 河川費
  '804': { icon: 'icons/government-uk.svg', color: '#C75746', bcolor: '#935B3B' }, // 都市計画費
  '805': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#935B3B' }, // 住宅費
  // 消防費
  '9': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' },
  '901': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' }, // 消防費
  // 教育費
  '10': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#935B3B' },
  '1001': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#935B3B' }, // 教育総務費
  '1002': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#935B3B' }, // 小学校費
  '1003': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#935B3B' }, // 中学校費
  '1004': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#935B3B' }, // 幼稚園費
  '1005': { icon: 'icons/books.svg', color: '#C75746', bcolor: '#935B3B' }, // 社会教育費
  '1006': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#935B3B' }, // 保健体育費
  // 災害復旧費
  '11': { icon: 'icons/aid-developing-countries.svg', color: '#C75746', bcolor: '#935B3B' },
  '1101': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' }, // 農林水産施設
  '1102': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' }, // 公共土木施設
  '1103': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#935B3B' }, // その他
  // 公債費
  '12': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#935B3B' },
  '1201': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#935B3B' }, // 公債費



};


