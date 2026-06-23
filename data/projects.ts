import rawData from './projects_updated.json';
import type { Project } from '@/lib/types';

export default rawData.projects as unknown as Project[];
