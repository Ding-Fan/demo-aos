import React from "react";

export default function MovieInformation({ position, header, firstTitle }) {
  return (
    <div className={`movie-information ${position}`}>
      <div className='section-one'>
        <h2>{header}</h2>
      </div>
      <div className='section-two'>
        <div className='left-part'>
          <img
            src={require("~/src/attachments/images/never7.jpg")}
            alt='picture'
          />
        </div>
        <div className='right-part'>
          <div className='title'>
            <div className='ranking'>Top 1</div>
            <div className='text'> {firstTitle} </div>
          </div>
          <div className='rating'>haha</div>
          <div className='description'>
            从这个角度来看，
            这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。
            我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。
            经过上述讨论， 经过上述讨论， 既然如何，
            带着这些问题，我们来审视一下喝水。 所谓喝水，关键是喝水需要如何写。
            喝水的发生，到底需要如何做到，不喝水的发生，又会如何产生。
            既然如此， 问题的关键究竟为何？
            而这些并不是完全重要，更加重要的问题是，
            生活中，若喝水出现了，我们就不得不考虑它出现了的事实。
          </div>
        </div>
      </div>
    </div>
  );
}
