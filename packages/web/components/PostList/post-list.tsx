import Tag from '@/components/Tag/tag';
import { Post } from '#site/content/blog';
import { Flex, PostItem } from '@kwangmins-blog/ui';
import Link from 'next/link';
import { formatDate } from '@/util/post-util';
import Image from 'next/image';
import { BLUR_DATA_URL, cn } from '@kwangmins-blog/util';
import { getImageUrl } from '@kwangmins-blog/util';

interface IPostListProps {
  posts: Post[];
  isSearchModal?: boolean;
  onClick?: () => void;
  /**
   * 조회수 자리 슬롯. 서버 페이지는 PPR 동적 영역(StreamedListViewCount)을 넘기고,
   * 클라이언트인 검색 모달은 넘기지 않는다(조회수 미표시).
   */
  renderViewCount?: (post: Post) => React.ReactNode;
}

const PostList: React.FC<IPostListProps> = ({ posts, isSearchModal, onClick, renderViewCount }) => {
  return (
    <main
      style={{
        overflow: isSearchModal ? 'scroll' : 'unset',
        height: isSearchModal ? '250px' : 'unset',
      }}
    >
      <section>
        <ul style={{ width: '100%' }}>
          {posts.map((post, index) => (
            <PostItem key={post.slug} index={index}>
              <Link href={`/${post.slug}`} onClick={onClick} className="is-post-link">
                <Flex gap="large">
                  <Image
                    className="post-list-image"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    src={getImageUrl(post.thumbnail ?? '')}
                    alt={post.title}
                    width={100}
                    height={75}
                  />
                  <Flex direction="column" gap="smallest">
                    <Flex gap="medium">
                      {renderViewCount?.(post)}
                      <PostItem.Content variant="smallest">
                        {formatDate(post.date)}
                      </PostItem.Content>
                    </Flex>
                    <PostItem.Heading className={cn(isSearchModal ? 'ellipsis short' : 'ellipsis')}>{post.title}</PostItem.Heading>
                    <Flex direction="column" gap="small">
                      <PostItem.Content className={cn(isSearchModal ? 'ellipsis short' : 'ellipsis')}>{post.description}</PostItem.Content>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex gap="small" justify="end" direction="row" wrap="wrap">
                  {post.tags?.map(tag => <Tag key={tag} tag={tag} />)}
                </Flex>
              </Link>
            </PostItem>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default PostList;
