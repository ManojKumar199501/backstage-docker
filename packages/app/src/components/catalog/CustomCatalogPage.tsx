import {
  Content,
  ContentHeader,
  Header,
  Page,
  SupportButton,
} from '@backstage/core-components';
import {
  
  EntityListProvider,
  CatalogFilterLayout,
  EntityTable,
  useEntityList,
  EntityLifecyclePicker,
} from '@backstage/plugin-catalog-react';
// import { BrandedButton } from '../buttons/index.tsx';
import { EnvironmentPicker } from '../custompicker.tsx';

const CustomCatalogTable = () => {
  const { entities } = useEntityList();
  const columns = [
    {
      title: 'Name',
      field: 'metadata.name',
    },
    {
      title: 'Type',
      field: 'spec.type',
    },
    {
      title: 'Owner',
      field: 'spec.owner',
    },
    {
      title: 'Lifecycle',
      field: 'spec.lifecycle',
    },
  ];
  return (
    <EntityTable
      title="custom components"
      entities={entities}
      columns={columns}
      emptyContent="No components found."
    />
  );
};
const EntityCatalogPage = () => {
  return (
    <Page themeId="home">
      <Header title="Custom Catalog" subtitle="Enhanced catalog view" />
      <Content>
        <ContentHeader title="Custom Catalog Table">
          <SupportButton>Customized view with new columns and filters</SupportButton>
          {/* <BrandedButton label="Launch Docs" onClick={() => window.open('/docs')} />
          <BrandedButton label="Open Catalog" onClick={() => window.open('/catalog')} /> */}
        </ContentHeader>
        <EntityListProvider>
          <CatalogFilterLayout>
            <CatalogFilterLayout.Filters>
                <EntityLifecyclePicker />
                <EnvironmentPicker />
            </CatalogFilterLayout.Filters>
            <CatalogFilterLayout.Content>
              <CustomCatalogTable />
            </CatalogFilterLayout.Content>
          </CatalogFilterLayout>
        </EntityListProvider>
      </Content>
    </Page>
  );
};

export default EntityCatalogPage;