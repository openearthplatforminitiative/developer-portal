import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Link from "next/link"
import { BackIcon } from "@/app/icons/BackIcon"
import InfoCard from "@/app/components/InfoCard"
import { GithubIconBlack } from "@/app/icons/GithubIconBlack"
import { OpenApiIcon } from "@/app/icons/OpenApiIcon"
import CodeBlock from "@/app/components/CodeBlock"
import { getCodeExample } from "@/app/utils"

const CropHealthPage = () => {
	return (
		<Box className="lg:max-w-7xl px-8 lg:my-44 my-20">
			<Link
				href="/data-catalog"
				className="flex flex-row items-center text-primary-main underline hover:no-underline -mt-20 gap-1"
			>
				<BackIcon />
				<Typography className="text-xl">Back to data catalog</Typography>
			</Link>

			<Box className="flex flex-col gap-8 mt-14">
				<Typography variant="h1" className="text-4xl xs:text-5xl">
					Crop Health API
				</Typography>
				<Typography className="text-xl xs:text-2xl">
					Early disease detection in crops using open data and machine learning
				</Typography>
			</Box>
			<Box className="flex lg:flex-row flex-col gap-6 mt-20">
				<InfoCard
					externalLink={true}
					header="OpenAPI Spec"
					subHeader="Specification of all endpoints available in the crop health api."
					cardIcon={<OpenApiIcon />}
					href="https://api-test.openepi.io/crop-health/redoc"
				/>
				<InfoCard
					externalLink={true}
					header="Github"
					subHeader="Explore the source code behind the crop health api."
					cardIcon={<GithubIconBlack />}
					href="https://github.com/openearthplatforminitiative/crop-health-model"
				/>
			</Box>
			<Box className="flex flex-col mt-28">
				<Typography className="text-3xl xs:text-4xl">More info</Typography>
				<Typography className="text-2xl xs:text-3xl mt-8">
					Data sources
				</Typography>
				<Typography className="text-base mt-6">
					The API uses a machine learning model to serve predictions given
					close-up images of crops. The data used for training consists of a
					vast array of labeled images from the{" "}
					<a
						href="https://dataverse.harvard.edu"
						className="underline hover:no-underline"
					>
						Harvard Dataverse
					</a>
					. These images cover a diverse range of crops such as maize, cassava,
					beans, cocoa, and bananas, pivotal for agricultural activities in
					sub-Saharan Africa. The label for an image is either
					&quot;healthy&quot; or one of several diseases. In total,
					approximately 120,000 labeled images were used for training.
				</Typography>
				<Typography className="text-base mt-6">
					The nine specific datasets used can be found at the following URLs:{" "}
					<a
						href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/R0KL7R"
						className="underline hover:no-underline"
					>
						Spectrometry Cassava Dataset
					</a>
					,{" "}
					<a
						href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/T4RB0B"
						className="underline hover:no-underline"
					>
						Cassava Dataset Uganda
					</a>
					,{" "}
					<a
						href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/GDON8Q"
						className="underline hover:no-underline"
					>
						Maize Dataset Tanzania
					</a>
					,{" "}
					<a
						href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/6R78HR"
						className="underline hover:no-underline"
					>
						Maize Dataset Namibia
					</a>
					,{" "}
					<a
						href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/LPGHKK"
						className="underline hover:no-underline"
					>
						Maize Dataset Uganda
					</a>
					,{" "}
					<a
						href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/TCKVEW"
						className="underline hover:no-underline"
					>
						Beans Dataset Uganda
					</a>
					,{" "}
					<a
						href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/LQUWXW"
						className="underline hover:no-underline"
					>
						Bananas Dataset Tanzania
					</a>
					,{" "}
					<a
						href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/BBGQSP"
						className="underline hover:no-underline"
					>
						Cocoa Dataset
					</a>
					, and{" "}
					<a
						href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/CXUMDS"
						className="underline hover:no-underline"
					>
						KaraAgro AI Maize Dataset
					</a>
					. All datasets are licensed under the{" "}
					<a
						href="https://creativecommons.org/publicdomain/zero/1.0/"
						className="underline hover:no-underline"
					>
						Creative Commons 1.0 DEED
					</a>{" "}
					license.
				</Typography>
				<Typography className="text-2xl xs:text-3xl mt-14">
					Processing
				</Typography>
				<Typography className="text-base mt-6">
					Each dataset is downloaded programmatically from the Harvard Dataverse
					using HTTP requests. Each dataset is split up into several archive
					files, either in the form of a ZIP file or a RAR file. These files are
					then unpacked and processed to remove any corrupted images.
				</Typography>
				<Typography className="text-base mt-6">
					A CSV file containing the metadata (label and dimensions) for each
					image is generated by performing a walk through the directory
					structure of the dataset, and creating a row in the CSV file for each
					image. This file is used during training to match each image with its
					label. The model training process involves loading the images and
					labels from the CSV file, and then fine-tuning a pre-trained ResNet
					model in PyTorch.
				</Typography>
				<Typography component="div" className="text-base mt-6">
					Three different models are provided by the API. The models differ in
					the number of classes they predict. The models are:
					<ul className="list-decimal list-inside mt-4">
						<li>
							Binary model: This is a binary model that predicts the health of
							crops into three classes: healthy and diseased.
						</li>
						<li>
							Single-HLT model: This is a multiclass model that predicts the
							health of crops into a single healthy (HLT) class and several
							diseases.
						</li>
						<li>
							Multi-HLT model: This is a multiclass model that predicts the
							health of crops into multiple healthy (HLT) classes and several
							diseases.
						</li>
					</ul>
				</Typography>
				<Typography component="div" className="text-base mt-6">
					The key difference between the single-HLT and multi-HLT models is that
					only the multi-HLT model has a healthy class for each crop type. The
					different classes for each model are as follows:
					<ul className="list-decimal list-inside mt-4">
						<li>Binary model (2): HLT (healthy), NOT_HLT</li>
						<li>
							Single-HLT model (13): HLT, CBSD (Cassava Brown Streak Disease),
							CMD (Cassava Mosaic Disease), MLN (Maize Lethal Necrosis), MSV
							(Maize Streak Virus), FAW (Fall Armyworm), MLB (Maize Leaf
							Blight), BR (Bean Rust), ALS (Angular Leaf Spot), BS (Black
							Sigatoka), FW (Fusarium Wilt Race 1), ANT (Anthracnose), CSSVD
							(Cocoa Swollen Shoot Virus Disease)
						</li>
						<li>
							Multi-HLT model (17): HLT_cassava, CBSD_cassava, CMD_cassava,
							MLN_maize, HLT_maize, MSV_maize, FAW_maize, MLB_maize, HLT_beans,
							BR_beans, ALS_beans, HLT_bananas, BS_bananas, FW_bananas,
							HLT_cocoa, ANT_cocoa, CSSVD_cocoa
						</li>
					</ul>
				</Typography>
				<Typography className="text-base mt-6">
					The response from the binary model is a JSON object with both the 
					HLT and NOT_HLT classes, while the response from the single-HLT and
					multi-HLT models is a JSON object with the top five classes and their
					confidence scores. The confidence score is a value between 0 and 1
					indicating the model&apos;s confidence in the prediction. All scores
					are normalized to sum to 1.
				</Typography>
				<Typography className="text-3xl xs:text-4xl mt-16">Examples</Typography>
				<Typography className="text-2xl xs:text-3xl mt-8">Example 1</Typography>
				<Typography className="text-base mt-6">
					Retrieving the binary model&apos;s crop health prediction for a given
					image.
				</Typography>
				<CodeBlock
					language="javascript"
					codeString={getCodeExample("crop-health-binary.js")}
				/>
				<Typography className="text-2xl xs:text-3xl mt-8">Example 2</Typography>
				<Typography className="text-base mt-6">
					Retrieving the single-HLT model&apos;s crop health prediction for a
					given image.
				</Typography>
				<CodeBlock
					language="javascript"
					codeString={getCodeExample("crop-health-single-HLT.js")}
				/>
				<Typography className="text-2xl xs:text-3xl mt-8">Example 3</Typography>
				<Typography className="text-base mt-6">
					Retrieving the multi-HLT model&apos;s crop health prediction for a
					given image.
				</Typography>
				<CodeBlock
					language="javascript"
					codeString={getCodeExample("crop-health-multi-HLT.js")}
				/>
			</Box>
		</Box>
	)
}

export default CropHealthPage
