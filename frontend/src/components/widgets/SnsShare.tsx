import * as React from 'react'

// ↓ 表示用のデータ型
interface IProps {
  title
  url
}

const SnsShare = ({ title, url }: IProps) => {
  return (
    <div className="wrap">
      <ul className="sns-buttons">
        <li className="share-twitter">
          <a
            href={`http://twitter.com/intent/tweet?text=${title}%20${url}`}
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li className="share-facebook">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </li>
        <li className="share-hatena">
          <a
            href={`http://b.hatena.ne.jp/add?mode=confirm&amp;url=${url}&amp;title=${title}`}
            target="_blank"
            rel="noreferrer"
          >
            はてブ
          </a>
        </li>
        <li className="share-pocket">
          <a
            href={`http://getpocket.com/edit?url=${url}`}
            target="_blank"
            rel="noreferrer"
          >
            Pocket
          </a>
        </li>
        <li className="share-line">
          <a
            href={`http://line.me/R/msg/text/?${title}%0D%0A${url}`}
            target="_blank"
            rel="noreferrer"
          >
            LINE
          </a>
        </li>
      </ul>
      <div className="clearfix"></div>
    </div>
  )
}

export default SnsShare
