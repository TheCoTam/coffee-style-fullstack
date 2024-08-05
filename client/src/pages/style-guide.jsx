import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateMug from "@/components/style-guild/create-mug";
import ViewMugs from "@/components/style-guild/view-mugs";
import CreatePost from "@/components/style-guild/create-post";

const StyleGuide = () => {
  return (
    <div>
      <Tabs
        defaultValue="create-mug"
        className="w-full min-h-[calc(100vh-84px)] flex flex-col mt-4"
      >
        <TabsList className="grid w-[90%] grid-cols-4 self-center bg-teal-200">
          <TabsTrigger value="create-mug">Create Mug</TabsTrigger>
          <TabsTrigger value="view-mugs">View Mugs</TabsTrigger>
          <TabsTrigger value="create-post">Create Post</TabsTrigger>
          <TabsTrigger value="view-posts">View Posts</TabsTrigger>
        </TabsList>
        <TabsContent value="create-mug">
          <CreateMug />
        </TabsContent>
        <TabsContent value="view-mugs">
          <ViewMugs />
        </TabsContent>
        <TabsContent value="create-post">
          <CreatePost />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StyleGuide;
