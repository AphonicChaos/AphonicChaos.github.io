module Context where
import Data.Text (Text)
import GHC.Generics (Generic)
import Data.Aeson (FromJSON(..), ToJSON(..))
import Text.Ginger (ToGVal(..))

data Post = Post
  { title :: Text
  , teaser :: Text
  , date :: Text
  , url :: Text
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON)

instance ToGVal m Post where
  toGVal = toGVal . toJSON

data Index = Index
  { title :: Text
  , onHome :: Bool
  , onPortfolio :: Bool
  , onArchive :: Bool
  , posts :: [Post]
  } 
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON)

instance ToGVal m Index where
  toGVal = toGVal . toJSON
