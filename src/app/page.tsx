import SectionList from '@/components/SectionList/SectionList';
import fetchArticles from './lib/data';
import { BlogSection } from '@/components/BlogSection';

async function Home() {
  const articles = await fetchArticles();
  return (
    <SectionList>
      <BlogSection articles={articles} />
    </SectionList>
  );
}

export default Home;
