import SectionList from '@/components/SectionList/SectionList';
import BlogSection from './_components/BlogSection/BlogSection';
import fetchArticles from './lib/data';

async function Home() {
  const articles = await fetchArticles();
  return (
    <SectionList>
      <BlogSection articles={articles} />
    </SectionList>
  );
}

export default Home;
