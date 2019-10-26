# typed: ignore

CURRENT_PERCENTAGE_OF_SECRET_NON_PUBLIC_ACCESSIBLE_IMPLEMENTATIONS = 10

Class EziiImplementationsControl

    git_sha = git_sha_of_this_running_version


    ezii_control_server(git_sha)
    
    tempfile = ezii_control_server_fetch_code(git_sha, CURRENT_PERCENTAGE_OF_SECRET_NON_PUBLIC_ACCESSIBLE_IMPLEMENTATIONS)

    load(tempfile.path)

    # in the future


    # load obfucated code 20%

    # stream 30% ruby code

    # drb 10 %


    # stream 10% web  assembly via wasm ruby gem


    # ezii_control server
    # will calcullate how many impllementations per version arre reall
    # every request wil lneed to make a request to ezii_control_server
    # only ip addreesses + mac addresses
    # that were allowed before and make requests regularly will
    # be allowed to fetch new versions
    # innovation is key

end