use structopt::StructOpt;

/// search for a pattern in a file and display the lines that contain it
#[derive(StructOpt)]
struct Cli {
    /// the pattern to look for
    pattern: String,
    /// the path to the file to read
    #[structopt(parse(from_os_str))]
    path: std::path::PathBuf,

}

fn main() {
    let args = Cli::from_args();
    let content = std::fs::read_to_string(&args.path).expect("could not read file");

    for line in content.lines() {
        if line.contains(&args.pattern) {
            println!("{}", line);
        }
    }
    
    // let pattern = std::env::args().nth(1).expect("no pattern given");
    // let path = std::env::args().nth(2).expect("no path given");
    // let args = Cli {
    //     pattern: pattern,
    //     path: std::path::PathBuf::from(path),
    // };

    
}
