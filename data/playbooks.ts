import rawData from './playbooks.json';
import type { GtmSystem } from '@/lib/types';

/** GTM systems shown on /playbooks. Each system carries the playbooks it powers. */
export default rawData.systems as unknown as GtmSystem[];
