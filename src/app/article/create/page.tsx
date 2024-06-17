import SectionList from '@/components/SectionList/SectionList';
import CreateForm from './_components/CreateForm/CreateForm';

async function CreateArticlePage() {
  return (
    <SectionList>
      <CreateForm />
    </SectionList>
  );
}

export default CreateArticlePage;
