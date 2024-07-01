import SectionList from '@/components/SectionList/SectionList';
import fetchArticles from '../lib/data';
import { BlogSection } from '@/components/BlogSection';

async function Admin() {
  const articles = await fetchArticles();
  return (
    <SectionList>
      <BlogSection articles={articles} isAdmin />
    </SectionList>
  );
}

export default Admin;
