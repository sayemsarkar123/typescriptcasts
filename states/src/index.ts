import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summery = Summary.winsAnalysisWithHtmlReport('Man United', 'report.html');

matchReader.load();
summery.buildAndPrintReport(matchReader.matches);
