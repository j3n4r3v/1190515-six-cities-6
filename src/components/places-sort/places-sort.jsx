import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { changeActiveSortType } from "../../store/actions";
import OptionsItemsList from "../options-items-list/options-items-list";

import { PlacesSortType } from "../../const";

const PlacesSort = () => {
  const { activeOption } = useSelector((state) => state.MAIN);
  const dispatch = useDispatch();

  const [isOpenList, setIsOpenList] = useState(false);

  const handleOption = () => {
    setIsOpenList(!isOpenList);
  };

  // import { useState } from 'react';
  // export const useUserAnswers = (question, onAnswer) => {
  //   const answersCount = question.answers.length;
  //   const [answers, setAnswers] = useState(new Array(answersCount).fill(false));
  //   const handleAnswer = () => {
  //     onAnswer(question, answers);
  //   };
  //   const handleAnswerChange = (id, value) => {
  //     const userAnswers = answers.slice(0);
  //     userAnswers[id] = value;
  //     setAnswers(userAnswers);
  //   };
  //   return [answers, handleAnswer, handleAnswerChange];
  // };

  const handleChangeOption = (item) => {
    dispatch(changeActiveSortType(item));
    handleOption();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type" tabIndex="0" onClick={handleOption}>
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      {
        isOpenList && <OptionsItemsList
          activeOption={activeOption}
          onChangeOption={handleChangeOption}
          options={PlacesSortType} />
      }

    </form >
  );
};

export default PlacesSort;

