import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        {/* Search form */}
        <div className="widget widget_search">
          <form className="search-form">
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        {/* Popular posts */}
        <div className="widget widget_haiper_posts_thumb">
          <h3 className="widget-title">Popular posts</h3>

          <article className="item">
            <Link href="/single-blog" className="thumb">
              <span className="fullimage cover bg1" role="img"></span>
            </Link>
            <div className="info">
              <time>December 15, 2022</time>
              <h4 className="title usmall">
                <Link href="/single-blog">
                  The security risks of changing package owners
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/single-blog" className="thumb">
              <span className="fullimage cover bg2" role="img"></span>
            </Link>
            <div className="info">
              <time>December 16, 2022</time>
              <h4 className="title usmall">
                <Link href="/single-blog">
                  Tips to protecting business and Family
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/single-blog" className="thumb">
              <span className="fullimage cover bg3" role="img"></span>
            </Link>
            <div className="info">
              <time>December 17, 2022</time>
              <h4 className="title usmall">
                <Link href="/single-blog">
                  Protect your workplace from cyber attacks
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
        </div>

        {/* Recent posts */}
        <div className="widget widget_recent_entries">
          <h3 className="widget-title">Recent posts</h3>

          <ul>
            <li>
              <Link href="/single-blog">
                The security risks of changing package owners
              </Link>
              <span className="post-date">December 15, 2022</span>
            </li>
            <li>
              <Link href="/single-blog">
                Tips to protecting business and Family
              </Link>
              <span className="post-date">December 16, 2022</span>
            </li>
            <li>
              <Link href="/single-blog">
                Protect your workplace from cyber attacks
              </Link>
              <span className="post-date">December 17, 2022</span>
            </li>
            <li>
              <Link href="/single-blog">
                Business debit Fees to increase in 2022
              </Link>
              <span className="post-date">December 18, 2022</span>
            </li>
            <li>
              <Link href="/single-blog">
                10 tips to reduce your card processing costs
              </Link>
              <span className="post-date">December 19, 2022</span>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="#">
                Business <span className="post-count">(05)</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Privacy <span className="post-count">(10)</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Technology <span className="post-count">(15)</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Tips <span className="post-count">(12)</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Uncategorized <span className="post-count">(02)</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Tags */}
        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <Link href="#">
              IT <span className="tag-link-count">(3)</span>
            </Link>
            <Link href="#">
              Haiper <span className="tag-link-count">(3)</span>
            </Link>
            <Link href="#">
              Games <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="#">
              Fashion <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="#">
              Travel <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="#">
              Smart <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="#">
              Marketing <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="#">
              Tips <span className="tag-link-count">(2)</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
