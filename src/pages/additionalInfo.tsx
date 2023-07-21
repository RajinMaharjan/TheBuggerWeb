import {
  ActionIcon,
  AppShell,
  Box,
  Button,
  Container,
  FileInput,
  Flex,
  Grid,
  Group,
  Paper,
  Center,
  Select,
  Stepper,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { FaEdit, FaLinkedin, FaPlus, FaSchool } from "react-icons/fa";
import { useFormik } from "formik";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import { useState, ReactNode } from "react";
import { FiFlag, FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineGithub } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { GrCertificate, GrLocation, GrSystem } from "react-icons/gr";
import { MdDelete, MdOutlineSchool } from "react-icons/md";
import { PiDevicesBold } from "react-icons/pi";
import { TbUserStar } from "react-icons/tb";
import {
  QualificationData,
  DeviceData,
  ExperienceData,
} from "../utils/dataInterfaces";
import { ImCross } from "react-icons/im";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
interface Props {}
let file: File | undefined;
const AdditionalInfo = (props: Props) => {
  const [infoSteps, setInfoSteps] = useState<number>(0);
  const [openQualificationAdder, setOpenQualificationAdder] = useState(false);
  const [openQualificationEditor, setOpenQualificationEditor] = useState(false);
  const [editQualificationIndex, setEditQualificationIndex] =
    useState<number>(0);
  const [newQualificationData, setNewQualificationData] =
    useState<QualificationData>({
      qualificationLevel: "",
      institution: "",
      startDate: "",
      endDate: "",
      certificate: undefined,
    });
  const [openDeviceAdder, setOpenDeviceAdder] = useState(false);
  const [openDeviceEditor, setOpenDeviceEditor] = useState(false);
  const [editDeviceIndex, setEditDeviceIndex] = useState<number>(0);
  const [newDeviceData, setNewDeviceData] = useState<DeviceData>({
    name: "",
    type: "",
    version: "",
  });
  const [openExperienceAdder, setOpenExperienceAdder] = useState(false);
  const [openExperienceEditor, setOpenExperienceEditor] = useState(false);
  const [editExperienceIndex, setEditExperienceIndex] = useState<number>(0);
  const [newExperienceData, setNewExperienceData] = useState<ExperienceData>({
    name: "",
    year: "",
    month: "",
    description: "",
  });
  const { handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      profilePicture: undefined,
      personal: {
        firstname: "",
        lastname: "",
        email: "",
        number: "",
        nationalID: "",
        address: "",
        githubUrl: "",
        linkedInUrl: "",
      },
      qualification: [
        {
          qualificationLevel: "SEE",
          institution: "Vidhya Sagar",
          startDate: "2014",
          endDate: "2016",
          certificate: undefined,
        },
      ],
      devices: [
        {
          name: "Samsung",
          type: "Smartphone",
          version: "2.23",
        },
      ],
      experiences: [
        {
          name: "Sleeping",
          year: "2023",
          month: "7 months",
          description: "astalabista",
        },
      ],
    },

    // validationSchema: infoValidation,
    onSubmit: (values) => {
      console.log("Information:", values);
    },
  });
  function DegreeInfo(info: QualificationData[]): ReactNode[] {
    return info.map((data, index) => (
      <Paper
        key={index}
        mt={"xl"}
        p="xl"
        h={{ base: "30%", xl: "10%" }}
        bg="basic-bg.2"
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Group position={"apart"}>
          <Box>
            <b> {data.qualificationLevel},</b>&nbsp;
            {data.institution} ({data.startDate}-{data.endDate})
          </Box>
          <Flex>
            <ActionIcon
              onClick={() => {
                setEditQualificationIndex(index);
                setOpenQualificationEditor(!openQualificationEditor);
                setOpenQualificationAdder(false);
              }}
            >
              <FaEdit size={20} />
            </ActionIcon>
            <ActionIcon
              onClick={() => {
                const newData = [...info];
                newData.splice(index, 1);
                handleChange({
                  target: {
                    name: "qualification",
                    value: newData,
                  },
                });
              }}
            >
              <MdDelete size={20} color={"red"} />
            </ActionIcon>
          </Flex>
        </Group>
      </Paper>
    ));
  }
  function DeviceInfo(info: DeviceData[]): ReactNode[] {
    return info.map((data, index) => (
      <Paper
        key={index}
        mt={"xl"}
        p="xl"
        h={{ base: "30%", xl: "10%" }}
        bg="basic-bg.2"
      >
        <Group position="apart">
          <Text>{data.name}</Text>
          <Text>{data.version}</Text>
          <Text>{data.type}</Text>
          <Flex>
            <ActionIcon
              onClick={() => {
                setEditDeviceIndex(index);
                setOpenDeviceEditor(!openDeviceEditor);
                setOpenDeviceAdder(false);
              }}
            >
              <FaEdit size={20} />
            </ActionIcon>
            <ActionIcon
              onClick={() => {
                const newData = [...info];
                newData.splice(index, 1);
                handleChange({
                  target: {
                    name: "devices",
                    value: newData,
                  },
                });
              }}
            >
              <MdDelete size={20} color={"red"} />
            </ActionIcon>
          </Flex>
        </Group>
      </Paper>
    ));
  }
  function ExperienceInfo(info: ExperienceData[]): ReactNode[] {
    return info.map((data, index) => (
      <Paper
        key={index}
        mt={"xl"}
        p="xl"
        h={{ base: "30%", xl: "10%" }}
        bg="basic-bg.2"
      >
        <Group position="apart">
          <Text>{data.name}</Text>
          <Text>{data.year}</Text>
          <Text>{data.month}</Text>
          <Flex>
            <ActionIcon
              onClick={() => {
                setEditExperienceIndex(index);
                setOpenExperienceEditor(!openExperienceEditor);
                setOpenExperienceAdder(false);
              }}
            >
              <FaEdit size={20} />
            </ActionIcon>
            <ActionIcon
              onClick={() => {
                const newData = [...info];
                newData.splice(index, 1);
                handleChange({
                  target: {
                    name: "experiences",
                    value: newData,
                  },
                });
              }}
            >
              <MdDelete size={20} color={"red"} />
            </ActionIcon>
          </Flex>
        </Group>
      </Paper>
    ));
  }
  const handleAddExperienceData = (newExperienceData: ExperienceData) => {
    const updatedExperienceData = [...values.experiences, newExperienceData];
    handleChange({
      target: {
        name: "experiences",
        value: updatedExperienceData,
      },
    });
    setNewExperienceData({
      name: "",
      year: "",
      month: "",
      description: "",
    });
    setOpenExperienceAdder(false);
  };
  const handleAddQualificationData = (
    newQualificationData: QualificationData
  ) => {
    const updatedQualificationData = [
      ...values.qualification,
      newQualificationData,
    ];
    handleChange({
      target: {
        name: "qualification",
        value: updatedQualificationData,
      },
    });
    setNewQualificationData({
      qualificationLevel: "",
      institution: "",
      startDate: "",
      endDate: "",
      certificate: undefined,
    });
    setOpenQualificationAdder(false);
  };
  const handleAddDeviceData = (newDeviceData: DeviceData) => {
    const updatedDeviceData = [...values.devices, newDeviceData];
    handleChange({
      target: {
        name: "devices",
        value: updatedDeviceData,
      },
    });
    setNewDeviceData({
      name: "",
      version: "",
      type: "",
    });
    setOpenDeviceAdder(false);
  };
  const dateArr: string[] = [];
  for (let date = 2023; date >= 1980; date--) {
    dateArr.push(date.toString());
  }
  const experienceArr: string[] = [];
  for (let i = 1; i <= 48; i++) {
    let rem = i % 12;
    let quotient = Math.floor(i / 12);
    if (quotient > 0) {
      if (rem > 0) {
        experienceArr.push(
          quotient.toString() + " year " + rem.toString() + " months"
        );
      } else {
        experienceArr.push(quotient.toString() + " years");
      }
    } else {
      experienceArr.push(rem.toString() + " months");
    }
  }
  return (
    <AppShell
      padding={0}
      //   navbar={<Navbar />}
      header={<Navbar />}
      footer={<Footer />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container fluid px={"5vw"} py={"2vw"} bg={"basic-bg.3"} mih={"100%"}>
        <Stepper
          active={infoSteps}
          breakpoint="sm"
          color="basic-bg.0"
          display={{ base: "none", md: "initial" }}
        >
          <Stepper.Step label="Personal Information">
            <Center>
              <Text fz={{ base: "md", sm: "lg", md: "xl", xl: "1.5vw" }}>
                Personal Information
              </Text>
            </Center>
          </Stepper.Step>
          <Stepper.Step label="Qualification Information">
            <Center>
              <Text fz={{ base: "md", sm: "lg", md: "xl", xl: "1.5vw" }}>
                Qualification Information
              </Text>
            </Center>
          </Stepper.Step>
          <Stepper.Step label="Device Specification">
            <Center>
              <Text fz={{ base: "md", sm: "lg", md: "xl", xl: "1.5vw" }}>
                Device Specification
              </Text>
            </Center>
          </Stepper.Step>
          <Stepper.Step label="Experience">
            <Center>
              <Text fz={{ base: "md", sm: "lg", md: "xl", xl: "1.5vw" }}>
                Experience
              </Text>
            </Center>
          </Stepper.Step>
        </Stepper>
        <Container h={"100%"}>
          <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            {infoSteps === 0 && (
              <>
                <Flex justify="space-between" direction={"column"} h={"70vh"}>
                  <Grid justify="center">
                    <Grid.Col span={12}>
                      <Group position="center">
                        {/* {!values.profilePicture && (
                          <Dropzone
                            onDrop={(files) =>
                              handleChange({
                                target: {
                                  name: "profilePicture",
                                  value: files,
                                },
                              })
                            }
                            accept={[
                              "image/png",
                              "image/jpeg",
                              "image/sgv+xml",
                              "image/gif",
                            ]}
                            w={200}
                            h={200}
                            sx={{ borderRadius: "100px" }}
                          >
                            <Center></Center>
                          </Dropzone>
                        )} */}
                        {values.profilePicture && (
                          <Image
                            src={URL.createObjectURL(values.profilePicture)}
                            width={160}
                            height={160}
                            alt="personal image"
                            style={{ borderRadius: "100px" }}
                          />
                        )}
                      </Group>
                    </Grid.Col>
                    <Grid.Col span={12}>
                      <FileInput
                        size="md"
                        placeholder="Photo"
                        name="profilePicture"
                        // icon={<CgProfile />}
                        onChange={(value) => {
                          handleChange({
                            target: {
                              name: "profilePicture",
                              value: value,
                            },
                          });
                        }}
                        value={values.profilePicture}
                        withAsterisk
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        size="md"
                        placeholder="First Name"
                        name="personal.firstname"
                        icon={<CgProfile color={"black"} />}
                        onChange={handleChange}
                        value={values.personal.firstname}
                        withAsterisk
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      {" "}
                      <TextInput
                        size="md"
                        placeholder="Last Name"
                        name="personal.lastname"
                        icon={<CgProfile color={"black"} />}
                        onChange={handleChange}
                        value={values.personal.lastname}
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        size="md"
                        placeholder="Your email"
                        name="personal.email"
                        icon={<FiMail color={"black"} />}
                        onChange={handleChange}
                        value={values.personal.email}
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        size="md"
                        placeholder="Phone Number"
                        name="personal.number"
                        icon={<BsTelephone color={"black"} />}
                        onChange={handleChange}
                        value={values.personal.number}
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        size="md"
                        placeholder="National Id"
                        name="personal.nationalID"
                        icon={<FiFlag color={"black"} />}
                        onChange={handleChange}
                        value={values.personal.nationalID}
                        withAsterisk
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        size="md"
                        placeholder="Address"
                        name="personal.address"
                        icon={<GrLocation color={"black"} />}
                        onChange={handleChange}
                        value={values.personal.address}
                        withAsterisk
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        size="md"
                        placeholder="Github Url"
                        name="personal.githubUrl"
                        icon={<AiOutlineGithub color={"black"} />}
                        onChange={handleChange}
                        value={values.personal.githubUrl}
                        withAsterisk
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <TextInput
                        size="md"
                        placeholder="LinkedIn Url"
                        name="personal.linkedInUrl"
                        icon={<FaLinkedin color={"black"} />}
                        onChange={handleChange}
                        value={values.personal.linkedInUrl}
                        withAsterisk
                      />
                    </Grid.Col>
                  </Grid>
                  <Group position="right">
                    {" "}
                    <Button
                      onClick={() => {
                        setInfoSteps(1);
                      }}
                    >
                      Next
                    </Button>
                  </Group>
                </Flex>
              </>
            )}
            {infoSteps === 1 && (
              <Flex justify={"space-between"} direction={"column"} mih={"70vh"}>
                <Box>
                  {DegreeInfo(values.qualification)}
                  <Box mt={"xl"}>
                    {openQualificationAdder && (
                      <>
                        <Grid mb={20}>
                          <Grid.Col span={12} md={6}>
                            <Select
                              size="md"
                              placeholder="Education Level"
                              name="newQualificationData.qualificationLevel"
                              data={[
                                "Masters/Post-Graduation",
                                "Graduation/Diploma",
                                "12th",
                                "SEE",
                                "Below 10th",
                              ]}
                              icon={<MdOutlineSchool color={"black"} />}
                              onChange={(value) => {
                                const updatedQualificationData = {
                                  ...newQualificationData,
                                };
                                updatedQualificationData.qualificationLevel =
                                  value ?? "";
                                setNewQualificationData(
                                  updatedQualificationData
                                );
                              }}
                              value={newQualificationData.qualificationLevel}
                              withAsterisk
                            />
                          </Grid.Col>
                          <Grid.Col span={12} md={6}>
                            <TextInput
                              size="md"
                              placeholder="Institution's Name"
                              name="institution"
                              icon={<FaSchool color={"black"} />}
                              onChange={(event) => {
                                const value = event.target.value;
                                const updatedQualificationData = {
                                  ...newQualificationData,
                                };
                                updatedQualificationData.institution =
                                  value ?? "";
                                setNewQualificationData(
                                  updatedQualificationData
                                );
                              }}
                              value={newQualificationData.institution}
                              withAsterisk
                            />
                          </Grid.Col>
                          <Grid.Col span={12} md={6}>
                            <Select
                              size="md"
                              placeholder="Start Date"
                              name="startDate"
                              data={dateArr}
                              icon={<AiOutlineCalendar color={"black"} />}
                              onChange={(value) => {
                                const updatedQualificationData = {
                                  ...newQualificationData,
                                };
                                updatedQualificationData.startDate =
                                  value ?? "";
                                setNewQualificationData(
                                  updatedQualificationData
                                );
                              }}
                              value={newQualificationData.startDate}
                              withAsterisk
                            />
                          </Grid.Col>
                          <Grid.Col span={12} md={6}>
                            <Select
                              size="md"
                              placeholder="End Date"
                              name="endDate"
                              data={dateArr}
                              icon={<AiOutlineCalendar color={"black"} />}
                              onChange={(value) => {
                                const updatedQualificationData = {
                                  ...newQualificationData,
                                };
                                updatedQualificationData.endDate = value ?? "";
                                setNewQualificationData(
                                  updatedQualificationData
                                );
                              }}
                              value={newQualificationData.endDate}
                              withAsterisk
                            />
                          </Grid.Col>

                          <Grid.Col span={12}>
                            <FileInput
                              size="md"
                              placeholder="Certificate"
                              name="certificate"
                              icon={<GrCertificate color={"black"} />}
                              onChange={(value) => {
                                const updatedQualificationData = {
                                  ...newQualificationData,
                                };
                                updatedQualificationData.certificate =
                                  value ?? undefined;
                                setNewQualificationData(
                                  updatedQualificationData
                                );
                              }}
                              value={newQualificationData.certificate}
                              withAsterisk
                            />
                          </Grid.Col>
                          <Grid.Col
                            span={12}
                            display={{
                              base: "none",
                              md: newQualificationData.certificate
                                ? "initial"
                                : "none",
                            }}
                          >
                            {newQualificationData.certificate && (
                              <Image
                                src={URL.createObjectURL(
                                  newQualificationData.certificate
                                )}
                                width={560}
                                height={400}
                                alt="certification image"
                              />
                            )}
                          </Grid.Col>
                        </Grid>{" "}
                        <Group position="center" m={"xl"}>
                          <Button
                            onClick={() => {
                              handleAddQualificationData(newQualificationData);
                            }}
                            leftIcon={<TiTick size={20} />}
                            sx={{
                              objectFit: "contain",
                            }}
                          >
                            OK
                          </Button>
                          <Button
                            onClick={() => {
                              setNewQualificationData({
                                qualificationLevel: "",
                                institution: "",
                                startDate: "",
                                endDate: "",
                                certificate: undefined,
                              });
                              setOpenQualificationAdder(false);
                            }}
                            leftIcon={<ImCross size={15} />}
                            sx={{
                              objectFit: "contain",
                            }}
                          >
                            Cancel
                          </Button>
                        </Group>
                      </>
                    )}
                    {openQualificationEditor && (
                      <>
                        <Grid mb={20}>
                          <Grid.Col span={6}>
                            <Select
                              size="md"
                              placeholder="Education Level"
                              name={`qualification[${editQualificationIndex}].qualificationLevel`}
                              data={[
                                "Masters/Post-Graduation",
                                "Graduation/Diploma",
                                "12th",
                                "SEE",
                                "Below 10th",
                              ]}
                              icon={<MdOutlineSchool color={"black"} />}
                              onChange={(value) => {
                                handleChange({
                                  target: {
                                    name: `qualification[${editQualificationIndex}].qualificationLevel`,
                                    value: value,
                                  },
                                });
                              }}
                              value={
                                values.qualification[editQualificationIndex]
                                  .qualificationLevel
                              }
                              withAsterisk
                            />
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <TextInput
                              size="md"
                              placeholder="Institution's Name"
                              name={`qualification[${editQualificationIndex}].institution`}
                              icon={<FaSchool color={"black"} />}
                              onChange={(event) => {
                                const value = event.target.value;
                                handleChange({
                                  target: {
                                    name: `qualification[${editQualificationIndex}].institution`,
                                    value: value,
                                  },
                                });
                              }}
                              value={
                                values.qualification[editQualificationIndex]
                                  .institution
                              }
                              withAsterisk
                            />
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <Select
                              size="md"
                              placeholder="Start Date"
                              name={`qualification[${editQualificationIndex}].startDate`}
                              data={dateArr}
                              icon={<AiOutlineCalendar color={"black"} />}
                              onChange={(value) => {
                                handleChange({
                                  target: {
                                    name: `qualification[${editQualificationIndex}].startDate`,
                                    value: value,
                                  },
                                });
                              }}
                              value={
                                values.qualification[editQualificationIndex]
                                  .startDate
                              }
                              withAsterisk
                            />
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <Select
                              size="md"
                              placeholder="End Date"
                              name={`qualification[${editQualificationIndex}].endDate`}
                              data={dateArr}
                              icon={<AiOutlineCalendar color={"black"} />}
                              onChange={(value) => {
                                handleChange({
                                  target: {
                                    name: `qualification[${editQualificationIndex}].endDate`,
                                    value: value,
                                  },
                                });
                              }}
                              value={
                                values.qualification[editQualificationIndex]
                                  .endDate
                              }
                              withAsterisk
                            />
                          </Grid.Col>

                          <Grid.Col span={12}>
                            <FileInput
                              size="md"
                              placeholder="Certificate"
                              name={`qualification[${editQualificationIndex}].certificate`}
                              icon={<GrCertificate color={"black"} />}
                              onChange={(value) => {
                                handleChange({
                                  target: {
                                    name: `qualification[${editQualificationIndex}].certificate`,
                                    value: value,
                                  },
                                });
                              }}
                              value={
                                values.qualification[editQualificationIndex]
                                  .certificate
                              }
                              withAsterisk
                            />
                          </Grid.Col>
                          <Grid.Col
                            span={12}
                            display={{
                              base: values.qualification[editQualificationIndex]
                                .certificate
                                ? "initial"
                                : "none",
                            }}
                          >
                            {values.qualification[editQualificationIndex]
                              .certificate && (
                              <Image
                                src={URL.createObjectURL(
                                  // @ts-ignore
                                  values.qualification[editQualificationIndex]
                                    .certificate
                                )}
                                width={560}
                                height={400}
                                alt="certification image"
                              />
                            )}
                          </Grid.Col>
                        </Grid>{" "}
                        <Group position="center" m={"xl"}>
                          <Button
                            onClick={() => {
                              setOpenQualificationEditor(false);
                            }}
                            leftIcon={<TiTick size={20} />}
                            sx={{
                              objectFit: "contain",
                            }}
                          >
                            OK
                          </Button>
                          <Button
                            onClick={() => {
                              setOpenQualificationEditor(false);
                            }}
                            leftIcon={<ImCross size={15} />}
                            sx={{
                              objectFit: "contain",
                            }}
                          >
                            Cancel
                          </Button>
                        </Group>
                      </>
                    )}
                    <Group position="center">
                      <Button
                        type="submit"
                        fullWidth
                        leftIcon={<FaPlus />}
                        onClick={() => {
                          setOpenQualificationAdder(true);
                          setOpenQualificationEditor(false);
                        }}
                        w={{ base: "auto", lg: "20%" }}
                      >
                        Add
                      </Button>
                    </Group>
                  </Box>
                </Box>
                <Group position="apart">
                  <Button
                    onClick={() => {
                      setInfoSteps(0);
                    }}
                  >
                    Prev
                  </Button>
                  <Button
                    onClick={() => {
                      setInfoSteps(2);
                    }}
                  >
                    Next
                  </Button>
                </Group>
              </Flex>
            )}
            {infoSteps === 2 && (
              <Flex justify="space-between" direction={"column"} mih={"70vh"}>
                <Box>
                  {DeviceInfo(values.devices)}
                  <Box mt="xl">
                    {openDeviceAdder && (
                      <>
                        <Grid mb={20}>
                          <Grid.Col span={12}>
                            <TextInput
                              size="md"
                              placeholder="Device Name"
                              name="newDeviceData.name"
                              icon={<PiDevicesBold color="black" />}
                              onChange={(event) => {
                                const value = event.target.value;
                                const updatedDeviceData = { ...newDeviceData };
                                updatedDeviceData.name = value ?? "";
                                setNewDeviceData(updatedDeviceData);
                              }}
                              value={newDeviceData.name}
                              withAsterisk
                            />
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <TextInput
                              size="md"
                              placeholder="OS Version"
                              name="devices[0].version"
                              icon={<GrSystem color="black" />}
                              onChange={(event) => {
                                const value = event.target.value;
                                const updatedDeviceData = { ...newDeviceData };
                                updatedDeviceData.version = value ?? "";
                                setNewDeviceData(updatedDeviceData);
                              }}
                              value={newDeviceData.version}
                              withAsterisk
                            />
                          </Grid.Col>{" "}
                          <Grid.Col span={6}>
                            <Select
                              size="md"
                              placeholder="Device Type"
                              name="devices[0].type"
                              onChange={(value) => {
                                const updatedDeviceData = { ...newDeviceData };
                                updatedDeviceData.type = value ?? "";
                                setNewDeviceData(updatedDeviceData);
                              }}
                              value={newDeviceData.type}
                              icon={<PiDevicesBold color="black" />}
                              data={["Computer", "Smartphone", "Tablet"]}
                            />
                          </Grid.Col>
                        </Grid>
                        <Group position="center" m={"xl"}>
                          <Button
                            onClick={() => {
                              handleAddDeviceData(newDeviceData);
                            }}
                            leftIcon={<TiTick size={20} />}
                            sx={{
                              objectFit: "contain",
                            }}
                          >
                            OK
                          </Button>
                          <Button
                            onClick={() => setOpenDeviceAdder(false)}
                            leftIcon={<ImCross size={15} />}
                            sx={{
                              objectFit: "contain",
                            }}
                          >
                            Cancel
                          </Button>
                        </Group>
                      </>
                    )}
                    {openDeviceEditor && (
                      <>
                        <Grid mb={20}>
                          <Grid.Col span={12}>
                            <TextInput
                              size="md"
                              placeholder="Device Name"
                              name={`devices[${editDeviceIndex}].name`}
                              icon={<PiDevicesBold color="black" />}
                              onChange={(event) => {
                                const value = event.target.value;
                                handleChange({
                                  target: {
                                    name: `devices[${editDeviceIndex}].name`,
                                    value: value,
                                  },
                                });
                              }}
                              value={values.devices[editDeviceIndex].name}
                              withAsterisk
                            />
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <TextInput
                              size="md"
                              placeholder="OS Version"
                              name={`devices[${editDeviceIndex}].version`}
                              icon={<GrSystem color="black" />}
                              onChange={(event) => {
                                const value = event.target.value;
                                handleChange({
                                  target: {
                                    name: `devices[${editDeviceIndex}].version`,
                                    value: value,
                                  },
                                });
                              }}
                              value={values.devices[editDeviceIndex].version}
                              withAsterisk
                            />
                          </Grid.Col>{" "}
                          <Grid.Col span={6}>
                            <Select
                              size="md"
                              placeholder="Device Type"
                              name={`devices[${editDeviceIndex}].type`}
                              onChange={(value) => {
                                handleChange({
                                  target: {
                                    name: `devices[${editDeviceIndex}].type`,
                                    value: value,
                                  },
                                });
                              }}
                              value={values.devices[editDeviceIndex].type}
                              icon={<PiDevicesBold color="black" />}
                              data={["Computer", "Smartphone", "Tablet"]}
                            />
                          </Grid.Col>
                        </Grid>
                        <Group position="center" m={"xl"}>
                          <Button
                            onClick={() => {
                              setOpenDeviceEditor(false);
                            }}
                            leftIcon={<TiTick size={20} />}
                            sx={{
                              objectFit: "contain",
                            }}
                          >
                            OK
                          </Button>
                          <Button
                            onClick={() => setOpenDeviceEditor(false)}
                            leftIcon={<ImCross size={15} />}
                          >
                            Cancel
                          </Button>
                        </Group>
                      </>
                    )}
                    <Group position="center">
                      <Button
                        leftIcon={<FaPlus />}
                        onClick={() => {
                          setOpenDeviceAdder(true);
                          setOpenDeviceEditor(false);
                        }}
                        w={{ base: "auto", lg: "20%" }}
                      >
                        Add
                      </Button>
                    </Group>
                  </Box>
                </Box>
                <Group position="apart">
                  <Button
                    onClick={() => {
                      setInfoSteps(1);
                    }}
                  >
                    Prev
                  </Button>
                  <Button
                    sx={{
                      objectFit: "contain",
                    }}
                    onClick={() => setInfoSteps(3)}
                  >
                    Next
                  </Button>
                </Group>
              </Flex>
            )}
            {infoSteps === 3 && (
              <Flex justify="space-between" direction={"column"} mih={"70vh"}>
                <Box>
                  {ExperienceInfo(values.experiences)}
                  <Box mt="xl">
                    {openExperienceAdder && (
                      <>
                        <Grid mb={20}>
                          <Grid.Col span={12}>
                            <TextInput
                              size="md"
                              placeholder="Experience Name"
                              name="newExperienceData.name"
                              icon={<PiDevicesBold color="black" />}
                              onChange={(event) => {
                                const value = event.target.value;
                                const updatedExperienceData = {
                                  ...newExperienceData,
                                };
                                updatedExperienceData.name = value ?? "";
                                setNewExperienceData(updatedExperienceData);
                              }}
                              value={newExperienceData.name}
                              withAsterisk
                            />
                          </Grid.Col>
                          <Grid.Col span={12} md={6}>
                            <Select
                              size="md"
                              placeholder="Experience Year"
                              name="year"
                              data={dateArr}
                              icon={<AiOutlineCalendar color={"black"} />}
                              onChange={(value) => {
                                const updatedExperienceData = {
                                  ...newExperienceData,
                                };
                                updatedExperienceData.year = value ?? "";
                                setNewExperienceData(updatedExperienceData);
                              }}
                              value={newExperienceData.year}
                              withAsterisk
                            />
                          </Grid.Col>
                          <Grid.Col span={12} md={6}>
                            <Select
                              size="md"
                              placeholder="Experience Month"
                              name="month"
                              data={experienceArr}
                              icon={<AiOutlineCalendar color={"black"} />}
                              onChange={(value) => {
                                const updatedExperienceData = {
                                  ...newExperienceData,
                                };
                                updatedExperienceData.month = value ?? "";
                                setNewExperienceData(updatedExperienceData);
                              }}
                              value={newExperienceData.month}
                              withAsterisk
                            />
                          </Grid.Col>
                          <Grid.Col>
                            <Textarea
                              placeholder="Description"
                              value={newExperienceData.description}
                              onChange={(event) => {
                                const value = event.target.value;
                                const updatedExperienceData = {
                                  ...newExperienceData,
                                };
                                updatedExperienceData.description = value ?? "";
                                setNewExperienceData(updatedExperienceData);
                              }}
                            />
                          </Grid.Col>
                        </Grid>
                        <Group position="center" m={"xl"}>
                          <Button
                            onClick={() => {
                              handleAddExperienceData(newExperienceData);
                            }}
                            leftIcon={<TiTick size={20} />}
                            sx={{
                              objectFit: "contain",
                            }}
                          >
                            OK
                          </Button>
                          <Button
                            onClick={() => setOpenExperienceAdder(false)}
                            leftIcon={<ImCross size={15} />}
                            sx={{
                              objectFit: "contain",
                            }}
                          >
                            Cancel
                          </Button>
                        </Group>
                      </>
                    )}
                    {openExperienceEditor && (
                      <div>
                        <>
                          <Grid mb={20}>
                            <Grid.Col span={12}>
                              <TextInput
                                size="md"
                                placeholder="Experience Name"
                                name={`experiences[${editExperienceIndex}].name`}
                                icon={<TbUserStar color="black" />}
                                onChange={(event) => {
                                  const value = event.target.value;
                                  handleChange({
                                    target: {
                                      name: `experiences[${editExperienceIndex}].name`,
                                      value: value,
                                    },
                                  });
                                }}
                                value={
                                  values.experiences[editExperienceIndex].name
                                }
                                withAsterisk
                              />
                            </Grid.Col>
                            <Grid.Col span={12} md={6}>
                              <Select
                                size="md"
                                placeholder="Experience Year"
                                name={`experiences[${editExperienceIndex}].year`}
                                data={dateArr}
                                icon={<AiOutlineCalendar color={"black"} />}
                                onChange={(value) => {
                                  handleChange({
                                    target: {
                                      name: `experiences[${editExperienceIndex}].year`,
                                      value: value,
                                    },
                                  });
                                }}
                                value={
                                  values.experiences[editExperienceIndex].year
                                }
                                withAsterisk
                              />
                            </Grid.Col>
                            <Grid.Col span={12} md={6}>
                              <Select
                                size="md"
                                placeholder="Experience Month"
                                name={`experiences[${editExperienceIndex}].month`}
                                data={experienceArr}
                                icon={<AiOutlineCalendar color={"black"} />}
                                onChange={(value) => {
                                  handleChange({
                                    target: {
                                      name: `experiences[${editExperienceIndex}].month`,
                                      value: value,
                                    },
                                  });
                                }}
                                value={
                                  values.experiences[editExperienceIndex].month
                                }
                                withAsterisk
                              />
                            </Grid.Col>
                            <Grid.Col>
                              <Textarea
                                placeholder="Description"
                                onChange={(event) => {
                                  const value = event.target.value;
                                  handleChange({
                                    target: {
                                      name: `experiences[${editExperienceIndex}].description`,
                                      value: value,
                                    },
                                  });
                                }}
                                value={
                                  values.experiences[editExperienceIndex]
                                    .description
                                }
                              />
                            </Grid.Col>
                          </Grid>
                          <Group position="center" m={"xl"}>
                            <Button
                              onClick={() => {
                                setOpenExperienceEditor(false);
                              }}
                              leftIcon={<TiTick size={20} />}
                              sx={{
                                objectFit: "contain",
                              }}
                            >
                              OK
                            </Button>
                            <Button
                              onClick={() => setOpenExperienceEditor(false)}
                              leftIcon={<ImCross size={15} />}
                              sx={{
                                objectFit: "contain",
                              }}
                            >
                              Cancel
                            </Button>
                          </Group>
                        </>
                      </div>
                    )}
                    <Group position="center">
                      <Button
                        leftIcon={<FaPlus />}
                        onClick={() => {
                          setOpenExperienceAdder(true);
                          setOpenExperienceEditor(false);
                        }}
                        w={{ base: "auto", lg: "20%" }}
                      >
                        Add
                      </Button>
                    </Group>
                  </Box>
                </Box>

                <Group position="apart">
                  <Button
                    onClick={() => {
                      setInfoSteps(2);
                    }}
                  >
                    Prev
                  </Button>
                  <Button
                    type="submit"
                    sx={{
                      objectFit: "contain",
                    }}
                  >
                    Submit
                  </Button>
                </Group>
              </Flex>
            )}
          </form>
        </Container>
      </Container>
    </AppShell>
  );
};

export default AdditionalInfo;
