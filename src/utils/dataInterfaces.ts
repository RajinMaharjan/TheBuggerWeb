export interface RootState {
  auth: {
    isLoggedIn: boolean;
    loginModalOpen: boolean;
    signupModalOpen: boolean;
    forgotModal: boolean;
    payloadChange: string;
  };
  quiz: {
    quizState: QuizData[];
    answerState: { questionId: string; optionId: string }[];
  };
}

export interface QualificationData {
  qualificationLevel: string;
  institution: string;
  startDate: string;
  endDate: string;
  certificate: File | undefined;
}

export interface DeviceData {
  name: string;
  type: string;
  version: string;
}

export interface ExperienceData {
  name: string;
  year: string;
  month: string;
  description: string;
}

export interface QuizData {
  name: string;
  options: OptionData[];
  id: string;
}
export interface OptionData {
  questionId: string;
  name: string;
  id: string;
  isSelected: boolean;
}

export interface resultData {
  correct: number;
  incorrect: number;
  marks: number;
  message: string;
  status: string;
}
