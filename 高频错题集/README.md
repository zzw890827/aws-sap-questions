# 高频错题

## 错四次

1. A company currently uses a single 1 Gbps AWS Direct Connect connection to establish connectivity between an AWS Region and its data center. The company has five Amazon VPCs, all of which are connected to the data center using the same Direct Connect connection. The Network team is worried about the single point of failure and is interested in improving the redundancy of the connections to AWS while keeping costs to a minimum. Which solution would improve the redundancy of the connection to AWS while meeting the cost requirements?
   - [ ] A. Provision another 1 Gbps Direct Connect connection and create new VIFs to each of the VPCs. Configure the VIFs in a load balancing fashion using BGP.
   - [ ] B. Set up VPN tunnels from the data center to each VPC. Terminate each VPN tunnel at the virtual private gateway (VGW) of the respective VPC and set up BGP for route management.
   - [ ] C. Set up a new point-to-point Multiprotocol Label Switching (MPLS) connection to the AWS Region that's being used. Configure BGP to use this new circuit as passive, so that no traffic flows through this unless the AWS Direct Connect fails.
   - [ ] D. Create a public VIF on the Direct Connect connection and set up a VPN tunnel which will terminate on the virtual private gateway (VGW) of the respective VPC using the public V IF. Use BGP to handle the failover to the VPN connection.

   <details>
      <summary>Answer</summary>

      第63题，答案B。

   </details>

2. A company deployed a three-tier web application in two regions:us-east-1 and eu-west-1. The application must be active in both regions at the same time. The database tier of the application uses a single Amazon RDS Aurora database globally, with a master in us-east-1 and a read replica in eu-west-1. Both regions are connected by a VPN The company wants to ensure that the application remains available even in the event of a region-level failure of all the application's components. It is acceptable for the application to be in read-only mode for up to 1 hour. The company plans to configure two Amazon Route 53 record sets, one for each of the regions. How should the company complete the configuration to meet its requirements while providing the lowest latency for the application end-users? (Choose two.)
   - [ ] A. Use failover routing and configure the us-east-1 record set as primary and the eu-west-1 record set as secondary. Configure an HTTP health check for the web application in us-east-1, and associate it to the us-east-1 record set.
   - [ ] B. Use weighted routing and configure each record set with a weight of 50. Configure an HTTP health check for each region and attach it to the record set for that region.
   - [ ] C. Use latency-based routing for both record sets. Configure a health check for each region and attach it to the record set for that region.
   - [ ] D. Configure an Amazon CloudWatch alarm for the health checks in us-east-1, and have it invoke an AWS Lambda function that promotes the read replica in eu-west-1.
   - [ ] E. Configure an Amazon RDS event notifications to react to the failure of the database in us-east-1 by invoking an AWS Lambda function that promotes the read replica in eu-west-1.

   <details>
      <summary>Answer</summary>

      第109题，答案CE。

   </details>

3. A Solutions Architect is redesigning an image-viewing and messaging platform to be delivered as SaaS. Currently, there is a farm of virtual desktop infrastructure (VDI) that runs a desktop image- viewing application and a desktop messaging application. Both applications use a shared database to manage user accounts and sharing. Users log in from a web portal that launches the applications and streams the view of the application on the user's machine. The Development Operations team wants to move away from using VDI and wants to rewrite the application. What is the MOST cost-effective architecture that offers both security and ease of management?
   - [ ] A. Run a website from an Amazon S3 bucket with a separate S3 bucket for images and messaging data. Call AWS Lambda functions from embedded JavaScript to manage the dynamic content and use Amazon Cognito for user and sharing management.
   - [ ] B. Run a website from Amazon EC2 Linux servers, storing the images in Amazon S3, and use Amazon Cognito for user accounts and sharing. Create AWS CloudFormation templates to launch the application by using EC2 user data to install and configure the application.
   - [ ] C. Run a website as an AWS Elastic Beanstalk application, storing the images in Amazon S3, and using an Amazon RDS database for user accounts and sharing. Create AWS CloudFormation templates to launch the application and perform blue/green deployments.
   - [ ] D. Run a website from an Amazon S3 bucket that authorizes Amazon AppStream to stream applications for a combined image viewer and messenger that stores images in Amazon S3. Have the website use an Amazon RDS database for user accounts and sharing.

   <details>
      <summary>Answer</summary>

      第135题，答案A。

   </details>

4. A financial company is using a high-performance compute cluster running on Amazon EC2 instances to perform market simulations A DNS record must be created in an Amazon Route 53 private hosted zone when instances start The DNS record must be removed after instances are terminated. Currently the company uses a combination of Amazon CloudWatch Events and AWS Lambda to create the DNS record. The solution worked well in testing with small clusters, but in production with clusters containing thousands of instances the company sees the following error in the Lambda logs: -HTTP 400 error (Bad request). -The response header also includes a status code element with a value of `Throttling` and a status message element with a value of `Rate exceeded`. Which combination of steps should the Solutions Architect take to resolve these issues? (Select THREE)
   - [ ] A. Configure an Amazon SQS FIFO queue and configure a CloudWatch Events rule to use this queue as a target. Remove the Lambda target from the CloudWatch Events rule.
   - [ ] B. Configure an Amazon Kinesis data stream and configure a CloudWatch Events rule to use this queue as a target. Remove the Lambda target from the CloudWatch Events rule.
   - [ ] C. Update the CloudWatch Events rule to trigger on Amazon EC2 `Instance Launch Successful` and `Instance Terminate Successful` events for the auto scaling group by the cluster.
   - [ ] D. Configure a Lambda function to retrieve messages from an amazon SQS queue. Modify the Lambda function to retrieve a maximum of 10 messages, then batch the messages by Amazon Route 53 API call type and submit. Delete the messages from the SQS queue after successful API calls.
   - [ ] E. Configure an Amazon SQS standard queue and configure the existing CloudWatch Events rule to use this queue as a target. Remove the Lambda target from the CloudWatch Events rule.
   - [ ] F. Configure a Lambda function to read data from the amazon Kinesis data stream and configure the batch window to 5 minutes. Modify the function to make a single API call to Amazon route 53 with all records read from the Kinesis data.

   <details>
      <summary>Answer</summary>

      第213题，答案ACD
  
   </details>

5. A company has a VPC with two domain controllers running Active Directory in the default configuration. The VPC DHCP options set is configured to use the IP addresses of the two domain controllers. There is a VPC interface endpoint defined; but instances within the VPC are not able to resolve the private endpoint addresses. Which strategies would resolve this issue? (Choose two.)
   - [ ] A. Define an outbound Amazon Route 53 Resolver. Set a conditional forward rule for the Active Directory domain to the Active Directory servers. Update the VPC DHCP options set to AmazonProvidedDNS.
   - [ ] B. Update the DNS service on the Active Directory servers to forward all non-authoritative queries to the VPC Resolver.
   - [ ] C. Define an inbound Amazon Route 53 Resolver. Set a conditional forward rule for the Active Directory domain to the Active Directory servers. Update the VPC DHCP options set to AmazonProvidedDNS.
   - [ ] D. Update the DNS service on the client instances to split DNS queries between the Active Directory servers and the VPC Resolver.
   - [ ] E. Update the DNS service on the Active Directory servers to forward all queries to the VPC Resolver.

   <details>
      <summary>Answer</summary>

      第283题，答案AB。

   </details>

6. A large company will be migrating to AWS. The company has 20 business units and anticipates another 10 coming online in the future. Each business unit will need its own IP range and will operate in its own AWS account. There will be a lot of communication between business units with very large data transfers. The company wants to make sure that the proposed solution will minimize data transfer costs and reduce complexity. How should a solutions architect design the network to meet these requirements?
   - [ ] A. Create a transit VPC in a networking account. Within each business unit's AWS account create redundant VPN connections to the transit VPC.
   - [ ] B. Create a transit gateway in a networking account. Share the transit gateway with each business unit's AWS account. Attach the VPC in each account to the transit gateway.
   - [ ] C. Create two subnets for each business unit in a networking account. Share the subnets with each business unit's AWS account using AWS Resource Access Manager.
   - [ ] D. Create a VPC for each business unit's AWS account Use VPC peering to route traffic between the VPCs in each account.
  
   <details>
      <summary>Answer</summary>

      第395题，答案A。

   </details>

7. A large payroll company recently merged with a small staffing company. The unified company now has multiple business units, each with its own existing AWS account. A solutions architect must ensure that the company can centrally manage the billing and access policies for all the AWS accounts. The solutions architect configures AWS Organizations by sending an invitation to all member accounts of the company from a centralized management account. What should the solutions architect do next to meet these requirements?
   - [ ] A. Create the OrganizationAccountAccess IAM group in each member account. Include the necessary IAM roles for each administrator.
   - [ ] B. Create the OrganizationAccountAccessPolicy IAM policy in each member account. Connect the member accounts to the management account by using cross-account access.
   - [ ] C. Create the OrganizationAccountAccessRole IAM role in each member account. Grant permission to the management account to assume the IAM role.
   - [ ] D. Create the OrganizationAccountAccessRole IAM role in the management account. Attach the Administrator Access AWS managed policy to the IAM role. Assign the IAM role to the administrators in each member account.
  
   <details>
      <summary>Answer</summary>

      第402题，答案C。

   </details>

8. A large company is running a popular web application. The application runs on several Amazon EC2 Linux instances in an Auto Scaling group in a private subnet. An Application Load Balancer is targeting the instances in the Auto Scaling group in the private subnet. AWS Systems Manager Session Manager is configured, and AWS Systems Manager Agent is running on all the EC2 instances. The company recently released a new version of the application. Some EC2 instances are now being marked as unhealthy and are being terminated. As a result, the application is running at reduced capacity. A solutions architect tries to determine the root cause by analyzing Amazon CloudWatch logs that are collected from the application, but the logs are inconclusive. How should the solutions architect gain access to an EC2 instance to troubleshoot the issue?
   - [ ] A. Suspend the Auto Scaling group's HealthCheck scaling process. Use Session Manager to log in to an instance that is marked as unhealthy.
   - [ ] B. Enable EC2 instance termination protection. Use Session Manager to log in to an instance that is marked as unhealthy.
   - [ ] C. Set the termination policy to OldestInstance on the Auto Scaling group. Use Session Manager to log in to an instance that is marked an unhealthy.
   - [ ] D. Suspend the Auto Scaling group's Terminate process. Use Session Manager to log in to an instance that is marked as unhealthy.
  
   <details>
      <summary>Answer</summary>

      第412题，答案D。

   </details>

9. A company manages an on-premises data ingestion application that receives metrics from loT devices in JSON format. The data is collected transformed and stored m a data warehouse for analysis. The current infrastructure has several performance issues at peak loads due to insufficient compute capacity causing some of the data ingestion to be dropped. The company wants to migrate the application to AWS. The solution must support its current analytics tool that connects to the data warehouse with a Java Database Connectivity (JDBC) driver. The company requires a resilient and cost-effective solution that will address the performance issues. Which solution will meet these requirements?
   - [ ] A. Re-platform the application. Create an Application Load Balancer and an Amazon EC2 instance with Auto Scaling to host the application to ingest and transform the data. Create an Amazon RDS PostgreSQL Multi-AZ DB instance in a private subnet to store data. Use Amazon QuickSight to generate reports and visualize data.
   - [ ] B. Re-platform the application. Use Amazon API Gateway to handle data ingestion. Use AWS Lambda to transform the data. Create an Amazon Aurora PostgreSQL DB cluster with an Aurora Replica in two private subnets to store data. Use Amazon QuickSight to generate reports and visualize data.
   - [ ] C. Re-architect the application. Load the data into Amazon S3. Use AWS Glue to transform the data. Store the table schema in an AWS Glue Data Catalog. Use Amazon Athena to query the data.
   - [ ] D. Re-architect the application. Load the data into Amazon S3. Use Amazon EMR to transform the data. Create an external schema in an AWS Glue Data Catalog. Use Amazon Redshift Spectrum to query the data.
  
   <details>
      <summary>Answer</summary>

      第417题，答案A。

   </details>

10. A company manages hundreds of AWS accounts centrally in an organization in AWS Organizations. The company recently started to allow product teams to create and manage their own S3 access points in their accounts. The S3 access points can be accessed only within VPCs, not on the Internet. What is the MOST operationally efficient way to enforce this requirement?
    - [ ] A. Set the S3 access point resource policy to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC.
    - [ ] B. Create an SCP at the root level in the organization to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC.
    - [ ] C. Use AWS CloudFormation StackSets to create a new IAM policy in each AWS account that allows the s3:CreateAccessPoint action only if the s3:AccessPointNetworkOrigin condition key evaluates to VPC.
    - [ ] D. Set the S3 bucket policy to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC.

    <details>
       <summary>Answer</summary>

       第421题，答案A。

    </details>

11. A solutions architect is designing an application to accept timesheet entries from employees on their mobile devices. Timesheets will be submitted weekly, with most of the submissions occurring on Friday. The data must be stored in a format that allows payroll administrators to run monthly reports. The infrastructure must be highly available and scale to match the rate of incoming data and reporting requests. Which combination of steps meets these requirements while minimizing operational overhead? (Select TWO.)
    - [ ] A. Deploy the application to Amazon EC2 On-Demand Instances with load balancing across multiple Availability Zones. Use scheduled Amazon EC2 Auto Scaling to add capacity before the high volume of submissions on Fridays.
    - [ ] B. Deploy the application in a container using Amazon Elastic Container Service (Amazon ECS) with load balancing across multiple Availability Zones. Use scheduled Service Auto Scaling to add capacity before the high volume of submissions on Fridays.
    - [ ] C. Deploy the application front end to an Amazon S3 bucket served by Amazon CloudFront. Deploy the application backend using Amazon API Gateway with an AWS Lambda proxy integration.
    - [ ] D. Store the timesheet submission data in Amazon Redshift. Use Amazon QuickSight to generate the reports using Amazon Redshift as the data source.
    - [ ] E. Store the timesheet submission data in Amazon S3. Use Amazon Athena and Amazon QuickSight to generate the reports using Amazon S3 as the data source.

    <details>
       <summary>Answer</summary>

       第468题，答案BD。

    </details>

12. A company has 50 AWS accounts that are members of an organization in AWS Organizations. Each account contains multiple VPCs. The company wants to use AWS Transit Gateway to establish connectivity between the VPCs in each member account. Each time a new member account is created, the company wants to automate the process of creating a new VPC and a transit gateway attachment. Which combination of steps will meet these requirements? (Select TWO.)
    - [ ] A. From the master account, share the transit gateway with member accounts by using AWS Resource Access Manager.
    - [ ] B. From the master account, share the transit gateway with member accounts by using an AWS Organizations SCP.
    - [ ] C. Launch an AWS CloudFormation stack set from the master account that automatically creates a new VPC and a VPC transit gateway attachment in a member account. Associate the attachment with the transit gateway in the master account by using the transit gateway ID.
    - [ ] D. Launch an AWS CloudFormation stack set from the master account that automatically creates a new VPC and a peering transit gateway attachment in a member account. Share the attachment with the transit gateway in the master account by using a transit gateway service-linked role.
    - [ ] E. From the master account, share the transit gateway with member accounts by using AWS Service Catalog.

    <details>
       <summary>Answer</summary>

       第486题，答案AD。

    </details>

## 错三次

1. A solution architect works for a government agency that has strict recovery requirement. All Amazon Elastic Block Store (Amazon EBS) snapshots are required to be saved in at least two additional AWS Regions. The agency also is required to maintain the lowest possible operational overhead. Which solution meets These requirements?
   - [ ] A. Configure a policy in Amazon Data lifecycle Manager (Amazon DLM) to run once daily to copy the EBS snapshots to the additional Regions.
   - [ ] B. Use Amazon EventBridge (Amazon CloudWatch events) to schedule an AWS Lambda function to copy the EBS snapshots to the additional Regions.
   - [ ] C. Set up AWS Backup to create the EBS snapshots. Configure Amazon S3 cross-Region replicator to copy the EBS snapshots to the additional Regions
   - [ ] D. Schedule Amazon EC2 Image Builder to run once daily to create an AMI and copy the AMI to the additional Regions.

   <details>
      <summary>Answer</summary>

      第472题，答案B。

   </details>

2. A company has multiple AWS accounts hosting IT applications. An Amazon CloudWatch Logs agent is installed on all Amazon EC2 instances. The company wants to aggregate all security events in a centralized AWS account dedicated to log storage. Security Administrators need to perform near-real-time gathering and correlating of events across multiple AWS accounts. Which solution satisfies these requirements?
   - [ ] A. Create a Log Audit IAM role in each application AWS account with permissions to view CloudWatch Logs, configure an AWS Lambda function to assume the Log Audit role, and perform an hourly export of CloudWatch Logs data to an Amazon S3 bucket in the logging AWS account.
   - [ ] B. Configure CloudWatch Logs streams in each application AWS account to forward events to CloudWatch Logs in the logging AWS account. In the logging AWS account, subscribe an Amazon Kinesis Data Firehose stream to Amazon CloudWatch Events, and use the stream to persist log data in Amazon S3.
   - [ ] C. Create Amazon Kinesis Data Streams in the logging account, subscribe the stream to CloudWatch Logs streams in each application AWS account, configure an Amazon Kinesis Data Firehose delivery stream with the Data Streams as its source, and persist the log data in an Amazon S3 bucket inside the logging AWS account.
   - [ ] D. Configure CloudWatch Logs agents to publish data to an Amazon Kinesis Data Firehose stream in the logging AWS account, use an AWS Lambda function to read messages from the stream and push messages to Data Firehose, and persist the data in Amazon S3.

   <details>
      <summary>Answer</summary>

      第142题，答案C。

   </details>

3. A company has a requirement that only allows specially hardened AMIs to be launched into public subnets in a VPC, and for the AMIs to be associated with a specific security group. Allowing non-compliant instances to launch into the public subnet could present a significant security risk if they are allowed to operate. A mapping of approved AMIs to subnets to security groups exists in an Amazon DynamoDB table in the same AWS account. The company created an AWS Lambda function that, when invoked, will terminate a given Amazon EC2 instance if the combination of AMI, subnet, and security group are not approved in the DynamoDB table. What should the Solutions Architect do to mitigate the risk of compliance deviations MOST quickly?
   - [ ] A. Create an Amazon CloudWatch Events rule that matches each time an EC2 instance is launched using one of the allowed AMIs, and associate it with the Lambda function as the target.
   - [ ] B. For the Amazon S3 bucket receiving the Aws CloudTrail logs, create an S3 event notification configuration with a filter to match when logs contain the ec2:RunInstances action, and associate it with the Lambda function as the target.
   - [ ] C. Enable AWS CloudTrail and configure it to stream to an Amazon CloudWatch Logs group. Create a metric filter in CloudWatch to match when the ec2:RunInstances action occurs, and trigger the Lambda function when the metric is greater than 0.
   - [ ] D. Create an Amazon CloudWatch Events rule that matches each time an EC2 instance is launched, and associate it with the Lambda function as the target.

   <details>
      <summary>Answer</summary>

      第113题，答案D。

   </details>

4. A large trading company is using an on-premises system to analyze the trade data. After the trading day closes, the data including the day's transaction costs, execution reporting, and market performance is sent to a Redhat server which runs big data analytics tools for predictions for next day trading. A bash script is used to configure resource and schedule when to run the data analytics workloads. How should the on-premises system be migrated to AWS with appropriate tools? (Select THREE)
   - [ ] A. Create a S3 bucket to store the trade data that is used for post processing.
   - [ ] B. Send the trade data from various sources to a dedicated SQS queue.
   - [ ] C. Use AWS Batch to execute the bash script using a proper job definition.
   - [ ] D. Create EC2 instances with auto-scaling to handle with the big data analytics workloads.
   - [ ] E. Use CloudWatch Events to schedule the data analytics jobs.

   <details>
      <summary>Answer</summary>

      第145题，答案ACD。

   </details>

5. A large company starts to use AWS organizations with consolidated billing feature to manage its separate departments. The AWS operation team has just created 3 OUS (organization units) with 2 AWS accounts each. To be compliant with company-wide security policy, CloudTrail is required for all AWS accounts which is already been set up. However, after some time, there are cases that users in certain OU have turned off the CloudTrail of their accounts. What is the best way for the AWS operation team to prevent this from happening again?
   - [ ] A. Update the AWS Organizations feature and then create a Service Control Policies (SCP) to prevent users from disabling AWS CloudTrail. This can be achieved by a deny policy with `CloudTrail:StopLogging`.
   - [ ] B. This can be achieved by Service Control Policies (SCP). The team needs to delete and recreate the AWS Organizations with features enabled and then use a proper control policy to limit the operation of `CloudTrail:StopLogging`.
   - [ ] C. In each AWS account in this organization, create an IAM policy to deny `CloudTrail:StopLogging` for all users including administrators.
   - [ ] D. Use a Service Control Policies (SCP) to prevent users from disabling AWS CloudTrail. This can be done by a allow policy which denies `CloudTrail:StopLogging`.

    <details>
       <summary>Answer</summary>

       第152题，答案A。

    </details>

6. The CISO of a large enterprise with multiple IT departments, each with its own AWS account, wants one central place where AWS permissions for users can be managed and user’s authentication credentials can be synchronized with the company's existing on-premises solution. Which solution will meet the CISO's requirements?
   - [ ] A. Define AWS IAM roles based on the functional responsibilities of the users in a central account. Create a SAML-based identity management provider. Map users in the on-premises groups to IAM roles. Establish trust relationships between the other accounts and the central account.
   - [ ] B. Deploy a common set of AWS IAM users, groups, roles, and policies in all of the AWS accounts using AWS Organizations. Implement federation between the on-premises identity provider and the AWS accounts.
   - [ ] C. Use AWS Organizations in a centralized account to define service control policies (SCPs). Create a SAML-based identity management provider in each account and map users in the on-premises groups to AWS IAM roles.
   - [ ] D. Perform a thorough analysis of the user base and create AWS IAM users accounts that have the necessary permissions. Set up a process to provision and de provision accounts based on data in the on-premises solution.

   <details>
      <summary>Answer</summary>

      第160题，答案A。

   </details>

7. A large company has increased its utilization ofAWS over time in an unmanaged way. As such, they have a large number of independent AWS accounts across different business units, projects,and environments. The company has created a Cloud Center of Excellence team, which is responsible for managing all aspects of the AWS Cloud, including their AWS accounts. Which of the following should the Cloud Center of Excellence team do to BEST address their requirements in a centralized way? (Select two.)
   - [ ] A. Control all AWS account root user credentials. Assign AWS IAM users in the account of each user who needs to access AWS resources. Follow the policy of least privilege in assignmg permissions to each user.
   - [ ] B. Tag all AWS resources with details about the business unit, project, and environment. Send all AWS Cost and Usage reports to a central Amazon S3 bucket, and use tools such as Amazon Athena and Amazon QuickSight to collect billing details by business unit.
   - [ ] C. Use the AWS Marketplace to choose and deploy a Cost Management tool. Tag all AWS resources with details about the business unit, project, and environment. Send all AWS Cost and Usage reports for the AWS accounts to this tool for analysis.
   - [ ] D. Set up AWS Organizations. Enable consolidated billing, and link all existing AWS accounts to a master billing account. Tag all AWS resources with details about the business unit, project and environment. Analyze Cost and Usage reports using tools such as Amazon Athena and Amazon QuickSight to collect billing details by business unit.
   - [ ] E. Using a master AWS account, create IAM users within the master account. Define IAM roles in the other AWS accounts, which cover each of the required functions in the account. Follow the policy of least privilege in assigning permissions to each role, then enable the IAM users to assume the roles that they need to use.

   <details>
      <summary>Answer</summary>

      第161题，答案AD。

   </details>

8. A Solutions Architect must build a highly available infrastructure for a popular global video game that runs on a mobile phone platform. The application runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The database tier is an Amazon RDS MySQL Multi-AZ instance. The entire application stack is deployed in both of us-east-1 and eu-central-1. Amazon Route 53 is used to route traffic to the two installations using a latency-based routing policy. A weighted routing policy is configured in Route 53 as a failure over to another region in case the installation in a region becomes unresponsive. During the testing of disaster recovery scenarios, after blocking access to the Amazon RDS MySQL instance in eu-central-1 from all the application instances running in that region. Route 53 does not automatically failover all traffic to us-east-1. Based on this situation, which changes would allow the infrastructure to failover to us-east-1? (Choose two.)
   - [ ] A. Specify a weight of 100 for the record pointing to the primary Application Load Balancer in us-east-1 and a weight of 60 for the pointing to the primary Application Load Balancer in eu-central-1.
   - [ ] B. Specify a weight of 100 for the record pointing to the primary Application Load Balancer in us-east-1 and a weight of 0 for the record pointing to the primary Application Load Balancer in eu-central-1.
   - [ ] C. Set the value of Evaluate Target Health to Yes on the latency alias resources for both eu-central-1 and us-east-1.
   - [ ] D. Write a URL in the application that performs a health check on the database layer. Add it as a health check within the weighted routing policy in both regions.
   - [ ] E. Disable any existing health checks for the resources in the policies and set a weight of 0 for the records pointing to primary in both eu-central-1 and us-east-1, and set a weight of 100 for the primary Application Load Balancer only in the region that has healthy resources.

   <details>
      <summary>Answer</summary>

      第164题，答案CD。

   </details>

9. An online e-commerce business is running a workload on AWS. The application architecture includes a web tier, an application tier for business logic, and a database tier for user and transactional data management. The database server has a 100 GB memory requirement. The business requires cost-efficient disaster recovery for the application with an RTO of 5 minutes and an RPO of 1 hour. The business also has a regulator for out of region disaster recovery with a minimum distance between the primary and alternate sites of 250 miles. Which of the following options can the Solutions Architect design to create a comprehensive solution for this customer that meets the disaster recovery requirements?
   - [ ] A. Back up the application and database data frequently and copy them to Amazon S3. Replicate the backups using S3 cross-region replication and use AWS CloudFormation to instantiate infrastructure for disaster recovery and restore data from Amazon S3.
   - [ ] B. Employ a pilot light environment in which the primary database is configured with mirroring to build a standby database on m4.large in the alternate region. Use AWS CloudFormation to instantiate the web servers, application servers and load balancers in case of a disaster to bring the application up in the alternate region. Vertically resize the database to meet the full production demands and use Amazon Route 53 to switch traffic to the alternate region.
   - [ ] C. Use a scaled-down version of the fully functional production environment in the alternate region that includes one instance of the web server, one instance of the application server, and a replicated instance of the database server in standby mode. Place the web and the application tiers in an Auto Scaling behind a load balancer, which can automatically scale when the load arrives to the application. Use Amazon Route 53 to switch traffic to the alternate region.
   - [ ] D. Employ a multi-region solution with fully functional web, application, and database tiers in both regions with equivalent capacity. Activate the primary database in one region only and the standby database in the other region. Use Amazon Route 53 to automatically switch traffic from one region to another using health check routing policies.

   <details>
      <summary>Answer</summary>

      第165题，答案C。

   </details>

10. A company runs a memory-intensive analytics application using on-demand Amazon EC2 compute optimized instance. The application is used continuously and application demand doubles during working hours. The application currently scales based on CPU usage. When scaling in occurs, a lifecycle hook is used because the instance requires 4 minutes to clean the application state before terminating. Because users reported poor performance during working hours, scheduled scaling actions were implemented so additional instances would be added during working hours. The Solutions Architect has been asked to reduce the cost of the application. Which solution is MOST cost-effective?
    - [ ] A. Use the existing launch configuration that uses C5 instances, and update the application AMI to include the Amazon CloudWatch agent. Change the Auto Scaling policies to scale based on memory utilization. Use Reserved Instances for the number of instances required after working hours and use Spot Instances to cover the increased demand during working hours.
    - [ ] B. Update the existing launch configuration to use R5 instances, and update the application AMI to include SSM Agent. Change the Auto Scaling policies to scale based on memory utilization. Use Reserved instances for the number of instances required after working hours and use Spot Instances with on-Demand instances to cover the increased demand during working hours.
    - [ ] C. Use the existing launch configuration that uses C5 instances, and update the application AMI to include SSM Agent. Leave the Auto Scaling policies to scale based on CPU utilization. Use scheduled Reserved Instances for the number of instances required after working hours and use Spot Instances to cover the increased demand during work hours.
    - [ ] D. Create a new launch configuration using R5 instances, and update the application AMI to include the Amazon CloudWatch agent. Change the Auto Scaling policies to scale based on memory utilization. use Reserved Instances for the number of instances required after working hours and use Standard Reserved Instances with On-Demand Instances to cover the increased demand during working hours.

    <details>
       <summary>Answer</summary>

       第166题，答案D。

    </details>

11. A company runs an ordering system on AWS using Amazon SQS and AWS Lambda, with each order received as a JSON message. recently the company had a marketing event that led to a tenfold increase in orders. With this increase, the following undesired behaviors started in the ordering system: -Lambda failures while processing orders lead to queue backlogs. -The same orders have been processed multiple times. A solutions Architect has been asked to solve the existing issues with the ordering system and add the following resiliency features: -Retain problematic orders for analysis. -Send notification if errors go beyond a threshold value. How should the Solutions Architect meet these requirements?
    - [ ] A. Receive multiple messages with each Lambda invocation, add error handling to message processing code and delete messages after processing, increase the visibility timeout for the messages, create a dead letter queue for messages that could not be processed, create an Amazon CloudWatch alarm on Lambda errors for notification.
    - [ ] B. Receive single messages with each Lambda invocation, put additional Lambda workers to poll the queue, delete messages after processing, increase the message timer for the messages, use Amazon CloudWatch Logs for messages that could not be processed, create a CloudWatch alarm on Lambda errors for notification.
    - [ ] C. Receive multiple messages with each Lambda invocation, use long polling when receiving the messages, log the errors from the message processing code using Amazon CloudWatch Logs, create a dead letter queue with AWS Lambda to capture failed invocations, create CloudWatch events on Lambda errors for notification.
    - [ ] D. Receive multiple messages with each Lambda invocation, add error handling to message processing code and delete messages after processing, increase the visibility timeout for the messages, create a delay queue for messages that could not be processed, create an Amazon CloudWatch metric on Lambda errors for notification.

    <details>
       <summary>Answer</summary>

       第169题，答案A。

    </details>

12. A company is migrating its applications on AWS. The applications will be deployed to AWS accounts owned by business units. The company has several teams of Developers who are responsible for the development and maintenance of all applications. The company is expecting rapid growth in the number of users. The company’s Chief Technology Officer has the following requirements -Developers must launch the AWS infrastructure using AWS CloudFormation -Developers must not be able to create resources outside of CloudFormation -The solution must be able to scale to hundreds of accounts; Which of the following would meet these requirements? (Select TWO)
    - [ ] A. Using CloudFormation, create an IAM role that can be assumed by Cloud Formation that has permissions to Create all the resources the company needs. Use CloudFormation stack sets to deploy this template to each AWS Account.
    - [ ] B. In a central account, create an IAM role that can be assumed by developers and attach a policy that allows interaction with CloudFormation. Modify the Assume Policy Document action to follow the IAM to be passed to CloudFormation
    - [ ] C. Using CloudFormation, create an IAM role that can be assumed by Developers, and attach policies that allow interaction with and passing a role on CloudFormation. Attach an inline policy to deny access all other AWS services. Use CloudFormation Stack Sets to deploy this template to each AWS account.
    - [ ] D. Using CloudFormation, create an IAM role for each Developer, and attach policies that allow interaction with CloudFormation. Use Cloud CloudFormation Stack Sets to deploy this template to each AWS account.
    - [ ] E. In a central AWS account, create an IAM role that can be assumed by CloudFormation that has permissions to create the resources the company requires. Create a Cloud Formation stack policy that allows the IAM role to manage resources. Use CloudFormation Stack Sets to deploy the CloudFormation stack policy to each AWS account.

    <details>
       <summary>Answer</summary>

       第207题，答案AC。

    </details>

13. A retail company has a custom .NET web application running on AWS that uses Microsoft SQL Server for the database. The application servers maintain a user's session locally. Which combination of architecture changes are needed to ensure all tiers of the solution are highly available? (Choose three.)
    - [ ] A. Refactor the application to store the user's session in Amazon ElastiCache. Use Application Load Balancers to distribute the load between application instances.
    - [ ] B. Set up the database to generate hourly snapshots using Amazon EBS. Configure an Amazon CloudWatch Events rule to launch a new database instance if the primary one fails.
    - [ ] C. Migrate the database to Amazon RDS for SQL Server. Configure the RDS instance to use a multi-AZ deployment.
    - [ ] D. Move the .NET content to an Amazon S3 bucket. Configure the bucket for static website hosting.
    - [ ] E. Put the application instances in an Auto Scaling group. Configure the Auto Scaling group to create new instances if an instance becomes unhealthy.
    - [ ] F. Deploy Amazon CloudFront in front of the application tier. Configure CloudFront to serve content from healthy application instances only.

    <details>
       <summary>Answer</summary>

       第219题，答案ACE。

    </details>

14. During a security audit of a Service team's application. A Solutions Architect discovers that a username and password for an Amazon RDS database and a set of AWS IAM user credentials can be viewed in the AWS Lambda function code. The Lambda function uses the username and password to run queries on the database, and it uses the IAM credentials to call AWS services in a separate management account. The Solutions Architect concerned that the credentials could grant inappropriate access to anyone who can view the Lambda code. The management account and the Service team's account are in separate AWS Organizations organizational units (OUs). Which combination of changes should the Solutions Architect make to improve the solution's security? (Choose two.)
    - [ ] A. Configure Lambda to assume a role in the management account with appropriate access to AWS.
    - [ ] B. Configure Lambda to use the stored database credentials in AWS Secrets Manager and enable automatic rotation.
    - [ ] C. Create a Lambda function to rotate the credentials every hour by deploying a new Lambda version with the updated credentials.
    - [ ] D. Use an SCP on the management account's OU to prevent IAM users from accessing resources in the Service team's account.
    - [ ] E. Enable AWS Shield Advanced on the management account to shield sensitive resources from unauthorized IAM access.

    <details>
       <summary>Answer</summary>

       第223题，答案AB。

    </details>

15. A company is using an existing orchestration tool to manage thousands of Amazon EC2 instances. A recent penetration test found a vulnerability in the company's software stack. This vulnerability has prompted the company to perform a full evaluation of its current production environment. The analysis determined that the following vulnerabilities exist within the environment: -Operating systems with outdated libraries and known vulnerabilities are being used in production. -Relational databases hosted and managed by the company are running unsupported versions with known vulnerabilities. -Data stored in databases is not encrypted. The solutions architect intends to use AWS Config to continuously audit and assess the compliance of the company's AWS resource configurations with the company's policies and guidelines. What additional steps will enable the company to secure its environments and track resources while adhering to best practices?
    - [ ] A. Use AWS Application Discovery Service to evaluate all running EC2 instances. Use the AWS CLI to modify each instance and use EC2 user data to install the AWS Systems Manager Agent during boot. Schedule patching to run as a Systems Manager Maintenance Windows task. Migrate all relational databases to Amazon RDS and enable AWS KMS encryption.
    - [ ] B. Create an AWS CloudFormation template for the EC2 instances. Use EC2 user data in the CloudFormation template to install the AWS Systems Manager Agent and enable AWS KMS encryption on all Amazon EBS volumes. Have CloudFormation replace all running instances. Use Systems Manager Patch Manager to establish a patch baseline and deploy a Systems Manager Maintenance Windows task to execute AWS-RunPatchBaseline using the patch baseline.
    - [ ] C. Install the AWS Systems Manager Agent on all existing instances using the company's current orchestration tool. Use the Systems Manager Run Command to execute a list of commands to upgrade software on each instance using operating system-specific tools. Enable AWS KMS encryption on all Amazon EBS volumes.
    - [ ] D. Install the AWS Systems Manager Agent on all existing instances using the company's current orchestration tool. Migrate all relational databases to Amazon RDS and enable AWS KMS encryption. Use Systems Manager Patch Manager to establish a patch baseline and deploy a Systems Manager Maintenance Windows task to execute AWS-RunPatchBaseline using the patch baseline.

    <details>
       <summary>Answer</summary>

       第281题，答案D。

    </details>

16. A company has a VPC with two domain controllers running Active Directory in the default configuration. The VPC DHCP options set is configured to use the IP addresses of the two domain controllers. There is a VPC interface endpoint defined; but instances within the VPC are not able to resolve the private endpoint addresses. Which strategies would resolve this issue? (Choose two.)
    - [ ] A. Define an outbound Amazon Route 53 Resolver. Set a conditional forward rule for the Active Directory domain to the Active Directory servers. Update the VPC DHCP options set to AmazonProvidedDNS.
    - [ ] B. Update the DNS service on the Active Directory servers to forward all non-authoritative queries to the VPC Resolver.
    - [ ] C. Define an inbound Amazon Route 53 Resolver. Set a conditional forward rule for the Active Directory domain to the Active Directory servers. Update the VPC DHCP options set to AmazonProvidedDNS.
    - [ ] D. Update the DNS service on the client instances to split DNS queries between the Active Directory servers and the VPC Resolver.
    - [ ] E. Update the DNS service on the Active Directory servers to forward all queries to the VPC Resolver.

    <details>
       <summary>Answer</summary>

       第283题，答案AB。

    </details>

17. A company is deploying a public-facing global application on AWS using Amazon CloudFront. The application communicates with an external system. A solutions architect needs to ensure the data is secured during end-to-end transit and at rest. Which combination of steps will satisfy these requirements? (Choose three.)
    - [ ] A. Create a public certificate for the required domain in AWS Certificate Manager and deploy it to CloudFront, an Application Load Balancer, and Amazon EC2 instances.
    - [ ] B. Acquire a public certificate from a third-party vendor and deploy it to CloudFront, an Application Load Balancer, and Amazon EC2 instances.
    - [ ] C. Provision Amazon EBS encrypted volumes using AWS KMS and ensure explicit encryption of data when writing to Amazon EBS.
    - [ ] D. Provision Amazon EBS encrypted volumes using AWS KMS.
    - [ ] E. Use SSL or encrypt data while communicating with the external system using a VPN.
    - [ ] F. Communicate with the external system using plaintext and use the VPN to encrypt the data in transit.

    <details>
       <summary>Answer</summary>

       第283题，答案BDE。

    </details>

18. A company built an ecommerce website on AWS using a three-tier web architecture. The application is Java-based and composed of an Amazon CloudFront distribution, an Apache web server layer of Amazon EC2 instances in an Auto Scaling group, and a backend Amazon Aurora MySQL database. Last month, during a promotional sales event, users reported errors and timeouts while adding items to their shopping carts. The operations team recovered the logs created by the web servers and reviewed Aurora DB cluster performance metrics. Some of the web servers were terminated before logs could be collected and the Aurora metrics were not sufficient for query performance analysis. Which combination of steps must the solutions architect take to improve application performance visibility during peak traffic events? (Choose three.)
    - [ ] A. Configure the Aurora MySQL DB cluster to publish slow query and error logs to Amazon CloudWatch Logs.
    - [ ] B. Implement the AWS X-Ray SDK to trace incoming HTTP requests on the EC2 instances and implement tracing of SQL queries with the X-Ray SDK for Java.
    - [ ] C. Configure the Aurora MySQL DB cluster to stream slow query and error logs to Amazon Kinesis
    - [ ] D. Install and configure an Amazon CloudWatch Logs agent on the EC2 instances to send the Apache logs to CloudWatch Logs.
    - [ ] E. Enable and configure AWS CloudTrail to collect and analyze application activity from Amazon EC2 and Aurora.
    - [ ] F. Enable Aurora MySQL DB cluster performance benchmarking and publish the stream to AWS X-Ray.

    <details>
       <summary>Answer</summary>

       第301题，答案ABD。

    </details>

19. A company is developing a gene reporting device that will collect genomic information to assist researchers will collecting large samples of data from a diverse population. The device will push 8 KB of genomic data every second to a data platform that will need to process and analyze the data and provide information back to researchers. The data platform must meet the following requirements: -Provide near-real-time analytics of the inbound genomic data. -Ensure the data is flexible, parallel, and durable. -Deliver results of processing to a data warehouse. Which strategy should a solutions architect use to meet these requirements?
    - [ ] A. Use Amazon Kinesis Data Firehouse to collect the inbound sensor data, analyze the data with Kinesis clients, and save the results to an Amazon RDS instance.
    - [ ] B. Use Amazon Kinesis Data Streams to collect the inbound sensor data, analyze the data with Kinesis clients, and save the results to an Amazon Redshift cluster using Amazon EMR.
    - [ ] C. Use Amazon S3 to collect the inbound device data, analyze the data from Amazon SQS with Kinesis, and save the results to an Amazon Redshift cluster.
    - [ ] D. Use an Amazon API Gateway to put requests into an Amazon SQS queue, analyze the data with an AWS Lambda function, and save the results to an Amazon Redshift cluster using Amazon EMR.

    <details>
       <summary>Answer</summary>

       第307题，答案B。

    </details>

20. A company hosts a legacy application that runs on an Amazon EC2 instance inside a VPC without internet access. Users access the application with a desktop program installed on their corporate laptops. Communication between the laptops and the VPC flows through AWS Direct Connect (DX). A new requirement states that all data in transit must be encrypted between users and the VPC. Which strategy should a solutions architect use to maintain consistent network performance while meeting this new requirement?
    - [ ] A. Create a client VPN endpoint and configure the laptops to use an AWS client VPN to connect to the VPC over the internet.
    - [ ] B. Create a new public virtual interface for the existing DX connection, and create a new VPN that connects to the VPC over the DX public virtual interface.
    - [ ] C. Create a new Site-to-Site VPN that connects to the VPC over the internet.
    - [ ] D. Create a new private virtual interface for the existing DX connection, and create a new VPN that connects to the VPC over the DX private virtual interface.

    <details>
       <summary>Answer</summary>

       第331题，答案B。

    </details>

21. A company is creating a centralized logging service running on Amazon EC2 that will receive and analyze logs from hundreds of AWS accounts. AWS PrivateLink is being used to provide connectivity between the client services and the logging service. In each AWS account with a client an interface endpoint has been created for the logging service and is available. The logging service running on EC2 instances with a Network Load Balancer (NLB) are deployed in different subnets. The clients are unable to submit logs using the VPC endpoint. Which combination of steps should a solutions architect take to resolve this issue? (Select TWO)
    - [ ] A. Check that the NACL is attached to the logging service subnet to allow communications to and from the NLB subnets. Check that the NACL is attached to the NLB subnet to allow communications to and from the logging service subnets running on EC2 instances.
    - [ ] B. Check that the NACL is attached to the logging service subnets to allow communications to and from the interface endpoint subnets. Check that the NACL is attached to the interface endpoint subnet to allow communications to and from the logging service subnets running on EC2 instances.
    - [ ] C. Check the security group for the logging service running on the EC2 instances to ensure it allows ingress from the NLB subnets.
    - [ ] D. Check the security group for the logging service running on EC2 instances to ensure it allows ingress from the clients.
    - [ ] E. Check the security group for the NLB to ensure it allows ingress from the interface endpoint subnets.

    <details>
       <summary>Answer</summary>

       第332题，答案AC。

    </details>

22. A solutions architect needs to define a reference architecture for a solution for three-tier applications with web, application, and NoSQL data layers. The reference architecture must meet the following requirements: -High availability within an AWS Region. -Able to fail over in 1 minute to another AWS Region for disaster recovery. -Provide the most efficient solution while minimizing the impact on the user experience. Which combination of steps will meet these requirements? (Choose three.)
    - [ ] A. Use an Amazon Route 53 weighted routing policy set to 100/0 across the two selected Regions. Set Time to Live (TTL) to 1 hour.
    - [ ] B. Use an Amazon Route 53 failover routing policy for failover from the primary Region to the disaster recovery Region. Set Time to Live (TTL) to 30 seconds.
    - [ ] C. Use a global table within Amazon DynamoDB so data can be accessed in the two selected Regions.
    - [ ] D. Back up data from an Amazon DynamoDB table in the primary Region every 60 minutes and then write the data to Amazon S3. Use S3 cross-Region replication to copy the data from the primary Region to the disaster recovery Region. Have a script import the data into DynamoDB in a disaster recovery scenario. Implement a hot standby model using Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use zonal Reserved Instances for the minimum number of servers and On-Demand Instances for any additional resources.
    - [ ] E. Use Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use Spot Instances for the required resources.

    <details>
       <summary>Answer</summary>

       第333题，答案BCD。

    </details>

23. A company hosts a web application on AWS in the us-east-1 Region. The application server are distributed across three Availability Zones behind an Application Load Balancer. The database is hosted in MYSQL database on an Amazon EC2 instance. A solutions architect needs to design a cross-Region data recovery solution using AWS services with an RTO of less than 5 minutes and an RPO of less than 1 minute. The solutions architect is deploying application servers in us-west-2, and has configured Amazon Route 53 hearth checks and DNS failover to us-west-2. Which additional step should the solutions architect take?
    - [ ] A. Migrate the database to an Amazon RDS for MySQL instance with a cross-Region read replica in us-west-2.
    - [ ] B. Migrate the database to an Amazon Aurora global database with the primary in us-east-1 and the secondary in us-west-2.
    - [ ] C. Migrate the database to an Amazon RDS for MySQL instance with a Multi-AZ deployment.
    - [ ] D. Create a MySQL standby database on an Amazon EC2 instance in us-west-2.

    <details>
       <summary>Answer</summary>

       第338题，答案B。

    </details>

24. A company wants to migrate its on-premises data center to the AWS Cloud. This includes thousands of virtualized Linux and Microsoft Windows servers, SAN storage, Java and PHP applications with MYSQL, and Oracle databases. There are many department services hosted either in the same data center or externally. The technical documentation is incomplete and outdated. A solutions architect needs to understand the current environment and estimate the cloud resource costs after the migration. Which tools or services should solutions architect use to plan the cloud migration (Choose three.)
    - [ ] A. AWS Application Discovery Service
    - [ ] B. AWS SMS
    - [ ] C. AWS x-Ray
    - [ ] D. AWS Cloud Adoption Readness Tool (CART)
    - [ ] E. Amazon Inspector
    - [ ] F. AWS Migration Hub

    <details>
       <summary>Answer</summary>

       第339题，答案ADF。

    </details>

25. A company’s security compliance requirements state that all Amazon EC2 images must be scanned for vulnerabilities and must pass a CVE assessment. A solutions architect is developing a mechanism to create security-approved AMIs that can be used by developers. Any new AMIs should go through an automated assessment process and be marked as approved before developers can use them. The approved images must be scanned every 30 days to ensure compliance. Which combination of steps should the solutions architect take to meet these requirements while following best practices? (Choose two.)
    - [ ] A. Use the AWS Systems Manager EC2 agent to run the CVE assessment on the EC2 instances launched from the AMIs that need to be scanned.
    - [ ] B. Use AWS Lambda to write automatic approval rules. Store the approved AMI list in AWS Systems Manager Parameter Store. Use Amazon EventBridge to trigger an AWS Systems Manager Automation document on all EC2 instances every 30 days.
    - [ ] C. Use Amazon Inspector to run the CVE assessment on the EC2 instances launched from the AMIs that need to be scanned.
    - [ ] D. Use AWS Lambda to write automatic approval rules. Store the approved AMI list in AWS Systems Manager Parameter Store. Use a managed AWS Config rule for continuous scanning on all EC2 instances, and use AWS Systems Manager Automation documents for remediation.
    - [ ] E. Use AWS CloudTrail to run the CVE assessment on the EC2 instances launched from the AMIs that need to be scanned.
  
    <details>
       <summary>Answer</summary>

       第344题，答案BC。

    </details>

26. A team collects and routes behavioral data for an entire company. The company runs a Multi-AZ PC environment with public subnets, private subnets, and in internet gateway. Each public subnet also contains a NAT gateway Most of the company’s applications read from and write to Amazon Kinesis Data Streams. Most of the workloads run in private subnets. A solutions architect must review the infrastructure. The solutions architect needs to reduce costs and maintain the function of the applications. The solutions architect uses Cost Explorer and notices that the cost in the Ec2-other category is consistently high. A further review shows that NAT gateway Bytes charges are increasing the cost in the Ec2-other category. What should the solutions architect do to meet these requirements?
    - [ ] A. Enable VPC Flow Logs. Use Amazon Athena to analyze the logs for traffic that can be removed. Ensure that security groups are blocking traffic that is responsible for high costs.
    - [ ] B. Add an interface VPC endpoint for Kinesis Data Streams to the VPC. Ensure that applications have the correct IAM permissions to use the interface VPC endpoint.
    - [ ] C. Enable VPC Flow Logs and Amazon Detective Review Detective findings for traffic that is not related to Kinesis Data Streams. Configure security groups to block that traffic.
    - [ ] D. Add an interface VPC endpoint for Kinesis Data Streams to the VPC. Ensure that the VPC endpoint policy allows traffic from the applications.
  
    <details>
       <summary>Answer</summary>

       第354题，答案D。

    </details>

27. A company provides a centralized Amazon EC2 application hosted in a single shared VPC. The centralized application must be accessible from client applications running in the VPCs of other business units. The centralized application front end is configured with a Network Load Balancer (NLB) for scalability. Up to 10 business unit VPCs will need to be connected to the shared VPC. Some of the business unit VPC CIDR blocks overlap with the shared VPC, and some overlap with each other. Network connectivity to the centralized application in the shared VPC should be allowed from authorized business unit VPCs only. Which network configuration should a solutions architect use to provide connectivity from the client applications in the business unit VPCs to the centralized application in the shared VPC?
    - [ ] A. Create an AWS Transit Gateway. Attach the shared VPC and the authorized business unit VPCs to the transit gateway. Create a single transit gateway route table and associate it with all of the attached VPCs. Allow automatic propagation of routes from the attachments into the route table. Configure VPC routing tables to send traffic to the transit gateway
    - [ ] B. Create a VPC endpoint service using the centralized application NLB and enable the option to require endpoint acceptance. Create a VPC endpoint in each of the business unit VPCs using the service name of the endpoint service. Accept authorized endpoint requests from the endpoint service console.
    - [ ] C. Create a VPC peering connection from each business unit VPC to the shared VPC. Accept the VPC peering connections from the shared VPC console. Configure VPC routing tables to send traffic to the VPC peering connection.
    - [ ] D. Configure a virtual private gateway for the shared VPC and create customer gateways for each of the authorized business unit VPCs. Establish a Site-to-Site VPN connection from the business unit VPCs to the shared VPC. Configure VPC routing tables to send traffic to the VPN connection.
  
    <details>
       <summary>Answer</summary>

       第360题，答案B。

    </details>

28. A life sciences company is using a combination of open source tools to manage data analysis workflows and Docker containers running on servers in its on- premises data center to process genomics data. Sequencing data is generated and stored on a local storage area network (SAN), and then the data is processed. The research and development teams are running into capacity issues and have decided to re-architect their genomics analysis platform on AWS to scale based on workload demands and reduce the turnaround time from weeks to days. The company has a high-speed AWS Direct Connect connection. Sequencers will generate around 200 GB of data for each genome, and individual jobs can take several hours to process the data with ideal compute capacity. The end result will be stored in Amazon S3. The company is expecting 10-15 job requests each day. Which solution meets these requirements?
    - [ ] A. Use regularly scheduled AWS Snowball Edge devices to transfer the sequencing data into AWS. When AWS receives the Snowball Edge device and the data is loaded into Amazon S3, use S3 events to trigger an AWS Lambda function to process the data.
    - [ ] B. Use AWS Data Pipeline to transfer the sequencing data to Amazon S3. Use S3 events to trigger an Amazon EC2 Auto Scaling group to launch custom-AMI EC2 instances running the Docker containers to process the data.
    - [ ] C. Use AWS DataSync to transfer the sequencing data to Amazon S3. Use S3 events to trigger an AWS Lambda function that starts an AWS Step Functions workflow. Store the Docker images in Amazon Elastic Container Registry (Amazon ECR) and trigger AWS Batch to run the container and process the sequencing data.
    - [ ] D. Use an AWS Storage Gateway file gateway to transfer the sequencing data to Amazon S3. Use S3 events to trigger an AWS Batch job that executes on Amazon EC2 instances running the Docker containers to process the data.
  
    <details>
       <summary>Answer</summary>

       第362题，答案C。

    </details>

29. A security engineer determined that an existing application retrieves credentials to an Amazon RDS for MySQL database from an encrypted file in Amazon S3. For the next version of the application, the security engineer wants to implement the following application design changes to improve security: -The database must use strong, randomly generated passwords stored in a secure AWS managed service. -The application resources must be deployed through AWS CloudFormation. -The application must rotate credentials for the database every 90 days. A solutions architect will generate a CloudFormation template to deploy the application. Which resources specified in the CloudFormation template will meet the security engineer's requirements with the LEAST amount of operational overhead?
    - [ ] A. Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Specify a Secrets Manager RotationSchedule resource to rotate the database password every 90 days.
    - [ ] B. Generate the database password as a SecureString parameter type using AWS Systems Manager Parameter Store. Create an AWS Lambda function resource to rotate the database password. Specify a Parameter Store RotationSchedule resource to rotate the database password every 90 days.
    - [ ] C. Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Create an Amazon EventBridge scheduled rule resource to trigger the Lambda function password rotation every 90 days.
    - [ ] D. Generate the database password as a SecureString parameter type using AWS Systems Manager Parameter Store. Specify an AWS AppSync DataSource resource to automatically rotate the database password every 90 days.
  
    <details>
       <summary>Answer</summary>

       第364题，答案A。

    </details>

30. A company is developing and hosting several projects in the AWS cloud. The projects are developed across multiple AWS accounts under the same organization in AWS Organizations. The company requires the cost for cloud infrastructure to be allocated to the owning project. The team responsible for all of the AWS accounts has discovered that several Amazon EC2 instances are lacking the Project tag used for cost allocation. Which actions should a solutions architect take to resolve the problem and prevent it from happening in the future? (Select THREE.)
    - [ ] A. Create an AWS Config rule in each account to find resources with missing tags.
    - [ ] B. Create an SCP in the organization with a deny action for ec2: RunInstances if the Project tag is missing.
    - [ ] C. Use Amazon Inspector in the organization to find resources with missing tags.
    - [ ] D. Create an IAM policy in each account with a deny action for ec: RunInstances if the Project tag is missing.
    - [ ] E. Create an AWS Config aggregator for the organization to collect a list of EC2 instances with the missing Project tag.
    - [ ] F. Use AWS Security Hub to aggregate a list of EC2 instances with the missing Project tag.
  
    <details>
       <summary>Answer</summary>

       第407题，答案ACD。

    </details>

31. A company is serving files to its customers through an SFTP server that is accessible over the internet. The SFTP server is running on a single Amazon EC2 instance with an Elastic IP address attached Customers connect to the SFTP server through its Elastic IP address and use SSH for authentication. The EC2 instance also has an attached security group that allows access from all customer IP addresses. A solutions architect must implement a solution to improve availability minimize the complexity of infrastructure management and minimize the disruption to customers who access files. The solution must not change the way customers connect. Which solution will meet these requirements?
    - [ ] A. Disassociate the Elastic IP address from me EC2 instance. Create an Amazon S3 bucket to be used for SFTP file hosting. Create an AWS Transfer Family server Configure the Transfer Family server with a publicly accessible endpoint. Associate the SFTP Elastic IP address with the new endpoint. Point the Transfer Family server to the S3 bucket. Sync all files from the SFTP server to the S3 bucket.
    - [ ] B. Disassociate the Elastic IP address from the EC2 instance. Create an Amazon S3 bucket to be used for SFTP file hosting. Create an AWS Transfer Family server. Configure the Transfer Family server with a VPC-hosted internet-facing endpoint. Associate the FTP Elastic IP address with the new endpoint. Attach the security group with customer IP addresses to the new endpoint. Point the Transfer Family server to the S3 bucket. Sync all files from the SFTP server to the S3 bucket.
    - [ ] C. Disassociate the Elastic IP address from the EC2 instance. Create a new Amazon Elastic File System (Amazon EFS) file system to be used for SFTP file hosting. Create an AWS Fargate task definition to run an SFTP server. Specify the EFS file system as a mount in the task definition. Create a Fargate service by sing the task definition and place a Network Load Balancer (NLB) in front of the service. When configuring the service, attach the security group with customer IP addresses to the tasks that run the SFTP server. Associate the Elastic IP address with the NLB. Sync all files from the SFTP server to the S3 bucket.
    - [ ] D. Disassociate the Elastic IP address from the EC2 instance. Create a multi-attach Amazon Elastic Block Store (Amazon EBS) volume to be used to SFTP file hosting. Crate a Network Load Balancer (NLB) with the Elastic IP address attached. Create an Auto Scaling group with EC2 instances that run an SFTP server. Define in the Auto Scaling group that instances that are launched should attach the new multi-attach EBS volume. Configure the Auto Scaling group to automatically add instances behind the NLB. Configure the Auto Scaling group to use the security group that allows customer IP addresses for the EC2 instances that the Auto Scaling group launches. Sync all files from the SFTP server to the new multi-attach EBS volume.
  
    <details>
       <summary>Answer</summary>

       第414题，答案A。

    </details>

32. A solutions architect is designing a solution that consists of a fleet of Amazon EC2 Reserved Instances (RIs) in an Auto Scaling group that will grow over time as usage increases. The solution needs to maintain 80% RI coverage to maintain cost control with an alert to the DevOps team using an email distribution list when coverage drops below 30% The solution must also include the ability to generate a report to easily track and manage coverage. The company has a policy that allows only one workload for each AWS account. Which set of steps should the solutions architect take to create the report and alert the DevOps team?
    - [ ] A. Create an Amazon Simple Notification Service (Amazon SNS) topic and subscribe the DevOps email distribution list. Enable cost allocation tags and ensure instances populate a customer-managed cost allocation tag at startup. Use the AWS Billing and Cost Management console to create a budget for RI coverage, fitter using the customer-managed cost allocation tag and set the threshold to 80% and link to the SNS topic created in me alert configuration.
    - [ ] B. Create an Amazon Simple Notification Service (Amazon SNS) topic and subscribe the DevOps email distribution list. Use the Cost Explorer console to configure the report for RI utilization set the utilization target to 30% and link to the SNS topic created in the alert configuration.
    - [ ] C. Use the AWS Billing and Cost Management console to create a reservation budget for RI utilization. Set the utilization to 80% and enter the email distribution list in the alert configuration.
    - [ ] D. Enable cost allocation tags and ensure instances populate a customer-managed cost allocation tag at startup. Use the Cost Explorer console to configure the report for RI coverage, filter using the customer-managed cost allocation tag and set the threshold to 80% and enter the email distribution list in the alert configuration.
  
    <details>
       <summary>Answer</summary>

       第424题，答案B。

    </details>

33. A company maintains a restaurant review website. The website is a single-page application where files are stored m Amazon S3 and delivered using Amazon CloudFront. The company receives several fake postings every day that are manually removed The security team has identified that most of the fake posts are from Dots with IP addresses that have a bad reputation within the same global region. The team needs to create a solution to help restrict the bots from accessing the website. Which strategy should a solutions architect use?
    - [ ] A. Use AWS Firewall Manager to control the CloudFront distribution security settings. Create a geographical block rule and associate it with Firewall Manager.
    - [ ] B. Associate an AWS WAF web ACL with the CloudFront distribution. Select the managed Amazon IP reputation rule group for the web ACL with a deny action.
    - [ ] C. Use AWS Firewall Manager to control the CloudFront distribution security settings. Select the managed Amazon IP reputation rule group and associate it with Firewall Manager with a deny action.
    - [ ] D. Associate an AWS WAF web ACL with the CloudFront distribution. Create a rule group for the web ACL with a geographical match statement with a deny action.
  
    <details>
       <summary>Answer</summary>

       第428题，答案B。

    </details>

34. An online retail company hosts its stateful web-based application and MYSQL database in an on-premises data center on a single server. The company wants to increase its customer base by conducting more marketing campaigns and promotions. In preparation, the company wants to migrate its application and database to AWS to increase the reliability of its architecture. Which solution should provide the HIGHEST level of reliability?
    - [ ] A. Migrate the database to an Amazon RDS MYSQL Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in Amazon Neptune.
    - [ ] B. Migrate the database to Amazon Aurora MySQL. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in an Amazon Elasticache fo Redis replication group.
    - [ ] C. Migrate the database to Amazon DocumentDB (with MongoDB compatibility ). Deploy the application in an Auto Scaling group on Amazon EC2 instances behind a Network Load Balancer. Store sessions in Amazon Kinesis Data Firehose
    - [ ] D. Migrate the database to an Amazon RDS MariaDB Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in Amazon Elasticache for Memcached.
  
    <details>
       <summary>Answer</summary>

       第431题，答案A。

    </details>

35. A startup company hosts a fleet of Amazon EC2 instances in private subnets using the latest Amazon Linux 2 AMI The company's engineers rely heavily on SSH access to the instances for troubleshooting. The company's existing architecture includes the following: -A VPC with private and public subnets, and a NAT gateway. -Site-to-Site VPN for connectivity with the on-premises environment -EC2 security groups with direct SSH access from the on-premises environment. The company needs to increase security controls around SSH access and provide auditing of commands executed by the engineers. Which strategy should a solutions architect use?
    - [ ] A. Install and configure EC2 Instance Connect on the fleet of EC2 instances. Remove all security group rules attached to EC2 instances that allow inbound TCP on port 22. Advise the engineers to remotely access the instances by using the EC2 Instance Connect CLI.
    - [ ] B. Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer's devices. Install the Amazon CloudWatch agent on all EC2 instances and send operating system audit logs to CloudWatch Logs.
    - [ ] C. Update the EC2 security groups to only allow Inbound TCP on port 22 to the IP addresses of the engineer's devices. Enable AWS Config for EC2 security group resource changes. Enable AWS Firewall Manager and apply a security group policy that automatically remediates changes to rules.
    - [ ] D. Create an IAM role with the `AmazonSSMManaged InstanceCoremanaged` policy attached. Attach the IAM role to all the EC2 instances. Remove all security group rules attached to the EC2 instances that allow inbound TCP on port 22. Have the engineers install the AWS Systems Manager Session Manager plugin lor their devices and remotely access the instances by using the start-session API call from Systems Manager.

    <details>
       <summary>Answer</summary>

       第432题，答案C。

    </details>

36. A company has deployed its corporate website in a VPC on two Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances are deployed in private subnets. The ALB is in a public subnet. A route to an internet gateway exists in the public subnet route table. The company has deployed an Amazon CloudFront distribution with the ALB as the origin. The company’s security team recently identified that malicious traffic is accessing the ALB directly. The company must deploy security controls to prevent common attack techniques, including cross-site scripting, and to protect against volumetric denials of service. Which strategy should a solutions architect recommend meeting these requirements?
    - [ ] A. Migrate the ALB to a private subnet. Associate an AWS WAF web ACL with the ALB. Update inbound rules on the ALB security group to allow traffic on port 443 only from CloudFront IP addresses.
    - [ ] B. Associate an AWS WAF web ACL with the CloudFront distribution. Configure an origin access identity (OA) on the ALB to drop access attempts that do not originate from CloudFront.
    - [ ] C. Associate an AWS WAF web ACL with the CloudFront distribution. Configure CloudFront to add a custom header to the requests that are sent to the ALB. Configure advanced routing on the ALB to only forward requests that include the custom header that is set by CloudFront.
    - [ ] D. Associate an AWS WAF web ACL with the CloudFront distribution. Configure AWS WAF to add a custom header to the requests that are sent to the ALB. Configure advanced routing on the ALB to only forward requests that include the custom header that is set by CloudFront.

    <details>
       <summary>Answer</summary>

       第443题，答案D。

    </details>

37. A company stores customer data in an Amazon S3 bucket with S3 Versioning enabled in the us-west-2 Region. The S3 bucket is encrypted with an AWS Key Management Service (AWS KMS) customer managed CMK. A compliance policy states that redundant copies of all S3 objects must be stored in the us-east-2 Region. The S3 buckets are allowed to stay in the same AWS account. Which combination of steps will meet these requirements with the LEAST operational effort? (Select THREE.)
    - [ ] A. Configure an AWS Lambda function that copies objects to the us-east-2 bucket and is triggered when objects are created in the us-west-2 bucket.
    - [ ] B. Create a destination S3 bucket in us-east-2 with S3 Versioning enabled.
    - [ ] C. Set up S3 Cross-Region Replication between the two S3 buckets.
    - [ ] D. Create and assign an S3 bucket policy that allows reading from the source S3 bucket.
    - [ ] E. Create and assign to Amazon S3 an IAM role with a policy that allows reading from the source S3 bucket and replication to the destination S3 bucket.
    - [ ] F. Create a destination S3 bucket in us-east-2.

    <details>
       <summary>Answer</summary>

       第477题，答案BCD。

    </details>

38. A software development company has multiple engineers who are working remotely. The company is running Active Directory Domain Services (AD DS) on anAmazon EC2 instance. The company's security policy states that all internal, nonpublic sewices that are deployed in a VPC must be accessible through a VPN. Multi-factor authentication (MFA) must be used for access to a VPN. What should a solutions architect do to meet these requirements?
    - [ ] A. Create an AWS Site-to-Site VPN connection. Configure integration between a VPN and AD DS. Use an Amazon Workspaces client with MFA support enabled to establish a VPN connection.
    - [ ] B. Create an AWS Client endpoint. Create an AD Connector directory for integration with AD DS. Enable MFA for AD Connector. Use AWS Client VPN to establish a VPN connection.
    - [ ] C. Create multiple AWS Site-to-Site VPN connections by using AWS CloudHub. Configure integration between AWS VPN CloudHub and AD DS. Use AWS Copilot to establish a VPN connection.
    - [ ] D. Create an Amazon WorkLink endpoint. Configure integration between Amazon WorkLink and AD DS. Enable MFA in Amazon WorkLink. Use AWS Client VPN to establish a VPN co nection.

    <details>
       <summary>Answer</summary>

       第489题，答案B。

    </details>

39. A company is running a serverless application that consists of several AWS Lambda functions and Amazon DynamoDB tables. The company has created new functionality that requires the Lambda functions to access an Amazon Neptune DB cluster. The Neptune DB cluster is in three subnets in a VPC. Which of the possible solutions will allow the Lambda functions to access the Neptune DB cluster and DynamoDB tables? (Select TWO.)
    - [ ] A. Create three public subnets in the Neptune VPC, and route traffic through an internet gateway. Host the Lambda functions in the three new public subnets.
    - [ ] B. Create three private subnets in the Neptune VPC, and route internet traffic through a NAT gateway. Host the Lambda functions in the three new private subnets.
    - [ ] C. Host the Lambda functions outside the VPC. Create a VPC endpoint for the Neptune database and have the Lambda functions access Neptune over the VPC endpoint.
    - [ ] D. Create three private subnets in the Neptune VPC. Host the Lambda functions in the three new isolated subnets. Create a VPC endpoint for DynamoDB. and route DynamoDB traffic to the VPC endpoint.

    <details>
       <summary>Answer</summary>

       第501题，答案CD。

    </details>

40. A company is running multiple workloads in the AWS Cloud. The company has separate units for software development. The company uses AWS Organizations and federation with SAML to give permissions to developers to manage resources in their AWS accounts. The development units each deploy their production workloads into a common production account. Recently, an incident occurred in the production account in which members of a development unit terminated an EC2 instance that belonged to a different development unit. A solutions architect must create a solution that prevents a similar incident from happening in the future. The solution also must allow developers the possibility to manage the instances used for their workloads. Which strategy will meet these requirements?
    - [ ] A. Create separate OUs in AWS Organizations for each development unit. Assign the created OUs to the company AWS accounts. Create separate SCPs with a deny action and a StringNotEquals condition for the DevelopmentUnit resource tag that matches the development unit name. Assign the SCP to the corresponding OU.
    - [ ] B. Pass an attribute for DevelopmentUnit as an AWS Security Token Service (AWS STS) session tag during SAML federation. Update the AM policy for the developers‘ assumed IAM role with a deny action and a StringNotEquals condition for the DevelopmentUnit resource tag and aws:PrincipalTag/DevelopmentUnit.
    - [ ] C. Pass an attribute for DevelopmentUnit as an AWS Security Token Service (AWS STS) session tag curing SAML federation. Create an SCP with an allow action and a StringEquals condition for the DevelopmentUnit resource tag and aws:PrincipalTag/DevelopmentUnit. Assign the SCP to the root OU.
    - [ ] D. Create separate IAM policies for each development unit. For every IAM policy, add an allow action and a StringEquals condition for the DevelopmentUnit resource tag and the development unit name. During SAML federation, use AWS Security Token Service (AWS STS) to assign the IAM policy and match the development unit name to the assumed IAM role.

    <details>
       <summary>Answer</summary>

       第503题，答案D。

    </details>

41. A financial company is building a system to generate monthly, immutable bank account statements (or its users). Statements are stored in Amazon S3. Users should have immediate access to their monthly statements for up to 2 years. Some users access their statements frequently, whereas others rarely access their statements. The company's security and compliance policy require that the statements be retained for at least 7 years. What is the MOST cost-effective solution to meet the company's needs?
    - [ ] A. Create an S3 bucket with Object Lock disabled. Store statements in S3 Standard. Define an S3 Lifecycle policy to transition the data to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days. Define another S3 Lifecycle policy to move the data to S3 Glacier Deep Archive after 2 years. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.
    - [ ] B. Create an S3 bucket with versioning enabled. Store statements in S3 Intelligent-Tiering. Use same-Region replication to replicate objects to a backup S3 bucket. Define an S3 Lifecycle policy for the backup S3 bucket to move the data to S3 Glacier. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.
    - [ ] C. Create an S3 bucket with Object Lock enabled. Store statements in S3 Intelligent-Tiering. Enable compliance mode with a default retention period of 2 years. Define an S3 Lifecycle policy to move the data to S3 Glacier after 2 years. Attach an S3 Glacier Vault Lock policy with deny delete permissions for archives less than 7 years old.
    - [ ] D. Create an S3 bucket with versioning disabled. Store statements in S3 One Zone-Infrequent Access (S3 One Zone-IA). Define an S3 Lifecycle policy to move the data to S3 Glacier Deep Archive after 2 years. Attach an S3 Glader Vault Lock policy with deny delete permissions for archives less than 7 years old.

    <details>
       <summary>Answer</summary>

       第508题，答案C。

    </details>

42. A company has a policy that all Amazon EC2 instances that are running a database must exist within the same subnets in a shared VPC. Administrators must follow security compliance requirements and are not allowed to directly log in to the shared account. All company accounts are members of the same organization in AWS Organizations. The number of accounts will rapidly increase as the company grows. A solutions architect uses AWS Resource Access Manager to create a resource share in the shared account. What is the MOST operationally efficient configuration to meet these requirements?
    - [ ] A. Add the VPC to the resource share. Add the account IDs as principals.
    - [ ] B. Add all subnets within the VPC to the resource share. Add the account IDs as principals.
    - [ ] C. Add all subnets within the VPC to the resource share. Add the organization as a principal.
    - [ ] D. Add the VPC to the resource share. Add the organization as a principal.

    <details>
       <summary>Answer</summary>

       第511题，答案C。

    </details>

43. A company has a High-Performance Computing (HPC) cluster in its on-premises data center which runs thousands of jobs in parallel for one week every month, processing petabytes of images. The images are stored on a network file server, which is replicated to a disaster recovery site. The on-premises data center has reached capacity and has started to spread the jobs out over the course of month to better utilize the cluster, causing a delay in the job completion. The company has asked its Solutions Architect to design a cost-effective solution on AWS to scale beyond the current capacity of 5,000 cores and 10 petabytes of data. The solution must require the least amount of management overhead and maintain the current level of durability. Which solution will meet the company's requirements?
    - [ ] A. Create a container in the Amazon Elastic Container Registry with the executable file for the job. Use Amazon ECS with Spot Fleet in Auto Scaling groups. Store the raw data in Amazon EBS SCI volumes and write the output to Amazon S3.
    - [ ] B. Create an Amazon EMR cluster with a combination of On Demand and Reserved Instance Task Nodes that will use Spark to pull data from Amazon S3. Use Amazon DynamoDB to maintain a list of jobs that need to be processed by the Amazon EMR cluster.
    - [ ] C. Store the raw data in Amazon S3, and use AWS Batch with Managed Compute Environments to create Spot Fleets. Submit jobs to AWS Batch Job Queues to pull down objects from Amazon S3 onto Amazon EBS volumes for temporary storage to be processed, and then write the results back to Amazon S3.
    - [ ] D. Submit the list of jobs to be processed to an Amazon SQS to queue the jobs that need to be processed. Create a diversified cluster of Amazon EC2 worker instances using Spot Fleet that will automatically scale based on the queue depth. Use Amazon EFS to store all the data sharing it across all instances in the cluster.

    <details>
       <summary>Answer</summary>

       第79题，答案C。

    </details>

44. A finance company is running its business-critical application on current-generation Linux EC2 instances. The application includes a self-managed MySQL database performing heavy I/O operations. The application is working fine to handle a moderate amount of traffic during the month. However, it slows down during the final three days of each month due to month-end reporting, even though the company is using Elastic Load Balancers and Auto Scaling within its infrastructure to meet the increased demand. Which of the following actions would allow the database to handle the month-end load with the LEAST impact on performance?
    - [ ] A. Pre-warming Elastic Load Balancers, using a bigger instance type, changing all Amazon EBS volumes to GP2 volumes.
    - [ ] B. Performing a one-time migration of the database cluster to Amazon RDS, and creating several additional read replicas to handle the load during end of month.
    - [ ] C. Using Amazon CloudWatch with AWS Lambda to change the type, size, or IOPS of Amazon EBS volumes in the cluster based on a specific CloudWatch metric.
    - [ ] D. Replacing all existing Amazon EBS volumes with new PIOPS volumes that have the maximum available storage size and I/O per second by taking snapshots before the end of the month and reverting back afterwards.

    <details>
       <summary>Answer</summary>

       第84题，答案D。

    </details>

45. A Solutions Architect is designing a multi-account structure that has 10 existing accounts. The design must meet the following requirements: -Consolidate all accounts into one organization. -Allow full access to the Amazon EC2 service from the master account and the secondary accounts. -Minimize the effort required to add additional secondary accounts. Which combination of steps should be included in the solution? (Choose two.)
    - [ ] A. Create an organization from the master account. Send invitations to the secondary accounts from the master account. Accept the invitations and create an OU.
    - [ ] B. Create an organization from the master account. Send a join request to the master account from each secondary account. Accept the requests and create an OU.
    - [ ] C. Create a VPC peering connection between the master account and the secondary accounts. Accept the request for the VPC peering connection.
    - [ ] D. Create a service control policy (SCP) that enables full EC2 access and attach the policy to the OU.
    - [ ] E. Create a full EC2 access policy and map the policy to a role in each account. Trust every other account to assume the role.

    <details>
       <summary>Answer</summary>

       第107题，答案AD。

    </details>

46. A company has multiple AWS accounts hosting IT applications. An Amazon CloudWatch Logs agent is installed on all Amazon EC2 instances. The company wants to aggregate all security events in a centralized AWS account dedicated to log storage. Security Administrators need to perform near-real-time gathering and correlating of events across multiple AWS accounts. Which solution satisfies these requirements?
    - [ ] A. Create a Log Audit IAM role in each application AWS account with permissions to view CloudWatch Logs, configure an AWS Lambda function to assume the Log Audit role, and perform an hourly export of CloudWatch Logs data to an Amazon S3 bucket in the logging AWS account.
    - [ ] B. Configure CloudWatch Logs streams in each application AWS account to forward events to CloudWatch Logs in the logging AWS account. In the logging AWS account, subscribe an Amazon Kinesis Data Firehose stream to Amazon CloudWatch Events, and use the stream to persist log data in Amazon S3.
    - [ ] C. Create Amazon Kinesis Data Streams in the logging account, subscribe the stream to CloudWatch Logs streams in each application AWS account, configure an Amazon Kinesis Data Firehose delivery stream with the Data Streams as its source, and persist the log data in an Amazon S3 bucket inside the logging AWS account.
    - [ ] D. Configure CloudWatch Logs agents to publish data to an Amazon Kinesis Data Firehose stream in the logging AWS account, use an AWS Lambda function to read messages from the stream and push messages to Data Firehose, and persist the data in Amazon S3.

    <details>
       <summary>Answer</summary>

       第42题，答案C。

    </details>

47. A company is using multiple AWS accounts and has multiple DevOps teams running production and non-production workloads in these accounts. The company would like to centrally-restrict access to some of AWS services that the DevOps teams do not use. The company decided to use AWS Organizations and successfully invited all AWS accounts into the Organization. They would like to allow access to services that are currently in-use and deny a few specific services. Also, they would like to administer multiple accounts together as a single unit. What combination of steps should the Solutions Architect take to satisfy these requirements? (Select THREE)
    - [ ] A. Use a Deny list strategy.
    - [ ] B. Review the Access Advisor in AWS IAM to determine services recently used.
    - [ ] C. Review the AWS Trusted Advisor report to determine services recently used.
    - [ ] D. Remove the default FullAWSAccess SCP.
    - [ ] E. Define organizational units (OUS)and place the member accounts in the OUs.
    - [ ] F. Remove the default DenyAWSaccess SCP.

    <details>
       <summary>Answer</summary>

       第243题，答案CDE。

    </details>

48. A utility company wants to collect usage data every 5 minutes from its smart meters to facilitate time-of-use metering. When a meter sends data to AWS, the data is sent to Amazon API Gateway, processed by an AWS Lambda function, and stored in an Amazon DynamoDB table. During the pilot phase, the Lambda functions took from 3 to 5 seconds to complete as more smart meters are deployed, the Engineers notice the Lambda functions are taking from I to 2 minutes to complete. The functions are also increasing in duration as new types of metrics are collected from the devices. There are many `ProvisionedThroughputExceededException` errors while performing PUT operations on DynamoDB, and there are also many `TooManyRequestsException` errors from Lambda. Which combination of changes will resolve these issues? (Choose two.)
      - [ ] A. Increase the write capacity units to the DynamoDB table.
      - [ ] B. Increase the memory available to the Lambda functions.
      - [ ] C. Increase the payload size from the smart meters to send more data.
      - [ ] D. Stream the data into an Amazon Kinesis data stream from API Gateway and process the data in batches.
      - [ ] E. Collect data in an Amazon SQS FIFO queue, which triggers a Lambda function to process each message.

    <details>
       <summary>Answer</summary>

       第249题，答案AD。

    </details>

49. A company has many services running in its on-premises data center. The data center is connected to AWS using AWS Direct Connect (DX) and an iPSec VPN. The service data is sensitive and connectivity cannot traverse the internet. The company wants to expand into a new market segment and begin offering its services to other companies that are using AWS. Which solution will meet these requirements?
    - [ ] A. Create a VPC Endpoint Service that accepts TCP trafic, host it behind a Network Load Balancer and make the service available over DX.
    - [ ] B. Create a VPC Endpoint Service that accepts Http or Https traffic host. It behind an Application Load Balancer and make the service available over DX.
    - [ ] C. Attach an internet gateway to the VPC, and ensure that network access control and security group rules allow the relevant inbound and outbound traffic.
    - [ ] D. Attach a NAT gateway to the VPC and ensure that network access control and security group rules allow the relevant inbound and outbound traffic.

    <details>
       <summary>Answer</summary>

       第282题，答案A。

    </details>

50. A company is migrating its three-tier web application from on-premises to the AWS Cloud. The company has the following requirements for the migration process: -Ingest machine images from the on-premises environment. -Synchronize changes from the on-premises environment to the AWS environment until the production cutover. -Minimize downtime when executing the production cutover. -Migrate the virtual machines's root volumes and data volumes. Which solution will satisfy these requirements with minimal operational overhead?
    - [ ] A. Use AWS Server Migration Service (SMS) to create and launch a replication job for each tier of the application. Launch instances from the AMIs created by AWS SMS. After initial testing, perform a final replication and create new instances from the updated AMIs.
    - [ ] B. Create an AWS CLI VM Import/Export script to migrate each virtual machine. Schedule the script to run incrementally to maintain changes in the application. Launch instances from the AMIs created by VM Import/Export. Once testing is done, rerun the script to do a final import and launch the instances from the AMIs.
    - [ ] C. Use AWS Server Migration Service (SMS) to upload the operating system volumes. Use the AWS CLI import-snapshot command for the data volumes. Launch instances from the AMIs created by AWS SMS and attach the data volumes to the instances. After initial testing, perform a final replication, launch new instances from the replicated AMIs, and attach the data volumes to the instances.
    - [ ] D. Use AWS Application Discovery Service and AWS Migration Hub to group the virtual machines as an application. Use the AWS CLI VM Import/Export script to import the virtual machines as AMIs. Schedule the script to run incrementally to maintain changes in the application. Launch instances from the AMIs. After initial testing, perform a final virtual machine import and launch new instances from the AMIs.

    <details>
       <summary>Answer</summary>

       第290题，答案A。

    </details>

51. The company needs to determine which costs on the monthly AWS bill are attributable to each application or team. The company also must be able to create reports to compare costs from the last 12 months and to help forecast costs for the next 12 months. A solutions architect must recommend an AWS Billing and Cost Management solution that provides these cost reports. Which combination of actions will meet these requirements? (Select THREE)
    - [ ] A. Activate the user-defined cost allocation tags that represent the application and the team
    - [ ] B. Activate the AWS generated cost allocation tags that represent the application and the team
    - [ ] C. Create a cost category for each application in Billing and Cost Management
    - [ ] D. Activate IAM access to Billing and Cost Management
    - [ ] E. Create a cost budget
    - [ ] F. Enable Cost Explorer

    <details>
       <summary>Answer</summary>

       第382题，答案BDF。

    </details>

52. A company has a primary Amazon S3 bucket that receives thousands of objects every day. The company needs to replicate these objects into several other S3 buckets from various AWS accounts. A solutions architect is designing a new AWS Lambda function that is triggered when an object is created in the main bucket and replicates the object into the target buckets. The objects do not need to be replicated in real time. There is concern that this function may impact other critical Lambda functions due to Lambda's regional concurrency limit. How can the solutions architect ensure this new Lambda function will not impact other critical Lambda functions?
    - [ ] A. Set the new Lambda function reserved concurrency limit to ensure the executions do not impact other critical Lambda functions. Monitor existing critical Lambda functions with Amazon CloudWatch alarms for the Throttles Lambda metric.
    - [ ] B. Increase the execution timeout of the new Lambda function to 5 minutes. Monitor existing critical Lambda functions with Amazon CloudWatch alarms for the Throttles Lambda metric.
    - [ ] C. Configure S3 event notifications to add events to an Amazon SQS queue in a separate account. Create the new Lambda function in the same account as the SQS queue and trigger the function when a message arrives in the queue.
    - [ ] D. Ensure the new Lambda function implements an exponential backoff algorithm. Monitor existing critical Lambda functions with Amazon CloudWatch alarms for the Throttles Lambda metric.

    <details>
       <summary>Answer</summary>

       第449题，答案A。

    </details>

53. The company Security team queries that all data uploaded into an Amazon S3 bucket must be encrypted. The encryption keys must be highly available, and the company must be able to control access on a per-user basis, with different users having access to different encryption keys. Which of the following architectures will meet these requirements? (Choose two.)
    - [ ] A. Use Amazon S3 server-side encryption with Amazon S3-managed keys. Allow Amazon S3 to generate an AWS/S3 master key and use IAM to control access to the data keys that are generated.
    - [ ] B. Use Amazon S3 server-side encryption with AWS KMS-managed keys, create multiple customer master keys, and use key policies to control access to them.
    - [ ] C. Use Amazon S3 server-side encryption with customer-managed keys, and use AWS CloudHSM to manage the keys. Use CloudHSM client software to control access to the keys that are generated.
    - [ ] D. Use Amazon S3 server-side encryption with customer-managed keys, and use two AWS CloudHSM instances configured in high-availability mode to manage the keys. Use the Cloud HSM client software to control access to the keys that are generated.
    - [ ] E. Use Amazon S3 server-side encryption with customer-managed keys, and use two AWS CloudHSM instances configured in high-availability mode to manage the keys. Use IAM to control access to the keys that are generated in CloudHSM.

    <details>
       <summary>Answer</summary>

       第67题，答案BD。

    </details>

54. An advisory firm is creating a secure data analytics solution for its regulated financial services users. Users will upload their raw data to an Amazon S3 bucket, where they have `PutObject` permissions only. Data will be analyzed by applications running on an Amazon EMR cluster launched in a VPC The firm requires that the environment be isolated from the internet. All data at rest must be encrypted using keys controlled by the firm. Which combination of actions should the Solutions Architect take to meet the user's security requirements? (Choose two.)
    - [ ] A. Launch the Amazon EMR cluster in a private subnet configured to use an AWS KMS CMK for at-rest encryption. Configure a gateway VPC endpoint for Amazon S3 and an interface VPC endpoint for AWS KMS.
    - [ ] B. Launch the Amazon EMR cluster in a private subnet configured to use an AWS KMS CMK for at-rest encryption. Configure a gateway VPC endpoint for Amazon S3 and a NAT gateway to access AWS KNIS.
    - [ ] C. Launch the Amazon EMR cluster in a private subnet configured to use an AWS CloudHSM appliance for at-rest encryption. Configure a gateway VPC endpoint for Amazon S3 and an interface VPC endpoint for CloudHSM.
    - [ ] D. Configure the S3 endpoint policies to permit access to the necessary data buckets only.
    - [ ] E. Configure the S3 bucket policies to permit access using an aws:sourceVpce condition to match the S3 endpoint ID.

    <details>
       <summary>Answer</summary>

       第71题，答案AE。

    </details>

55. A company currently uses Amazon EBS and Amazon RDS for storage purposes. The company intends to use a pilot light approach for disaster recovery in a different AWS Region. The company has an RTO of 6 hours and an RPO of 24 hours. Which solution would achieve the requirements with MINIMAL cost?
    - [ ] A. Use AWS Lambda to create daily EBS and RDS snapshots, and copy them to the disaster recovery region. Use Amazon Route 53 with active-passive failover configuration. Use Amazon EC2 in an Auto Scaling group with the capacity set to 0 in the disaster recovery region.
    - [ ] B. Use AWS Lambda to create daily EBS and RDS snapshots, and copy them to the disaster recovery region. Use Amazon Route 53 with active-active failover configuration. Use Amazon EC2 in an Auto Scaling group configured in the same way as in the primary region.
    - [ ] C. Use Amazon ECS to handle long-running tasks to create daily EBS and RDS snapshots, and copy to the disaster recovery region. Use Amazon Route 53 with active-passive failover configuration. Use Amazon EC2 in an Auto Scaling group with the capacity set to 0 in the disaster recovery region.
    - [ ] D. Use EBS and RDS cross-region snapshot copy capability to create snapshots in the disaster recovery region. Use Amazon Route 53 with active-active failover configuration. Use Amazon EC2 in an Auto Scaling group with the capacity set to 0 in the disaster recovery region.

    <details>
       <summary>Answer</summary>

       第64题，答案D。

    </details>

56. A company is using AWS for production and development workloads. Each business unit has its own AWS account for production, and a separate AWS account to develop and deploy its applications. The Information Security department has introduced new security policies that limit access for terminating certain Amazon EC2 instances in all accounts to a small group of individuals from the Security team. How can the Solutions Architect meet these requirements?
    - [ ] A. Create a new IAM policy that allows access to those EC2 instances only for the Security team. Apply this policy to the AWS Organizations master account.
    - [ ] B. Create a new tag-based IAM policy that allows access to these EC2 instances only for the Security team. Tag the instances appropriately and apply this policy in each account.
    - [ ] C. Create an organizational unit under AWS Organizations. Move all the accounts into this organizational unit and use SCP to apply a whitelist policy to allow access to these EC2 instances for the Security team only.
    - [ ] D. Set up SAML federation for all accounts in AWS. Configure SAML so that it checks for the service API call before authenticating the user. Block SAML from authenticating API calls if anyone other than the Security team accesses these instances.

    <details>
       <summary>Answer</summary>

       第69题，答案B。

    </details>

57. A company with global offices has a single 1 Gbps AWS Direct Connect connection to a single AWS Region. The company's on-premises network uses the connection to communicate with the company's resources in the AWS Cloud. The connection has a single private virtual interface that connects to a single VPC. A solutions architect must implement a solution that adds a redundant Direct Connect connection in the same Region. The solution also must provide connectivity to other Regions through the same pair of Direct Connect connections as the company expands into other Regions. Which solution meets these requirements?
     - [ ] A. Provision a Direct Connect gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interlace on each connection and connect both private victual interfaces to the Direct Connect gateway. Connect the Direct Connect gateway to the single VPC.
     - [ ] B. Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new private virtual interface on the new connection, and connect the new private virtual interface to the single VPC.
     - [ ] C. Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new public virtual interface on the new connection, and connect the new public virtual interface to the single VPC.
     - [ ] D. Provision a transit gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection and connect both private virtual interfaces to the transit gateway. Associate the transit gateway with the single VPC.

    <details>
       <summary>Answer</summary>

       第505题，答案A。

    </details>

58. To abide by industry regulations, a Solutions Architect must design a solution that will store a company's critical data in multiple public AWS Regions, including in the United States, where the company's headquarters is located. The Solutions Architect is required to provide access to the data stored in AWS to the company's global WAN network. The Security team mandates that no traffic accessing this data should traverse the public internet. How should the Solutions Architect design a highly available solution that meets the requirements and is cost-effective?
    - [ ] A. Establish AWS Direct Connect connections from the company headquarters to all AWS Regions in use. Use the company WAN to send traffic over to the headquarters and then to the respective DX connection to access the data.
    - [ ] B. Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use inter-region VPC peering to access the data in other AWS Regions.
    - [ ] C. Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use an AWS transit VPC solution to access data in other AWS Regions.
    - [ ] D. Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use Direct Connect Gateway to access data in other AWS Regions.

    <details>
       <summary>Answer</summary>

       第162题，答案D。

    </details>

59. A large company with hundreds of AWS accounts has a newly established centralized internal process for purchasing new or modify existing Reserved Instances. This process requires all business units that want to purchase or modify reserved Instances to submit requests to a dedicated team for procurement or execution. Previously, business units would directly purchase or modify Reserved instances in their own respective AWS accounts autonomously. Which combination of steps should be taken to proactively enforce the new process in the Most secure way possible?
    - [ ] A. Ensure all AWS accounts are part of an AWS Organizations structure operating in all features mode.
    - [ ] B. Use AWS Config to report on the attachment of an IAM policy that denies access to the ec2:PurchaseReservedInstancesOffering and ec2:ModifyReservedInstances actions.
    - [ ] C. In each AWS account, create an IAM policy with a DENY rule to the ec2:PurchaseReservedInstancesOffering and ec2:ModifyReservedInstances actions.
    - [ ] D. Create an SCP that contains a deny rule to the c2:PurchaseReservedInstancesOffering and ec2:ModifyReservedInstances actions. Attach the SCP to each organizational unit (OU) of the AWS Organizations structure.
    - [ ] E. Ensure that all AWS accounts are part of an AWS Organizations structure operating in consolidated billing features mode.

    <details>
       <summary>Answer</summary>

       第211题，答案D。

    </details>

60. An AWS customer is deploying an application mat is composed of an AutoScaling group of EC2 Instances. The customers security policy requires that every outbound connection from these instances to any other service within the customers Virtual Private Cloud must be authenticated using a unique x.509 certificate that contains the specific instance-id. In addition, an x.509 certificates must Designed by the customer's Key management service in order to be trusted for authentication. Which of the following configurations will support these requirements?
    - [ ] A. Configure an IAM Role that grants access to an Amazon S3 object containing a signed certificate and configure the Auto Scaling group to launch instances with this role. Have the instances bootstrap get the certificate from Amazon S3 upon first boot.
    - [ ] B. Configure the Auto Scaling group to send an SNS notification of the launch of a new instance to the trusted key management service. Have the Key management service generate a signed certificate and send it directly to the newly launched instance.
    - [ ] C. Embed a certificate into the AMI that is used by the Auto Scaling group. Have the launched instances generate a certificate signature request with the instance's assigned instance-id to the key management service for signature.
    - [ ] D. Configure the launched instances to generate a new certificate upon first boot. Have the Key management service poll the Auto Scaling group for associated instances and send new instances a certificate signature that contains the specific instance-id.

    <details>
       <summary>Answer</summary>

       第226题，答案C。

    </details>

61. A company is running a batch analysis every hour on their main transactional DB, running on an RDS MySQL instance, to populate their central Data Warehouse running on Redshift. During the execution of the batch, their transactional applications are very slow. When the batch completes, they need to update the top management dashboard with the new data. The dashboard is produced by another system running on-premises that is currently started when a manually sent email notifies that an update is required. The on-premises system cannot be modified because is managed by another team. How would you optimize this scenario to solve performance issues and automate the process as much as possible?
    - [ ] A. Replace RDS with Redshift for the batch analysis and SNS to notify the on-premises system to update the dashboard.
    - [ ] B. Replace RDS with Redshift for the batch analysis and SQS to send a message to the on-premises system to update the dashboard.
    - [ ] C. Create an RDS Read Replica for the batch analysis and SNS to notify the on-premises system to update the dashboard.
    - [ ] D. Create an RDS Read Replica for the batch analysis and SQS to send a message to the on-premises system to update the dashboard.

    <details>
       <summary>Answer</summary>

       第235题，答案C。

    </details>

62. A company hosts a game player-matching service on a public facing, physical, on-premises instance that all users are able to access over the internet. All traffic to the instance uses UDP. The company wants to migrate the service to AWS and provide a high level of security. A solutions architect needs to design a solution for the player-matching service using AWS. Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)
    - [ ] A. Use a Network Load Balancer (NLB) in front of the player-matching instance. Use a friendly DNS entry in Amazon Route 53 pointing to the NLB’s Elastic IP address.
    - [ ] B. Use an Application Load Balancer (ALB) in front of the player-matching instance. Use a friendly DNS entry in Amazon Route 53 pointing to the ALB’s internet- facing fully qualified domain name (FQDN).
    - [ ] C. Define an AWS WAF rule to explicitly drop non-UDP traffic, and associate the rule with the load balancer.
    - [ ] D. Configure a network ACL rule to block all non-UDP traffic. Associate the network ACL with the subnets that hold the load balancer instances.
    - [ ] E. Use Amazon CloudFront with an Elastic Load Balancer as an origin.
    - [ ] F. Enable AWS Shield Advanced on all public-facing resources.

    <details>
       <summary>Answer</summary>

       第327题，答案ADF。

    </details>

63. A company has multiple AWS accounts and manages these accounts which AWS Organizations. A developer was given IAM user credentials to access AWS resources. The developer should have read-only access to all Amazon S3 buckets in the account. However, when the developer tries to access the S3 buckets from the console, they receive an access denied error message with no bucket listed. A solution architect reviews the permissions and finds that the developer’s IAM user is listed as having read-only access to all S3 buckets in the account. Which additional steps should the solutions architect take to troubleshoot the issue? (Choose two.)
    - [ ] A. Check the bucket policies for all S3 buckets.
    - [ ] B. Check the ACLs for all S3 buckets.
    - [ ] C. Check the SCPs set at the organizational units (OUs).
    - [ ] D. Check for the permissions boundaries set for the IAM user.
    - [ ] E. Check if an appropriate IAM role is attached to the IAM user.

    <details>
       <summary>Answer</summary>

       第328题，答案CD。

    </details>

64. A company is launching a web-based application in multiple regions around the world. The application consists of both static content stored in a private Amazon S3 bucket and dynamic content hosted in Amazon ECS containers content behind an Application Load Balancer (ALB). The company requires that the static and dynamic application content be accessible through Amazon CloudFront only. Which combination of steps should a solutions architect recommend to restrict direct content access to CloudFront? (Choose three.)
    - [ ] A. Create a web ACL in AWS WAF with a rule to validate the presence of a custom header and associate the web ACL with the ALB.
    - [ ] B. Create a web ACL in AWS WAF with a rule to validate the presence of a custom header and associate the web ACL with the CloudFront distribution.
    - [ ] C. Configure CloudFront to add a custom header to origin requests.
    - [ ] D. Configure the ALB to add a custom header to HTTP requests.
    - [ ] E. Update the S3 bucket ACL to allow access from the CloudFront distribution only.
    - [ ] F. Create a CloudFront Origin Access Identity (OAI) and add it to the CloudFront distribution. Update the S3 bucket policy to allow access to the OAI only.

    <details>
       <summary>Answer</summary>

       第345题，答案ACF。

    </details>
